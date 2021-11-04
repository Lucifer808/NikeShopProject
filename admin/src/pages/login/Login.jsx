import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';
import './login.css'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispath = useDispatch();
    const handleClick = (e) =>{
        e.preventDefault();
        login(dispath, {username, password});
        window.location.replace('http://localhost:3000/');
    }
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
                    <button onClick={handleClick} className='loginBtn'>Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}

export default Login
