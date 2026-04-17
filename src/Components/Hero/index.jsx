import React from "react";
import ArrowBtn from "../../svgs/CircleArrowBtn";
import Wrapper from "../Wrapper";

const Hero = () => {
  const handleClick = () => {
    const section = document.getElementById("contactForm");

    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className={"max-w-[1280px] w-full m-auto lg:h-[747px] relative px-0"}
      >
        <div className="hero-background  sm:px-8 lg:px-[60px]  h-[100%] relative gap-24 lg:gap-11 flex flex-col pt-14 ">
          <div className="flex flex-col gap-4  px-5  ">
            <div className="flex flex-col gap-2 lg:w-[500px]">
              <div className="text-[26px] sm:text-[40px] lg:text-[57px] font-extrabold lg:leading-[70px] leading-[40px]">
                Resolving Disputes, <br />
                Restoring Harmony
              </div>
              <div className="lg:text-[26px] md:text-[18px] text-[14px] font-semibold leading-[31px]">
                India ka apna ODR platform
              </div>
              <div className=" text-xs lg:text-lg font-medium ">
                We help business and individuals resolve disputes quickly,
                fairly, and completely online through Mediation, Conciliation
                and Arbitration.
              </div>
            </div>
            <div
              onClick={handleClick}
              className="
             flex gap-1 lg:gap-3 relative items-center w-fit [&>svg]:h-12 group"
            >
              <span className="w-6 absolute bg-black h-3 lg:h-5 right-12"></span>
              <button className="bg-black p-3 lg:p-5 text-[10px] lg:text-lg tracking-wider rounded-full text-white font-semibold">
                Get in touch
              </button>
              <ArrowBtn />
            </div>
          </div>
          <div className="  flex lg:flex lg:absolute bottom-0 items-end ">
            <div className="lg:h-[207px] bg-black pl-5 sm:w-8 lg:w-[60px]  h-[107px] "></div>
            <div className="flex flex-col gap-2 lg:gap-6 bg-primary py-7 hover:rounded-xl px-4 lg:px-7 lg:w-[220px] w-[100px]  h-[107px] hover:scale-110 lg:h-[207px] lg:hover:h-[247px]">
              <p className="font-semibold text-[17px] lg:text-[40px]">50L+</p>
              <p className="font-semibold text-[9px] tracking-widest lg:text-base">
                worth of disputes resolved
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:gap-6 text-white bg-black py-7  hover:rounded-xl px-4 lg:px-7 lg:w-[220px] w-[100px]  h-[107px] hover:scale-110 lg:h-[207px] lg:hover:h-[247px]">
              <p className="font-semibold text-[17px] lg:text-[40px]">1000+</p>
              <p className="font-semibold text-[9px] tracking-widest lg:text-base">
                Disputes resolved on Nyay 247
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:gap-6 bg-primary py-7  hover:rounded-xl rounded-tr-lg px-4 lg:px-7 lg:w-[220px] w-[100px]  h-[107px] hover:scale-110 lg:h-[207px] lg:hover:h-[247px]">
              <p className="font-semibold text-[17px] lg:text-[40px]">
                90 Days
              </p>
              <p className="font-semibold text-[9px] tracking-widest lg:text-base">
                90 Days
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
