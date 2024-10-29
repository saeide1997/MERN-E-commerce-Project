
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        //Get All
        getUserStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getUserSuccess: (state, action) => {
            state.isFetching = false
            state.users = action.payload
        },
        getUserFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        //Add User
        addUserStart :(state)=>{
            state.isFetching = true
            state.error = false
        },
        addUserSuccess: (state, action)=>{
            state.isFetching = false
            state.users.push(action.payload) 
        },
        addUserFailure: (state)=>{
            state.isFetching = false
            state.error = true
        },

        //Update
        updateUserStart :(state)=>{
            state.isFetching = true
            state.error = false
        },
        updateUserSuccess: (state, action)=>{
            state.isFetching = false
            state.users[
                state.users.findIndex(item=> item._id === action.payload.id)
            ]= action.payload.user
        },
        updateUserFailure: (state)=>{
            state.isFetching = false
            state.error = true
        },
    },


})

export const { loginStart, loginSuccess, loginFailure,
    getUserStart, getUserSuccess, getUserFailure,
    addUserStart, addUserSuccess, addUserFailure,
    updateUserStart, updateUserSuccess, updateUserFailure  } = userSlice.actions
export default userSlice.reducer