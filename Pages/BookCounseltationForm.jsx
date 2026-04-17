import React from "react";
import Logo from "../svgs/logo";
import Form from "../Components/Form";

const BookCounseltationForm = () => {
  return (
    <div className=" bg-[#98E5B7] md:bg-gradient-to-r from-[#98E5B7] from-46%  to-[#E9FFF2] to-46%">
      <div className="  h-screen items-start justify-start m-auto flex flex-col md:flex-row    max-w-[1280px]">
        <div className=" w-auto md:w-[46%] flex flex-col form-background h-[400px] md:h-full justify-between">
          <div className="flex flex-col pt-6 pl-10 gap-7">
            <Logo />{" "}
            <div className="text-[#35734E] text-[20px] md:text-[29px] w-auto md:w-[450px] bg-transparent">
              Mediation is very effective for cases where there is a
              pre-existing relationship.
            </div>
          </div>
        </div>
        <div className="w-full md:w-[54%] h-full overflow-y-auto noscrollbar bg-[#E9FFF2] pt-10 md:pt-16 px-10 md:pl-6 md:pr-10 pb-2 ">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default BookCounseltationForm;
