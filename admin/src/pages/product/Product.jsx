import React, { useState, useMemo, useEffect } from 'react';
import './product.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import PublishIcon from '@mui/icons-material/Publish';
import { useSelector, useDispatch } from 'react-redux';
import { userReq } from '../../request';
import app from '../../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProduct } from '../../redux/apiCalls';
function Product() {
    const [inputs,setInputs]= useState({});
    const [file,setFile] = useState(null);
    const [cate,setCate] = useState([]);
    const [color,setColor] = useState([]);
    const [size,setSize] = useState([]);
    const dispatch = useDispatch();
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const [pStats,setPStats] = useState([]);
    const MONTHS = useMemo(
        ()=>[
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
    ],[])
    const product = useSelector((state) => 
        state.product.products.find((product) => product._id === productId));
        useEffect(() => {
            const getStats = async () => {
              try {
                const res = await userReq.get("orders/income?pid=" + productId);
                const list = res.data.sort((a,b)=>{
                    return a._id - b._id
                })
                list.map((item) =>
                  setPStats((prev) => [
                    ...prev,
                    { name: MONTHS[item._id - 1], "Doanh thu": item.total },
                  ])
                );
              }catch(err){
                console.log(err);
              }
            };
            getStats();
        }, [productId, MONTHS]);
    const handleChange = (e) =>{
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    const handleCate = (e) => {
        setCate(e.target.value.split(','));
    }
    const handleColor = (e) => {
        setColor(e.target.value.split(','));
    }
    const handleSize = (e) => {
        setSize(e.target.value.split(','));
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file?.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            default:
            }
        }, 
        (error) => {
            // Handle unsuccessful uploads
        }, 
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const productUpdated = {...inputs, img: downloadURL, categories: cate, size: size, color: color};
            updateProduct(productId,productUpdated, dispatch);
            alert("Cập nhật mặt hàng thành công");
            window.location.replace('http://localhost:3000/products');
            });
        }
        );
    }
    const handleFile = (e) => {
        const img=e.target.files[0];
        img.preview = URL.createObjectURL(img);
        setFile(img);
    }
    useEffect(() =>{
        return () =>{
            file && URL.revokeObjectURL(file.review);
        }
    },[file])
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Cập nhật sản phẩm</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Thêm mới</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={pStats} dataKey="Doanh thu" title="Doanh thu sản phẩm"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product.img} alt="" className="productInfoImg" />
                        <span className="productName">{product.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Mã sản phẩm: </span>
                            <span className="productInfoKey">{product._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Tồn kho: </span>
                            <span className="productInfoKey">{product.inStock === true ? 'Còn hàng' : 'Hết hàng'}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Số lượng đã bán: </span>
                            <span className="productInfoKey">12</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label>Tên sản phẩm:</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder={product.title}
                            onChange={handleChange}
                            required
                        />
                        <label>Mô tả sản phẩm:</label>
                        <TextareaAutosize
                            name="desc"
                            aria-label="minimum height"
                            minRows={3}
                            placeholder={product.desc}
                            style={{ width: 250, marginBottom: '10px' }}
                            onChange={handleChange}
                        />
                        <label>Giá sản phẩm:</label>
                        <input 
                            type="number" 
                            name="price" 
                            placeholder={product.price}
                            onChange={handleChange}
                        />
                        <label>Màu sản phẩm:</label>
                        <input 
                            type="text" 
                            name="color" 
                            placeholder={product.color}
                            onChange={handleColor}
                        />
                        <label>Kích cỡ sản phẩm:</label>
                        <input 
                            type="text" 
                            name="size" 
                            placeholder={product.size}
                            onChange={handleSize}
                        />
                        <label>Phân loại sản phẩm:</label>
                        <input 
                            type="text" 
                            name="cate" 
                            placeholder={product.categories}
                            onChange={handleCate}
                        />
                        <label>Số lượng:</label>
                        <input 
                            type="number" 
                            name="productQuantity" 
                            placeholder={product.productQuantity}
                            onChange={handleChange}
                        />
                        <label>Tồn kho:</label>
                        <select name="inStock" id="idStock" onChange={handleChange}>
                            <option selected disabled>-- Chọn --</option>
                            <option value="true">Còn hàng</option>
                            <option value="false">Hết hàng</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img className="productUploadImg" src={file ? file.preview : product.img} alt="" />
                        <label htmlFor="file">
                            <PublishIcon></PublishIcon>
                        </label>
                        <input 
                            type="file" 
                            id="file" 
                            style={{display: "none"}}
                            onChange={handleFile}
                        />
                        </div>
                    <button className="productButton" onClick={handleUpdate}>Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
