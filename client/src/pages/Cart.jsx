import React, {useState, useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Annountcement from '../components/Annountcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { userReq } from '../request';
const STRIPE_PUBLISHABLE = 'pk_test_51JjQqEIORC7wUZgFvWpqFpGNokpFEGIkH0deLnBfn32ip5R0K3par2Mtwd4dKiUVqp3BZvXPrqxwR9nt0hPXBADj004XfANMBw'
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
    border-top: 0.5px solid #ccc;
    border-bottom: 0.5px solid #ccc;
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
    const [productId, setProductId] = useState();
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();
    const onToken = (token) =>{
        setStripeToken(token);
    }
    useEffect(() =>{
        const makeReq = async() =>{
            try{
                const res = await userReq.post('/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: cart.total
                });
                history.push("/success", {
                    stripeData: res.data,
                    products: cart,
                });
            }catch(err){}
        }
        stripeToken && makeReq();
    },[stripeToken, cart.total, history])
    const handleBack = () => {
        window.history.back();
    }
    const handleRemove = () => {

    }
    console.log(productId)
    return (
        <Container>
            <Annountcement />
            <Navbar />
            <Wrapper>
                <Title>Giỏ hàng</Title>
                <TopSide>
                    <TopButton onClick={handleBack}>Tiếp tục mua hàng</TopButton>
                    <TopTexts>
                    {cart.products.map(product => (
                        <TopText>Sản phẩm trong giỏ hàng ({product.quantity})</TopText>
                    ))}
                        <TopText>Sản phẩm yêu thích (0)</TopText>
                    </TopTexts>
                </TopSide>
                <BottomSide>
                    <Info>
                        {cart.products.map(product => (
                        <Product>
                            <ProductDetail>
                            <Image src={product.img}/>
                            <Details>
                                <ProductName><b>Sản phẩm: </b>{product.title}</ProductName>
                                <ProductId><b>Mã sản phẩm: </b>{product._id}</ProductId>
                                <ProductColor color={product.color}/>
                                <ProductSize><b>Kích cỡ: </b>{product.size}</ProductSize>
                            </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon style={{cursor: 'pointer'}}></RemoveIcon>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <AddIcon style={{cursor: 'pointer'}}></AddIcon>
                                </ProductAmountContainer>
                                <ProductPrice>{(product.price*product.quantity).toLocaleString()} VND</ProductPrice>
                            </PriceDetail>
                                <HighlightOffIcon style={{margin: '5px 5px', cursor: 'pointer'}} onClick={()=>setProductId(product._id)}></HighlightOffIcon>
                        </Product>))}
                        <Hr></Hr>
                    </Info>
                    <Summary>
                        <SummaryTitle>Chi tiết hóa đơn</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Tổng đơn hàng</SummaryItemText>
                            <SummaryItemPrice>{cart.total.toLocaleString()} VND</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Chi phí vận chuyển</SummaryItemText>
                            <SummaryItemPrice>30,000 VND</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Giảm giá vận chuyển</SummaryItemText>
                            <SummaryItemPrice>-30,000 VND</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText type="total">Thành tiền</SummaryItemText>
                            <SummaryItemPrice>{cart.total.toLocaleString()} VND</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="NikeShop"
                            image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD////7+/v5+fkEBAT29vbZ2dnk5OTg4ODMzMwUFBQICAiTk5Ps7Ow/Pz+Li4ssLCzGxsaxsbFHR0dOTk6fn59dXV0vLy9zc3OkpKTp6em9vb3T09Nra2uEhIS/v782NjYjIyN5eXmYmJhTU1MlJSUbGxtkZGS0tLTvzmKAAAAFUklEQVR4nO3a2ZaiMBAG4CyERUHaXdxHbfX9n3CyoKKCYhsQz/m/uemZaUOKVFIJQggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANEOr/ekeVMhxHNJafLoXdxz5R/r3z0pbJFlbaMe+/nI5aL3fjAxwuH2/Gdv2k6ObDKxMHofEUws3ygpHZybZ74Yu80Jra8OGhibnG6G1C7sRpd0DIbZ6NeLer52W3tdZzjxO6TQZkPOAvskh/Skd2mjpjS6YSH4mPVcwSqkf/xBr4yfb9ano2GrsD0wgzm7rCsoYo6w7snuB1pyxld0mX7UfxIGgOjw67am7bW9RkIk+o4x+pNo7ZqHsy4knI2OcM8ZNelq9ChnKAIXlVkv7WSQyNTnTEVLenVRQsyYyN+isxlJxudJuOJepqXJTh8gTu+mpL9YmI8GYoBurzT66YrpqtvpxoNZMTQXI/GUl1yNjTzbOxLqK1ou004lHTyHKWdJVC4Gd4pclG1ypHGG+7ZaLjVXF01Gdh1CunoNzh2zbyulNq68Vac/bu2FgJp4OjJuf0tWzguhkToyouZ1JDQtNPwwifgruNP0oCywX96y23Muoi0gVLzROZ3n01KBxwVg2xijZkSqm39ksvZesivvoOKbnnUnicppZV/QVVXX3Qxtn90eWp9vJdhVdYT8yFe+WKe7tSiZfxjgyKUpZNdtuWfEipus5uwtRJH1SaXrKSeiQ7uWCA3sNm07LiRfljJ3ZfHI33tu7YLFJZlZYnYdrvdXMHTpd3IODzasVa3vnqc/traWtQ7rV5IznhUejXnpyr3YGqvxPsmtb793WtEHYjVg2nMy800PKXOtHo+I+daJMErH5n1s6/dCJV9PciXeafozyoL5DqOzXkV+y6N2dt9xq+lyPWk5mXtKzT6quDhcO6YvrdSB8eeVOf//f6GqrmROc3jb58S+puDrc6N30I3r19qrfduRWcyoeRJfmJ+8uan/aPL7ZaDA5iC9aL2e+OpcLkV8WzoRZPSuIopDMleSuG2L3PIec01ZzfEj8h1Gl+UnV3vMzXxZMb/onU8n9KTdN0on3PEB1xg0mpObhSy1upw6TuTb/fdqX9iCc6zMeK9ixXEmPRnUEdCe4GwL1d7ejt6v30lPQ5ng79PlDZx6c+fG45qgy9jwvyRiN4qJPtBY9nxVtNe8ilL81/+z3ycvcnqmy5S3vb/z4MHTNIYjyUrOv5uKeZ/Wod93toqOP3u3f9W4yXLlR5n+fjZ568OKHNe09i7W8J/0Ukef5vjcVZcYs+0lZGit5LP+qft5zhUyA7LzSMlpq5l0+a9Kzzs1Zrk2ZYvYiNVH9uCnv4wztxyfkyf1TxT1H4ULzd1FPFfemDCGZWwuMq+dKssbUdXIvy7UWoV6H5hU+lv8jexFSFtV/NCrBRoRMPUrjftiYl3Cu2IhQf2s0aczScmNuoxyeivung8nVe6vi602OH6rH8lU/1v2z8J0I1Zf+urg32ejFDfW16Pi5k3tpj88WxYOni/sHT+7l/Wljqp4cNj49T34fHp+KRMcmFvcC21LPI06Dp0+MDTi5v8R9Ya0xxb0BJ/fS1BF8UDpPmXosX/ErIZVYCPY8SPNCXUP3no/J4ZhET0LUxSGa6bflv2z4iNluHbzCrU367yJYrslXxpcaz/K/fTBfaYog/uS77TbIkRkF/C5E/TrydLX5iq3LQ+ahZifxb756F/4sNu8PfW1y3upMtquu0dtuRt9V1yHlXP30vUsnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEj/AR68M+brjWd8AAAAAElFTkSuQmCC"
                            billingAddress
                            shippingAddress
                            description={`Tổng giá trị đơn hàng $${(cart.total/24.000).toLocaleString()}`}
                            amount={(cart.total/24.000)*100}
                            token={onToken}
                            stripeKey={STRIPE_PUBLISHABLE}
                        >
                        <Button>Thanh toán ngay</Button>
                        </StripeCheckout>
                    </Summary>
                </BottomSide>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
