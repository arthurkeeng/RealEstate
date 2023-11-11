import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import Header from "../Components/Header";
import Categories from "../Categories/Categories";
import Category from "../Category/Category";

const Home = () => {
  const [overlay, setOverlay] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  return (
    <>
      <Header />
      <Category />
      {overlay && (
        <Overlay
          showOverlay={() => setOverlay(!overlay)}
          singleProduct={singleProduct}
        />
      )}
      <section>
        <Categories
          showOverlay={() => setOverlay(!overlay)}
          title="Agro Products"
          setProduct={setSingleProduct}
        />
      </section>
    </>
  );
};

export default Home;
