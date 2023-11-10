import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Categories = ({ title, showOverlay }) => {
  const { products } = useSelector((state) => state.products);
  return (
    <section className="catSection">
      {title && <Title title={title} />}
      <article className="cat">
        {products.map((product) => {
          const { id, incart, image, name, description, price } = product;

          return (
            <CategoryCard
              key={id}
              showOverlay={showOverlay}
              image={image}
              productName={name}
              price={price}
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

const CategoryCard = ({ image, productName, price, showOverlay }) => {
  return (
    <div className="cardList">
      <div onClick={showOverlay}>
        <img src={image} alt="" />
        <h3>{productName}</h3>
        <h3>N{price}</h3>
      </div>
      <button className="btn">Add</button>
    </div>
  );
};
