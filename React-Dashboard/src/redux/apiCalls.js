import axios from "axios"
import { loginFailure, loginStart, loginSuccess, 
    getUserStart, getUserSuccess, getUserFailure,
    addUserStart, addUserSuccess, addUserFailure,
    updateUserStart, updateUserSuccess, updateUserFailure  
 } from "./userRedux"
import {getProductFailure,getProductStart,getProductSuccess,
     deleteProductFailure,deleteProductStart,deleteProductSuccess,
     addProductStart, addProductSuccess, addProductFailure,
     updateProductStart, updateProductSuccess, updateProductFailure } from "./productRedux"
import { publicRequest, userRequest } from "../requestMethods"
import { useNavigate } from "react-router-dom";

export const login = async (dispatch, user)=>{
    dispatch(loginStart())
    try{
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))

    }catch(err){
        dispatch(loginFailure())
    }
}

export const getUser = async (dispatch)=>{
    dispatch(getUserStart())
    try{
        const res = await publicRequest.get("/users/")
        dispatch(getUserSuccess(res.data))

    }catch(err){
        dispatch(getUserFailure())
    }
}

export const addUser = async (User, dispatch)=>{
    dispatch(addUserStart())
    try{
        console.log(User);
        const res = await userRequest.post('/auth/register',User)
        dispatch(addUserSuccess(res.data))

    }catch(err){
        dispatch(addUserFailure())
    }
}

export const getProduct = async (dispatch)=>{
    dispatch(getProductStart())
    try{
        const res = await publicRequest.get("/product/products")
        dispatch(getProductSuccess(res.data))

    }catch(err){
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch)=>{
    dispatch(deleteProductStart())
    try{
        console.log(55555,id);
        const res = await userRequest.delete(`/product/${id}`)
        dispatch(deleteProductSuccess(res.data))
        

    }catch(err){
        dispatch(deleteProductFailure())
    }
}


export const updateProduct = async (id, product, dispatch)=>{
    dispatch(updateProductStart())
    try{
        const res = await userRequest.put(`/product/${id}`, product)
        dispatch(updateProductSuccess(res.data)) //id:id product:product

    }catch(err){
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (product, dispatch)=>{
    dispatch(addProductStart())
    try{
        const res = await userRequest.post(`/product/`,product)
        dispatch(addProductSuccess(res.data))

    }catch(err){
        dispatch(addProductFailure())
    }
}

export const updateUser = async (id, user, dispatch)=>{
    dispatch(updateUserStart())
    try{
        console.log('user',user);
        const res = await userRequest.put(`/users/${id}`, user)
        dispatch(updateUserSuccess(res.data)) //id:id product:product

    }catch(err){
        dispatch(updateUserFailure())
    }
}