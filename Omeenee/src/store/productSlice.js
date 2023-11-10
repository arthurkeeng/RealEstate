import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data";

const initialState = {
  products,
};

const productSlice = createSlice({
  name: "products",
  initialState,
});

export default productSlice.reducer;
