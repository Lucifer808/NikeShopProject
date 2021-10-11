import React from 'react';
import styled from 'styled-components';
import Annountcement from '../components/Annountcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from '../responsive';
const Container = styled.div ``
const Wrapper = styled.div `
    padding: 50px;
    display: flex;
    background-color: #f3f3f3;
    ${mobile({flexDirection: "column", padding: "10px"})}
`
const ImgContainer = styled.div `
    flex: 1;
`
const Image = styled.img `
    width: 90%;
    height: 90vh;
    ${mobile({width: "100%", height: "50vh"})}
`
const InfoContainer = styled.div `
    flex: 1;
    padding: 0 50px;
    ${mobile({padding: "10px", display: "flex", flexDirection: "column"})}

`
const Title = styled.h1 `
    font-size: 40px;
    ${mobile({fontSize: "20px"})}

`
const Description = styled.p `
    margin: 20px 0;
    ${mobile({fontSize: "20px"})}
`
const Price = styled.span `
    font-size: 40px;
`
const FilterContainer = styled.div `
    margin: 30px 0;
    width: 50%;
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const Filter = styled.div `
    display: flex;
    align-items: center;
    ${mobile({margin: "10px 0"})}
`
const FilterTitle = styled.span `
    font-size: 20px;
`
const FilterColor = styled.div `
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select `
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option ``
const AddContainer = styled.div `
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    ${mobile({flexDirection: "column", width: "100%"})}

`
const AmountContainer = styled.div `
    display: flex;
    align-items: center;
`
const Amount = styled.div `
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button `
    padding: 10px;
    border: 1px solid teal;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: black;
        color: white;
    }
    ${mobile({width: "100%", marginTop: "10px"})}
`
const Product = () => {
    return (
        <Container>
            <Annountcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ee647b66-ea7a-46c2-b849-505080e5a189/jordan-dri-fit-air-short-sleeve-graphic-top-fHBkqt.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Jordan Dri-FIT Air</Title>
                    <Description>The Jordan Dri-FIT Air Top is an everyday essential made from blended knit fabric with sweat-wicking technology. Wear it casually or to play or work out in.</Description>
                    <Price>$40</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Màu: </FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="yellow" />
                            <FilterColor color="red" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Kích cỡ: </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon></RemoveIcon>
                            <Amount>1</Amount>
                            <AddIcon></AddIcon>
                        </AmountContainer>
                        <Button>Thêm vào giỏ hàng</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Product
