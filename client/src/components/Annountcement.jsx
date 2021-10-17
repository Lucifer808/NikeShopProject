import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/apiCalls';
import { refeshProduct } from '../redux/reduxCart';
const Container = styled.div `
    height: 30px;
    background-color: #000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div `
    font-weight: 300;
    margin-right: 10px;
    cursor: pointer;
    opacity: 0.8;
    font-size: 12px;
`
const Annountcement = () => {
    const {currentUser} = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);
    const dispath = useDispatch();
    const handleClick = () =>{
        logout(dispath, currentUser);
        dispath(refeshProduct());
    }
    return (
        <Container>
            { currentUser && <MenuItem>Xin chào <b>{currentUser.username}</b></MenuItem>}
            { currentUser && <MenuItem>|</MenuItem>}
            { currentUser && <MenuItem onClick={handleClick}>Thoát</MenuItem>}
            { currentUser && <MenuItem>|</MenuItem>}
            { !currentUser && <Link to='/login' style={{color: '#ccc', textDecoration: 'none'}}><MenuItem>Đăng nhập</MenuItem></Link>}
            { !currentUser && <MenuItem>|</MenuItem>}
            { !currentUser && <Link to='/register' style={{color: '#ccc', textDecoration: 'none'}}><MenuItem>Đăng kí</MenuItem></Link>}
            { !currentUser && <MenuItem>|</MenuItem>}
            <MenuItem>Hỗ trợ</MenuItem>
        </Container>
    )
}

export default Annountcement
