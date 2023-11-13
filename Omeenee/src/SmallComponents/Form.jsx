//  this form would be used in several places, depending on the place, it would be rendered differently
// hence the props
import { FaSearch } from "react-icons/fa";
import "./Form.css";
import { useState } from "react";
const Form = ({ placeHolder , search}) => {
  const [val , setVal] = useState('')
  const submit = (e) =>{
    e.preventDefault()
    val !== '' && search(val)
    setVal('')
  }
  return (
    <form className="menuForm"
    onSubmit={submit}
    >
      <div>
        <input 
        value = {val}
        onChange={(e)=>setVal(e.target.value)}
        type="text" placeholder="Search By Item Name" />
        <span>
          <button type="submit"
          style={{
            outline: 'none',
            border : 'none', 
            background : 'rgba(148, 137, 137, 0.1)',
            fontSize:'1.8rem'
          }}
          >

          <FaSearch />
          </button>
        </span>
      </div>
    </form>
  );
};

export default Form;
