import React, { useState } from "react";
import { TbCrown } from "react-icons/tb";
import { RiVipCrownLine } from "react-icons/ri";

const Accordion = ({ title, answer }) => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className=" p-2.5 lg:p-4 rounded-sm bg-white shadow-sm mb-4">
      <button
        className="  w-full flex justify-between  text-base items-center"
        onClick={() => setAccordion(!accordion)}
      >
        <h1 className=" font-medium text-sm">{title}</h1>

        {accordion ? (
          <span className=" text-pink-500">
            <RiVipCrownLine size={20} />
          </span>
        ) : (
          <span className=" text-pink-500">
            <TbCrown size={20} />
          </span>
        )}
      </button>
      <div
        className={`grid border-t mt-2 py-2  overflow-hidden transition-all duration-300 ease-in-out text-slate-700 text-sm ${
          accordion ? " grid-rows-[1fr] block" : "grid-rows-[0fr] hidden"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
