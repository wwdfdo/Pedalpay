import React from "react";
import Header from "./Header/Header";
import ViewPort from "./ViewPort/ViewPort";

const Body = () => {
  return (
    <div className="w-full bg-[#14213d] text-white font-sans">
      <Header />
      <ViewPort />
    </div>
  );
};

export default Body;
