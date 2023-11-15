import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM  from "react-dom";
import {
  clearCart,
  filterCart,
  incrementAmount,
  decrementAmount,
  addTotal,
} from "../store/cartSlice";
import { outCart } from "../store/productSlice";
import html2pdf from 'html2pdf.js'
import { useEffect, useState } from "react";
import Invoice from "../invoice";

const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);
  const [ value , setValue ] = useState('')
  const dispatch = useDispatch();
  const submit = (e) =>{
    e.preventDefault()
    localStorage.setItem('address', value)
    const element = document.createElement('div')
    document.body.appendChild(element)
    ReactDOM.render(<Invoice cart = {cart} total ={total} address = {value}/>
, element )
// html2pdf(element)

// const options = {
//   filename : 'invoice.pdf',
//   jsPDF : {
//     encryption : {userPassword : 'keengarthur'}
//   }
// }
//     html2pdf().from(element).set(options).outputPdf().then(pdf=>{
//       const blob = new Blob([pdf], {type :'application/pdf'})
//       const link = document.createElement('a')
//       link.href = URL.createObjectURL(blob)
//       link.download = options.filename
//       link.click()
//     })

    document.body.removeChild(element)
  }
  useEffect(() => {
    dispatch(addTotal());
    const getItem = localStorage.getItem('address')
    setValue(() =>{
      return getItem ? getItem : 'Enter Address'
    
    })
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
            <form onSubmit={submit}>
              <label 
              style={
                  styles.label
              }
              htmlFor="address">Enter Address</label>
              <input 
              style={styles.input}
              type="text"  value={value}
              name="address"
              onChange={(e) => setValue(e.target.value)}
              />
              <button

            title="address cannot be blank"  
              type='submit' className="btn">Get Invoice</button>
            </form>
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

const styles = {
  label : {
     display: 'block',
    fontSize: '1.4rem',
    fontWeight: 'bold'
  },
  input : {
    padding : '5px 5px',
    marginRight : '1rem'
  }
}