import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Annountcement from '../components/Annountcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive';
import { useLocation } from 'react-router';
import { publicReq } from '../request';
import { addProduct } from '../redux/reduxCart';
import { useDispatch } from 'react-redux';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Trending from '../components/Trending';
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
    ${mobile({flexDirection: "column"})}
`
const Filter = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 20px;
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
    &:active{
        border: 1px solid black;
    }
`
const FilterSize = styled.select `
    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;
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
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(2.5);
    const [hover, setHover] = React.useState(-1);
    useEffect(() =>{
        const getProduct = async () =>{
            try{
                const res = await publicReq.get("/products/find/" + id);
                setProduct(res.data);
            }catch(err){}
        }
        getProduct();
    },[id])
    console.log(product)
    const handleQuantity = (type) =>{
        if(type==="dec"){
            quantity > 1 && setQuantity(quantity - 1);
        }else{
            setQuantity(quantity + 1);
        }
    }
    const handleClick = () =>{
        dispatch(
            addProduct({...product, quantity, color, size})
        )
    }
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      };
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
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        >
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                            setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </Box>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Kích cỡ: </FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                <FilterSizeOption selected disabled>-- Chọn --</FilterSizeOption>
                            {product.size?.map(sz => 
                                <FilterSizeOption key={sz}>{sz}</FilterSizeOption>
                            )}
                            </FilterSize>
                        </Filter>
                        <Filter>
                            <FilterTitle>Màu: </FilterTitle>
                            {product.color?.map(sc =>
                                <FilterColor color={sc.toLowerCase()} key={sc} onClick={() => setColor(sc)}/>
                            )}
                        </Filter>
                        <Filter>
                            <FilterTitle>Tồn kho: {product.productQuantity}</FilterTitle>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon onClick={() => handleQuantity("dec")}></RemoveIcon>
                            <Amount>{quantity > product.productQuantity ? setQuantity(1): quantity}</Amount>
                            <AddIcon onClick={() => handleQuantity("inc")}></AddIcon>
                        </AmountContainer>
                        <Button onClick={handleClick}>Thêm vào giỏ hàng</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Trending />
            <Footer />
        </Container>
    )
}

export default Product
