import React from "react";
import Header from "./Header/Header";
import ViewPort from "./ViewPort/ViewPort";
import Overview from "./Overview/Overview";
// import SlickSlider from "./Slider/SlickSlider";
import RidingMode from "./RidingMode/RidingMode";
import OurTeam from "./OurTeam/OurTeam";
import TimelineRoadMap from "./TimelineRoadMap/TimelineRoadMap";
import Footer from "./Footer/FooterTwo";
// import CardSlider from "./CardSlider/CardSlider";
import Modes from "./Modes/Modes";

const Body = () => {
  return (
    <div className="w-full bg-bodycolor text-white font-sans">
      <Header />
      <ViewPort />
      {/* <CardSlider /> */}
      <Overview />
      {/* <SlickSlider /> */}
      <RidingMode />
      <OurTeam />
      <Modes />
      <TimelineRoadMap />
      <Footer />
    </div>
  );
};

export default Body;
