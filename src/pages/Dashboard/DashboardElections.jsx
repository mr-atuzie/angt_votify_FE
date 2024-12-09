import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import { BsTrash3 } from "react-icons/bs";
import { FaVoteYea } from "react-icons/fa";

import { FaRegCalendarXmark, FaRegCalendarCheck } from "react-icons/fa6";

import { FaEye } from "react-icons/fa6";

const DashboardElections = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submit logic here
    console.log("Search submitted for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      <div className="flex items-start justify-between ">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Manage Elections
          </h1>
          <h1 className="text-gray-500">
            Welcome Back, <span className="text-blue-600">Rex</span>
          </h1>
        </div>

        <Link to={"/create-election"}>
          <button className="bg-blue-600 flex gap-2 items-center text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300">
            <span>
              <IoAddSharp size={20} />
            </span>
            <span> Add Election</span>
          </button>
        </Link>
      </div>

      <div className=" w-[90%] mx-auto flex flex-col gap-5">
        <div className=" flex justify-between items-center mb-4">
          <form onSubmit={handleSearchSubmit} className=" w-[45%]">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search election name"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          <form className=" w-[30%]">
            <select
              id="countries"
              className="bg-gray-50 border p-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="" disabled>
                Filter election by status
              </option>
              <option value="Running">Running</option>
              <option value="Completed">Completed</option>
              <option value="Building">Building</option>
              <option value="Inactive">Inactive</option>
            </select>
          </form>
        </div>

        <div className="w-full bg-white border border-gray-300 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium capitalize">
              Class President 2024/2025
            </h2>
            <span className="text-green-600 bg-green-100 text-sm  px-3 py-1 rounded-lg">
              Active
            </span>
          </div>

          {/* Date Section */}
          <div className="border-t border-gray-200 pt-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              {/* Start Date */}
              <div>
                <div className="flex gap-2 ">
                  <FaRegCalendarCheck size={15} />
                  <h4 className="font-medium text-xs uppercase mb-1">
                    Start Date
                  </h4>
                </div>
                <p className="text-gray-500">06/12/24 11:00 AM</p>
              </div>

              {/* End Date */}
              <div>
                <div className="flex gap-2 ">
                  <FaRegCalendarXmark size={15} />
                  <h4 className="font-medium text-xs  uppercase mb-1">
                    End Date
                  </h4>
                </div>
                <p className="text-gray-500">10/12/24 11:00 AM</p>
              </div>

              {/* type*/}
              <div>
                <div className="flex gap-2 ">
                  <FaVoteYea size={15} />
                  <h4 className="font-medium text-xs uppercase mb-1">
                    Election type
                  </h4>
                </div>
                <p className=" text-blue-600 capitalize ">single choice</p>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-6 flex gap-6 items-center">
            <Link to={"/election/12345/overview"}>
              <button className="text-sm px-4 py-2 bg-blue-600 flex justify-center items-center gap-2 font-normal text-white rounded-lg hover:bg-blue-100 hover:text-blue-400 ">
                <FaEye size={15} /> View Details
              </button>
            </Link>
            <button className="bg-red-600 flex justify-center items-start gap-2 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-100 hover:text-red-600">
              <BsTrash3 size={15} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardElections;
