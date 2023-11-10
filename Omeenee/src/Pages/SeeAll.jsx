import { useState } from "react";
import Categories from "../Categories/Categories";
import Category from "../Category/Category";
import Overlay from "../Overlay/Overlay";

const SeeAll = () => {
  const [overlay, setOverlay] = useState(false);

  return (
    <>
      <Category />
      <div style={styles}>
        <h1>Agro Products</h1>
      </div>
      {overlay && <Overlay showOverlay={() => setOverlay(!overlay)} />}
      <Categories showOverlay={() => setOverlay(!overlay)} />{" "}
    </>
  );
};

export default SeeAll;

const styles = {
  width: "95%",
  marginTop: "3rem",
  paddingLeft: "2rem",
};
