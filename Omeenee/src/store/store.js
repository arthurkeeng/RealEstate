import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import announcementsReducer from "./announcementSlice";

import categoryReducer from "./categorySlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    announcements: announcementsReducer,
    category: categoryReducer,
  },
});
