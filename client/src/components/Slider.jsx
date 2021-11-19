import React, {useState} from 'react'
import styled from 'styled-components'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import {sliderItems} from '../dataSlide';
import {mobile} from '../responsive'
const Container = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: #000;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`
const Arrow = styled.div `
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    opacity: 0.5;
    cursor: pointer;
    z-index: 2;
`
const Wrapper = styled.div `
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div `
    height: 100%;
    flex: 1;
`
const Image = styled.img `
    height: 100%;
    width: 216%;
    object-fit: cover;
`
const InfoContainer = styled.div `
    flex: 1;
    margin-top: 400px;
    padding: 50px;
`
const Title = styled.h1 `
    font-size: 40px;
`
const Desc = styled.p `
    margin-right: 10px;
`
const Button = styled.button `
    padding: 10px;
    margin-top: 10px;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid #000;
    cursor: pointer;
`
const Sliders = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = direction => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }
    }
    return (
        <div>
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <KeyboardArrowLeftOutlinedIcon></KeyboardArrowLeftOutlinedIcon>
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map(item =>(
                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Image src={item.img}/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>Mua ngay!</Button>
                            </InfoContainer>
                        </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <KeyboardArrowRightOutlinedIcon></KeyboardArrowRightOutlinedIcon>
                </Arrow>
            </Container>
        </div>
    )
}

export default Sliders