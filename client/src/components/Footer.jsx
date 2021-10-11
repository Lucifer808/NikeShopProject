import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CopyrightIcon from '@mui/icons-material/Copyright';
import {mobile} from '../responsive';
const Container = styled.div `
    display: flex;
    background-color: #000;
    ${mobile({flexDirection: "column"})}

`
const LeftSide = styled.div `
    flex: 1;
    display: flex;
    padding: 20px;
    justyfy-content: center;
    align-items: center;
`
const Logo = styled.h1 `
    color: #fff;
`
const SocialContainer = styled.div `
    display: flex;
`
const SocialIcon = styled.div `
    
`
const CenterSide = styled.div `
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}

`
const Title = styled.h3 `
    margin-bottom: 30px;
    color: #fff;
`
const List =styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
    color: #9a8e85;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li `
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`
const RightSide = styled.div `
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div `
    color: #fff;
    display: flex;
    margin: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    align-items: center;
`
const Copyright = styled.span `
    color: #9a8e85 !important;
    font-size: 16px;
`
const Footer = () => {
    return (
        <Container>
            <LeftSide>
                <Logo>NikeShop</Logo>
            </LeftSide>
            <CenterSide>
                <Title>Danh mục</Title>
                <List>
                    <ListItem>Trang chủ</ListItem>
                    <ListItem>Giỏ hàng</ListItem>
                    <ListItem>Thời trang nam</ListItem>
                    <ListItem>Thời trang nữ</ListItem>
                    <ListItem>Thời trang trẻ em</ListItem>
                    <ListItem>Giảm giá</ListItem>
                    <ListItem>Tổng hợp</ListItem>
                    <ListItem>Chăm sóc khách hàng</ListItem>
                    <ListItem>Điều khoản NikeShop</ListItem>
                    <ListItem>Phương thức thanh toán</ListItem>
                </List>
            </CenterSide>
            <RightSide>
                <Title>Thông tin liên hệ</Title>
                <ContactItem>
                <RoomIcon style={{marginRight: "10px", fontSize: "16px"}}/>
                    662, Can Tho City
                </ContactItem>
                <ContactItem>
                <LocalPhoneIcon style={{marginRight: "10px", fontSize: "16px"}}/>
                    0948633214
                </ContactItem>
                <ContactItem>
                <AlternateEmailIcon style={{marginRight: "10px", fontSize: "16px"}}/>
                    Contact@nikeshop.com
                </ContactItem>
                <SocialContainer>
                    <SocialIcon>
                        <FacebookIcon style={{color: "#fff", marginLeft: "10px", cursor: "pointer"}}></FacebookIcon>
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon style={{color: "#fff", marginLeft: "10px", cursor: "pointer"}}></InstagramIcon>
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterIcon style={{color: "#fff", marginLeft: "10px", cursor: "pointer"}}></TwitterIcon>
                    </SocialIcon>
                    <SocialIcon>
                        <PinterestIcon style={{color: "#fff", marginLeft: "10px", cursor: "pointer"}}></PinterestIcon>
                    </SocialIcon>
                </SocialContainer>
                <ContactItem>
                    <CopyrightIcon style={{marginRight: "10px", fontSize: "16px", color: "#9a8e85"}}/>
                    <Copyright>
                        Copyright by Nguyen Long Duy
                    </Copyright>
                </ContactItem>
            </RightSide>
        </Container>
    )
}

export default Footer
