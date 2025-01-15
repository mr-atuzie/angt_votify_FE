import moment from "moment";
import React from "react";
import { useOutletContext } from "react-router-dom";
import { AiOutlineFieldTime, AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay, FaStop } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";

const ElectionLaunch = () => {
  const electionData = useOutletContext();

  const handleStartElection = () => {};
  const handleEndElection = () => {};
  return (
    <div className="w-full lg:w-[60%] mx-auto p-3 lg:p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl lg:text-3xl font-bold text-center">
          Election Details
        </h1>
      </div>

      {/* Details Section */}
      <div className="bg-white mt-6 p-6 rounded-xl shadow-lg space-y-6">
        {/* Title */}
        <div className="flex items-center gap-4">
          <AiOutlineInfoCircle className="text-blue-500 text-xl lg:text-2xl" />
          <div>
            <h2 className="font-semibold lg:text-lg">Title</h2>
            <p className="text-gray-600 text-sm lg:text-base">
              {electionData?.title}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="flex items-center gap-4">
          <MdOutlineDescription className="text-green-500 text-2xl" />
          <div>
            <h2 className="font-semibold lg:text-lg">Description</h2>
            <p className="text-gray-600 text-sm lg:text-base">
              {electionData?.description}
            </p>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex items-center gap-4">
            <AiOutlineFieldTime className="text-purple-500 text-2xl" />
            <div>
              <h2 className="font-semibold text-lg">Start Date</h2>
              <p className="text-gray-600">
                {moment(electionData?.startDate).format("MMM DD, YYYY hh:mm A")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <AiOutlineFieldTime className="text-red-500 text-2xl" />
            <div>
              <h2 className="font-semibold text-lg">End Date</h2>
              <p className="text-gray-600">
                {moment(electionData?.endDate).format("MMM DD, YYYY hh:mm A")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
        <button
          className="flex items-center gap-2 w-full py-3 px-5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-md transition"
          onClick={() => handleStartElection(electionData?._id)}
        >
          <FaPlay className="text-lg" />
          Start Election
        </button>
        <button
          className="flex items-center gap-2 w-full py-3 px-5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-md transition"
          onClick={() => handleEndElection(electionData?._id)}
        >
          <FaStop className="text-lg" />
          End Election
        </button>
      </div>
    </div>
  );
};

export default ElectionLaunch;
