import { loginFailure, loginStart, loginSuccess, 
    getUserStart, getUserSuccess, getUserFailure,
    addUserStart, addUserSuccess, addUserFailure,
    updateUserStart, updateUserSuccess, updateUserFailure  
 } from "./userRedux"
import {getProductFailure,getProductStart,getProductSuccess,
     deleteProductFailure,deleteProductStart,deleteProductSuccess,
     updateProductStart, updateProductSuccess, updateProductFailure } from "./productRedux"
import { publicRequest, userRequest } from "../requestMethods"
import { getOrderStart, getOrderSuccess, getOrderFailure,
    deleteOrderStart, deleteOrderSuccess, deleteOrderFailure,
    addOrderStart, addOrderSuccess, addOrderFailure,
    updateOrderStart, updateOrderSuccess, updateOrderFailure, } from './orderRedux'


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
        const res = await userRequest.post('/auth/register',User)
        dispatch(addUserSuccess(res.data))

    }catch(err){
        dispatch(addUserFailure())
    }
}


export const updateUser = async (id, user, dispatch)=>{
    dispatch(updateUserStart())
    try{
        const res = await userRequest.put(`/users/${id}`, user)
        dispatch(updateUserSuccess(res.data)) //id:id product:product
        
    }catch(err){
        dispatch(updateUserFailure())
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



export const getOrder = async (dispatch)=>{
    dispatch(getOrderStart())
    try{
        const res = await publicRequest.get("/orders/orders")
        dispatch(getOrderSuccess(res.data))

    }catch(err){
        dispatch(getOrderFailure())
    }
}

export const deleteOrder = async (id, dispatch)=>{
    dispatch(deleteOrderStart())
    try{
        console.log(55555,id);
        const res = await userRequest.delete(`/orders/${id}`)
        dispatch(deleteOrderSuccess(res.data))
        

    }catch(err){
        dispatch(deleteOrderFailure())
    }
}


export const updateOrder = async (id, order, dispatch)=>{
    dispatch(updateOrderStart())
    try{
        const res = await userRequest.put(`/orders/${id}`, order)
        dispatch(updateOrderSuccess(res.data)) //id:id order:order

    }catch(err){
        dispatch(updateOrderFailure())
    }
}

export const addOrder = async (order, dispatch)=>{
    dispatch(addOrderStart())
    try{
        const res = await userRequest.post(`/orders/`,order)
        dispatch(addOrderSuccess(res.data))

    }catch(err){
        dispatch(addOrderFailure())
    }
}