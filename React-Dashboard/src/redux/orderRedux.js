import { createSlice } from '@reduxjs/toolkit'

const orderslice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        isFetching: false,
        error: false
    },
    reducers: {
        //Get All

        getOrderStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getOrderSuccess: (state, action) => {
            state.isFetching = false
            state.orders = action.payload
        },
        getOrderFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        //Delete 
        deleteOrderStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        deleteOrderSuccess: (state, action) => {
            state.isFetching = false
            state.orders.splice(
                state.orders.findIndex(item => item._id === action.payload),
                1
            )
        },
        deleteOrderFailure: (state) => {
            state.isFetching = false
            state.error = true
        },


        //Update 
        updateOrderStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        updateOrderSuccess: (state, action) => {
            state.isFetching = false
            state.orders[
                state.orders.findIndex(item => item._id === action.payload.id)
            ] = action.payload.product
        },
        updateOrderFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        //Add
        addOrderStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        addOrderSuccess: (state, action) => {
            state.isFetching = false
            state.orders.push(action.payload)
        },
        addOrderFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    },

})

export const { getOrderStart, getOrderSuccess, getOrderFailure,
    deleteOrderStart, deleteOrderSuccess, deleteOrderFailure,
    addOrderStart, addOrderSuccess, addOrderFailure,
    updateOrderStart, updateOrderSuccess, updateOrderFailure, } = orderslice.actions
export default orderslice.reducer