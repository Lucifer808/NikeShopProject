import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';
import { useSelector } from 'react-redux';
import './login.css'
const Login = () => {
    const {currentUser} = useSelector(state => state.user);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispath = useDispatch();
    const handleClick = (e) =>{
        e.preventDefault();
        login(dispath, {username, password});
        window.location.reload();
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
                    <input type="checkbox"></input>
                    <lable style={{marginBottom: '2px'}}> Ghi nhớ tài khoản</lable>
                    <button onClick={handleClick} className='loginBtn'>Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}

export default Login
