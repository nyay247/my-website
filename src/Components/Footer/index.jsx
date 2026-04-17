import React, { useState } from "react";
import Wrapper from "../Wrapper";
import Logo from "../../svgs/logo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Instagram, Linkdin, Twitter, Youtube } from "../../svgs";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ODR_URL } from "../../utils/constants";
const Footer = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="bg-black">
      <Wrapper className={"py-16 text-white"}>
        <div className="grid grid-cols-1  lg:gap-6  lg:grid-cols-5 flex-wrap">
          <div className="flex sm:col-span-3 md:col-auto flex-col items-center gap-8">
            <Logo color={"white"} width={"134"} height={"104"} />
            <div className="grid grid-cols-4 gap-7">
              <Instagram />
              <Youtube />
              <Linkdin />
              <Twitter />
            </div>
            <div>Phone: +91 7357598783</div>
          </div>
          <div className="hidden lg:flex"></div>
          <div className="hidden lg:flex flex-col gap-3">
            <h3 className="text-xl text-center sm:text-start font-semibold">
              Product
            </h3>
            <a href={ODR_URL}>
              <p className="text-lg text-center sm:text-start font-medium">
                ODR Login
              </p>
            </a>
            <a href="/demo">
              <p className="text-lg text-center sm:text-start font-medium">
                Demo
              </p>
            </a>
          </div>
          <div className="hidden lg:flex flex-col gap-3">
            <h3 className="text-xl text-center sm:text-start font-semibold">
              Company
            </h3>
            <p className="text-lg text-center sm:text-start font-medium">
              About
            </p>
            <p className="text-lg text-center sm:text-start font-medium">
              Public Projects
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-3">
            <h3 className="text-xl text-center sm:text-start font-semibold">
              Pages
            </h3>
            <a href="#faq">
              <p className="text-lg text-center sm:text-start font-medium">
                FAQ's
              </p>
            </a>
            <a href="/terms-and-conditions">
              <p className="text-lg text-center sm:text-start font-medium">
                Terms & Conditions
              </p>
            </a>
            <a href="privacy-policy">
              <p className="text-lg text-center sm:text-start font-medium">
                Privacy Policy
              </p>
            </a>
            <p className="text-lg text-center sm:text-start font-medium">
              Refund Policy
            </p>
            <a href="/rules-procedures">
              <p className="text-lg text-center sm:text-start font-medium">
                Rules & Procedures
              </p>
            </a>
          </div>
          <div className="lg:hidden flex flex-col mt-11 col-span-3">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{
                background: "black ",
                color: "white",
                boxShadow: "none",
                borderBottom: "2px solid gray",
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
            >
              <AccordionSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}
                className="flex justify-center w-full"
              >
                <h3 className="text-xl w-full text-center sm:text-start font-semibold">
                  Product
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <a href={ODR_URL}>
                  <p className="text-lg text-center sm:text-start font-medium">
                    ODR Login
                  </p>
                </a>
                <a href="/demo">
                  <p className="text-lg text-center sm:text-start font-medium">
                    Demo
                  </p>
                </a>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              sx={{
                background: "black ",
                color: "white",
                borderBottom: "2px solid gray",
                boxShadow: "none",
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className="flex justify-center w-full"
              >
                <h3 className="text-xl w-full text-center sm:text-start font-semibold">
                  Company
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg text-center mt-4 sm:text-start font-medium">
                  About
                </p>
                <p className="text-lg text-center mt-4 sm:text-start font-medium">
                  Public Projects
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              sx={{
                background: "black ",
                color: "white",
                boxShadow: "none",
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ fill: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className="flex justify-center w-full"
              >
                <h3 className="text-xl w-full text-center sm:text-start font-semibold">
                  Pages
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <a href="#faq">
                  <p className="text-lg text-center sm:text-start font-medium">
                    FAQ's
                  </p>
                </a>
                <a href="/terms-and-conditions">
                  <p className="text-lg text-center sm:text-start font-medium">
                    Terms & Conditions
                  </p>
                </a>
                <a href="privacy-policy">
                  <p className="text-lg text-center sm:text-start font-medium">
                    Privacy Policy
                  </p>
                </a>
                <p className="text-lg text-center sm:text-start font-medium">
                  Refund Policy
                </p>
                <a href="/rules-procedures">
                  <p className="text-lg text-center sm:text-start font-medium">
                    Rules & Procedures
                  </p>
                </a>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
