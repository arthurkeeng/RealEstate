import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  filterCart,
  incrementAmount,
  decrementAmount,
} from "../store/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <main className="cart">
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => {
            const {
              id,
              image,
              productName,
              price,
              color,
              size,
              total,
              amount,
            } = item;
            return (
              <div className="cartDiv df">
                <img src={image} alt="" />
                <div>
                  <h2>{price}</h2>
                  <h2>{productName}</h2>
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
                  onClick={() => dispatch(filterCart(id))}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            );
          })}
          <div className="clear" onClick={() => dispatch(clearCart())}>
            <button className="btn ">clear cart</button>
            <Link to="/">
              <button className="btn">Go to home</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h2 className="cartDiv"> your cart is currently empty</h2>
        </>
      )}
    </main>
  );
};

export default Cart;
