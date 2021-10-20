import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';
import { Link } from 'react-router-dom';
import './login.css'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispath = useDispatch();
    const handleClick = (e) =>{
        e.preventDefault();
        login(dispath, {username, password});
    }
    let admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.isAdmin || null;
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <h1 className='loginTitle'>Đăng nhập</h1>
                <div>
                    <span className='loginSpan'>Tên đăng nhập:</span>
                    <input 
                    type="text" 
                    placeholder="Nhập tên tài khoản..."
                    onChange={e=>setUsername(e.target.value)}
                    className='loginInput'
                    ></input>
                    <span className='loginSpan'>Mật khẩu:</span>
                    <input 
                    type="password" 
                    placeholder="Nhập mật khẩu..."
                    onChange={e=>setPassword(e.target.value)}
                    className='loginInput'
                    ></input>
                    { !admin && <span>Bạn không có quyền truy cập</span> }
                    <button onClick={handleClick} className='loginBtn'>Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}

export default Login
