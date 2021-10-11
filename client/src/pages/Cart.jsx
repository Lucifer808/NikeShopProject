import React from 'react'
import styled from 'styled-components'
import Annountcement from '../components/Annountcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Container = styled.div `
`
const Wrapper = styled.div `
    padding: 20px;
    background-color: #f3f3f3;
`
const Title = styled.div `
    font-weight: 600;
    font-size: 40px;
    text-align: center;
`
const TopSide = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button `
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? '#000' : 'transparent'};
    color: ${props => props.type === 'filled' && '#fff'};
`
const TopTexts = styled.div `

`
const TopText = styled.span `
    text-decoration: underline;
    cursor: pointer;
    margin: 0 20px;
`
const BottomSide = styled.div `
    display: flex;
    justify-content: space-between;
`
const Info = styled.div `
    flex: 3;
`
const Product = styled.div `
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div `
    flex: 2;
    display: flex;
`
const Image = styled.img `
    width: 200px;
`
const Details = styled.div `
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span `

`
const ProductId = styled.span `

`
const ProductColor = styled.div `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid black;
`
const ProductSize = styled.span `

`
const PriceDetail = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
`
const ProductAmount = styled.div `
    display: flex;
    font-size: 24px;
    margin: 5px;
    padding: 10px;
`
const ProductPrice = styled.div `
    font-size: 24px;
    margin-right: 10px;
`
const Hr = styled.hr `
    background-color: #ccc;
    border: none;
    height: 1px;
`
const Summary = styled.div `
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1 `
    display: flex;
    align-items: center;
    justify-content: center;
`
const SummaryItem = styled.div `
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "600"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span ``
const SummaryItemPrice = styled.span ``
const Button = styled.button `
    width: 100%;
    background-color: #000;
    padding: 10px;
    color: #fff;
    border: none;
    cursor: pointer;
`
const Cart = () => {
    return (
        <Container>
            <Annountcement />
            <Navbar />
            <Wrapper>
                <Title>Giỏ hàng</Title>
                <TopSide>
                    <TopButton>Tiếp tục mua hàng</TopButton>
                    <TopTexts>
                        <TopText>Sản phẩm trong giỏ hàng (0)</TopText>
                        <TopText>Sản phẩm yêu thích (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Thanh toán</TopButton>
                </TopSide>
                <BottomSide>
                    <Info>
                        <Product>
                            <ProductDetail>
                            <Image src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bdc3e4b8-acaa-489a-8448-75c365dd3f12/sportswear-t-shirt-xWnS7N.png'/>
                            <Details>
                                <ProductName><b>Sản phẩm: </b>Nike Sportswear</ProductName>
                                <ProductId><b>Mã sản phẩm: </b>AT001</ProductId>
                                <ProductColor color="white"/>
                                <ProductSize><b>Kích cỡ: </b>M</ProductSize>
                            </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon></RemoveIcon>
                                    <ProductAmount>2</ProductAmount>
                                    <AddIcon></AddIcon>
                                </ProductAmountContainer>
                                <ProductPrice>1,000,000 VND</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr></Hr>
                        <Product>
                            <ProductDetail>
                            <Image src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bdc3e4b8-acaa-489a-8448-75c365dd3f12/sportswear-t-shirt-xWnS7N.png'/>
                            <Details>
                                <ProductName><b>Sản phẩm: </b>Nike Sportswear</ProductName>
                                <ProductId><b>Mã sản phẩm: </b>AT001</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size: </b>M</ProductSize>
                            </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon></RemoveIcon>
                                    <ProductAmount>2</ProductAmount>
                                    <AddIcon></AddIcon>
                                </ProductAmountContainer>
                                <ProductPrice>1,000,000 VND</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Chi tiết hóa đơn</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Tổng đơn hàng</SummaryItemText>
                            <SummaryItemPrice>2,000,000 VND</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Chi phí vận chuyển</SummaryItemText>
                            <SummaryItemPrice>30,000 VND</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Giảm giá vận chuyển</SummaryItemText>
                            <SummaryItemPrice>-20,000 VND</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText type="total">Thành tiền</SummaryItemText>
                            <SummaryItemPrice>2,010,000 VND</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Thanh toán ngay</Button>
                    </Summary>
                </BottomSide>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
