import React, { useState } from "react";
import BallotCard from "./BallotCard";

import { BiEdit } from "react-icons/bi";
import { GoTrash } from "react-icons/go";

import { BsThreeDots } from "react-icons/bs";

import { VscClearAll } from "react-icons/vsc";

const Ballot = () => {
  const options = [1, 2, 3, 4];

  const [isTooltipVisible, setTooltipVisible] = useState(false);
  // Show tooltip on mouse enter
  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  // Hide tooltip on mouse leave
  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };
  return (
    <div className="w-[70%] mx-auto bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-blue-700 flex justify-between items-center to-blue-800 text-white rounded-t-lg">
        <div>
          <h1 className="text-xl font-semibold">SUG President 2025/2026</h1>
          {/* <p className="text-sm opacity-80">Select your preferred candidate</p> */}
          <p className="opacity-80">Multiple Choice</p>
        </div>

        {/* Options Dropdown */}
        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Trigger Button */}
          <button className="p-2 hover:bg-blue-100  w-8 h-9 bg-blue-700 rounded justify-center items-center  transition">
            <BsThreeDots size={20} className="text-white hover:text-blue-800" />
          </button>

          {/* Tooltip Content */}
          {isTooltipVisible && (
            <div className="absolute right-0 top-10 bg-white p-2 shadow-lg rounded-lg border border-gray-100 w-48 py-2 z-50">
              {/* Edit Button */}
              <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition">
                <BiEdit size={20} className="text-blue-600" />
                <span className="text-gray-800 text-sm">Edit</span>
              </button>

              <hr className="my-1 border-gray-200" />
              {/* Clear option Button */}
              <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-green-50 rounded-lg transition">
                <VscClearAll size={20} className="text-green-600 text-sm" />
                <span className="text-gray-800">Clear Option</span>
              </button>

              <hr className="my-1 border-gray-200" />

              {/* Delete Button */}
              <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-red-50 rounded-lg transition">
                <GoTrash size={20} className="text-red-600 " />
                <span className="text-gray-800 text-sm">Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Ballot Cards */}
      <div className="p-6 grid grid-cols-1  gap-4">
        {options.length > 0 ? (
          options.map((option, index) => (
            <BallotCard key={index} candidate={`Candidate ${option}`} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No ballots available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Ballot;
