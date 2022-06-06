import React from "react";
import Applestore from "../../images/applestore1.png";
import Googleplay from "../../images/googleplay1.png";
// import ridebike from "../../images/viewportImgv1.png";
import viewportImg from "../../images/viewportImgv1.png";

const ViewPort = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-4/5 mx-auto gap-12 justify-between items-center pt-24">
      <div className="mt-8 w-5/6 md:w-2/5 text-white  flex flex-col gap-8 ">
        <div>
          <h1 className=" text-[3.5rem] font-bold font-opensans text-[#E0EAEC] leading-relaxed">
            Bikes Are Not a Sign of Poverty, They Are a Great{" "}
            <span className="text-[#73f59b]"> Equalizer</span>
          </h1>
        </div>
        <div>
          <p className=" text-[1.3rem] leading-relaxed font-semibold text-[#CAD1CE]">
            PedalPay is a futuristic, eco-mobility platform combining worlds of
            Game-Fi and Social-Fi into the most green mode of mobility, cycling.
          </p>
        </div>
        <div className="flex gap-6">
          <button>
            <img className=" w-[160px]" src={Applestore} alt="" />
          </button>
          <button>
            <img className=" w-[160px]" src={Googleplay} alt="" />
          </button>
        </div>
      </div>

      {/* <video className="lg:w-1/2" loop="true" autoplay="autoplay" muted>
        <source src={viewportImg} type="video/mp4"></source>
      </video> */}
      <img
        className="lg:absolute lg:right-[3%] lg:top-[17%] lg:w-1/2"
        src={viewportImg}
        alt=""
      />
    </div>
  );
};

export default ViewPort;
