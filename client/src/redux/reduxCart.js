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
            console.log(action.payload)
            state.products.push({
                id: pseudoId,
                productId: action.payload._id,
                img: action.payload.img,
                title: action.payload.title,
                quantity: action.payload.quantity,
                color: action.payload.color,
                size: action.payload.size,
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
        }
    }
})
export const getCartItems = state => state.cart.products; 
export const getTotalPrice = state =>{
    return state.cart.products.reduce((total, product) =>{
        return product.totalPrice + total;
    },0)
}
export const { addProduct, refeshProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
