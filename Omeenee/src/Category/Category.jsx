// import "./Category.css";
import img1 from "../images/japan.jpg";
import img2 from "../images/artic.jpg";
import img3 from "../images/tokyo.jpg";
import img4 from "../images/paris.jpg";
import img5 from "../images/plains.jpg";
import img6 from "../images/seychelles.jpg";
const Category = () => {
  return (
    <section className="category cat">
      <CategoryCard image={img5} />
      <CategoryCard image={img6} />
      <CategoryCard image={img1} />
      <CategoryCard image={img3} />
      <CategoryCard image={img5} />
      <CategoryCard image={img6} />
      <CategoryCard image={img4} />
      <CategoryCard image={img1} />
      <CategoryCard image={img5} />
      <CategoryCard image={img2} />
    </section>
  );
};
export default Category;

const CategoryCard = ({ image }) => {
  return (
    <div className="categoryCard catCard">
      <img src={image} />
      <h3>Men's Sneakers</h3>
    </div>
  );
};
