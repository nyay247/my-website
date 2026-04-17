// import React from "react";
// import Wrapper from "../Wrapper";

// const cardData = [
//   {
//     label: "Case Assessment",
//     description:
//       "We begin by thoroughly evaluating the merits of your case, gathering all necessary information and documentation from both parties.",
//   },
//   {
//     label: "Mediation Scheduling",
//     description:
//       "Our team will coordinate with all involved parties to schedule mediation sessions at a time and location convenient for everyone.",
//   },
//   {
//     label: "Evidence Presentation",
//     description:
//       "During the mediation sessions, each party will have the opportunity to present their evidence, arguments, and perspectives to the assigned arbitrator.",
//   },
//   {
//     label: "Facilitated Negotiation",
//     description:
//       "The arbitrator will facilitate negotiations between the parties, encouraging open communication and exploring potential resolutions that satisfy everyone's interests.",
//   },
//   {
//     label: "Settlement Agreement",
//     description:
//       "If a settlement is reached, the arbitrator will assist in drafting a legally binding agreement that outlines the terms and conditions agreed upon by both parties.",
//   },
// ];

// const SectionFive = () => {
//   return (
//     <Wrapper className={"py-1 !lg:py-20"}>
//       <div className="flex flex-col gap-8">
//         <div className="text-[20px] w-full font-bold lg:w-[656px] lg:text-[57px]">
//           A Structured Approach <br />
//           to Dispute Resolution
//         </div>
//         <div className="text-[15px] sm:w-[300px] lg:text-[24px] md:w-[500px] lg:w-[799px]">
//           Nyay 24/7 follows a structured and transparent approach to dispute
//           resolution, ensuring that every case is handled with the utmost
//           professionalism and integrity. Our process typically involves the
//           following steps:
//         </div>
//         <div className="grid grid-cols-1 gap-16 mt-[50px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center lg:gap-4 xl:gap-4">
//           {cardData?.map((m) => {
//             return (
//               <div
//                 key={m?.id}
//                 className="w-full max-w-[219px] h-[331px] bg-black rounded-[12px] p-4 font-bold flex flex-col relative"
//               >
//                 <div className="absolute h-[92px] flex items-center justify-center w-[92px] rounded-full border-8 border-[#e9fff2] bg-[#b7f9d1] top-[-35px]">
//                   <img
//                     src="/starSectionFive.png"
//                     className="h-[46px] w-[46px]"
//                     alt=""
//                   />
//                 </div>
//                 <p className="text-[#ffffff] text-[24px] mt-[70px]">
//                   {m?.label}
//                 </p>
//                 <p className="text-[#a7a7a7] font-thin mt-[15px] text-[14px] leading-[16px]">
//                   {m?.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default SectionFive;
import React, { useEffect } from "react";
import Wrapper from "../Wrapper";

const cardData = [
  {
    id: 1,
    label: "Case Assessment",
    description:
      "We begin by thoroughly evaluating the merits of your case, gathering all necessary information and documentation from both parties.",
  },
  {
    id: 2,
    label: "Mediation Scheduling",
    description:
      "Our team will coordinate with all involved parties to schedule mediation sessions at a time and location convenient for everyone.",
  },
  {
    id: 3,
    label: "Evidence Presentation",
    description:
      "During the mediation sessions, each party will have the opportunity to present their evidence, arguments, and perspectives to the assigned arbitrator.",
  },
  {
    id: 4,
    label: "Facilitated Negotiation",
    description:
      "The arbitrator will facilitate negotiations between the parties, encouraging open communication and exploring potential resolutions that satisfy everyone's interests.",
  },
  {
    id: 5,
    label: "Settlement Agreement",
    description:
      "If a settlement is reached, the arbitrator will assist in drafting a legally binding agreement that outlines the terms and conditions agreed upon by both parties.",
  },
];

const SectionFive = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".card");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          setTimeout(() => {
            element.classList.add("animate-fadeIn");
          }, index * 200); // Adjust the delay as needed
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
    <Wrapper className={"py-1 !lg:py-20"}>
      <div className="flex flex-col gap-8">
        <div className="text-[24px] w-full font-[900] lg:w-[656px] lg:text-[57px]">
          A Structured Approach <br />
          to Dispute Resolution
        </div>
        <div className="text-[14px] font-bold sm:w-[300px] md:text-[24px] lg:text-[24px] md:w-[500px] lg:w-[799px]">
          Nyay 24/7 follows a structured and transparent approach to dispute
          resolution, ensuring that every case is handled with the utmost
          professionalism and integrity. Our process typically involves the
          following steps:
        </div>
        <div className="gap-5 noscrollbar mt-[20px] flex  lg:gap-4 xl:gap-4 overflow-x-auto w-auto items-end h-[310px] lg:h-[380px] ">
          {cardData?.map((m) => {
            return (
              <div
                key={m?.id}
                className="card opacity-0 min-w-[180px]  lg:max-w-[219px] lg:min-w-[219px] h-[279px] lg:h-[331px] bg-black rounded-[12px] p-4 font-bold flex flex-col relative"
              >
                <div className="absolute h-[92px] flex items-center justify-center w-[92px] rounded-full border-8 border-[#e9fff2] bg-[#b7f9d1] top-[-35px]">
                  <img
                    src="/starSectionFive.png"
                    className="h-[46px] w-[46px]"
                    alt=""
                  />
                </div>
                <p className="text-[#ffffff] text-base lg:text-[24px] mt-[70px]">
                  {m?.label}
                </p>
                <p className="text-[#a7a7a7] font-thin mt-[15px]  text-[12px] lg:text-[14px] leading-[16px]">
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

export default SectionFive;
