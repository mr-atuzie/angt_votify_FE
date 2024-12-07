import React from "react";

import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard Overview
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-600">Total Elections</h2>
          <p className="text-3xl font-bold text-blue-600">15</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-600">
            Active Elections
          </h2>
          <p className="text-3xl font-bold text-green-500">5</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-600">
            Voter Participation
          </h2>
          <p className="text-3xl font-bold text-yellow-500">78%</p>
        </div>
      </div>

      <div className=" flex gap-6">
        <div className=" w-[70%]">
          <div className=" w-full bg-white h-fit border border-blue-100 rounded-lg flex items-center justify-between shadow-lg p-6">
            <div>
              <h2 className=" mb-1 font-medium">Most Beautiful Girl Nigeria</h2>
              <span className="bg-yellow-100 text-yellow-600 rounded-md px-6 py-1.5 text-xs">
                Building
              </span>
            </div>

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
                <span className="font-medium text-xs uppercase">end date</span>
              </div>

              <p className=" text-sm text-gray-600">10/12/24 11:00 AM</p>
            </div>
          </div>

          <div className=" w-full bg-white h-fit border border-blue-100 rounded-lg flex items-center justify-between shadow-lg p-6">
            <div>
              <h2 className=" mb-1 font-medium">Most Beautiful Girl Nigeria</h2>
              <span className="bg-green-100 text-green-600 rounded-md px-6 py-1.5 text-xs">
                Started
              </span>
            </div>

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
                <span className="font-medium text-xs uppercase">end date</span>
              </div>

              <p className=" text-sm text-gray-600">10/12/24 11:00 AM</p>
            </div>
          </div>

          <div className=" w-full bg-white h-fit border border-blue-100 rounded-lg flex items-center justify-between shadow-lg p-6">
            <div>
              <h2 className=" mb-1 font-medium">Most Beautiful Girl Nigeria</h2>
              <span className="bg-pink-100 text-pink-600 rounded-md px-6 py-1.5 text-xs">
                Ended
              </span>
            </div>

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
                <span className="font-medium text-xs uppercase">end date</span>
              </div>

              <p className=" text-sm text-gray-600">10/12/24 11:00 AM</p>
            </div>
          </div>
        </div>

        <div class="bg-white h-fit w-[35%] shadow-lg rounded-lg p-3">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <span class="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
                E
              </span>
              <div>
                <p class="text-sm text-gray-700">
                  New election "Annual Awards" created.
                </p>
                <p class="text-xs text-gray-500">5 minutes ago</p>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                V
              </span>
              <div>
                <p class="text-sm text-gray-700">
                  200 new voters added for "Employee of the Month".
                </p>
                <p class="text-xs text-gray-500">1 hour ago</p>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="bg-yellow-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                C
              </span>
              <div>
                <p class="text-sm text-gray-700">
                  Candidate "John Doe" registered for "Student Council
                  Elections".
                </p>
                <p class="text-xs text-gray-500">2 hours ago</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
