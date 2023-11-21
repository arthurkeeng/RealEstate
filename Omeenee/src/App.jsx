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
import { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Home from "./Pages/Home";
import MobileMenu from "./Category/MobileMenu";
import SeeAll from "./Pages/SeeAll";
import { category } from "./data";
import Panel from "./admin/AdminPanel";
import app from "./axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "./store/productSlice";

import { setAnnouncement } from "./store/announcementSlice";
import { setCategory } from "./store/categorySlice";
import WelcomePage from "./SmallComponents/WelcomePage";

const App = () => {
  let { products } = useSelector((state) => state.products);
  let { category } = useSelector((state) => state.category);
  let { announcements } = useSelector((state) => state.announcements);

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = (async function () {
      const {
        data: { products },
      } = await app.get("/api/v1/products");
      const {
        data: { announcement },
      } = await app.get("/api/v1/announcement");
      const {
        data: { category },
      } = await app.get("/api/v1/category");

      if (products && announcement && category) {
        dispatch(setProducts(products));
        dispatch(setAnnouncement(announcement));
        dispatch(setCategory(category));
      }
    })();
  }, []);

  return (
    <>
      {products.length > 0 &&
      announcements.length > 0 &&
      category.length > 0 ? (
        <main className="appMain">
          <Navbar />

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
          <Footer />
        </main>
      ) : (
        <WelcomePage />
      )}
      {/* <Panel /> */}
    </>
  );
};

export default App;
