import React from "react";
import Header from "./Header/Header";
import ViewPort from "./ViewPort/ViewPort";
import Overview from "./Overview/Overview";
// import SlickSlider from "./Slider/SlickSlider";
// import RidingMode from "./RidingMode/RidingMode";
// import OurTeam from "./OurTeam/OurTeam";
// import TimelineRoadMap from "./TimelineRoadMap/TimelineRoadMap";
import Footer from "./Footer/FooterTwo";
import Modes2 from "./Mode2/Mode2";
import NftEconomy from "./NftEconomy/NftEconomy";
import Socialfy from "./Socialfy/Socialfy";
import NeonRoadMap from "./NeonRoadMap/NeonRoadMap";
import TokenEconomy from "./TokenEconomy/TokenEconomy";
// import CardSlider from "./CardSlider/CardSlider";
// import Modes from "./Modes/Modes";

const Body = () => {
  return (
    <div className="w-full bg-bodycolor text-white font-sans">
      <Header />
      <ViewPort />
      {/* <CardSlider /> */}
      <Overview />
      {/* <SlickSlider /> */}
      {/* <RidingMode /> */}
      {/* <OurTeam /> */}
      {/* <Modes /> */}
      <Modes2 />
      <NftEconomy />
      <Socialfy />
      <NeonRoadMap />
      <TokenEconomy />
      {/* <TimelineRoadMap /> */}

      <Footer />
    </div>
  );
};

export default Body;
