import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ProductItem from './ProductItem'
import axios from 'axios';
const Container = styled.div `
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
`
const Products = ({cate, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() =>{
        const getProducts = async () => {
            try{
                const res = await axios.get(cate ? `http://localhost:5000/api/products?category=${cate}` : "http://localhost:5000/api/products");
                setProducts(res.data);
            }catch(err){

            }
        }
        getProducts();
    },[cate]);

    useEffect(() =>{
        cate && setFilteredProducts(
            products.filter(item =>
                Object.entries(filters).every(([key,value]) =>
                    item[key].includes(value)
                )
            )
        )
    }, [products, cate, filters, sort]);

    useEffect(() =>{
        if(sort === "newest"){
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        }else if(sort === "esc"){
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        }else{
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    },[sort]);
    return (
        <Container>
            {cate ? filteredProducts.map(product =>(
                <ProductItem product={product} key={product._id}/>
            )) :  products.slice(0, 8).map(product =>(
                <ProductItem product={product} key={product._id}/>
            ))}
        </Container>
    )
}

export default Products
