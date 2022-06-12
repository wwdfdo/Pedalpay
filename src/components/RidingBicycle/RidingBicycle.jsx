import React from "react";
import "./RidingBicycle.css";

const RidingBicycle = () => {
  return (
    <div class="container">
      <div class="bicycle">
        <div class="wheel">
          <span class="pin1"></span>
          <span class="pin2"></span>
        </div>
        <div class="mainbar">
          <div class="bar0"></div>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div class="bar4"></div>
          <div class="bar5"></div>
          <div class="seat"></div>
          <div class="handle"></div>
          <div class="chain">
            <div class="inner_chain"></div>
            <span class="ring"></span>
            <span class="treddle"></span>
          </div>
        </div>
        <div class="wheel">
          <span class="pin1"></span>
          <span class="pin2"></span>
        </div>
      </div>
    </div>
  );
};

export default RidingBicycle;
