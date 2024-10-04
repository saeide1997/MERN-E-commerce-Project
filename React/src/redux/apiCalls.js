import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest } from "../requestMethods"
import { useNavigate } from "react-router-dom";

export const login = async (dispatch, user)=>{
    // console.log(dispatch(loginStart()));
    dispatch(loginStart())
    try{
        const res = await publicRequest.post("/auth/login", user)
        // console.log('res',res);
        // console.log('resd', dispatch(loginSuccess(res.data)));
        dispatch(loginSuccess(res.data))

    }catch(err){
        dispatch(loginFailure())
    }
}