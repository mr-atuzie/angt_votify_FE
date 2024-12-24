import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Accordion = ({ title, answer }) => {
  const [accordion, setAccordion] = useState(false);

  return (
    <div className="w-full border-b border-gray-200">
      <div
        className="w-full flex justify-between items-center py-2.5 lg:py-5 text-base  lg:text-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-md"
        onClick={() => setAccordion(!accordion)}
      >
        <h1
          className={`font-medium text-gray-800 ${
            accordion ? "text-blue-700" : "text-gray-600"
          }`}
        >
          {title}
        </h1>

        <button
          className={`p-2 rounded-full transition duration-300 ${
            accordion
              ? "bg-blue-700 text-white transform rotate-180"
              : "bg-white border border-blue-700 text-blue-700"
          }`}
        >
          {accordion ? (
            <IoIosArrowUp size={15} />
          ) : (
            <IoIosArrowDown size={15} />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          accordion ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600 pb-5">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
