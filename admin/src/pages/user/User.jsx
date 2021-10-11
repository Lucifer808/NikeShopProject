import React from 'react'
import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';
import {Link} from 'react-router-dom';
function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
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
                            <div className="userShowUsername">Anna Becker</div>
                            <div className="userShowUserTitle">Software Engineer</div>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <div className="userShowTitle">Accounts Details</div>
                        <div className="userShowIndo">
                            <PermIdentityIcon className="userShowIcon"></PermIdentityIcon>
                            <div className="userShowInfoTitle">Annabeck99</div>
                        </div>
                        <div className="userShowIndo">
                            <CalendarTodayIcon className="userShowIcon"></CalendarTodayIcon>
                            <div className="userShowInfoTitle">20/10/2000</div>
                        </div>
                        <div className="userShowTitle">Contact Details</div>
                        <div className="userShowIndo">
                            <PhoneAndroidIcon className="userShowIcon"></PhoneAndroidIcon>
                            <div className="userShowInfoTitle">094566314</div>
                        </div>
                        <div className="userShowIndo">
                            <MailOutlineIcon className="userShowIcon"></MailOutlineIcon>
                            <div className="userShowInfoTitle">Annabeck99@gmail.com</div>
                        </div>
                        <div className="userShowIndo">
                            <LocationOnIcon className="userShowIcon"></LocationOnIcon>
                            <div className="userShowInfoTitle">Can Tho City</div>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username: </label>
                                <input 
                                type="text" 
                                placeholder="Annabeck99"
                                className="UserUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name: </label>
                                <input 
                                type="text" 
                                placeholder="Anna Becker"
                                className="UserUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email: </label>
                                <input 
                                type="text" 
                                placeholder="Annabeck99@gmail.com"
                                className="UserUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone: </label>
                                <input 
                                type="text" 
                                placeholder="094566314"
                                className="UserUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address: </label>
                                <input 
                                type="text" 
                                placeholder="Can Tho City"
                                className="UserUpdateInput"
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
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
