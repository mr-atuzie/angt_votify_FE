import React, { useState } from "react";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";

const Accordion = ({ title, answer }) => {
  const [accordion, setAccordion] = useState(false);

  return (
    <div className="w-full border-b-2 border-dashed border-blue-600">
      <div
        className="w-full flex justify-between items-center py-4 text-base lg:text-lg mb-4 cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => setAccordion(!accordion)}
      >
        <h1
          className={`text-gray-800 font-semibold ${
            accordion ? "text-blue-600" : "text-gray-700"
          }`}
        >
          {title}
        </h1>

        {accordion ? (
          <button className="bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            <IoMdArrowUp size={20} />
          </button>
        ) : (
          <button className="bg-white text-blue-600 border border-blue-600 p-2 rounded-full shadow-md hover:bg-blue-50 transition duration-300">
            <IoMdArrowDown size={20} />
          </button>
        )}
      </div>

      <div
        className={`text-sm lg:text-base text-gray-600 transition-all duration-300 ease-in-out ${
          accordion
            ? "max-h-screen opacity-100 block"
            : "max-h-0 opacity-0 hidden"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
