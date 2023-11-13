import { AiOutlineClose } from "react-icons/ai";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { intoCart } from "../store/productSlice";
import { useEffect, useState } from "react";

const Overlay = ({ showOverlay, singleProduct }) => {
  const dispatch = useDispatch();
  const [sizeColor , setSizeColor] = useState({})
  if(singleProduct){

    const { id, inCart, image, name, price, description, size, color, amount } =
      singleProduct;

      const selectItem =(e) =>{
        const name = e.target.name
        setSizeColor({
         ...sizeColor ,  [name] : e.target.value
        })
      }
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
          <select name="color" 
          onClick={(e) =>selectItem(e)}>
            {color.map((item) => {
              return <option value={item} key={item}> {item}</option>;
            })}
          </select>
          <select name="size" 
           onClick={(e) =>selectItem(e)}
          >
            {size.map((item) => {
              return <option value={item} key={item}>{item}</option>;
            })}
          </select>
          <button
            disabled={inCart}
            className="btn"
            onClick={() => {
              console.log(sizeColor);
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
  }
  else{
    return       <article className="overlay"
      style={{
        height:'50%',
        top: '24%' }}
    >
   
   
      <div className="select">

        <h1
        style={{fontSize:'3.6rem',
          marginTop:'14rem',
          marginBottom : '3rem'
        }}
        >
          Sorry, No such item exists in our catalog
        </h1>
      <button className="btn" onClick={showOverlay}>
        <AiOutlineClose />
      </button>
    </div>
  </article>
  }
};

export default Overlay;
