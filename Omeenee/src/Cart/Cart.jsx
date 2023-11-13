import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  filterCart,
  incrementAmount,
  decrementAmount,
  addTotal,
} from "../store/cartSlice";
import { outCart } from "../store/productSlice";

import { useEffect } from "react";

const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTotal());
  }, [cart]);
  return (
    <main className="cart">
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => {
            const { id, image, name, price, color, size, total, amount } = item;
            return (
              <div className="cartDiv df" key={id}>
                <div>
                  <img src={image} alt="" />
                  
                  <h2>{name}</h2>
                  </div>
                <div>
                  <h2>N{price}</h2>
                </div>
                <div>
                  <h2>{color}</h2>
                  <h2>{size}</h2>
                </div>

                <h3 className="buttons">
                  <button
                    className="btn"
                    onClick={() => dispatch(incrementAmount(id))}
                  >
                    <AiOutlinePlus />
                  </button>
                  <span> {amount} </span>
                  <button
                    className="btn"
                    onClick={() => dispatch(decrementAmount(id))}
                  >
                    <AiOutlineMinus />
                  </button>
                </h3>
                <button
                  className="btn"
                  onClick={() => {
                    dispatch(filterCart(id));
                    dispatch(outCart(id));
                  }}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            ); 
          })}
          <div>
            <h3 className="cartDiv alignBig">Total : {total}</h3>
          </div>
          <div className="clear" >
            <button className="btn " onClick={() => dispatch(clearCart())}>clear cart</button>
            <Link to="/">
              <button className="btn">Go to home</button>
            </Link>
          </div>
          <div className="clear">
          <Link to="/">
              <button className="btn">Get Invoice</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h2 className="cartDiv alignBig"> your cart is currently empty</h2>
        </>
      )}
    </main>
  );
};

export default Cart;
