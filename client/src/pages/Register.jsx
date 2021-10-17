import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import {publicReq} from '../request';
import {Link} from 'react-router-dom';
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
    border-radius: 5px;
    ${mobile({width: "80%"})}

`
const Title = styled.h1 `
    font-size: 24px;
    margin-bottom: 5px;
    text-align: center;
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
    width: 100%;
    border: none;
    background-color: teal;
    padding: 10px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`
const SubTitle = styled.span `
`
const loginTitle = styled.span `
    
`
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = (e) =>{
        e.preventDefault()
    }
    useEffect(() =>{
       const registerReq = async () => {
           try{
                const res = await publicReq.post('/auth/register',{
                    username: username,
                    email: email,
                    password: password
                })
           }catch{}
       }
       handleClick && registerReq();
    },[handleClick]);
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
                    <Input placeholder="Vd: duynguyen123" onChange={e => setUsername(e.target.value)}/>
                    <SubTitle>Email:</SubTitle>
                    <Input placeholder="Vd: duynguyen123@gmail.com" onChange={e => setEmail(e.target.value)}/>
                    <SubTitle>Mật khẩu:</SubTitle>
                    <Input placeholder="Mật khẩu" onChange={e => setPassword(e.target.value)} type="password"/>
                    <SubTitle>Nhập lại mật khẩu:</SubTitle>
                    <Input placeholder="Nhập lại mật khẩu" type="password"/>
                    <Agreement>
                        Tôi đã đọc kĩ <b> điều khoản sử dụng </b> và đồng ý với tất cả các điều khoản.
                    </Agreement>
                    <loginTitle style={{fontSize:'12px', paddingRight:'50%', marginBottom: '20px'}}>
                        Bạn đã có tài khoản ? <Link to='/login' style={{fontSize:'16px'}}> Đăng nhập ngay</Link>
                    </loginTitle>
                    <Button onClick={handleClick}>ĐĂNG KÝ</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
