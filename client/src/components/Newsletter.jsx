import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import {mobile} from '../responsive';
const Container = styled.div `
    height: 60vh;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1 `
    font-size: 60px;
    margin-bottom: 20px;
`
const Description = styled.div `
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center"})}
`
const InputContainer = styled.div `
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}
`
const Input = styled.input `
    border: none;
    flex: 8;
    padding: 20px 10px;
`
const Button = styled.button `
    flex: 1;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
    text-align: center;
`
const Newsletter = () => {
    return (
        <Container>
            <Title>SẢM PHẨM MỚI</Title>
            <Description>Nhập email của bạn để nhận được thông tin sớm nhất khi có sản phẩm mới </Description>
            <InputContainer>
                <Input placeholder="Nhập email..."/>
                <Button>
                    <SendIcon></SendIcon>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
