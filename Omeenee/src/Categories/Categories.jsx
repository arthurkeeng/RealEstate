// this is used in the SeeAll component

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts, intoCart } from "../store/productSlice";
import { addToCart } from "../store/cartSlice";
import { useEffect, useState } from "react";
const Categories = ({ setProduct, title, showOverlay ,category}) => {
  const dispatch = useDispatch();

 let { products } = useSelector((state) => state.products);
  useEffect(()=>{
    dispatch(filterProducts({category}))
  } , [category])
  return (
    <section className="catSection">
      {title && <Title title={title} />}
      <article className="cat">
        {products.map((product) => {
          return (
            <CategoryCard
              key={product.id}
              showOverlay={showOverlay}
              {...product}
              setProduct={setProduct}
            />
          );
        })}
      </article>
    </section>
  );
};

export default Categories;

const Title = ({ title }) => {
  return (
    <div className="titleDiv">
      <h3>{title}</h3>
      <Link to="/seeAll"> See all</Link>
    </div>
  );
};

const CategoryCard = ({
  amount,
  id,
  image,
  name,
  price,
  showOverlay,
  setProduct,
  description,
  size,
  color,
  inCart,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="cardList">
      <div
        onClick={() => {
          showOverlay();
          setProduct({
            id,
            amount,
            image,
            name,
            price,
            description,
            size,
            color,
            inCart,
          });
        }}
      >
        <img src={image} alt="" />
        <h3>{name}</h3>
        <h3>N{price}</h3>
      </div>
      <button
        disabled={inCart}
        className="btn"
        onClick={() => {
          dispatch(addToCart({ amount, id, image, name, price }));
          dispatch(intoCart(id));
        }}
      >
        Add
      </button>
    </div>
  );
};
