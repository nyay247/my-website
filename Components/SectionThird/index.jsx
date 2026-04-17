import React, { useEffect } from "react";
import Wrapper from "../Wrapper";
import FileSearch from "../../svgs/FileSearch";
import Sec3Icon from "../../svgs/Sec3icon";

const SectionThird = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".expand-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          element.classList.add(element.dataset.animation);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#C8E4D3]">
      <Wrapper className={"py-20"}>
        <div className="flex flex-col gap-14 lg:gap-9">
          <div className="flex flex-col-reverse gap-12 lg:gap-4 md:flex-row justify-between">
            <div className="flex flex-col gap-5 md:w-[460px] lg:w-[560px]">
              <p className="text-[30px] text-start lg:text-start md:text-start sm:text-[40px] lg:text-[57px] font-bold">
                Shrink your legal fees, <br />
                not your wallet
              </p>
              <p className="text-xs md:text-xl lg:text-2xl text-start lg:text-start md:text-start font-semibold">
                Nyay 24/7 is building a better way for everyone to resolve
                disputes. We're reimagining access to justice as collaborative
                completely online, accessible to all.
              </p>
            </div>
            <div className="grid grid-cols-2 justify-items-center h-[250px] md:h-auto  gap-0 md:gap-5">
              <div className="h-[140px] md:h-[220px] animate-scaleUp w-[150px] md:w-[236px] bg-white rounded-[26px] flex flex-col gap-2 md:gap-9 pt-10 md:pt-16 items-center relative">
                <div className="absolute h-[46px] md:h-[92px] flex items-center justify-center w-12 md:w-[92px] rounded-full border-[4px] md:border-8 border-[#C8E4D3] bg-black -top-5 md:top-[-35px]">
                  <FileSearch />
                </div>
                <p className=" text-xs md:text-base font-medium">
                  Value of case settled
                </p>
                <p className="text-2xl md:text-[40px] font-semibold">50 Lacs</p>
              </div>
              <div className="h-[140px] md:h-[220px] animate-scaleUp self-end w-[150px] md:w-[236px] bg-white rounded-[26px] flex flex-col gap-2 md:gap-9 pt-10 md:pt-16 items-center relative">
                <div className="absolute h-[46px] md:h-[92px] flex items-center justify-center w-12 md:w-[92px] rounded-full border-[4px] md:border-8 border-[#C8E4D3] bg-black -top-5 md:top-[-35px]">
                  <Sec3Icon />
                </div>
                <p className="text-xs md:text-base font-medium">
                  Awards Passed
                </p>
                <p className="text-2xl md:text-[40px] font-semibold">250 +</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 md:flex-row  justify-between">
            <div className="card-background bg-contain lg:h-[516px] lg:w-[507px] md:w-[400px] pt-20 lg:pt-32 pl-8 text-white flex flex-col gap-4 lg:gap-6">
              <p className="text-sm lg:text-base font-medium">
                Average Time for Resolution
              </p>
              <span className=" text-2xl lg:text-4xl font-medium">
                Average{" "}
                <span className="text-[#98E5B7]">
                  45 <br /> Days
                </span>
              </span>
              <div className="grid grid-cols-3 pb-3 lg:pb-0 w-fit gap-6 lg:gap-10 h-28 lg:h-[197px] ">
                <div
                  data-animation="animate-expandFull"
                  className="expand-on-scroll w-6 lg:w-10 rounded-md lg:rounded-xl self-end  bg-[#98E5B7] "
                ></div>
                <div
                  data-animation="animate-expandThreeQuarters"
                  className="expand-on-scroll w-6 lg:w-10 rounded-md lg:rounded-xl self-end   bg-[#98E5B7] "
                ></div>
                <div
                  data-animation="animate-expandHalf"
                  className="expand-on-scroll w-6 lg:w-10 rounded-md lg:rounded-xl self-end  bg-[#98E5B7] "
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:w-1/2 lg:w-[560px] justify-center">
              <p className="text-[30px] sm:text-[40px] lg:text-[57px] font-bold  lg:leading-[70px]">
                Speedy Online Settlements Without the Wait
              </p>
              <p className="text-sm md:text-xl lg:text-2xl font-semibold">
                Nyay 24/7 is building a better way for everyone to resolve
                disputes. We're reimagining access to justice as collaborative
                completely online, accessible to all.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SectionThird;
