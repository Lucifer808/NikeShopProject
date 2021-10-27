import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserData } from '../../redux/apiCalls';
import './newUser.css'
function NewUser() {
    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    const handleClick = (e) => {
        e.preventDefault();
        addUserData(inputs,dispatch);
        window.location.replace('http://localhost:3000/users');
    }
    return (
        <div className="newUser">
            <h1 className="newUserTitle">Thêm tài khoản mới</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>Tên đăng nhập:</label>
                    <input
                        name="username" 
                        type="text" 
                        placeholder="Vd: duynguyen123"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="newUserItem">
                    <label>Họ Tên:</label>
                    <input
                        name="name" 
                        type="text" 
                        placeholder="Vd: Duy Nguyen"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="newUserItem">
                    <label>Email:</label>
                    <input
                        name="email" 
                        type="text" 
                        placeholder="Vd: Duy@gmail.com"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="newUserItem">
                    <label>Mật khẩu:</label>
                    <input
                        name="password" 
                        type="password" 
                        placeholder="Nhập mật khẩu..."
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="newUserItem">
                    <label>Nhập lại mật khẩu:</label>
                    <input 
                        type="password" 
                        placeholder="Nhập lại mật khẩu..."
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="newUserItem">
                    <label>Số điện thoại:</label>
                    <input
                        name="phone" 
                        type="text" 
                        placeholder="Vd: 094638941"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="newUserItem">
                    <label>Địa chỉ:</label>
                    <input
                        name="address" 
                        type="text" 
                        placeholder="Vd: Can Tho City"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="newUserItem">
                    <label>Ngày sinh:</label>
                    <input
                        name="dayOfBirth" 
                        type="text" 
                        placeholder="Vd: 01/12/2000"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="newUserItem">
                    <label>Quyền hạn:</label>
                    <select className="newUserIsAdmin" onChange={handleChange} name="isAdmin">
                        <option value="false">Người dùng</option>
                        <option value="true">Quản trị viên</option>
                    </select>
                </div>
                <button className="newUserButton" onClick={handleClick}>Tạo tài khoản</button>
            </form>
        </div>
    )
}

export default NewUser
