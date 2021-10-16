import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import {mobile} from '../responsive';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
const Container = styled.div`
    height: 60px;
    -webkit-box-shadow: 0px 5px 16px -9px rgba(0,0,0,0.5); 
    box-shadow: 0px 5px 16px -9px rgba(0,0,0,0.5);
    ${mobile({height: "50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0"})}
`
const LeftSide = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({marginLeft: "20px"})};
`
const CenterSide = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    ${mobile({display: "none"})}

`
const RightSide = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({justifyContent: "center"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 2px;
    border-radius: 10px;
    margin-right: 10px;
`
const Input = styled.input`
    margin-left: 10px;
    outline: none;
    border: none;
    ${mobile({display: "none"})}
`
const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    ${mobile({fontSize: "24px"})};
    color: black;
`
const MenuItem = styled.div `
    display: flex;
    font-size: 14px;
    cursor: pointer;
    margin-left: 12px;
`
const Navigation = styled.div `
    font-size: 18px;
    font-weight: bold;
    margin-right: 24px;
    cursor: pointer;
`
const Navbar = () => {
    const quantity = useSelector( state => state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <LeftSide>
                    <Link to='/' style={{textDecoration: 'none'}}>
                    <Logo>NikeShop</Logo>
                    </Link>
                </LeftSide>
                <CenterSide>
                    <Navigation>Nam</Navigation>
                    <Navigation>Nữ</Navigation>
                    <Navigation>Trẻ em</Navigation>
                    <Navigation>Tùy chọn</Navigation>
                    <Navigation>Giảm giá</Navigation>
                </CenterSide>
                <RightSide>
                    <MenuItem>
                    <SearchContainer>
                        <Input placeholder="Tìm kiếm..."/>
                        <SearchIcon style={{cursor: 'pointer', fontSize: '18px', color: 'gray'}}></SearchIcon>
                    </SearchContainer>
                    <Link to='/cart'>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                        </Badge>
                    </Link>
                    </MenuItem>
                </RightSide>
            </Wrapper>
        </Container>
    )
}

export default Navbar