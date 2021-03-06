import React, {useState} from 'react';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
    flex-direction: column;
`
const Input = styled.input `
    flex: 1;
    min-width: 95%;
    margin: 0px 10px 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #888;
`
const Button = styled.button `
    width: 100%;
    border: none;
    background-color: teal;
    padding: 10px;
    margin: 10px 0;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const SubTitle = styled.span `
    
`
const Error = styled.span `
    color: red;
`
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, error} = useSelector((state) => state.user);
    const dispath = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        login(dispath, {username, password});
    }
    return (
        <Container>
            <Wrapper>
                <Title>????NG NH???P</Title>
                <Form>
                    <SubTitle>T??n t??i kho???n:</SubTitle>
                    <Input 
                    placeholder="Vd: duynguyen123" 
                    onChange={e => setUsername(e.target.value)}/>
                    <SubTitle>M???t kh???u:</SubTitle>
                    <Input placeholder="M???t kh???u" 
                    onChange={e => setPassword(e.target.value)} 
                    type="password"/>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Ghi nh??? t??i kho???n" />
                    </FormGroup>
                    {error && <Error>Sai t??i kho???n ho???c m???t kh???u</Error>}
                    <Button onClick={handleClick} disabled={isFetching}>????NG NH???P</Button>
                    <Link to='/forgot'>Qu??n m???t kh???u ?</Link>
                    <Link to='/register'>T???o t??i kho???n ngay.</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
