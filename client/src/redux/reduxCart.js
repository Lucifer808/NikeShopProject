import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [],
        quantity: 0,
    },
    reducers: {
        addProduct: (state, action) =>{
            const pseudoId = (new Date()).getTime();
            state.products.push({
                id: pseudoId,
                productId: action.payload._id,
                img: action.payload.img,
                title: action.payload.title,
                quantity: action.payload.quantity,
                color: action.payload.color,
                size: action.payload.size,
                price: action.payload.price,
                productQuantity: action.payload.productQuantity,
                totalPrice: action.payload.quantity * action.payload.price,
            });
            state.quantity += 1;
        },
        removeProduct: (state, action) =>{
            state.products = state.products.filter(product => product.productId !== action.payload.cartItemId);
            state.quantity -= 1;
        },
        refeshProduct: (state) =>{
            state.quantity = 0;
            state.products = [];
        },
        decreaseCart: (state, action) =>{
            const itemIndex = state.products.findIndex(
                item => item.productId === action.payload.updateProductId
            );
            if(state.products[itemIndex].quantity>1){
                state.products[itemIndex].quantity -= 1;
                state.products[itemIndex].totalPrice -= state.products[itemIndex].price; 
            }else if(state.products[itemIndex].quantity === 1){
                const nextCartItems = state.products.filter(
                    item => item.productId !== action.payload.updateProductId
                );
                state.products=nextCartItems;
                state.quantity -= 1;
            }
        },
        increaseCart: (state, action) =>{
            const itemIndex = state.products.findIndex(
                item => item.productId === action.payload.updateProductId
            );
            if(state.products[itemIndex].quantity < state.products[itemIndex].productQuantity){
                state.products[itemIndex].quantity += 1;
                state.products[itemIndex].totalPrice += state.products[itemIndex].price;
            }else{
                state.products[itemIndex].quantity = 1;
                state.products[itemIndex].totalPrice = state.products[itemIndex].price;
            }
        }
    }
})
export const getCartItems = state => state.cart.products; 
export const getTotalPrice = state =>{
    return state.cart.products.reduce((total, product) =>{
        return product?.totalPrice + total;
    },0)
}
export const { addProduct, refeshProduct, removeProduct, decreaseCart, increaseCart } = cartSlice.actions;
export default cartSlice.reducer;
