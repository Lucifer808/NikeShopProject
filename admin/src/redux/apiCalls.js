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
} from './reduxUserData';
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