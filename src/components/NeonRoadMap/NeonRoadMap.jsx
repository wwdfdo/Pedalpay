import React from "react";
import NeonRoadMapImg from "../../images/neonroadmap3.png";

const NeonRoadMap = () => {
  return (
    <div className="w-full mt-36 relative">
      <h2 className="text-textcolor font-rubik font-bold text-center text-[2.5em] absolute left-[50%] -ml-24 mt-10">
        Road Map
      </h2>
      <img src={NeonRoadMapImg} alt="" />
    </div>
  );
};

export default NeonRoadMap;
