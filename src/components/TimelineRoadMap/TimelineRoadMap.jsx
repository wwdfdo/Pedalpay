import React from "react";
import roadmapImg from "../../images/roadmapImg.png";

const TimelineRoadMap = () => {
  return (
    <div id="Roadmap" className="lg:pt-24 pt-12 bg-[#283259] drop-shadow-2xl">
      <h2 className="text-white  font-rubik font-bold text-[2.5em] text-center lg:py-0 py-32">
        Road Map
      </h2>
      <div className="mx-auto lg:pt-24 pt-20">
        <img className="w-full mx-auto" src={roadmapImg} alt="" />
      </div>
    </div>
  );
};

export default TimelineRoadMap;
