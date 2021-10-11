import React from 'react'
import styled from 'styled-components'
const Container = styled.div `
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div `
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    margin-bottom: 100px;
`
const Title = styled.h1 `
    color: #000;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
`
const Button = styled.button `
    border: 1px solid #000;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
`
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Mua ngay!</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
