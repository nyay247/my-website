import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Close from "../../svgs/Close";
import Plus from "../../svgs/Plus";

const Data = [
  {
    no: "01",
    q: "What is ODR, and how does it differ from traditional dispute resolution?",
    ans: "     ODR stands for Online Dispute Resolution. It leverages digital          platforms to resolve disputes efficiently, often without physical          presence. Unlike traditional methods (such as court hearings), ODR allows parties to engage remotely, saving time and costs.",
  },
  {
    no: "02",
    q: "What types of disputes can be resolved through ODR?",
    ans: "     ODR stands for Online Dispute Resolution. It leverages digital          platforms to resolve disputes efficiently, often without physical          presence. Unlike traditional methods (such as court hearings), ODR allows parties to engage remotely, saving time and costs.",
  },
  {
    no: "03",
    q: "How secure is ODR in terms of data privacy and confidentiality?",
    ans: "     ODR stands for Online Dispute Resolution. It leverages digital          platforms to resolve disputes efficiently, often without physical          presence. Unlike traditional methods (such as court hearings), ODR allows parties to engage remotely, saving time and costs.",
  },
  {
    no: "04",
    q: "Can ODR be legally binding?",
    ans: "     ODR stands for Online Dispute Resolution. It leverages digital          platforms to resolve disputes efficiently, often without physical          presence. Unlike traditional methods (such as court hearings), ODR allows parties to engage remotely, saving time and costs.",
  },
  {
    no: "05",
    q: "What are the advantages of using ODR?",
    ans: "     ODR stands for Online Dispute Resolution. It leverages digital          platforms to resolve disputes efficiently, often without physical          presence. Unlike traditional methods (such as court hearings), ODR allows parties to engage remotely, saving time and costs.",
  },
  {
    no: "06",
    q: "Is ODR suitable for cross-border disputes?",
    ans: "     ODR stands for Online Dispute Resolution. It leverages digital          platforms to resolve disputes efficiently, often without physical          presence. Unlike traditional methods (such as court hearings), ODR allows parties to engage remotely, saving time and costs.",
  },
  {
    no: "07",
    q: "How does ODR handle evidence presentation?",
    ans: "     ODR stands for Online Dispute Resolution. It leverages digital          platforms to resolve disputes efficiently, often without physical          presence. Unlike traditional methods (such as court hearings), ODR allows parties to engage remotely, saving time and costs.",
  },
  {
    no: "08",
    q: "Can ODR be used for complex legal cases?",
    ans: "     ODR stands for Online Dispute Resolution. It leverages digital          platforms to resolve disputes efficiently, often without physical          presence. Unlike traditional methods (such as court hearings), ODR allows parties to engage remotely, saving time and costs.",
  },
];

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="faq" className="w-full flex flex-col my-7 gap-7">
      <div className="text-[30px] sm:text-[40px] lg:text-[57px] font-bold text-center">
        Frequently Asked Questions
      </div>
      <div>
        {Data.map((item) => (
          <Accordion
            expanded={expanded === item.no}
            onChange={handleChange(item.no)}
            sx={{
              boxShadow: "none",
              "&.Mui-expanded": {
                margin: 0,
              },
              "&::before": {
                top: -2,
                height: "2px",
              },
            }}
          >
            <AccordionSummary
              aria-controls="panel1bh-content"
              expandIcon={expanded === item.no ? <Close /> : <Plus />}
              id="panel1bh-header"
              sx={{
                background: "#E9FFF2",
                paddingTop: "30px",
                paddingBottom: expanded === item.no ? 0 : "30px",
                paddingX: { xs: "20px", md: "40px" }, // Responsive horizontal padding
                gap: "10px",
                "&.Mui-expanded": {
                  background: "#C8E4D3",
                  margin: 0,
                },
              }}
            >
              <div className="flex items-center gap-5">
                <p
                  className="font-bold text-[30px] md:text-[34px] lg:text-[46px]"
                  fontWeight={900}
                >
                  {item.no}
                </p>
                <p className="font-semibold text-[16px] md:text-[18px] lg:text-[24px]">
                  {item.q}
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                paddingBottom: "30px",
                paddingX: { xs: "30px", md: "80px", lg: "110px" },
                fontWeight: 600,
                background: expanded === item.no ? "#C8E4D3" : "#E9FFF2",
              }}
              className="text-[16px] md:text-[18px] lg:text-[20px]"
            >
              {item.ans}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
