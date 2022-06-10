import React from "react";
import NeonRoadMapImg from "../../images/neonroadmap1.png";

const NeonRoadMap = () => {
  return (
    <div className="w-full mb-40 mt-36">
      <h2 className="text-textcolor font-rubik font-bold text-center text-[2.5em] pb-16">
        Road Map
      </h2>
      <img src={NeonRoadMapImg} alt="" />
    </div>
  );
};

export default NeonRoadMap;
