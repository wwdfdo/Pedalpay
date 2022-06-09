import React from "react";

import "./Mode2.css";

import { FaSnowflake } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { GiLaurelsTrophy } from "react-icons/gi";
import { SiEventstore } from "react-icons/si";

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

    <div className="flex flex-col justify-center  mx-auto gap-3 mt-32">
      <h2 className="text-textcolor font-rubik font-bold text-center text-[2.5em] pb-24">
        Echosystem Modes
      </h2>
      <div className="flex w-5/6 justify-center mx-auto">
        <div class="ecosystem-item px-[10px] w-[420px] mx-auto my-[20px] ">
          <div class="ecosystem-content pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
            <IoIosBicycle className="text-[#ffffff] mx-auto mb-10 text-8xl" />
            <p className="text-[#ffffff] text-xl px-4">Solo-Mode</p>
          </div>
        </div>
        <div class="ecosystem-item px-[10px] w-[420px] mx-auto my-[20px] ">
          <div class="ecosystem-content pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
            <BsBriefcase className="text-[#ffffff] mx-auto mb-10 text-8xl" />
            <p className="text-[#ffffff] text-xl px-4">Worker</p>
          </div>
        </div>
        <div class="ecosystem-item px-[10px] w-[420px] mx-auto my-[20px] ">
          <div class="ecosystem-content pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
            <GiLaurelsTrophy className="text-[#ffffff] mx-auto mb-10 text-8xl" />
            <p className="text-[#ffffff] text-xl px-4">Rasing</p>
          </div>
        </div>
      </div>
      <div className="flex w-3/5 justify-center mx-auto">
        <div class="ecosystem-item px-[10px] w-[420px] mx-auto my-[20px] ">
          <div class="ecosystem-content pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
            <SiEventstore className="text-[#ffffff] mx-auto mb-10 text-8xl" />
            <p className="text-[#ffffff] text-xl px-4">Events</p>
          </div>
        </div>
        <div class="ecosystem-item px-[10px] w-[420px] mx-auto my-[20px] ">
          <div class="ecosystem-content pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
            <FaSnowflake className="text-[#ffffff] mx-auto mb-10 text-8xl" />
            <p className="text-[#ffffff] text-xl px-4">Season Event</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modes2;
