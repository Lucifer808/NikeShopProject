import {createSlice} from '@reduxjs/toolkit';
const orderSlice = createSlice({
    name: "order",
    initialState: { 
        orders: [],
        isFetching: false,
        error: false
    },
    reducers: {
        // Get Order
        getOrderStart: (state) =>{
            state.isFetching=true;
            state.error=false;
        },
        getOrderSuccess: (state, action) =>{
            state.isFetching=false;
            state.orders=action.payload;
        },
        getOrderFailure: (state) =>{
            state.isFetching=false;
            state.error=true;
        },
         // Delete Oder
        deleteOderStart: (state) =>{
            state.isFetching=true;
            state.error=false;
        },
        deleteOderSuccess: (state, action) =>{
            state.isFetching=false;
            state.orders.splice(
                state.orders.findIndex(item => item._id === action.payload),1
            );
        },
        deleteOderFailure: (state) =>{
            state.isFetching=false;
            state.error=true;
        },
         // Update Order
        updateOrderStart: (state) =>{
            state.isFetching=true;
            state.error=false;
        },
        updateOrderSuccess: (state, action) =>{
            state.isFetching=false;
            state.orders[
                state.orders.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.Order;
        },
        updateOrderFailure: (state) =>{
            state.isFetching=false;
            state.error=true;
        }
    }
})
export const {
    getOrderStart, 
    getOrderSuccess, 
    getOrderFailure,
    deleteOderStart,
    deleteOderSuccess,
    deleteOderFailure, 
    updateOrderStart,
    updateOrderSuccess,
    updateOrderFailure,
} = orderSlice.actions;
export default orderSlice.reducer; 