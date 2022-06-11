import React from "react";
import economyImg from "../../images/nfteconomy1.jpg";

const NftEconomy = () => {
  return (
    <div
      id="Economy"
      className="flex flex-col gap-10 justify-center mx-auto w-full pt-[80px] pb-20"
    >
      <h2 className="text-textcolor font-[700] font-montserrat text-center text-[2.5em] mb-8 mt-10">
        NFT Economy
      </h2>
      <img src={economyImg} alt="" />
    </div>
  );
};

export default NftEconomy;
