import React, { useState } from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddchartIcon from '@mui/icons-material/Addchart';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import {Link, useLocation} from 'react-router-dom';
function Sidebar() {
    const location = useLocation();
    const href = location.pathname.split('/')[1];
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Bảng điểu khiển</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className={`sidebarListItem ${href===''?'active' : ''}`}>
                                <LineStyleIcon className="sidebarIcon"></LineStyleIcon>
                                Trang chủ
                            </li>
                        </Link>
                            <li className="sidebarListItem">
                                <TimelineIcon className="sidebarIcon"></TimelineIcon>
                                Phân tích dữ liệu
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUpIcon className="sidebarIcon"></TrendingUpIcon>
                                Doanh thu bán hàng
                            </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Truy cập nhanh</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className={`sidebarListItem ${href==='users'?'active' : ''}`}>
                                <PeopleOutlineIcon className="sidebarIcon"></PeopleOutlineIcon>
                                Người dùng
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className={`sidebarListItem ${href==='products'?'active' : ''}`}>
                                <ProductionQuantityLimitsIcon className="sidebarIcon"></ProductionQuantityLimitsIcon>
                                Sản phẩm
                            </li>
                        </Link>
                        <Link to='/orders' className='link'>
                            <li className={`sidebarListItem ${href==='orders'?'active' : ''}`}>
                                <AttachMoneyIcon className="sidebarIcon"></AttachMoneyIcon>
                                Đơn hàng
                            </li>
                        </Link>
                            <li className="sidebarListItem">
                                <BarChartIcon className="sidebarIcon"></BarChartIcon>
                                Thống kê
                            </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Thông báo</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineIcon className="sidebarIcon"></MailOutlineIcon>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcon"></DynamicFeedIcon>
                            Phản hồi
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className="sidebarIcon"></ChatBubbleOutlineIcon>
                            Tin nhắn
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Nhân viên</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineIcon className="sidebarIcon"></WorkOutlineIcon>
                            Quản lý
                        </li>
                        <li className="sidebarListItem">
                            <AddchartIcon className="sidebarIcon"></AddchartIcon>
                            Phân tích
                        </li>
                        <li className="sidebarListItem">
                            <ReportGmailerrorredIcon className="sidebarIcon"></ReportGmailerrorredIcon>
                            Báo cáo
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
