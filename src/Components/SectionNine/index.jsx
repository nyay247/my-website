import React from "react";
import Wrapper from "../Wrapper";
const cardData = [
  {
    image: "/mensImages.png",
    label: "Expert Team",
    description:
      "Our team brings extensive experience in online dispute resolution and excellence in crafting secure, scalable technology platforms.",
  },
  {
    image: "/pcImage.png",
    label: "Custom Platform",
    description:
      "Enjoy the familiarity of physical hearings with our easy-to-use platform designed for seamless virtual experiences.",
  },
  {
    image: "/designImage.png",
    label: "Flexible Services",
    description:
      "Address all your dispute resolution needs with our range of pay-per-use modular services.",
  },
  {
    image: "/singlePersonImage.png",
    label: "Dedicated Case Manager Support",
    description:
      "Our Case Managers oversee cases and hearings, allowing participants to concentrate solely on the dispute at hand.",
  },
];

const SectionNine = () => {
  return (
    <Wrapper className={"py-20 pb-0"}>
      <div className="flex flex-col md:gap-8 lg:gap-8 justify-center">
        <div className="text-[30px] font-bold m-auto w-full text-center lg:w-[862px] lg:text-[41px]">
          Why Choose NYAY 24/7
        </div>
        <div className="grid grid-cols-2 gap-4 mt-[50px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center lg:gap-8 xl:gap-8">
          {cardData?.map((m) => {
            return (
              <div
                key={m?.id}
                className="w-full max-w-[254px] h-[302px] font-bold flex flex-col items-center"
              >
                <div className="h-[92px] w-[92px] flex items-center justify-center rounded-full border-2 border-black bg-[#b7f9d1]">
                  <img src={m?.image} className="h-[46px] w-[46px]" alt="" />
                </div>
                <p className="text-[15px] text-black text-center font-extrabold md:text-[24px] lg:text-[24px] h-[60px] flex items-center justify-center mt-[20px]">
                  {m?.label}
                </p>
                <p className="w-[165px] text-[#3a403d] text-[12px] text-center font-thin md:mt-[15px] lg:mt-[15px] md:text-[14px] lg:text-[14px] md:w-[254px] lg:w-[254px] leading-[16px]">
                  {m?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionNine;
