import React from 'react'
import Annountcement from '../components/Annountcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Sliders from '../components/Slider'
import styled from 'styled-components'
const Title = styled.span `
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
`
const Underline = styled.div `
    padding: 0.5px 60px;
    width: 0px;
    margin-top: 10px;
    margin-left: 613px;
    border: 1px solid #cab182;
    background-color: #cab182;
`
const Home = () => {
    return (
        <div>
            <Annountcement />
            <Navbar />
            <Sliders />
            <Categories />
            <Title>Sản phẩm nổi bật</Title>
            <Underline></Underline>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
