//  this form would be used in several places, depending on the place, it would be rendered differently
// hence the props
import { FaSearch } from "react-icons/fa";
import "./Form.css";
const Form = ({ placeHolder }) => {
  return (
    <form className="menuForm">
      <div>
        <span>
          <FaSearch />
        </span>
        <input type="text" placeholder="Search By Categories , Name , Brand" />
      </div>
    </form>
  );
};

export default Form;
