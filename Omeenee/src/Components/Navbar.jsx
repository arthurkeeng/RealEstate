// beginning of file imports
import Form from "../SmallComponents/Form";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaCartArrowDown, FaCartPlus, FaRegUser } from "react-icons/fa";
import { useState } from "react";
import MobileMenu from "../Category/MobileMenu";
import { useSelector } from "react-redux";
import Overlay from "../Overlay/Overlay";
//  ending of file imports
// beginning of css imports

// import "./Navbar.css";
// ending of css imports

const Navbar = () => {
  const [overlay, setOverlay] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const { cart } = useSelector((store) => store.cart);
  const { products } = useSelector((store) => store.products);

  const [open, setOpen] = useState(false);

  const setProduct = (product) => {
    let newProduct = products.find(
      (item) => item.name.toLowerCase() == product.toLowerCase()
    );
    setSingleProduct(newProduct);
    setOverlay(true);
  };
  return (
    <>
      <nav className="nav df ">
        <MobileMenu open={open} setOpen={setOpen} />
        <div className="navFirst df">
          <button className="button" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
          <h2 className="logo">
            <Link to="/">
              <span>Omee</span>
              <span>Nee</span>
            </Link>
          </h2>
        </div>
        <div className="navSecond df">
          <p> {cart.length} </p>
          <button className="button">
            <FaRegUser />
          </button>
          <Link to="/cart">
            <button className="button">
              {open ? <FaCartPlus /> : <FaCartArrowDown />}
            </button>
          </Link>
        </div>
        {overlay && (
          <Overlay
            showOverlay={() => setOverlay(!overlay)}
            singleProduct={singleProduct}
          />
        )}
        <Form search={(product) => setProduct(product)} />
      </nav>
    </>
  );
};

export default Navbar;
