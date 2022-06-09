import React from "react";

import "./Mode2.css";

import { FaSnowflake } from "react-icons/fa";

const Modes2 = () => {
  return (
    // <div className="flex w-5/6 justify-center gap-4 mx-auto mt-20">
    //   <div className="w-1/3 text-center border-4 border-white py-40 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
    //     <FaRunning className="neon" />
    //     <p className="neon">Solo modes running/walking/biking</p>
    //   </div>
    //   <div className="w-1/3 text-center border-4 border-white py-40">
    //     <img className="mx-auto" src={mode2} alt="" />
    //     <p>Solo modes running/walking/biking</p>
    //   </div>
    //   <div className="w-1/3 text-center border-4 border-white py-40">
    //     <img className="mx-auto" src={mode3} alt="" />
    //     <p>Solo modes running/walking/biking</p>
    //   </div>
    // </div>

    <div className="flex w-5/6 mx-auto gap-6">
      <div class="ecosystem-item px-[10px] w-1/4 mx-auto my-[50px] ">
        <div class="ecosystem-content pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
          <FaSnowflake className="text-[#ffffff] mx-auto mb-10 text-8xl" />
          <p className="text-[#ffffff] text-xl px-4">Solo-Mode</p>
        </div>
      </div>
      <div class="ecosystem-item px-[10px] w-1/4 mx-auto my-[50px] ">
        <div class="ecosystem-content pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
          <FaSnowflake className="text-[#ffffff] mx-auto mb-10 text-8xl" />
          <p className="text-[#ffffff] text-xl px-4">Worker</p>
        </div>
      </div>
      <div class="ecosystem-item px-[10px] w-1/4 mx-auto my-[50px] ">
        <div class="ecosystem-content pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
          <FaSnowflake className="text-[#ffffff] mx-auto mb-10 text-8xl" />
          <p className="text-[#ffffff] text-xl px-4">Rasing</p>
        </div>
      </div>
      <div class="ecosystem-item px-[10px] w-1/4 mx-auto my-[50px] ">
        <div class="ecosystem-content pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
          <FaSnowflake className="text-[#ffffff] mx-auto mb-10 text-8xl" />
          <p className="text-[#ffffff] text-xl px-4">Events</p>
        </div>
      </div>
    </div>
  );
};

export default Modes2;
