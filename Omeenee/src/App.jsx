import "./App.css";
import "./generalSyles.css";
import "./Footer/Footer.css";
import "./Categories/Categories.css";
import "./Category/Category.css";
import "./Components/Header.css";
import "./Components/Navbar.css";
import "./Overlay/Overlay.css";
import "./Category/MobileMenu.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Category from "./Category/Category";
import Categories from "./Categories/Categories";
import Footer from "./Footer/Footer";
import Overlay from "./Overlay/Overlay";
import "./Cart/Cart.css";
import { useState } from "react";
import Cart from "./Cart/Cart";
import Home from "./Pages/Home";
import MobileMenu from "./Category/MobileMenu";
import SeeAll from "./Pages/SeeAll";
import { category } from "./data";
import Products from "./admin/Products";
const App = () => {
  return (
    <main className="appMain">
      {/* <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="seeAll" element={<SeeAll />} />
        {category.map((item) => {
          const { name } = item;
          return (
            <Route
              key={name}
              path={`seeAll/${name}`}
              element={<SeeAll category={name} />}
            />
          );
        })}
      </Routes>
      <Footer /> */}
      <Products />
    </main>
  );
};

export default App;
