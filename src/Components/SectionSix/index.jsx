import React, { useState } from "react";
import Wrapper from "../Wrapper";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const style = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      borderWidth: "2px",
      borderRadius: "17px",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
  "& .MuiInputLabel-root": {
    color: "transaprent",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "black",
    fontWeight: "700",
  },
};

const SectionSix = () => {
  const [value, setValue] = useState();
  return (
    <div
      id="contactForm"
      style={{
        background: "linear-gradient(to top, #c8e4d3 50%, #e9fff2 50%)",
        height: "100%",
      }}
    >
      <Wrapper className={"py-20"}>
        <div className=" max-w-[942px] bg-white mx-auto rounded-[36px] p-10 ">
          <div className="text-[21px] md:text-[47px] lg:text-[47px] xl:text-[47px] font-bold lg:w-[656px] ">
            Let’s Chat
          </div>
          <div className="text-[9px] md:text-[20px] lg:text-[20px] max-w-[508px] text-[#828282]">
            Drop us a line by filling form below or email us on info
            @nyay247.com
          </div>
          <form action="https://formspree.io/f/mjkbzvvv" method="POST">
            <div className="mt-10 flex flex-col gap-4 md:gap-8 lg:gap-8 xl:gap-8">
              <div className="flex flex-col gap-4 md:gap-8 lg:gap-8 xl:gap-8 md:flex-row lg:flex-row xl:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  placeholder="Full Name"
                  name="Full name"
                  variant="outlined"
                  className="w-[100%]"
                  required
                  sx={style}
                />
                <TextField
                  id="outlined-basic"
                  label="Organization Name"
                  placeholder="Organization Name"
                  name="Organization name"
                  variant="outlined"
                  required
                  className="w-[100%]"
                  sx={style}
                />
              </div>
              <div className="flex flex-col gap-4 md:gap-8 lg:gap-8 xl:gap-8 md:flex-row lg:flex-row xl:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  required
                  placeholder="Email"
                  name="Email"
                  variant="outlined"
                  type="email"
                  className="w-[100%]"
                  sx={style}
                />
                <TextField
                  id="outlined-basic"
                  required
                  label="Phone Number"
                  name="Phone"
                  placeholder="Phone Number"
                  variant="outlined"
                  className="w-[100%]"
                  sx={style}
                />
              </div>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    "&.Mui-focused": {
                      color: "black", // Change color on focus to pink
                      fontWeight: 700, // Change color on focus to pink
                    },
                  }}
                >
                  Select Type Of Query
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  required
                  value={value}
                  label="Select Type Of Query"
                  onChange={(e) => setValue(e.target.value)}
                  className="w-[100%]" // Add your custom styles here
                  sx={{
                    borderRadius: "17px",
                    "&.MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                        borderWidth: "2px",
                        borderRadius: "17px", // Ensure fieldset has border radius
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                    ".MuiInputLabel-root": {
                      color: "black",
                    },
                    ".MuiInputLabel-root.Mui-focused": {
                      color: "black",
                    },
                  }}
                >
                  <MenuItem value={"I have a Case"}>I have a Case</MenuItem>
                  <MenuItem value={"Business Enquiry"}>Business Enquiry</MenuItem>
                  <MenuItem value={"Ongoing Dispute at Nyay 247"}>Ongoing Dispute at Nyay 247</MenuItem>
                  <MenuItem value={"Government Department Enquiry"}>Government Department Enquiry</MenuItem>
                  <MenuItem value={"Empanelment with Nyay 247"}>Empanelment with Nyay 247</MenuItem>
                  <MenuItem value={"Careers at Nyay 247"}>Careers at Nyay 247</MenuItem>
                  <MenuItem value={"Other Queries"}>Other Queries</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                label="Your message"
                name="message"
                placeholder="Your message"
                variant="outlined"
                className="w-[100%]"
                required
                sx={style}
                multiline
                rows={4}
              />
              <button
                variant="contained"
                className="h-[36px] md:h-[82px] lg:h-[82px] xl:h-[82px] text-[10px] md:text-[22px] lg:text-[22px] xl:text-[22px] tracking-widest bg-black text-white rounded-full w-[106px] md:w-[241px] lg:w-[241px] xl:w-[241px]"
                size="large"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};

export default SectionSix;
