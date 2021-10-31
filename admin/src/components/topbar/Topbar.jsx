import React from 'react'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import Settings from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/apiCalls';
function Topbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const {currentUser} = useSelector(state => state.user);
    const dispath = useDispatch();
    const handleLogOut = () =>{
        logout(dispath, currentUser);
        window.location.reload();
        window.location.href='/login';
    }
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
                        <div className="topbarIconMenu">
                            <img src="https://pm1.narvii.com/6392/431aabe939b1037c7ba1970062a76b14ef607eed_hq.jpg" alt="" className="topAvatar" />
                            <lable className="topbarIconTitle">Xin chào {currentUser.name}</lable>
                            <Button
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                className="topbarIconBtn"
                            >
                            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                    },
                                    '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                <Avatar />
                                Thông tin tài khoản
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Cài đặt
                                </MenuItem>
                                <MenuItem onClick={handleClose, handleLogOut}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Đăng xuất
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
