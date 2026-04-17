import React from "react";
import Wrapper from "../Wrapper";

const SectionEight = () => {
  return (
    <Wrapper className={"py-20"}>
      <div className="flex flex-col gap-8 justify-center">
        <div className="text-[30px] lg:text-[57px] md:text-[40px] xl:text-[57px] font-bold m-auto max-w-[862px] text-center leading-[37px] md:leading-[70.57px] lg:leading-[70.57px] xl:leading-[70.57px]">
          Revolutionizing Dispute <br /> Resolution in India!
        </div>
        <div className="text-[16px] lg:text-[24px] md:text-[24px] xl:text-[24px] m-auto max-w-[917px] text-center">
          At Nyay24/7, we swiftly and cost-effectively settle your payment
          disputes, letting you focus on business growth and success.
        </div>
      </div>
      <div className="h-full pb-10 lg:h-[880px] xl:h-[880px] rounded-[44px] bg-[#c8e4d3] mt-20 lg:pb-0 xl:pb-0">
        <div className="text-[23px] lg:text-[57px] md:text-[40px] xl:text-[57px] font-extrabold m-auto max-w-[930px] text-center leading-[29px] md:leading-[70px] lg:leading-[70px] xl:leading-[70px]  pt-20">
          Don’t take our word for it.
          <br /> Hear from the Resolutionaries!
        </div>
        <div className="flex z-40  justify-items-center overflow-x-auto w-auto noscrollbar gap-[20px] my-[50px] h-[350px] lg:h-[510px] mx-[20px] ">
          {[1, 2, 3]?.map((m) => {
            return (
              <div className="w-full h-[324px] lg:h-[493px] min-w-[231px] rounded-[35px] bg-white relative border-2 border-black">
                <div className="mx-5 my-10 leading-[15px] text-[13px] md:text-[20px] lg:text-[20px] xl:text-[20px] lg:leading-[24px] max-w-[300px]">
                  Using Sama, ICICI Bank has been able to provide its customers
                  with a much quicker way to resolve disputes. ODR Is a big
                  boost to reduce the number of cases reaching court while
                  making dispute resolution accessible from anywhere for our
                  customers and resolving disputes amicably.
                </div>
                <div className="absolute h-[75px] md:h-[92px] flex items-center justify-center w-[75px] md:w-[92px] rounded-full left-[20px] bottom-[-15px] lg:h-[115px] lg:w-[115px]">
                  <img src="/cardMen.png" className="h-full w-full" alt="" />
                </div>
                <div className="absolute right-[10px] bottom-[10px] lg:bottom-[20px] w-28 lg:w-[200px]">
                  <p className="font-bold text-[13px] lg:text-[20px]">
                    Nilanjan Sinha
                  </p>
                  <p className="text-[10px] lg:text-[16px]">
                    Group General Counsel, ICICI Bank
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionEight;
