import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data";

const initialState = {
  products,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    intoCart: (state, action) => {
      let id = action.payload;

      let newItem = state.products.find((item) => item.id == id);
      newItem.inCart = true;
    },
    outCart: (state, action) => {
      let id = action.payload;
      let newItem = state.products.find((item) => item.id == id);
      newItem.inCart = false;
    },
  },
});

export const { intoCart, outCart } = productSlice.actions;

export default productSlice.reducer;
