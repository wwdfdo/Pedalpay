import React from "react";
import "./Socialfy.css";
import { IoIosBicycle } from "react-icons/io";
import { CgCommunity } from "react-icons/cg";

const Socialfy = () => {
  return (
    <div className="flex flex-col justify-center  mx-auto gap-3 mt-32 mb-20">
      <h2 className="text-textcolor font-rubik font-bold text-center text-[2.5em] pb-16">
        Social-Fi
      </h2>
      <div className="flex  w-4/6 justify-center mx-auto">
        <div class="ecosystem-item px-[10px] w-[420px] mx-auto my-[20px] ">
          <div class="ecosystem-content pt-[54px] px-[20px] pb-[60px] relative h-[100%] text-center ">
            <IoIosBicycle className="text-[#ffffff] eco-img mx-auto mb-10 text-[8rem]" />
            <p className="text-[#ffffff] text-xl px-4">Bicycle Clubs</p>
          </div>
        </div>
        <div class="ecosystem-item px-[10px] w-[420px] mx-auto my-[20px] ">
          <div class="ecosystem-content pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
            <CgCommunity className="text-[#ffffff] eco-img mx-auto mb-10 text-[8rem]" />
            <p className="text-[#ffffff] text-xl px-4">Community Programs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialfy;
