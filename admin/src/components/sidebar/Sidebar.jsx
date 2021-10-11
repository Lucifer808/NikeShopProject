import React from 'react'
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
import {Link} from 'react-router-dom';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyleIcon className="sidebarIcon"></LineStyleIcon>
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"></TimelineIcon>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon"></TrendingUpIcon>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PeopleOutlineIcon className="sidebarIcon"></PeopleOutlineIcon>
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <ProductionQuantityLimitsIcon className="sidebarIcon"></ProductionQuantityLimitsIcon>
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon"></AttachMoneyIcon>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartIcon className="sidebarIcon"></BarChartIcon>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineIcon className="sidebarIcon"></MailOutlineIcon>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcon"></DynamicFeedIcon>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className="sidebarIcon"></ChatBubbleOutlineIcon>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineIcon className="sidebarIcon"></WorkOutlineIcon>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <AddchartIcon className="sidebarIcon"></AddchartIcon>
                            Analysis
                        </li>
                        <li className="sidebarListItem">
                            <ReportGmailerrorredIcon className="sidebarIcon"></ReportGmailerrorredIcon>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
