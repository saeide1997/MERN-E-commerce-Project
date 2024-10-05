
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
        AddUserStart :(state)=>{
            state.isFetching = true
            state.error = false
        },
        AddUserSuccess: (state, action)=>{
            console.log(action);
            state.isFetching = false
            state.users.push(action.payload) 
        },
        AddUserFailure: (state)=>{
            state.isFetching = false
            state.error = true
        }
    },


})

export const { loginStart, loginSuccess, loginFailure,
    getUserStart, getUserSuccess, getUserFailure,
    AddUserStart, AddUserSuccess, AddUserFailure  } = userSlice.actions
export default userSlice.reducer