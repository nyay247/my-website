import React from "react";
import Wrapper from "../Wrapper";

const SectionSeven = () => {
  return (
    <div className="bg-[#C8E4D3]">
      <Wrapper className={"pt-1 pb-20 !lg:py-20 !xl:py-20"}>
        <div className="flex flex-col-reverse gap-8 items-center lg:flex-row xl:flex-row">
          <div className="flex flex-col gap-4 md:gap-8 lg:gap-8 xl:gap-8">
            <div className="text-[25px] lg:text-[57px] md:text-[40px] xl:text-[57px] font-bold max-w-[700px] leading-[31px] md:leading-[70px] lg:leading-[70px] xl:leading-[70px]">
              Commitment to Neutrality and Confidentiality
            </div>
            <div className="text-[11px] lg:text-[24px] md:text-[24px] xl:text-[24px] max-w-[641px] leading-[14px] md:leading-[29px] lg:leading-[29px] xl:leading-[29px]">
              Neutrality and confidentiality are cornerstones of our dispute
              resolution process. Our arbitrators maintain strict impartiality
              throughout the proceedings, ensuring that no party receives
              preferential treatment. Additionally, all information and
              discussions related to your case are kept strictly confidential,
              protecting the privacy of your business dealings.
            </div>
          </div>
          <img
            src="/sec7img.png"
            className="max-h-[510px] w-full max-w-[427px]"
            alt=""
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default SectionSeven;
