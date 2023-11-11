import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import announcementsReducer from "./announcement";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    announcements: announcementsReducer,
  },
});
