import React from "react";
import Wrapper from "../Wrapper";

const SectionTwo = () => {
  return (
    <Wrapper className={"py-14 lg:py-24"}>
      <div className="flex flex-col items-center  lg:flex-row gap-10 lg:gap-24 lg:h-[500px]">
        <div className="h-96 lg:h-full min-w-[286px] w-[310px] lg:w-[430px] relative">
          <img
            src="/Round.png"
            className=" absolute top-0 -right-3 animate-spin-slow sm:h-[120px] sm:w-[120px] h-[90px] w-[90px]"
            alt=""
          />
          <img src="/sec2img.png" className="h-full w-[430px]" alt="" />
        </div>
        <div className="flex flex-col gap-8 max-w-[600px]">
          <div className="text-[26px] lg:text-[41px] leading-[34px]  lg:leading-[45px] font-bold">
            How Nyay 24/7 Helps Resolve Business Disputes
          </div>

          <div className="text-base lg:text-[24px] ">
            At Nyay24/7, we understand that disputes and conflicts are an
            inevitable part of running a business, especially when it comes to
            payment issues with other parties.{" "}
          </div>
          <div className="text-base lg:text-[24px] ">
            Our mission is to provide efficient and impartial resolution
            services to small and medium enterprises in India, helping them
            navigate complex commercial disagreements with minimal disruption to
            their operations.
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionTwo;
