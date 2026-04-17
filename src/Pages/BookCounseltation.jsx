import React from "react";
import Logo from "../svgs/logo";
import { useNavigate } from "react-router-dom";

const BookCounseltation = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-light-background  md:h-screen items-center justify-center m-auto flex   max-w-[1280px] md:flex-row flex-col">
      <div className="w-full md:w-1/2 flex h-full px-10 md:px-20 py-6 gap-14 flex-col">
        <Logo />
        <div className="flex flex-col gap-8">
          <div className="text-[32px] md:text-[57px] w-auto md:w-[500px]">
            <b className="font-bold ">Hello!</b> <br /> Would you like to
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-full">
              <input
                className="appearance-none border-[3px] pl-12 md:pl-16 bg-light-background border-[#BCE0CB] hover:border-[#BCE0CB] transition-colors rounded-md w-full py-[21px] md:py-7 px-9 text-[#80A58F] font-semibold text-lg md:text-2xl leading-tight focus:outline-[3px] focus:ring-[#BCE0CB] focus:border-[#BCE0CB] focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search for a case?"
              />

              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-9 md:w-9 ml-4 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-5xl ">or</div>
            <button
              onClick={() => {
                console.log(11);
                navigate("/book-consultation-form");
              }}
              className="p-5 md:p-8 z-50 text-2xl text-white w-full rounded-2xl font-semibold bg-black text-center"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
      <div className="self-end">
        <img src="./Nyay.png" alt="" className="[h-80%]" />
      </div>
    </div>
  );
};

export default BookCounseltation;
