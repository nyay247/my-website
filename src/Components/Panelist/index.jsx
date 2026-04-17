import React from "react";
import Wrapper from "../Wrapper";
import ControlledAccordions from "../FaQ";
const Data = [
  {
    name: "Mr. Dhanna Ram",
    role: "Speaker",
    img: "/imgs/mrdhanna.jpg",
    desc: "Retired District Judge"
  },
  {
    name: "Mr. R.K. Sharma",
    role: "CTO",
    img: "/imgs/rksharma.jpg",
    desc: "Ex. Technical Director, DOIT"
  },
  {
    name: "Mr. S.N. Sharma",
    role: "CTO",
    img: "/imgs/snsharma.jpg",
    desc: "Senior Advocate"
  },
  {
    name: "Mr. Atul Chatterjee",
    role: "CTO",
    img: "/imgs/mratul.jpg",
    desc: "Retired District Judge"
  }
];
const Panelist = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-12 items-center mb-20 pt-20">
        <div className="flex  bg-white lg:bg-transparent w-[380px] lg:w-auto items-center relative lg:px-8 rounded-[36px] lg:flex-row gap-5 lg:gap-0 flex-col">
          <img
            src="/PanelImg.png"
            alt=""
            className="visible lg:hidden px-10 absolute -top-32 min-h-64 min-w-[218px]  lg:p-0"
          />
          <img
            src="/PanelImg.png"
            alt=""
            className="px-10 invisible h-[200px] lg:hidden lg:p-0"
          />
          <img src="/PanelImg.png" alt="" className="hidden lg:block" />
          <div
            className="flex flex-col items-center lg:items-start md:p-9 p-7
           lg:p-14 bg-white gap-11 lg:gap-16 lg:pr-28 rounded-[36px] lg:rounded-none lg:rounded-br-[36px] lg:rounded-tr-[36px]"
          >
            <p className="text-[30px] text-center lg:text-start sm:text-[40px] lg:text-[57px] font-bold lg:leading-[70px] leading-[45px]">
              Resolve your <br /> Dispute today!
            </p>
            <a href="/book-consultation">
              <button className="border-2 w-fit bg-[#99E5B7] text-black font-bold border-[#0000003d] py-3 px-5 rounded-full">
                Book a Consultation
              </button>
            </a>{" "}
          </div>
        </div>
        <ControlledAccordions />
        <div className="flex flex-col gap-12 items-center ">
          <p className="text-[30px] sm:text-[40px] lg:text-[57px] font-bold text-center">
            Our Esteemed Panelist{" "}
          </p>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-10">
            {Data.map((item, i) => (
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <img src={item.img} className="w-72 md:h-72 object-cover" alt="" />
                  {/* <div className=" absolute right-0 top-0 text-white text-[8px] tracking-widest lg:text-sm font-normal md:font-medium h-[42px] w-[42px] lg:h-[72px] lg:w-[72px] bg-black rounded-full flex items-center justify-center">
                    {item.role}
                  </div> */}
                </div>
                <p className="text-xl font-bold ">{item.name}</p>
                <p className="text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Panelist;
