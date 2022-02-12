import React, { useState } from 'react';
import './newProduct.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';
import { addProduct } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';
function NewProduct() {
    const [inputs,setInputs] = useState({});
    const [file,setFile] = useState(null);
    const [cate,setCate] = useState([]);
    const [color,setColor] = useState([]);
    const [size,setSize] = useState([]);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev,[e.target.name]:e.target.value}
        }
        )
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
    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
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
            const product = {...inputs, img: downloadURL, categories: cate, size: size, color: color};
            addProduct(product, dispatch);
            alert("Thêm sản phẩm mới thành công");
            window.location.replace('http://localhost:3000/products');
            });
        }
        );
    }
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">Thêm sản phẩm</h1>
            <form action="" className="addProductForm">
                <div className="addProductItem">
                    <label htmlFor="">Hình ảnh: </label>
                    <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">Tên sản phẩm: </label>
                    <input 
                    name="title" 
                    type="text" 
                    placeholder="Vd: Nike Sportswear Swoosh" 
                    autoComplete="off"
                    onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">Giá sản phẩm: </label>
                    <input 
                    name="price" 
                    type="number" 
                    placeholder="Vd: 890000" 
                    onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                <label htmlFor="">Mô tả sản phẩm:</label>
                <TextareaAutosize
                    name="desc"
                    aria-label="minimum height"
                    minRows={4}
                    placeholder="Mô tả chi tiết sản phẩm..."
                    style={{ width: 420 }}
                    onChange={handleChange}
                />
                </div>
                <div className="addProductItem">
                    <label htmlFor="">Phân loại sản phẩm: </label>
                    <select onChange={handleChange} name="categories">
                        <option selected disabled>-- Chọn --</option>
                        <option value="true">Áo thun</option>
                        <option value="false">Quần thể thao</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">Màu sản phẩm: </label>
                    <input
                    type="text" 
                    placeholder="Vd: Yellow, Red" 
                    onChange={handleColor}/>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">Kích cỡ sản phẩm: </label>
                    <input 
                    type="text" 
                    placeholder="Vd: XL, L" 
                    onChange={handleSize}/>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">Số lượng: </label>
                    <input 
                    name="productQuantity" 
                    type="number" 
                    placeholder="Vd: 20" 
                    onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">Tồn kho: </label>
                    <select onChange={handleChange} name="inStock">
                        <option selected disabled>-- Chọn --</option>
                        <option value="true">Còn hàng</option>
                        <option value="false">Hết hàng</option>
                    </select>
                </div>
                <button className="addProductButton" onClick={handleClick}>Thêm</button>
            </form>
        </div>
    )
}

export default NewProduct
