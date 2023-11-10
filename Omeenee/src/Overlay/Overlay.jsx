import { AiOutlineClose } from "react-icons/ai";
import img1 from "../images/artic.jpg";
const Overlay = ({ showOverlay }) => {
  return (
    <article className="overlay">
      <div className="overlayDiv df">
        <div className="details">
          <h3>
            <img src={img1} alt="" />
          </h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            obcaecati consequatur expedita? Repellat suscipit temporibus
            assumenda, soluta molestiae autem adipisci nihil vero corporis
            consequu1ntur iusto atque impedit veritatis corrupti esse? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Acc usamus
            dignissimos ea rerum maiores iusto nobis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quae ex minima atque earum impedit
            doloribus dolor, accusantium temporibus. Blanditiis delectus maxime
            commodi dolorem minus amet odio et! Atque, perspiciatis veritatis.
          </p>
        </div>
      </div>
      <div className="select">
        <select name="color" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="size" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <button className="btn">Add To Cart</button>
        <div className="select"></div>
        <button className="btn" onClick={showOverlay}>
          <AiOutlineClose />
        </button>
      </div>
    </article>
  );
};

export default Overlay;
