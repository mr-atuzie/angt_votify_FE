import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";

const DashboardHeader = ({ fullname }) => {
  const location = useLocation();

  // Extract the page name from the URL
  const pageName = location.pathname
    .split("/")
    .filter((segment) => segment)
    .pop()
    .replace("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize words

  const navigate = useNavigate();

  const logout = async () => {
    try {
      const { data } = await axios.get(`/api/v1/user/logout`);

      toast.success(data);

      console.log(data);

      navigate(`/login`);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      {/* Page Title Section */}
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
          {pageName || "Dashboard Overview"}
        </h1>
        <p className="text-sm text-gray-500 lg:text-base">
          Welcome <span className="text-blue-600">{fullname}</span>
        </p>
      </div>

      {/* Actions Section */}
      <div className="flex items-center gap-4">
        {/* Hide Add Election button on small screens */}
        <Link to="/dashboard/create-election">
          <button className="hidden lg:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300">
            <IoAddSharp size={20} />
            <span>Add Election</span>
          </button>
        </Link>

        {/* <Link className=" lg:hidden" to="/dashboard/create-election">
          <button className="flex justify-center border-2 border-blue-500 items-center w-10 h-10 rounded-full bg-white text-blue-600 shadow-md  transition duration-300">
            <IoAddSharp size={20} />
          </button>
        </Link> */}

        {/* Get Initials Button */}
        <button
          onClick={logout}
          className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-md  transition duration-300"
        >
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
