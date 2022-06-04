import React from "react";
import Header from "./Header/Header";
import ViewPort from "./ViewPort/ViewPort";
import Overview from "./Overview/Overview";
import SlickSlider from "./Slider/SlickSlider";
import RidingMode from "./RidingMode/RidingMode";
import OurTeam from "./OurTeam/OurTeam";
import TimelineRoadMap from "./TimelineRoadMap/TimelineRoadMap";
import Footer from "./Footer/FooterTwo";

const Body = () => {
  return (
    <div className="w-full bg-[#344174] text-white font-sans">
      <Header />
      <ViewPort />
      <Overview />
      <SlickSlider />
      <RidingMode />
      <OurTeam />
      <TimelineRoadMap />
      <Footer />
    </div>
  );
};

export default Body;
