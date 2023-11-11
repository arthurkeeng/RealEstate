import { useState } from "react";
import Categories from "../Categories/Categories";
import Category from "../Category/Category";
import Overlay from "../Overlay/Overlay";

const SeeAll = () => {
  const [overlay, setOverlay] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});

  return (
    <>
      <Category />
      <div style={styles}>
        <h1>Agro Products</h1>
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
