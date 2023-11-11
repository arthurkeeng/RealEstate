import { AiOutlineClose } from "react-icons/ai";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { intoCart } from "../store/productSlice";

const Overlay = ({ showOverlay, singleProduct }) => {
  const dispatch = useDispatch();
  const { id, inCart, image, name, price, description, size, color, amount } =
    singleProduct;
  return (
    <article className="overlay">
      <div className="overlayDiv df">
        <div className="details">
          <h3
            style={{
              display: "block",
              margin: "1rem auto",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            <img src={image} />
            <p>{name}</p>
            <p>N {price}</p>
          </h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <div className="select">
        <select name="color" id="">
          {color.map((item) => {
            <option value=""></option>;
          })}
        </select>
        <select name="size" id="">
          {size.map((item) => {
            <option value=""></option>;
          })}
        </select>
        <button
          disabled={inCart}
          className="btn"
          onClick={() => {
            dispatch(addToCart({ amount, id, image, name, price }));
            dispatch(intoCart(id));
          }}
        >
          Add To Cart
        </button>
        <div className="select"></div>
        <button className="btn" onClick={showOverlay}>
          <AiOutlineClose />
        </button>
      </div>
    </article>
  );
};

export default Overlay;
