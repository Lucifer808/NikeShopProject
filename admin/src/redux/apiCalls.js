import { loginStart, loginSuccess, loginFailure, logoutUser } from "./reduxUser";
import { getProductStart,
        getProductSuccess, 
        getProductFailure, 
        deleteProductStart, 
        deleteProductSuccess, 
        deleteProductFailure,
        updateProductStart, 
        updateProductSuccess, 
        updateProductFailure,
        addProductStart, 
        addProductSuccess, 
        addProductFailure,
    } from "./reduxProduct";
import {
    getUserStart,
    getUserSuccess,
    getUserFailure,
    deleteUserStart, 
    deleteUserSuccess, 
    deleteUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure

} from './reduxUserData';
import {
    getOrderStart, 
    getOrderSuccess, 
    getOrderFailure, 
    updateOrderStart,
    updateOrderSuccess,
    updateOrderFailure
} from './reduxOrder';
import { publicReq, userReq } from '../request';

// Login/Logout
export const login = async (dispatch,user) =>{
    dispatch(loginStart());
    try{
        const res = await publicReq.post('auth/login',user)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}
export const logout = (dispatch, user) =>{
    dispatch(logoutUser());
}
// Product
export const getProducts = async (dispatch) =>{
    dispatch(getProductStart());
    try{
        const res = await publicReq.get('/products')
        dispatch(getProductSuccess(res.data));
    }catch(err){
        dispatch(getProductFailure());
    }
}
export const deleteProduct = async (id, dispatch) =>{
    dispatch(deleteProductStart());
    try{
        // const res = await userReq.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id));
    }catch(err){
        dispatch(deleteProductFailure());
    }
}
export const updateProduct = async (id, product, dispatch) =>{
    dispatch(updateProductStart());
    try{
        const res = await userReq.put(`/products/${id}`, product);
        dispatch(updateProductSuccess(id, product));
    }catch(err){
        dispatch(updateProductFailure());
    }
}
export const addProduct = async (product, dispatch) =>{
    dispatch(addProductStart());
    try{
        const res = await userReq.post(`/products`,product)
        dispatch(addProductSuccess(res.data));
    }catch(err){
        dispatch(addProductFailure());
    }
}
// Userdata
export const getUsersData = async (dispatch) =>{
    dispatch(getUserStart());
    try{
        const res = await userReq.get('/users');
        dispatch(getUserSuccess(res.data));
    }catch(err){
        dispatch(getUserFailure());
    }
}
export const deleteUsersData = async (id, dispatch) =>{
    dispatch(deleteUserStart());
    try{
        // const res = await userReq.delete(`/products/${id}`)
        dispatch(deleteUserSuccess(id));
    }catch(err){
        dispatch(deleteUserFailure());
    }
}
export const updateUserData = async (id, user, dispatch) =>{
    dispatch(updateUserStart());
    try{
        const res = await userReq.put(`/users/${id}`, user);
        dispatch(updateUserSuccess(id, user));
    }catch(err){
        dispatch(updateUserFailure());
    }
}
export const addUserData = async (user, dispatch) =>{
    dispatch(addUserStart());
    try{
        const res = await userReq.post(`/auth/register`,user)
        dispatch(addUserSuccess(res.data));
    }catch(err){
        dispatch(addUserFailure());
    }
}
// Order
export const getOrders = async (dispatch) =>{
    dispatch(getOrderStart());
    try{
        const res = await userReq.get('/orders')
        dispatch(getOrderSuccess(res.data));
    }catch(err){
        dispatch(getOrderFailure());
    }
}
export const updateOrder = async (id, order, dispatch) =>{
    dispatch(updateOrderStart());
    try{
        const res = await userReq.put(`/orders/${id}`, order);
        dispatch(updateOrderSuccess(id, order));
    }catch(err){
        dispatch(updateOrderFailure());
    }
}