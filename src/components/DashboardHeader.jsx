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
    <div className="flex  justify-between items-center gap-4 lg:gap-0">
      {/* Page Title Section */}
      <div className="">
        <h1 className="text-xl lg:text-2xl font-semibold text-gray-800">
          {pageName || "Dashboard Overview"}
        </h1>
        <h1 className="text-gray-500 text-sm lg:text-base">
          Welcome <span className="text-blue-600">{fullname}</span>
        </h1>
      </div>

      {/* Actions Section */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <Link to={"/dashboard/create-election"}>
          <button className="bg-blue-600  hidden lg:flex   items-center gap-2 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300 w-full lg:w-auto">
            <IoAddSharp size={20} />
            <span>Add Election</span>
          </button>
        </Link>

        <button className="bg-white shadow-md font-medium tracking-wider uppercase border border-blue-600 text-blue-600 px-4 py-2 w-9 h-9  lg:w-12 lg:h-12 lg:text-lg flex justify-center items-center rounded-full hover:bg-blue-700 hover:text-white transition duration-300">
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
