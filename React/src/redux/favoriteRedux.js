import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
    },
    clearList: (state) => {
        state.quantity = 0;
      state.products.splice(0, state.products.length);
    },
  },
});

export const { addProduct, clearList } = favoriteSlice.actions;
export default favoriteSlice.reducer;
