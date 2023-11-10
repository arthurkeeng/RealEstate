import { createContext, useContext, useState } from "react";
import {
  products as storeItems,
  cart,
  announcements as storeMessages,
} from "./data";

const Products = createContext();

const ProductsProvider = ({ children }) => {
  const [items, setItems] = useState(storeItems);
  const [messages, setMessages] = useState(storeMessages);
  const [cartItems, setCartItems] = useState(cart);

  return (
    <Products.Provider
      value={{
        products: items,
        announcements: messages,
        cart: cartItems,
      }}
    >
      {children}
    </Products.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(Products);
