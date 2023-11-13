// this is used in the Navbar component

import { FaFirstOrder } from "react-icons/fa";
import { category } from "../data";
import { Link } from "react-router-dom";

const MobileMenu = ({ open , setOpen}) => {
  return (
    <section className={`mobile ${open && "show"}`}>
      <div className="mobCat">
        <h3>Our Categories</h3>
        { category.map( item =>{
          const {  name , category } = item
        return <div key={name} onClick={()=> setOpen(false)}>
          <h2 className="da cats">
            <FaFirstOrder />
            <Link to={`/seeAll/${name}`}
            
            >{category} </Link>
          </h2>
        </div>
        })}
       
      </div>
    </section>
  );
};

export default MobileMenu;
