import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { publicReq } from '../request';
import { Link } from 'react-router-dom';
const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    background: #373B44;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div `
    width: 35%;
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
    min-width: 95%;
    margin: 0px 10px 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #888;
`
const Agreement = styled.span `
    font-size: 14px;
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
const LoginTitle = styled.span `
    
`
const Register = () => {
    const [inputs, setInputs] = useState({});
    const handleClick = (e) =>{
        e.preventDefault();
        const registerReq = async () => {
            try{
                const res = await publicReq.post('/auth/register',inputs);
                res.data && alert("Dăng ký tài khoản thành công");
                window.location.replace('http://localhost:3000/login');
            }catch{}
        }
        registerReq();
    }
    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    return (
        <Container>
            <Wrapper>
                <Title>ĐĂNG KÝ TÀI KHOẢN</Title>
                <Form>
                    <SubTitle>Tên:</SubTitle>
                    <Input
                        name="name" 
                        placeholder="Vd: Duy" 
                        onChange={handleChange}
                        required
                    />
                    <SubTitle>Tên tài khoản:</SubTitle>
                    <Input
                        name="username"
                        placeholder="Vd: duynguyen123" 
                        onChange={handleChange}
                        required
                    />
                    <SubTitle>Email:</SubTitle>
                    <Input
                        name="email" 
                        type="email" 
                        placeholder="Vd: duynguyen123@gmail.com" 
                        onChange={handleChange}
                        required
                    />
                    <SubTitle>Mật khẩu:</SubTitle>
                    <Input
                        name="password" 
                        type="password"
                        placeholder="Mật khẩu" 
                        onChange={handleChange}
                        required
                    />
                    <SubTitle>Nhập lại mật khẩu:</SubTitle>
                    <Input 
                    placeholder="Nhập lại mật khẩu" 
                    type="password"/>
                    <Agreement>
                        Tôi đã đọc kĩ <b> điều khoản sử dụng </b> và đồng ý với tất cả các điều khoản.
                    </Agreement>
                    <LoginTitle style={{fontSize:'12px', paddingRight:'50%', marginBottom: '20px'}}>
                        Bạn đã có tài khoản ? <Link to='/login' style={{fontSize:'16px'}}> Đăng nhập ngay</Link>
                    </LoginTitle>
                    <Button onClick={handleClick}>ĐĂNG KÝ</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
