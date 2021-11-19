import React, { useState } from 'react';
import Annountcement from '../components/Annountcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { userReq } from '../request';
const Container = styled.div `
`
const Wrapper = styled.div `
    height: 100vh;
    display: flex;

`
const ProfileTitle = styled.h1 `
    margin-top: 20px;
    margin-left: 20px;
`
const ProfileLeft = styled.div `
    flex: 1;
    margin-left: 80px;
    margin-top: 20px;
`
const ProfileRight = styled.div `
    flex: 2;
`
const ProfileImg = styled.img `
    border-radius: 50%;
    height: 230px;
    width: 230px;
`
const InfoContainer = styled.div `
    margin-top: 50px;
`
const InfoTitle = styled.h3 `
    margin-top: 20px;
    color: #999;
`
const InfoWrapper = styled.div `
    display: flex;
    margin-top: 20px;
`
const InfoUsername = styled.h4 `
    margin-left: 10px;
`
const UpdateForm = styled.form `
    display: flex;
    flex-direction: column;
`
const UpdateTitle = styled.label `
    margin-top: 40px;
`
const UpdateInput = styled.input `
    width: 50%;
    margin-top: 10px;
    padding: 10px 5px;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
`
const UpdateBtn = styled.button `
    margin-top: 30px;
    width: 52%;
    padding: 10px 5px;
    background-color: #000;
    color: white;
    border-radius: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
`
const Profile = () => {
    const [inputs, setInputs] = useState({});
    const location = useLocation();
    const userId = location.pathname.split('/')[2];
    const {currentUser} = useSelector(state => state.user);
    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        const updateReq = async () => {
            try{
                const res = await userReq.put(`/users/${userId}`,inputs);
                res.data && alert('Cập nhật thông tin thành công, thông tin sẽ được cập nhật vào lần đăng nhập tiếp theo!');
                setInputs();
            }catch(err){}
        }
        updateReq();
    }
    return (
        <Container>
            <Annountcement />
            <Navbar />
            <ProfileTitle>Cập nhật thông tin</ProfileTitle>
            <Wrapper>
            <ProfileLeft>
                <ProfileImg src="data:image/jpeg;base64,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"></ProfileImg>
            <InfoContainer>
                <InfoTitle>Thông tin tài khoản</InfoTitle>
                <InfoWrapper>
                    <InfoUsername> Tên tài khoản: </InfoUsername>
                    <InfoUsername>{currentUser?.username}</InfoUsername>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoUsername> Tên người dùng: </InfoUsername>
                    <InfoUsername>{currentUser?.name}</InfoUsername>
                </InfoWrapper>
            </InfoContainer>
            <InfoContainer>
                <InfoTitle>Thông tin cá nhân</InfoTitle>
                <InfoWrapper>
                    <InfoUsername> Địa chỉ: </InfoUsername>
                    <InfoUsername>{currentUser?.address ? currentUser?.address : 'Chưa nhập thông tin'}</InfoUsername>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoUsername> Ngày sinh: </InfoUsername>
                    <InfoUsername>{currentUser?.dayOfBirth ? currentUser?.dayOfBirth : 'Chưa nhập thông tin'}</InfoUsername>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoUsername> Số điện thoại: </InfoUsername>
                    <InfoUsername>{currentUser?.phone ? currentUser?.phone : 'Chưa nhập thông tin'}</InfoUsername>
                </InfoWrapper>
            </InfoContainer>
            </ProfileLeft>
            <ProfileRight>
                <UpdateForm>
                    <UpdateTitle>Tên người dùng:</UpdateTitle>
                    <UpdateInput
                        name="name"
                        type="text"
                        placeholder={currentUser?.name}
                        onChange={handleChange}
                    />
                    <UpdateTitle>Email:</UpdateTitle>
                    <UpdateInput
                        name="email"
                        type="email"
                        placeholder={currentUser?.email}
                        onChange={handleChange}
                    />
                    <UpdateTitle>Ngày sinh:</UpdateTitle>
                    <UpdateInput
                        name="dayOfBirth"
                        type="text"
                        placeholder={currentUser?.dayOfBirth}
                        onChange={handleChange}
                    />
                    <UpdateTitle>Số điện thoại:</UpdateTitle>
                    <UpdateInput
                        name="phone"
                        type="text"
                        placeholder={currentUser?.phone}
                        onChange={handleChange}
                    />
                    <UpdateTitle>Địa chỉ:</UpdateTitle>
                    <UpdateInput
                        name="address"
                        type="text"
                        placeholder={currentUser?.address}
                        onChange={handleChange}
                    />
                    <UpdateBtn onClick={handleUpdate}>Cập nhật</UpdateBtn>
                </UpdateForm>
            </ProfileRight>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Profile
