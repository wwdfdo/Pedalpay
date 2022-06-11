import React from "react";
import "./Cards.css";
import { FaSnowflake } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { GiLaurelsTrophy } from "react-icons/gi";
import { SiEventstore } from "react-icons/si";

const Cards = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <FaSnowflake className="text-[#ffffff] text-6xl relative" />
        </div>

        <div className="content">
          <h2 className="font-[600] font-montserrat text-[1.8rem] my-5 ">
            Solo-Mode
          </h2>
          <p className="font-[500] font-montserrat">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <IoIosBicycle className="text-[#ffffff] text-6xl relative" />
        </div>
        <div className="content">
          <h2 className="font-[600] font-montserrat text-[1.8rem] my-5">
            Worker
          </h2>
          <p className="font-[500] font-montserrat">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <BsBriefcase className="text-[#ffffff] text-6xl relative" />
        </div>
        <div className="content">
          <h2 className="font-[600] font-montserrat text-[1.8rem] my-5">
            Rasing
          </h2>
          <p className="font-[500] font-montserrat">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <GiLaurelsTrophy className="text-[#ffffff] text-6xl relative" />
        </div>
        <div className="content">
          <h2 className="font-[600] font-montserrat text-[1.8rem] my-5">
            Events
          </h2>
          <p className="font-[500] font-montserrat">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <SiEventstore className="text-[#ffffff] text-6xl relative" />
        </div>
        <div className="content">
          <h2 className="font-[600] font-montserrat text-[1.8rem] my-5">
            Season Event
          </h2>
          <p className="font-[500] font-montserrat">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
