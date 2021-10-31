import React, { useState } from 'react';
import './user.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/apiCalls';
function User() {
    const [inputs,setInputs] = useState({});
    const location = useLocation();
    const dispatch = useDispatch();
    const userId = location.pathname.split('/')[2];
    const user = useSelector((state) => state.userdata.users.find((user) => user._id === userId));
    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        updateUserData(userId, inputs, dispatch);
        window.location.replace('http://localhost:3000/users');
    }
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Thông tin người dùng</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Thêm mới</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                        src="https://anhdephd.com/wp-content/uploads/2019/07/hinh-anh-avatar-chibi-cute-de-thuong-dep-nhat-cho-facebook-15-560x560.jpg"
                        alt="" 
                        className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <div className="userShowUsername">{user?.name}</div>
                            <div className="userShowUserTitle">Admin: {user?.isAdmin ? "Yes" : "No"}</div>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <div className="userShowTitle">Chi tiết tài khoản</div>
                        <div className="userShowIndo">
                            <PermIdentityIcon className="userShowIcon"></PermIdentityIcon>
                            <div className="userShowInfoTitle">{user?.username}</div>
                        </div>
                        <div className="userShowIndo">
                            <CalendarTodayIcon className="userShowIcon"></CalendarTodayIcon>
                            <div className="userShowInfoTitle">{user?.dayOfBirth ? user?.dayOfBirth : 'Chưa nhập thông tin'}</div>
                        </div>
                        <div className="userShowTitle">Thông tin liên hệ</div>
                        <div className="userShowIndo">
                            <PhoneAndroidIcon className="userShowIcon"></PhoneAndroidIcon>
                            <div className="userShowInfoTitle">{user?.phone ? user?.phone : 'Chưa nhập thông tin'}</div>
                        </div>
                        <div className="userShowIndo">
                            <MailOutlineIcon className="userShowIcon"></MailOutlineIcon>
                            <div className="userShowInfoTitle">{user?.email}</div>
                        </div>
                        <div className="userShowIndo">
                            <LocationOnIcon className="userShowIcon"></LocationOnIcon>
                            <div className="userShowInfoTitle">{user?.address ? user?.address : 'Chưa nhập thông tin'}</div>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Chỉnh sửa</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Tên: </label>
                                <input
                                name="name" 
                                type="text" 
                                placeholder={user?.name}
                                className="UserUpdateInput"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email: </label>
                                <input
                                name="email" 
                                type="text" 
                                placeholder={user?.email}
                                className="UserUpdateInput"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Số điện thoại: </label>
                                <input
                                name="phone" 
                                type="text" 
                                placeholder="094566314"
                                className="UserUpdateInput"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Ngày sinh: </label>
                                <input
                                name="dayOfBirth" 
                                type="text" 
                                placeholder="02/12/2000"
                                className="UserUpdateInput"
                                onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Địa chỉ: </label>
                                <input
                                name="address" 
                                type="text" 
                                placeholder="Can Tho City"
                                className="UserUpdateInput"
                                onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img 
                                src="https://anhdephd.com/wp-content/uploads/2019/07/hinh-anh-avatar-chibi-cute-de-thuong-dep-nhat-cho-facebook-15-560x560.jpg" 
                                alt="" 
                                className="userUpdateImg"
                                />
                                <label htmlFor="file"><PublishIcon className="userUpdateIcon"></PublishIcon></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton" onClick={handleUpdate}>Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
