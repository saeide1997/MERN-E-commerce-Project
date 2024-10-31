import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        discount: 0,
        quantity: 0,
        total:0 
    },
    reducers:{
        addProduct:(state, action)=>{
            state.quantity += 1
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
        },
        clearList: (state) => {
            state.splice(0, state.length);
          }
    }
})

export const {addProduct, clearList} = cartSlice.actions
export default cartSlice.reducer