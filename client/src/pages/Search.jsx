import React, {useState} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Annountcement from '../components/Annountcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {mobile} from '../responsive';
import { useLocation } from 'react-router';
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
    const search = useLocation().search;
    const cate = new URLSearchParams(search).get('category');
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    const handleFilter = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }
    console.log(cate)
    return (
        <Container>
            <Annountcement />
            <Navbar />
            <Title>Kết quả tìm kiếm theo: {cate}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Lọc sản phẩm:
                    </FilterText>
                    <Select name="color" onChange={handleFilter}>
                    <Option selected disabled>-- Màu --</Option>                        
                    <Option>Yellow</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    </Select>
                    <Select name="size" onChange={handleFilter}>
                    <Option selected disabled>-- Size --</Option>                        
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
                    <Select onChange={e =>setSort(e.target.value)}>
                        <Option value="newest">-- Mới nhất --</Option>
                        <Option value="esc">Giá (tăng dần)</Option>
                        <Option value="desc">Giá (giảm dần)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cate={cate} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
