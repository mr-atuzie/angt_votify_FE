import React from "react";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import { FaRegCalendarCheck } from "react-icons/fa6";

const DashboardElections = () => {
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
        <Link to={"/election/12345/overview"}>
          <div className=" w-full bg-white h-fit border border-blue-100 rounded-lg flex items-center justify-between shadow-lg p-6">
            <div>
              <h2 className=" mb-1 font-medium">Most Beautiful Girl Nigeria</h2>
              <span className="bg-yellow-100 text-yellow-600 rounded-md px-6 py-1.5 text-xs">
                Building
              </span>
            </div>

            <div className=" flex items-center gap-20">
              <div>
                <div className=" flex gap-2 items-center mb-2">
                  <span>
                    <FaRegCalendarCheck size={12} />
                  </span>
                  <span className="font-medium text-xs uppercase">
                    start date
                  </span>
                </div>

                <p className=" text-sm text-gray-600">06/12/24 11:00 AM</p>
              </div>

              <div>
                <div className=" flex gap-2 items-center mb-2">
                  <span>
                    <FaRegCalendarCheck size={12} />
                  </span>
                  <span className="font-medium text-xs uppercase">
                    end date
                  </span>
                </div>

                <p className=" text-sm text-gray-600">10/12/24 11:00 AM</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to={"/election/12345/overview"}>
          <div className=" w-full bg-white h-fit border border-blue-100 rounded-lg flex items-center justify-between shadow-lg p-6">
            <div>
              <h2 className=" mb-1 capitalize font-medium">
                Employee of the month
              </h2>
              <span className="bg-green-100 text-green-600 rounded-md px-6 py-1.5 text-xs">
                Started
              </span>
            </div>

            <div className=" flex items-center gap-20">
              <div>
                <div className=" flex gap-2 items-center mb-2">
                  <span>
                    <FaRegCalendarCheck size={12} />
                  </span>
                  <span className="font-medium text-xs uppercase">
                    start date
                  </span>
                </div>

                <p className=" text-sm text-gray-600">06/12/24 11:00 AM</p>
              </div>

              <div>
                <div className=" flex gap-2 items-center mb-2">
                  <span>
                    <FaRegCalendarCheck size={12} />
                  </span>
                  <span className="font-medium text-xs uppercase">
                    end date
                  </span>
                </div>

                <p className=" text-sm text-gray-600">10/12/24 11:00 AM</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to={"/election/12345/overview"}>
          <div className=" w-full bg-white h-fit border border-blue-100 rounded-lg flex items-center justify-between shadow-lg p-6">
            <div>
              <h2 className=" mb-1 font-medium">Class President 2024/2025</h2>
              <span className="bg-pink-100 text-pink-600 rounded-md px-6 py-1.5 text-xs">
                Ended
              </span>
            </div>

            <div className=" flex items-center gap-20">
              <div>
                <div className=" flex gap-2 items-center mb-2">
                  <span>
                    <FaRegCalendarCheck size={12} />
                  </span>
                  <span className="font-medium text-xs uppercase">
                    start date
                  </span>
                </div>

                <p className=" text-sm text-gray-600">06/12/24 11:00 AM</p>
              </div>

              <div>
                <div className=" flex gap-2 items-center mb-2">
                  <span>
                    <FaRegCalendarCheck size={12} />
                  </span>
                  <span className="font-medium text-xs uppercase">
                    end date
                  </span>
                </div>

                <p className=" text-sm text-gray-600">10/12/24 11:00 AM</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardElections;
