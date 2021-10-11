import React from 'react'
import styled from 'styled-components'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Container = styled.div `
    flex: 1;
    margin: 10px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;
`
const Circle = styled.div `
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #000;
    position: absolute;
`
const Image = styled.img `
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 2;
`
const Info = styled.div `
    opacity: 0;
    width: 100%;
    height: 100%;
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

const ProductItem = ({product}) => {
    return (
        <Container>
            <Circle />
            <Image src={product.img} />
            <Info>
                <Icon>
                    <ShoppingBasketOutlinedIcon></ShoppingBasketOutlinedIcon>
                </Icon>
                <Icon>
                    <SearchOutlinedIcon></SearchOutlinedIcon>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem
