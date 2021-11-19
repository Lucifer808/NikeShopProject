import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { popularProducts } from '../dataSlide';
import Slider from "react-slick";
import styled from 'styled-components';
const Container = styled.div `
    height: 280px;
    width: 1000px;
    margin-left: 180px;
    .slick-arrow{
        background-color: #000;
        height: 20px;
        width: 20px;
        border-radius: 50%;
    }
`
const Wrapper = styled.div `
    height: 100%;
    width: 80px;
    margin-top: 10px;
`
const Image = styled.img `
    height: 225px;
    width: 90%;
`
const Title = styled.p `
    margin-top: 10px;
    font-weight: bold;
`
const Header = styled.span `
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
`
const Underline = styled.div `
    padding: 0.5px 60px;
    width: 0px;
    margin-top: 10px;
    margin-left: 613px;
    border: 1px solid #cab182;
    background-color: #cab182;
    margin-bottom: 5px;
`
const Trending = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };
    return (
        <>
        <Header>Sản phẩm liên quan</Header>
        <Underline></Underline>
        <Container>
        <Slider {...settings}>
        {popularProducts.map(item => (
          <Wrapper key={item.id}>
            <Image src={item.img}></Image>
            <Title>{item.title}</Title>
          </Wrapper>
        ))}
        </Slider>
        </Container>
        </>
    )
}

export default Trending
