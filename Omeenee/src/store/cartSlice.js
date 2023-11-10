import { createSlice } from "@reduxjs/toolkit";
import { cart } from "../data";
const initialState = {
  cart,
  amount: 1,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },
    filterCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id != id);
    },
    incrementAmount: (state, action) => {
      const id = action.payload;
      const newItem = state.cart.find((item) => item.id == id);
      // console.log(newItem);
      newItem.amount = newItem.amount + 1;
    },
    decrementAmount: (state, action) => {
      const id = action.payload;
      const newItem = state.cart.find((item) => item.id == id);
      newItem.amount == 1
        ? newItem.amount
        : (newItem.amount = newItem.amount - 1);
    },
  },
});

export const { clearCart, filterCart, incrementAmount, decrementAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
