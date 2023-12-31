const Invoice = ({ cart, total, address }) => {
  return (
    <main className="cart">
      {cart.map((item, index) => {
        const { id, image, name, price, color, size, total, amount } = item;
        console.log(image);
        return (
          <div className="cartDiv df" key={id}>
            <div>
              {/* <img src={image} alt="" /> */}

              <h2>{name}</h2>
            </div>
            <div>
              <h2>N{price}</h2>
            </div>
            <div>
              <p>Quantity</p>
              <h3>{amount}</h3>
            </div>
            <div>
              <h2>color : {color}</h2>
              <h2>size : {size}</h2>
            </div>
          </div>
        );
      })}
      <h1> The total amount is {total}</h1>
      <h2>The address is {address}</h2>
    </main>
  );
};

export default Invoice;
