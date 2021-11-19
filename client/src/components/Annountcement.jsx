import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/apiCalls';
import { refeshProduct } from '../redux/reduxCart';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
const Container = styled.div `
    height: 30px;
    background-color: #000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuTitle = styled.div `
    font-weight: 300;
    margin-right: 10px;
    cursor: pointer;
    opacity: 0.8;
    font-size: 12px;
    color: white;
`
const Annountcement = () => {
    const {currentUser} = useSelector(state => state.user);
    const dispath = useDispatch();
    const handleClick = () =>{
        logout(dispath, currentUser);
        dispath(refeshProduct());
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleTogle = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Container>
            { currentUser && (
                <div>
                <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleTogle}>
                    <MenuTitle>Xin chào <b>{currentUser.name}</b></MenuTitle>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <Link to={'/profile/' + currentUser._id} style={{color: '#000', textDecoration: 'none'}}>
                    <MenuItem onClick={handleClose}><AccountCircleOutlinedIcon style={{fontSize: '22px', marginRight: '2px'}}/>Thông tin cá nhân</MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}><LocalShippingIcon style={{fontSize: '22px', marginRight: '2px'}}/>Lịch sử mua hàng</MenuItem>
                    <MenuItem onClick={handleClose}><ManageAccountsOutlinedIcon style={{fontSize: '22px', marginRight: '2px'}}/>Thay đổi mật khẩu</MenuItem>
                </Menu>
            </div>
            ) 
            }
            { currentUser && <MenuTitle>|</MenuTitle>}
            { currentUser && <MenuTitle onClick={handleClick}>Đăng xuất</MenuTitle>}
            { currentUser && <MenuTitle>|</MenuTitle>}
            { !currentUser && <Link to='/login' style={{color: '#ccc', textDecoration: 'none'}}><MenuTitle>Đăng nhập</MenuTitle></Link>}
            { !currentUser && <MenuTitle>|</MenuTitle>}
            { !currentUser && <Link to='/register' style={{color: '#ccc', textDecoration: 'none'}}><MenuTitle>Đăng kí</MenuTitle></Link>}
            { !currentUser && <MenuTitle>|</MenuTitle>}
            <MenuTitle>Hỗ trợ</MenuTitle>
        </Container>
    )
}

export default Annountcement
