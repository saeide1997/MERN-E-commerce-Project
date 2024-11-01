import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const sameProduct = state.products.find(
        (e) => e._id == action.payload._id
      );
      if (sameProduct) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "این کالا در علامندی ها وجود دارد.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "با موفقیت به لیست علاقمندی اضافه شد.",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    },
    clearList: (state) => {
      state.quantity = 0;
      state.products.splice(0, state.products.length);
    },
    clearItem: (state, action) => {
      state.quantity -= 1;
      const index = state.products
        .map((e) => e._id)
        .indexOf(action.payload._id);
      state.products.splice(index, 1);
    },
  },
});

export const { addProduct, clearList, clearItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
