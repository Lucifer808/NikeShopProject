import React, { useState } from 'react';
import './order.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { updateOrder } from '../../redux/apiCalls';
const Order = () => {
    const [inputs,setInputs] = useState({});
    const location = useLocation();
    const dispatch = useDispatch();
    const orderId = location.pathname.split('/')[2];
    const order = useSelector((state) => state.order.orders.find((order) => order._id === orderId));
    const handleChange = (e) => {
        setInputs(prev =>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }
    const handleUpdate = (e) =>{
        e.preventDefault();
        updateOrder(orderId, inputs, dispatch);
        window.location.replace('http://localhost:3000/orders');
    }
    console.log(order)
    return (
        <div className="Order">
            <div className="orderTitleContainer">
                <h1 className="orderTitle">Quản lý đơn hàng</h1>
            </div>
            <div className="orderContainer">
                <div className="orderShow">
                    <div className="orderShowTop">
                        <div className="orderShowTopTitle">
                            <div className="orderShowOrderTitle">Thông tin khách hàng</div>
                        </div>
                    </div>
                    <div className="orderShowTop">
                        <div className="orderShowLeft">
                        <div className="orderShowTitle">Chi tiết tài khoản</div>
                            <div className="orderShowInfo">
                                <PermIdentityIcon className="orderShowIcon"></PermIdentityIcon>
                                <div className="orderShowInfoTitle">{order.userName}</div>
                            </div>
                            <div className="orderShowInfo">
                                <MailOutlineIcon className="orderShowIcon"></MailOutlineIcon>
                                <div className="orderShowInfoTitle">{order.userEmail}</div>
                            </div>
                        </div>
                        <div className="orderShowRight">
                            <div className="orderShowTitle">Thông tin giao hàng</div>
                                <div className="orderShowInfo">
                                    <PhoneAndroidIcon className="orderShowIcon"></PhoneAndroidIcon>
                                    <div className="orderShowInfoTitle">{order.userPhone}</div>
                                </div>
                                <div className="orderShowInfo">
                                    <PublicIcon className="orderShowIcon"></PublicIcon>
                                    <div className="orderShowInfoTitle">{order.address.country}</div>
                                </div>
                        </div>
                        <div className="orderShowRightOther">
                            <div className="orderShowInfo">
                                <LocationCityIcon className="orderShowIcon"></LocationCityIcon>
                                <div className="orderShowInfoTitle">{order.address.city}</div>
                            </div>
                            <div className="orderShowInfo">
                                <LocationOnIcon className="orderShowIcon"></LocationOnIcon>
                                <div className="orderShowInfoTitle">{order.address.line1}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="orderUpdate">
                    <span className="orderUpdateTitle">Chi tiết đơn hàng</span>
                    <table>
                        <tr className="orderTableHeader">
                            <th>Mã sản phẩm</th>
                            <th>Màu sản phẩm</th>
                            <th>Kích cỡ sản phẩm</th>
                            <th>Số lượng sản phẩm</th>
                        </tr>
                        {order.products.map(product => 
                            <tr className="orderTableInfo" key={uuidv4()}>
                                <td>{product._id}</td>
                                <td>{product.color}</td>
                                <td>{product.size}</td>
                                <td>{product.quantity}</td>
                            </tr>
                        )}
                    </table>
                    <div className="orderBottomInfo">
                        <lable className="orderBottomTitle">Thành tiền: <b style={{fontSize: '32px'}}>{order.amount.toLocaleString()}</b></lable>
                        <form className="orderBottomForm">
                            <select onChange={handleChange} name="status">
                                <option selected disabled>-- Chọn --</option>
                                <option value="Approved">Nhận đơn hàng</option>
                                <option value="Declined">Hủy đơn hàng</option>
                            </select>
                            <button className="orderUpdateButton" onClick={handleUpdate}>Xác nhận</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
