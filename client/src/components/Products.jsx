import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../dataSlide'
import ProductItem from './ProductItem'
const Container = styled.div `
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = () => {
    return (
        <Container>
            {popularProducts.map(product =>(
                <ProductItem product={product} key={product.id}/>
            ))}
        </Container>
    )
}

export default Products
