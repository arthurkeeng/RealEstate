

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Invoice = ({cart , total , address}) => {
 
  return  <main className="cart">
      
          {cart.map((item, index) => {
            const { id, image, name, price, color, size, total , amount } = item;
            return  <div className="cartDiv df" key={id}>
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
                </div>
                
                
            })
        } 
        <h1> The total amount is {total}</h1>
        <h2>The address is {address}</h2>
    </main>
}


export default Invoice;

