import React from "react";
import Wrapper from "../Wrapper";

const SectionFour = () => {
  return (
    <Wrapper className={"py-20"}>
      <div className="flex flex-col gap-8 justify-center">
        <div className="text-[30px]  font-bold  m-auto w-full text-center lg:w-[700px] lg:text-[41px]">
          How Nyay 24/7 Helps Resolve <br /> Business Disputes
        </div>
        <img src="/sec4img.png" className="h-full w-[783px] m-auto" alt="" />
        <div className="text-[15px] m-auto w-full font-bold text-center lg:w-[970px] lg:text-[24px]">
          At Nyay24/7, we understand that disputes and conflicts are an
          inevitable part of running a business, especially when it comes to
          payment issues with other parties.
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionFour;
