import React from "react";
import economyImg from "../../images/nfteconomy.png";

const NftEconomy = () => {
  return (
    <div className="flex flex-col gap-10 justify-center mx-auto w-full mt-40 mb-36">
      <h2 className="text-textcolor font-rubik font-bold text-center text-[2.5em] mb-16 mt-10">
        NFT Echonomy
      </h2>
      <img src={economyImg} alt="" />
    </div>
  );
};

export default NftEconomy;
