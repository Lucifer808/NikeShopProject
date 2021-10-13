import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Annountcement from '../components/Annountcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from '../responsive';
import {useLocation} from 'react-router';
import {publicReq} from '../request';
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
    border: 0.5px solid #ccc;
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
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    useEffect(() =>{
        const getProduct = async () =>{
            try{
                const res = await publicReq.get("/products/find/" + id);
                setProduct(res.data);
            }catch(err){}
        }
        getProduct();
    },[id])
    const handleQuantity = (type) =>{
        if(type==="dec"){
            quantity > 1 && setQuantity(quantity - 1);
        }else{
            setQuantity(quantity + 1);
        }
    }
    return (
        <Container>
            <Annountcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>{product.desc}</Description>
                    <Price>{product.price?.toLocaleString()} VND</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Màu: </FilterTitle>
                            {product.color?.map(sc =>
                                <FilterColor color={sc.toLowerCase()} key={sc} onClick={() => setColor(sc)}/>
                            )}
                        </Filter>
                        <Filter>
                            <FilterTitle>Kích cỡ: </FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                            {product.size?.map(sz => 
                                <FilterSizeOption>{sz}</FilterSizeOption>
                            )}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon onClick={() => handleQuantity("dec")}></RemoveIcon>
                            <Amount>{quantity}</Amount>
                            <AddIcon onClick={() => handleQuantity("inc")}></AddIcon>
                        </AmountContainer>
                        <Button onClick={handleClick}>Thêm vào giỏ hàng</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Product
