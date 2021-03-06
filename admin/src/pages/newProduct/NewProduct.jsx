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
            alert("Th??m s???n ph???m m???i th??nh c??ng");
            window.location.replace('http://localhost:3000/products');
            });
        }
        );
    }
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">Th??m s???n ph???m</h1>
            <form action="" className="addProductForm">
                <div className="addProductItem">
                    <label htmlFor="">H??nh ???nh: </label>
                    <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">T??n s???n ph???m: </label>
                    <input 
                    name="title" 
                    type="text" 
                    placeholder="Vd: Nike Sportswear Swoosh" 
                    autoComplete="off"
                    onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">Gi?? s???n ph???m: </label>
                    <input 
                    name="price" 
                    type="number" 
                    placeholder="Vd: 890000" 
                    onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                <label htmlFor="">M?? t??? s???n ph???m:</label>
                <TextareaAutosize
                    name="desc"
                    aria-label="minimum height"
                    minRows={4}
                    placeholder="M?? t??? chi ti???t s???n ph???m..."
                    style={{ width: 420 }}
                    onChange={handleChange}
                />
                </div>
                <div className="addProductItem">
                    <label htmlFor="">Ph??n lo???i s???n ph???m: </label>
                    <select onChange={handleChange} name="categories">
                        <option selected disabled>-- Ch???n --</option>
                        <option value="true">??o thun</option>
                        <option value="false">Qu???n th??? thao</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">M??u s???n ph???m: </label>
                    <input
                    type="text" 
                    placeholder="Vd: Yellow, Red" 
                    onChange={handleColor}/>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">K??ch c??? s???n ph???m: </label>
                    <input 
                    type="text" 
                    placeholder="Vd: XL, L" 
                    onChange={handleSize}/>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">S??? l?????ng: </label>
                    <input 
                    name="productQuantity" 
                    type="number" 
                    placeholder="Vd: 20" 
                    onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label htmlFor="">T???n kho: </label>
                    <select onChange={handleChange} name="inStock">
                        <option selected disabled>-- Ch???n --</option>
                        <option value="true">C??n h??ng</option>
                        <option value="false">H???t h??ng</option>
                    </select>
                </div>
                <button className="addProductButton" onClick={handleClick}>Th??m</button>
            </form>
        </div>
    )
}

export default NewProduct
