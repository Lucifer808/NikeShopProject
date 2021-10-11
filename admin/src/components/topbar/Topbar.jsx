import React from 'react'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from 'react-router-dom';
function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <Link to="/" className="link">
                    <div className="topLeft">
                        <span className="logo">Adminstrator.</span>
                    </div>
                </Link>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon></NotificationsNoneIcon>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon></LanguageIcon>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon></SettingsIcon>
                    </div>
                    <img src="https://pm1.narvii.com/6392/431aabe939b1037c7ba1970062a76b14ef607eed_hq.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
