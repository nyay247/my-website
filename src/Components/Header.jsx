import React, { useEffect, useRef, useState } from "react";
import Logo from "../svgs/logo";
import Wrapper from "./Wrapper";

const Header = ({ children }) => {
  const [open, setopen] = useState(false);

  const popupRef = useRef(null);

  // Close the popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setopen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);
  return (
    <Wrapper>
      <div className="flex h-[90px] w-full items-center justify-between  text-black ">
        <div className="flex gap-4 items-center">
          <div className="flex sm:hidden relative">
            <svg
              onClick={() => setopen(!open)}
              width="25"
              height="25"
              viewBox="0 0 25 25"
              className="cursor-pointer"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.6875 18.1709L14.6875 18.1709"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.6875 12.1709L20.6875 12.1709"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.6875 6.1709L10.6875 6.1709"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {open && (
              <div
                ref={popupRef}
                className=" absolute shadow-md -bottom-24 bg-white flex flex-col w-36 rounded-lg gap-3 p-4 text-base font-semibold "
              >
                <p>For Individuals</p>
                <p>For Businesses</p>
              </div>
            )}
          </div>
          <Logo />
        </div>
        {children}

        <div className="hidden sm:flex gap-10 text-base font-semibold ">
          <p>For Individuals</p>
          <p>For Businesses</p>
        </div>
        <a href="/book-consultation">
          <button className="border-2 text-xs lg:text-lg bg-[#99E5B7] text-black font-semibold border-[#0000003d] py-2 px-3 lg:py-3 lg:px-5 rounded-full">
            Book a Consultation
          </button>
        </a>
      </div>
    </Wrapper>
  );
};

export default Header;
