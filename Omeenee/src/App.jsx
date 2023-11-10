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
const App = () => {
  const [overlay, setOverlay] = useState(true);
  return (
    <main onClick={() => setOverlay(false)}>
      <Navbar />
      {/* <MobileMenu /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/seeAll" element={<SeeAll />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
