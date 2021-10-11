import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Annountcement from '../components/Annountcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {mobile} from '../responsive';
const Container = styled.div `
    
`
const Title = styled.h1 `
    margin: 20px;
`
const FilterContainer = styled.div `
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div `
    margin: 20px;
    ${mobile({margin: "5px 10px"})}

`
const FilterText = styled.span `
    font-size: 20px;
    font-weight: 600;
`
const Select = styled.select `
    margin-left: 20px;
    padding: 5px;
    ${mobile({margin: "10px 5px"})}

`
const Option = styled.option `

`
const ProductList = () => {
    return (
        <Container>
            <Annountcement />
            <Navbar />
            <Title>Sản phẩm</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Lọc sản phẩm:
                    </FilterText>
                    <Select>
                    <Option selected>-- Màu --</Option>                        
                    <Option>Vàng</Option>
                    <Option>Đỏ</Option>
                    <Option>Xanh dương</Option>
                    <Option>Xanh lá</Option>
                    <Option>Tím</Option>
                    </Select>
                    <Select>
                    <Option disabled select>Size</Option>                        
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Hiển thị theo:
                    </FilterText>
                    <Select>
                        <Option selected>Mới nhất</Option>
                        <Option>Giá (tăng dần)</Option>
                        <Option>Giá (giảm dần)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
