import React, { useState } from "react";

import { IoMdArrowUp } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";

const Accordion = ({ title, answer }) => {
  const [accordion, setAccordion] = useState(false);

  return (
    <div className=" lg:w-[55%] border-b-2  border-dashed border-blue-600 ">
      <div
        className="  w-full flex justify-between items-start py-1 text-base  mb-2"
        onClick={() => setAccordion(!accordion)}
      >
        <h1 className={`lg:text-lg mb-2 ${accordion ? " text-blue-600" : ""}`}>
          {title}
        </h1>

        {accordion ? (
          <button className=" border font-semibold border-black  h-7 w-7 rounded-full flex justify-center items-center ">
            <IoMdArrowUp size={20} />
          </button>
        ) : (
          <button className=" border border-black h-7 w-7 font-medium rounded-full flex justify-center items-center ">
            <IoMdArrowDown size={20} />
          </button>
        )}
      </div>

      <div
        className={`  transition-all duration-300 ease-in-out text-gray-600 my-2  ${
          accordion ? " grid-rows-[1fr] block" : "grid-rows-[0fr] hidden"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
