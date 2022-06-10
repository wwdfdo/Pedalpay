import React from "react";
import NeonRoadMapImg from "../../images/neonroadmap1.png";
import NeonRoadMapImg2 from "../../images/neonroadmap2.png";

const NeonRoadMap = () => {
  return (
    <div className="w-full mb-40 mt-36">
      <h2 className="text-textcolor font-rubik font-bold text-center text-[2.5em]">
        Road Map
      </h2>
      <img src={NeonRoadMapImg} alt="" />
      <img src={NeonRoadMapImg2} alt="" />
    </div>
  );
};

export default NeonRoadMap;
