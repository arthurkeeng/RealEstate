import { useState } from "react";
import Categories from "../Categories/Categories";
import Category from "../Category/Category";
import Overlay from "../Overlay/Overlay";
import Announcement from "../SmallComponents/Announcement";

const SeeAll = ({category}) => {
  const [overlay, setOverlay] = useState(false);

  const [singleProduct, setSingleProduct] = useState({});
  return (
    <>
    <Announcement/>
      <div style={styles}>
        <h1>{category?.toUpperCase()}</h1>
      </div>
      {overlay && (
        <Overlay
          showOverlay={() => setOverlay(!overlay)}
          singleProduct={singleProduct}
        />
      )}
      <Categories
        showOverlay={() => setOverlay(!overlay)}
        setProduct={setSingleProduct}
        category = {category}
      />
    </>
  );
};

export default SeeAll;

const styles = {
  width: "95%",
  marginTop: "3rem",
  paddingLeft: "2rem",
};
