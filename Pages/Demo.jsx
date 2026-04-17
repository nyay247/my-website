import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default () => {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object directly from the form element
    const formDataObj = new FormData(e.target);

    try {
      setShowAnimation(true);

      const res = await fetch("https://formspree.io/f/xbloqwpd", {
        method: "POST",
        body: formDataObj,
        mode: "no-cors",
      });
      console.log("res.status", res.status);
      if (res.status == 302 || res.status == 0 || res.ok) {
        // After animation completes, show submitted state with video
        setTimeout(() => {
          setSubmitted(true);
          setShowAnimation(false);
        }, 1500);
      } else {
        setErrors({ form: "Failed to submit. Please try again." });
        setShowAnimation(false);
      }
    } catch (error) {
      setErrors({ form: "An error occurred. Please try again." });
      setShowAnimation(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-6xl px-5 sm:px-8 lg:px-14 w-full m-auto py-14 lg:py-24 relative">
        {showAnimation && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {!submitted ? (
          <>
            <div className="text-sm md:text-base">
              This Agreement shall constitute an agreement regarding defined
              confidential and proprietary information and trade secrets,
              hereinafter referred to as "Confidential Information," relating to
              the business of Odrways Solutions Private Ltd, located at
              Bangalore in the State of Karnataka and "you" hereinafter referred
              to as the "Parties," as of the date executed, thus known as the
              "Effective Date." For purposes of this agreement Odrways Solutions
              Private Lts shall be referred to as the "Company" or the
              "Disclosing Party," andany party viewing the platform shall
              hereinafter be referred to as the "Recipient."
              <br /> It shall be incumbent upon the Recipient to strictly
              maintain the confidentiality of the Proprietary Information.
              Proprietary information may be shared amongst the Parties for use
              in scoping, estimating and completing any and all work or projects
              for the Company and its clients. <br />
              <br /> By definition herein, "Confidential Information" shall mean
              any and all technical and non- technical information provided by
              Odrways including but not limited to, any data, files, reports,
              accounts, or any proprietary information in any way related to
              products, services, processes, database, plans, methods, research,
              development, programs, software, authorship, customer lists,
              vendor lists, suppliers, marketing or advertising plans, methods,
              reports, analysis, financial or statistical information, and any
              other material related or pertaining to any business of Odrways or
              its subsidiaries, respective clients, consultants or vendors that
              may be disclosed to the Recipient herein contained within the
              terms of this Agreement.
              <br />
              <br /> The Recipient shall not in any manner or form, at any time
              disclose, reveal, unveil, divulge or release, either directly or
              indirectly, any aforementioned proprietary or confidential
              information
            </div>

            <div className="mt-4 max-w-96 m-auto">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  required
                  type="text"
                  className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
                  placeholder="Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">{errors.name}</span>
                )}
                <input
                  required
                  type="text"
                  className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
                  placeholder="Organisation*"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleInputChange}
                />
                {errors.organisation && (
                  <span className="text-red-500 text-xs">
                    {errors.organisation}
                  </span>
                )}
                <input
                  required
                  type="email"
                  className="p-3 md:p-5 text-xs md:text-lg bg-[#82C29C1c] font-semibold rounded-xl border-[3px] border-[#BCE0CB]"
                  placeholder="Email Address*"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
                {errors.form && (
                  <span className="text-red-500 text-xs text-center">
                    {errors.form}
                  </span>
                )}
                <button
                  type="submit"
                  className="bg-black m-auto mt-5 p-[14px] md:p-[19px] px-7 font-semibold flex rounded-xl gap-2 items-center text-white text-[13px] md:text-[22px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <div
            className="w-full flex flex-col items-center opacity-0 transition-opacity duration-1000"
            style={{ opacity: submitted ? 1 : 0 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
                Thank you for submitting!
              </h2>
              <p className="text-lg text-gray-700">
                Please enjoy our video presentation
              </p>
            </div>

            <div
              className="w-full max-w-3xl rounded-lg overflow-hidden shadow-xl border-4 border-green-500 transform scale-0 transition-transform duration-700"
              style={{ transform: submitted ? "scale(1)" : "scale(0)" }}
            >
              <video
                className="w-full h-auto"
                controls
                autoPlay
                src="https://nyay247.blr1.cdn.digitaloceanspaces.com/assets/3571264-sd_960_540_30fps.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
