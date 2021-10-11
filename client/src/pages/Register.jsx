import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive'
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
    flex-wrap: wrap;
`
const Input = styled.input `
    flex: 1;
    min-width: 90%;
    margin: 0px 10px 10px 0;
    padding: 10px;
`
const Agreement = styled.span `
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button `
    width: 40%;
    border: none;
    background-color: teal;
    padding: 10px;
    color: white;
`
const SubTitle = styled.span `
`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>ĐĂNG KÝ TÀI KHOẢN</Title>
                <Form>
                    <SubTitle>Tên:</SubTitle>
                    <Input placeholder="Vd: Duy"/>
                    <SubTitle>Họ:</SubTitle>
                    <Input placeholder="Vd: Nguyễn"/>
                    <SubTitle>Tên tài khoản:</SubTitle>
                    <Input placeholder="Vd: duynguyen123"/>
                    <SubTitle>Email:</SubTitle>
                    <Input placeholder="Vd: duynguyen123@gmail.com"/>
                    <SubTitle>Mật khẩu:</SubTitle>
                    <Input placeholder="Mật khẩu"/>
                    <SubTitle>Nhập lại mật khẩu:</SubTitle>
                    <Input placeholder="Nhập lại mật khẩu"/>
                    <Agreement>
                        Tôi đã đọc kĩ <b> điều khoản sử dụng </b> và đồng ý với tất cả các điều khoản.
                    </Agreement>
                    <Button>ĐĂNG KÝ</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
