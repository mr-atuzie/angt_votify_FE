import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { GoTrash } from "react-icons/go";

import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const BallotCard = ({
  option,
  electionData,
  ballotId,
  handleDeleteVotingOption,
}) => {
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
    <div className="flex justify-between items-center bg-white shadow-md p-6 rounded-xl border border-gray-200">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img
          className="w-16 h-16 object-cover rounded-full border-2 border-blue-500"
          src={option?.image}
          alt="Profile"
        />
        <div>
          <h2 className="text-lg font-medium capitalize text-gray-800">
            {option?.name}
          </h2>
          <p className="text-sm text-gray-500">{option?.description}</p>
        </div>
      </div>

      {/* Options Dropdown */}
      <div
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Trigger Button */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition">
          <BsThreeDotsVertical size={20} className="text-gray-600" />
        </button>

        {/* Tooltip Content */}
        {isTooltipVisible && (
          <div className="absolute right-0 top-10 bg-white p-2 shadow-lg rounded-lg border border-gray-100 w-48 py-2 z-50">
            {/* Edit Button */}

            <Link
              to={`/election/${electionData?._id}/ballot/${ballotId}/edit-option/${option?._id}`}
            >
              <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition">
                <BiEdit size={20} className="text-blue-600" />
                <span className="text-gray-800 text-sm">Edit</span>
              </button>
            </Link>
            <hr className="my-1 border-gray-200" />
            {/* Delete Button */}
            <button
              onClick={() => handleDeleteVotingOption(option?._id)}
              className="flex w-full items-center gap-3 px-4 py-2 hover:bg-red-50 rounded-lg transition"
            >
              <GoTrash size={20} className="text-red-600 text-sm" />
              <span className="text-gray-800">Delete</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BallotCard;
