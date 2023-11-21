import React from "react";

const WelcomePage = () => {
  return (
    <main style={style.main}>
      <div className="ab" id="wp" style={style.div}>
        <h1 style={style.h3}>Welcome to Omee-Nee</h1>
        <h4 style={style.h4}>
          Your Number One Store For Affordable Products ....
        </h4>
      </div>
    </main>
  );
};

export default WelcomePage;

const style = {
  main: {
    background: "linear-gradient(to right bottom ,limegreen, blue )",
    width: "98vw",
    height: "98vh",
  },
  div: {
    position: "absolute",
    top: "44%",
    left: "15%",
    textAlign: "center",
  },
  h3: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  h4: {
    fontSize: "1.5rem",
  },
};
