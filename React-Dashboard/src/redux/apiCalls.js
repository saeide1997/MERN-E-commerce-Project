import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {getProductFailure,getProductStart,getProductSuccess,
     deleteProductFailure,deleteProductStart,deleteProductSuccess,
     addProductStart, addProductSuccess, addProductFailure,
     updateProductStart, updateProductSuccess, updateProductFailure } from "./productRedux"
import { publicRequest, userRequest } from "../requestMethods"
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

export const getProduct = async (dispatch)=>{
    // console.log(dispatch(getProductStart()));
    dispatch(getProductStart())
    try{
        const res = await publicRequest.get("/product/products")
        // console.log('res',res);
        // console.log('resd', dispatch(getProductSuccess(res.data)));
        dispatch(getProductSuccess(res.data))

    }catch(err){
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch)=>{
    console.log(dispatch(deleteProductStart()));
    dispatch(deleteProductStart())
    try{
        // const res = await userRequest.delete(`/product/${id}`)
        // console.log('res',id);
        dispatch(deleteProductSuccess(id))

    }catch(err){
        dispatch(deleteProductFailure())
    }
}


export const updateProduct = async (id, product, dispatch)=>{
    // console.log(dispatch(updateProductStart()));
    dispatch(updateProductStart())
    try{
        // const res = await userRequest.update(`/product/${id}`)
        // console.log('res',id);
        dispatch(updateProductSuccess({id ,product})) //id:id product:product

    }catch(err){
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (product, dispatch)=>{
    // console.log(dispatch(addProductStart()));
    dispatch(addProductStart())
    try{
        const res = await userRequest.post(`/product`,{product})
        // console.log('res',id);
        dispatch(addProductSuccess(res.data))

    }catch(err){
        dispatch(addProductFailure())
    }
}