import React from "react";
import "./OverviewAnimate.css";
import overviewImg from "../../images/overviewImg.png";

const OverviewAnimate = () => {
  return (
    <div id="Overview" className=" pt-[80px] pb-20">
      <div className="drop-shadow-2xl">
        <h2 className="text-[2.5em] font-500 font-montserrat font-bold text-center text-titlecolor pb-16">
          Overview
        </h2>
        <div className="flex lg:flex-row flex-col md:w-5/6 w-[90%] justify-between mx-auto items-center gap-20">
          <img className="lg:w-1/2" src={overviewImg} alt="" />
          <div className=" box w-1/2 h-[70vh] text-titlecolor  py-10 px-10 rounded-lg font-mono">
            <div className="z-10 text-[#ffffff]">
              <div>
                <h3 className="neon text-[1.45em] mb-6 font-[600] font-montserrat">
                  EXPERIENCE JUST FOR RIDER OFFER
                </h3>
              </div>
              <div>
                <p className="neon leading-loose text-semibold font-400 font-montserrat text-lg ">
                  Pedalpay is a tokenized sports application based on web3.
                  Users can purchase NFTs in the form of virtual bicycles which
                  are linked to real riding activities. By riding around, users
                  will earn our in-app token, which can either be used in-app or
                  cashed out for profit. Our goal is to push our community
                  toward a healthier lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewAnimate;
