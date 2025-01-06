import React, { useState } from "react";
import BallotCard from "./BallotCard";

import { BiEdit } from "react-icons/bi";
import { GoTrash } from "react-icons/go";
import { IoAddSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

import { VscClearAll } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Ballot = ({
  ballot,
  handleDeleteBallot,
  electionData,
  clearBallotOptions,
  handleDeleteVotingOption,
}) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className=" w-full lg:w-[70%] mx-auto bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className=" px-3 lg:px-6 py-4 bg-gradient-to-r from-blue-700 flex justify-between items-center to-blue-800 text-white rounded-t-lg">
        <div>
          <h1 className=" text-lg lg:text-xl capitalize font-semibold">
            {ballot?.title}
          </h1>
          {/* <p className="text-sm opacity-80">Select your preferred candidate</p> */}
          <p className="opacity-80 text-sm lg:text-base capitalize">
            {ballot?.description}
          </p>
        </div>

        {/* Options Dropdown */}
        <div
          className="relative group"
          onClick={() => setTooltipVisible(!isTooltipVisible)}
        >
          {/* Trigger Button */}
          <button className="p-2 hover:bg-blue-100  w-8 h-9 bg-blue-700 rounded justify-center items-center  transition">
            <BsThreeDots size={20} className="text-white hover:text-blue-800" />
          </button>

          {/* Tooltip Content */}
          {isTooltipVisible && (
            <div className="absolute right-0 top-10 bg-white p-2 shadow-lg rounded-lg border border-gray-100 w-48 py-2 z-50">
              {/* Edit Button */}
              <Link
                to={`/election/${electionData?._id}/ballot/edit-question/${ballot?._id}`}
              >
                <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition">
                  <BiEdit size={20} className="text-blue-600" />
                  <span className="text-gray-800 text-sm">Edit</span>
                </button>
              </Link>
              <hr className="my-1 border-gray-200" />
              {/* Add option */}
              <Link
                to={`/election/${electionData?._id}/ballot/create-option/${ballot?._id}`}
              >
                <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition">
                  <IoAddSharp size={20} className="text-blue-600" />
                  <span className="text-gray-800 text-sm">
                    Add More Candidates
                  </span>
                </button>
              </Link>

              <hr className="my-1 border-gray-200" />
              {/* Clear option Button */}
              <button
                onClick={() => clearBallotOptions(ballot?._id)}
                className="flex w-full items-center gap-3 px-4 py-2 hover:bg-green-50 rounded-lg transition"
              >
                <VscClearAll size={20} className="text-green-600 text-sm" />
                <span className="text-gray-800">Clear Option</span>
              </button>

              <hr className="my-1 border-gray-200" />

              {/* Delete Button */}
              <button
                onClick={() => handleDeleteBallot(ballot?._id)}
                className="flex w-full items-center gap-3 px-4 py-2 hover:bg-red-50 rounded-lg transition"
              >
                <GoTrash size={20} className="text-red-600 " />
                <span className="text-gray-800 text-sm">Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Ballot Cards */}
      <div className=" p-3 lg:p-6 grid grid-cols-1  gap-4">
        {ballot?.votingOptions.length > 0 ? (
          ballot?.votingOptions.map((option) => (
            <BallotCard
              key={option._id}
              option={option}
              ballotId={ballot?._id}
              electionData={electionData}
              handleDeleteVotingOption={handleDeleteVotingOption}
            />
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
