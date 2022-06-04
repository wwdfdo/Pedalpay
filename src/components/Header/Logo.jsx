import React from "react";
import newlogo from "../../images/pedalslogo.png";

const Logo = ({ width, center }) => {
  return (
    <div className={`${width} ${center}`}>
      {/* <img src={logo} alt="lOGO" /> */}
      <img src={newlogo} alt="Paddle logo" />
      {/* <img src={logoTwo} alt="lOGOTWO" /> */}
    </div>
  );
};

export default Logo;
