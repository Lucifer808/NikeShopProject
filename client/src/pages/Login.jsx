import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    background: linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),url("https://static.nike.com/a/images/f_auto/dpr_1.0/w_335,c_limit/7c89ac28-1e49-4f73-a9fc-40ccc05ba1e7/men-s-shoes-clothing-accessories.jpg") center;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div `
    width: 40%;
    padding: 20px;
    background-color: #fff;
    ${mobile({width: "80%"})}

`
const Title = styled.h1 `
    font-size: 24px;
    margin-bottom: 5px;
`
const Form = styled.form `
    display: flex;
    flex-direction: column;
`
const Input = styled.input `
    flex: 1;
    min-width: 90%;
    margin: 0px 10px 10px 0;
    padding: 10px;
`
const Button = styled.button `
    width: 40%;
    border: none;
    background-color: teal;
    padding: 10px;
    margin: 10px 0;
    color: white;
`
const SubTitle = styled.span `
    
`
const Link = styled.a `
    margin: 5px 0;
    cursor: pointer;
    text-decoration: underline;
`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>ĐĂNG NHẬP</Title>
                <Form>
                    <SubTitle>Tên tài khoản:</SubTitle>
                    <Input placeholder="Vd: duynguyen123"/>
                    <SubTitle>Mật khẩu:</SubTitle>
                    <Input placeholder="Mật khẩu"/>
                    <Button>ĐĂNG NHẬP</Button>
                    <Link>Quên mật khẩu ?</Link>
                    <Link>Tạo tài khoản ngay.</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
