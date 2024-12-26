import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/auth/authSlice";
import { getUserInitials } from "../utils";

const ElectionHeader = ({
  electionName,
  electionStatus,
  electionType,
  electionImage,
}) => {
  const { fullname } = useSelector(selectUser);

  const statusStyles = {
    Upcoming: "bg-yellow-100 text-yellow-600",
    Ongoing: "bg-green-100 text-green-600",
    Ended: "bg-blue-100 text-blue-600",
  };

  return (
    <header className="bg-blue-900 py-4 px-6 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Election Info */}
        <div className="flex items-center gap-4">
          <img
            src={electionImage}
            alt={`${electionName} logo`}
            className="w-14 h-10 lg:h-14 rounded-lg object-cover"
          />
          <div>
            <h1 className="lg:text-xl font-medium capitalize text-white">
              {electionName}
            </h1>
            <span
              className={`text-xs px-3 py-1 rounded-lg ${
                statusStyles[electionStatus] || "bg-gray-100 text-gray-600"
              }`}
            >
              {electionStatus}
            </span>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-3 lg:gap-5">
          <Link
            to="/dashboard"
            className="hidden lg:flex items-center text-white gap-2"
          >
            <MdSpaceDashboard className="text-xl" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/dashboard"
            className="lg:hidden flex items-center text-white gap-2"
          >
            <MdSpaceDashboard size={25} />
          </Link>

          <button
            className="w-10 h-10 bg-blue-600 text-white text-lg rounded-full flex items-center justify-center hover:bg-blue-700 transition"
            title="User Profile"
          >
            {getUserInitials(fullname)}
          </button>
        </div>
      </div>
    </header>
  );
};

export default ElectionHeader;
