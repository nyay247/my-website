import React, { useState } from "react";
import F1 from "../../svgs/f1";
import F2 from "../../svgs/f2";
import F3 from "../../svgs/f3";
import Pin from "../../svgs/Pin";
import F2B from "../../svgs/f2B";
import F3B from "../../svgs/f3B";
import { useNavigate } from "react-router-dom";

const cat = [
  "Payment Related",
  "Family Related",
  "E-commerce",
  "Insurance",
  "Others",
];

const Form = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState({
    respondentName: "",
    respondentEmail: "",
    respondentPhone: "",
    respondentAddress: "",
    complaintDetails: "",
    oppositeName: "",
    oppositeEmail: "",
    oppositePhone: "",
    oppositeAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.respondentName)
        newErrors.respondentName = "Name is required";
      if (!formData.respondentEmail)
        newErrors.respondentEmail = "Email is required";
      if (!formData.respondentPhone)
        newErrors.respondentPhone = "Phone number is required";
      if (!formData.respondentAddress)
        newErrors.respondentAddress = "Address is required";
    } else if (step === 2) {
      if (!formData.complaintDetails)
        newErrors.complaintDetails = "Complaint details are required";
      if (!selected) newErrors.selected = "Category is required";
    } else if (step === 3) {
      if (!formData.oppositeName) newErrors.oppositeName = "Name is required";
      if (!formData.oppositeEmail)
        newErrors.oppositeEmail = "Email is required";
      if (!formData.oppositePhone)
        newErrors.oppositePhone = "Phone number is required";
      if (!formData.oppositeAddress)
        newErrors.oppositeAddress = "Address is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValues = new FormData(e.target);
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/common/case`,
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );
    if (res.ok) {
      setSubmitted(true);
    }
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (validateStep()) {
      if (step < 3) {
        setStep(step + 1);
      }
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="bg-[#98E5B7] rounded-full h-24 w-24 flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#006400"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Thank You!</h2>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          Your complaint has been successfully submitted.
        </p>
        <p className="text-gray-600 mb-8">
          We will review your complaint and get back to you soon.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-black p-3 md:p-4 px-6 md:px-8 font-semibold rounded-xl text-white text-sm md:text-lg"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 overflow-y-auto">
      <div className="flex flex-row justify-between w-full md:w-[535px]">
        <div className="flex items-center w-full">
          <div className="flex items-center gap-2 h-[105px] md:h-auto flex-col text-teal-600 relative">
            <div
              className={`rounded-full ${
                1 <= step ? "bg-[#98E5B7]" : "bg-[#DEF8E9]"
              } transition duration-500 ease-in-out h-[63px] md:h-[107px] flex items-center justify-center w-[63px] md:w-[107px] py-3`}
            >
              <F1 />
            </div>
            <div className="text-center text-[10px] md:text-xs uppercase text-black font-semibold">
              My Details
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 md:border-t-4 mb-9 md:mb-5 transition duration-500 ease-in-out ${
              2 <= step ? "border-teal-600" : "border-gray-300"
            }`}
          ></div>
          <div className="flex items-center gap-2 h-[105px] md:h-auto flex-col text-white relative">
            <div
              className={`rounded-full ${
                2 <= step ? "bg-[#98E5B7]" : "bg-[#DEF8E9]"
              } transition duration-500 ease-in-out h-[63px] md:h-[107px] flex items-center justify-center w-[63px] md:w-[107px] py-3`}
            >
              {2 <= step ? <F2B /> : <F2 />}
            </div>
            <div className="md:w-auto w-16 text-center text-[10px] md:text-xs uppercase text-black font-semibold">
              Complaint Details
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 md:border-t-4 mb-9 md:mb-5 transition duration-500 ease-in-out ${
              3 <= step ? "border-teal-600" : "border-gray-300"
            }`}
          ></div>
          <div className="flex items-center gap-2 h-[105px] md:h-auto flex-col text-gray-500 relative">
            <div
              className={`rounded-full ${
                3 <= step ? "bg-[#98E5B7]" : "bg-[#DEF8E9]"
              } transition duration-500 ease-in-out h-[63px] md:h-[107px] flex items-center justify-center w-[63px] md:w-[107px] py-3`}
            >
              {2 <= step ? <F3B /> : <F3 />}
            </div>
            <div className="md:w-auto w-16 text-center text-[10px] md:text-xs uppercase text-black font-semibold">
              Opposite Party
            </div>
          </div>
        </div>
      </div>
      <form method="POST" onSubmit={handleSubmit}>
        <div
          className="flex flex-col gap-5"
          style={{ display: step === 1 ? "flex" : "none" }}
        >
          <input
            required
            type="text"
            className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
            placeholder="Name*"
            name="respondentName"
            value={formData.respondentName}
            onChange={handleInputChange}
          />
          {errors.respondentName && (
            <span className="text-red-500 text-xs">
              {errors.respondentName}
            </span>
          )}
          <input
            required
            type="email"
            className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
            placeholder="Email Address*"
            name="respondentEmail"
            value={formData.respondentEmail}
            onChange={handleInputChange}
          />
          {errors.respondentEmail && (
            <span className="text-red-500 text-xs">
              {errors.respondentEmail}
            </span>
          )}
          <input
            required
            type="text"
            className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
            placeholder="Phone Number*"
            name="respondentPhone"
            value={formData.respondentPhone}
            onChange={handleInputChange}
          />
          {errors.respondentPhone && (
            <span className="text-red-500 text-xs">
              {errors.respondentPhone}
            </span>
          )}
          <input
            required
            type="text"
            className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
            placeholder="Address*"
            name="respondentAddress"
            value={formData.respondentAddress}
            onChange={handleInputChange}
          />
          {errors.respondentAddress && (
            <span className="text-red-500 text-xs">
              {errors.respondentAddress}
            </span>
          )}
        </div>
        <div
          className="flex flex-col gap-5"
          style={{ display: step === 2 ? "flex" : "none" }}
        >
          <textarea
            type="text"
            className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
            placeholder="Write down the details of your complaint here. The more details the better!*"
            rows={7}
            name="complaintDetails"
            value={formData.complaintDetails}
            onChange={handleInputChange}
          />
          {errors.complaintDetails && (
            <span className="text-red-500 text-xs">
              {errors.complaintDetails}
            </span>
          )}
          <div className="flex flex-col gap-4">
            <b className="text-xl">Choose Category</b>
            <div className="flex gap-2 flex-wrap">
              <input type="hidden" value={selected} name="Category" />
              {cat.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setSelected(item)}
                  className={`bg-[#BCE0CB] border-2 p-[9px] md:p-[17px] ${
                    selected === item
                      ? " border-[#7e9688]"
                      : "border-transparent"
                  } font-semibold rounded-full text-[#7e9688] text-xs md:text-[18px]`}
                >
                  {item}
                </button>
              ))}
            </div>
            {errors.selected && (
              <span className="text-red-500 text-xs">{errors.selected}</span>
            )}
          </div>
        </div>
        <div
          className="flex flex-col gap-5"
          style={{ display: step === 3 ? "flex" : "none" }}
        >
          <input
            type="text"
            className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
            placeholder="Name*"
            name="oppositeName"
            value={formData.oppositeName}
            onChange={handleInputChange}
          />
          {errors.oppositeName && (
            <span className="text-red-500 text-xs">{errors.oppositeName}</span>
          )}
          <input
            type="email"
            className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
            placeholder="Email Address*"
            name="oppositeEmail"
            value={formData.oppositeEmail}
            onChange={handleInputChange}
          />
          {errors.oppositeEmail && (
            <span className="text-red-500 text-xs">{errors.oppositeEmail}</span>
          )}
          <input
            type="text"
            className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
            placeholder="Phone Number*"
            name="oppositePhone"
            value={formData.oppositePhone}
            onChange={handleInputChange}
          />
          {errors.oppositePhone && (
            <span className="text-red-500 text-xs">{errors.oppositePhone}</span>
          )}
          <input
            type="text"
            className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
            placeholder="Address*"
            name="oppositeAddress"
            value={formData.oppositeAddress}
            onChange={handleInputChange}
          />
          {errors.oppositeAddress && (
            <span className="text-red-500 text-xs">
              {errors.oppositeAddress}
            </span>
          )}
        </div>
        <div className="flex mt-4 justify-between">
          <button
            type="button"
            className="bg-[#98E5B761] px-7 p-[14px] md:p-[19px] font-semibold rounded-xl text-[#8BC3A2] text-[13px] md:text-[22px]"
            onClick={() => {
              if (step === 1) {
                navigate("/book-consultation");
              } else {
                setStep(step - 1);
              }
            }}
          >
            Back
          </button>
          {step === 3 ? (
            <button
              type="submit"
              className="bg-black p-[14px] md:p-[19px] px-7 font-semibold flex rounded-xl gap-2 items-center text-white text-[13px] md:text-[22px]"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              className="bg-black p-[14px] md:p-[19px] px-7 font-semibold flex rounded-xl gap-2 items-center text-white text-[13px] md:text-[22px]"
              onClick={handleNext}
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="15"
                viewBox="0 0 39 15"
                fill="none"
              >
                <path
                  d="M1.54688 6.52979C0.99459 6.52979 0.546875 6.9775 0.546875 7.52979C0.546875 8.08207 0.99459 8.52979 1.54688 8.52979V6.52979ZM38.5274 8.23689C38.9179 7.84637 38.9179 7.2132 38.5274 6.82268L32.1635 0.458717C31.7729 0.0681931 31.1398 0.0681931 30.7492 0.458717C30.3587 0.849242 30.3587 1.48241 30.7492 1.87293L36.4061 7.52979L30.7492 13.1866C30.3587 13.5772 30.3587 14.2103 30.7492 14.6009C31.1398 14.9914 31.7729 14.9914 32.1635 14.6009L38.5274 8.23689ZM1.54688 8.52979H19.6836V6.52979H1.54688V8.52979ZM19.6836 8.52979H37.8203V6.52979H19.6836V8.52979Z"
                  fill="white"
                />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
