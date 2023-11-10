import { FaFirstOrder } from "react-icons/fa";

const MobileMenu = ({ open }) => {
  return (
    <section className={`mobile ${open && "show"}`}>
      <div className="mobCat">
        <h3>Our Categories</h3>
        <div>
          <h2 className="da cats">
            <FaFirstOrder />
            <span>Orders </span>
          </h2>
        </div>
        <div>
          <h2 className="da cats">
            <FaFirstOrder />
            <span>Orders </span>
          </h2>
        </div>
        <div>
          <h2 className="da cats">
            <FaFirstOrder />
            <span>Orders </span>
          </h2>
        </div>
        <div>
          <h2 className="da cats">
            <FaFirstOrder />
            <span>Orders </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MobileMenu;
