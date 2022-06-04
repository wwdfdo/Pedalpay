import React from "react";
import timelinebg from "../../images/timelinebg.png";

const TimelineRoadMap = () => {
  return (
    <div id="Roadmap" className="pt-24 bg-[#283259] drop-shadow-2xl">
      <h2 className="text-white font-rubik font-bold lg:text-[2.5em] text-6xl text-center">
        Road Map
      </h2>
      <div className="bg-roadmapbg bg-cover bg-no-repeat mx-auto pt-64 pb-20">
        <img className="w-5/6 mx-auto" src={timelinebg} alt="" />
      </div>
    </div>
  );
};

export default TimelineRoadMap;
