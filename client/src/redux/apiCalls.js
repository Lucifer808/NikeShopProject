import { loginStart, loginSuccess, loginFailure } from "./reduxUser";
import { publicReq } from '../request';
export const login = async (dispatch,user) =>{
    dispatch(loginStart());
    try{
        const res = await publicReq.post('auth/login',user)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}