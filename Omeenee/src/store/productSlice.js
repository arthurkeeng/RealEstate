import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data";
import { filterCategories } from "../functions/repeatingFunctions";

const initialState = {
  products,
  originalProducts: products,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      let products = action.payload;
      state.products = products;
      state.originalProducts = products;
    },
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
    filterProducts: (state, { payload }) => {
      state.products = filterCategories(
        state.originalProducts,
        payload.category
      );
    },
  },
});

export const { setProducts, intoCart, outCart, filterProducts } =
  productSlice.actions;

export default productSlice.reducer;
