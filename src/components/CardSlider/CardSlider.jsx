import "./CardSlider.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { cardsArray } from "../../arrays/cardsArray";

const CardSlider = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow cursor-pointer absolute right-[36.5%] -bottom-7 z-10 text-[#73f59b] p-1 rounded-3xl bg-slate-100  hover:text-[#68edff] next text-md"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow cursor-pointer absolute -bottom-7 left-[36.5%] z-10 text-[#73f59b]  p-1 rounded-3xl bg-slate-100  hover:text-[#68edff] prev text-md"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    centerPadding: 40,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className=" lg:w-4/5 w-5/6  mx-auto pt-10">
      <div>
        <Slider {...settings}>
          {cardsArray.map((card) => (
            <div className="pr-2 pl-5">
              <div className=" bg-[#375D8A] p-3 rounded-md">
                <div className="bg-[#283259c9] rounded-t-md p-2 ">
                  {" "}
                  <img src={card.img} alt="" />
                </div>
                <div className="bg-[#73f59bc9] font-semibold font-mono rounded-b-md py-5">
                  <div>
                    <h2 className="text-md text-center pb-4">{card.name}</h2>
                  </div>
                  <div className="flex justify-around text-sm">
                    <div className="text-left">
                      <p>Creator</p>
                      <p>{card.creator}</p>
                    </div>
                    <div className="text-left">
                      <p>Current Bid</p>
                      <p>{card.bid}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;