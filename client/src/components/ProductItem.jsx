import React from 'react'
import styled from 'styled-components'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
const Container = styled.div `
    flex: 1;
    margin: 10px;
    min-width: 280px;
    max-width: 306px;
    height: 400px;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;
    padding-bottom: 100px;
    border: 1px solid #ccc;
`
const Circle = styled.div `
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #000;
    position: absolute;
`
const Image = styled.img `
    height: 90%;
    width: 100%;
    object-fit: cover;
    z-index: 2;
`
const Info = styled.div `
    opacity: 0;
    width: 100%;
    height: 72%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s ease;
    &:hover{
        opacity: 1;
    }
`
const Icon = styled.div `
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 10px;
    transition: all .5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
        cursor: pointer;
    }
`
const Review = styled.div `
    margin: 20px 10px;
    cursor: default;
`
const Name = styled.h3 `
    margin-bottom: 20px;
`
const Price = styled.p `
    font-size: 24px;
`
const ProductItem = ({product}) => {
    return (
        <Container>
            <Image src={product.img} />
            <Info>
                <Icon>
                    <ShoppingBasketOutlinedIcon></ShoppingBasketOutlinedIcon>
                </Icon>
                <Icon>
                    <Link to={`/product/${product._id}`}>
                        <SearchOutlinedIcon></SearchOutlinedIcon>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                </Icon>
            </Info>
            <Review>
                <Name>{product.title}</Name>
                <Price>{product.price.toLocaleString()} VND</Price>
            </Review>
        </Container>
    )
}

export default ProductItem
