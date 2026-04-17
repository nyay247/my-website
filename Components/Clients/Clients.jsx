import React from "react";
import Wrapper from "../Wrapper";
import Slider from "react-slick";
const cl = [
  { id: 1, src: "/image1.png" },
  { id: 2, src: "/image2.png" },
  { id: 3, src: "/image3.png" },
  { id: 4, src: "/image4.png" },
  { id: 5, src: "/image5.png" },
];
const Clients = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className="bg-[#C8E4D3]">
      {/* <Wrapper className={"px-0 "}> */}
      <div className=" py-12 relative ">
        <div className="flex h-full w-14 sm:w-[180px] top-0 -right-0 z-10 absolute bg-gradient-to-l from-[#C8E4D3] to-[#D4FAE300]"></div>
        <div className="flex h-full w-14 sm:w-[180px] -left-0 top-0 z-10 absolute bg-gradient-to-r from-[#C8E4D3] to-[#D4FAE300]"></div>
        <Slider {...settings}>
          {cl.map((item) => (
            <div>
              <div
                key={item.id}
                className="px-3 md:px-10 flex items-center h-8 lg:h-[72px] justify-center py-2 md:py-4 bg-white rounded-md md:rounded-2xl w-[95px] md:w-[90%] lg:w-[223px]"
              >
                <img
                  src={item.src}
                  alt=""
                  className="object-contain h-6 md:h-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* </Wrapper> */}
    </div>
  );
};

export default Clients;
