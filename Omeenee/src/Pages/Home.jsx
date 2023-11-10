import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import Header from "../Components/Header";
import Categories from "../Categories/Categories";
import Category from "../Category/Category";

const Home = () => {
  const [overlay, setOverlay] = useState(false);
  return (
    <>
      <Header />
      <Category />
      {overlay && <Overlay showOverlay={() => setOverlay(!overlay)} />}
      <section>
        <Categories
          showOverlay={() => setOverlay(!overlay)}
          title="Agro Products"
        />
        <Categories showOverlay={() => setOverlay(!overlay)} title="Fashion" />
      </section>
    </>
  );
};

export default Home;
