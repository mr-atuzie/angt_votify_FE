import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";

const DashboardHeader = ({ fullname }) => {
  const location = useLocation();

  // Extract the page name from the URL
  const pageName = location.pathname
    .split("/")
    .filter((segment) => segment)
    .pop()
    .replace("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize words

  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      {/* Page Title Section */}
      <div className="flex items-center gap-2">
        <button className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-md hover:bg-white hover:text-blue-600 transition duration-300">
          {getUserInitials(fullname)}
        </button>
        <div>
          <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
            {pageName || "Dashboard Overview"}
          </h1>
          <p className="text-sm text-gray-500 lg:text-base">
            Welcome <span className="text-blue-600">{fullname}</span>
          </p>
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex items-center gap-4">
        {/* Hide Add Election button on small screens */}
        <Link to="/dashboard/create-election">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-2 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium hover:bg-blue-700 transition duration-300">
            <IoAddSharp size={20} />
            <span>Add Election</span>
          </button>
        </Link>

        {/* Get Initials Button */}
        <button className="hidden justify-center items-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-md hover:bg-white hover:text-blue-600 transition duration-300">
          {getUserInitials(fullname)}
        </button>
      </div>
    </div>
  );
};

// Helper function to get user initials
const getUserInitials = (fullname) => {
  return fullname
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();
};

export default DashboardHeader;
