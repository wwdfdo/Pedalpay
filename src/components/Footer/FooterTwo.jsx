import React from "react";
import instagram from "../../images/footer-icons/instagram.png";
import facebook from "../../images/footer-icons/facebook.png";
import twitter from "../../images/footer-icons/twitter.png";
import linkedin from "../../images/footer-icons/linkedin.png";
import whatsapp from "../../images/footer-icons/whatsapp.png";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <div className="text-textcolor flex flex-col justify-between mx-auto w-4/5 items-center pt-10">
      <Logo width={"w-[250px]"} center={"mx-auto"} />
      <div className="flex gap-5 mt-5">
        <div className="w-[31px]">
          <img src={instagram} alt="" />
        </div>
        <div className="w-[31px]">
          <img src={facebook} alt="" />
        </div>
        <div className="w-[31px]">
          <img src={twitter} alt="" />
        </div>
        <div className="w-[31px]">
          <img src={linkedin} alt="" />
        </div>
        <div className="w-[31px]">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <h2 className="text-center py-5">
        Copyright © 2022.Pedalspay All Rights Reserved.
      </h2>

      {/* <div className="flex lg:flex-row  lg:justify-between items-center lg:text-left text-center gap-8 text-white"> */}
      {/* <div className="flex flex-col">
          <h2 className="text-[#51AD6D] font-sans font-semibold mb-3">
            Contact
          </h2>
          <ul>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div> */}
      {/* <div>
          <h2 className="text-[#51AD6D] font-sans font-semibold mb-3">
            Useful Links
          </h2>
          <ul>
            <li>What Is Paddlepay?</li>
            <li>The Opportunity</li>
            <li>Team And Advisors</li>
            <li>The Technology</li>
          </ul>
        </div> */}
      {/* <div>
          <h2 className="text-[#51AD6D] font-sans font-semibold mb-3">
            Recent post
          </h2>
          <ul>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div> */}
      <div>
        {/* <div>
            <h2 className="mb-3 text-[#51AD6D] font-sans font-semibold">
              NEWSLETTER
            </h2>
            <form className="flex" action="#">
              <input
                className="border-none py-1 text-black font-semibold outline-0 w-3/5 pl-2"
                type="text"
              />
              <input
                className="bg-[#51AD6D] px-3 py-1  ml-1"
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div> */}
      </div>
    </div>
    // </div>
  );
};

export default Footer;
