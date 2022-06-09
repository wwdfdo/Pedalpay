import React from "react";
import economyImg from "../../images/Neon10.png";

const NftEconomy = () => {
  return (
    <div className="flex flex-col gap-10 justify-center mx-auto w-3/5 mt-40 mb-20">
      <h2 className="text-textcolor text-6xl font-semibold text-center">
        NFT Echonomy
      </h2>
      <img src={economyImg} alt="" />
    </div>
  );
};

export default NftEconomy;
