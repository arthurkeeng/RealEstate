// beginning of file imports
import Form from "../SmallComponents/Form";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaCartArrowDown, FaCartPlus, FaRegUser } from "react-icons/fa";
import { useState } from "react";
import MobileMenu from "../Category/MobileMenu";
import { useSelector } from "react-redux";
//  ending of file imports
// beginning of css imports

// import "./Navbar.css";
// ending of css imports

const Navbar = () => {
  const { cart } = useSelector((store) => store.cart);
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav df ">
        <MobileMenu open={open} />
        <div className="navFirst df">
          <button onClick={() => setOpen(!open)}>
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
          <button>
            <FaRegUser />
          </button>
          <Link to="/cart">
            <button>{open ? <FaCartPlus /> : <FaCartArrowDown />}</button>
          </Link>
        </div>
        <Form />
      </nav>
    </>
  );
};

export default Navbar;
