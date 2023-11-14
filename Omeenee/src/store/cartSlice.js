import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
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
      newItem.amount = newItem.amount + 1;
    },
    decrementAmount: (state, action) => {
      const id = action.payload;
      const newItem = state.cart.find((item) => item.id == id);
      newItem.amount == 1
        ? newItem.amount
        : (newItem.amount = newItem.amount - 1);
    },
    addTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.total = total;
    },
    addToCart: (state, { payload }) => {
      let product = state.cart.find(item =>  item.id == payload.id
      )
        let sizeColor = !payload.size && !payload.color && { size : 'L' , color : 'black'}
    !product && (state.cart = [...state.cart, { ...payload , ...sizeColor}])
  

      
    },
  },
});

export const {
  clearCart,
  filterCart,
  incrementAmount,
  decrementAmount,
  addTotal,
  addToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
