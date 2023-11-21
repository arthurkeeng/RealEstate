// import "./Category.css";
import img1 from "../images/japan.jpg";
import img2 from "../images/artic.jpg";
import img3 from "../images/tokyo.jpg";
import img4 from "../images/paris.jpg";
import img5 from "../images/plains.jpg";
import img6 from "../images/seychelles.jpg";
import { category } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const Category = () => {
  let { category } = useSelector((state) => state.category);

  return (
    <section className="category cat">
      {category.map((item) => {
        const { image, category, name } = item;
        return (
          <CategoryCard key={name} image={image} category={name} name={name} />
        );
      })}
    </section>
  );
};
export default Category;

const CategoryCard = ({ image, category, name }) => {
  // const [newName , setNewName] = useState(name)

  return (
    <div className="categoryCard catCard">
      <Link to={`seeAll/${name}`}>
        <img src={image} />
        <span>{category}</span>
      </Link>
    </div>
  );
};
