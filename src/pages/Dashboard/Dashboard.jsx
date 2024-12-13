import React, { useEffect, useState } from "react";

import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import CountUpAnimation from "../../components/CountUpAnimation";
import axios from "axios";
import toast from "react-hot-toast";
import DashboardLoader from "../../components/DashboardLoader";
import moment from "moment";

const Dashboard = () => {
  const [preLoader, setPreLoader] = useState(true);
  const [dashboard, setDashBoard] = useState(null);

  useEffect(() => {
    setPreLoader(true);
    const getElection = async () => {
      try {
        const response = await axios.get(`/api/v1/user/dashboard`);
        console.log(response.data);
        setDashBoard(response.data);
        setPreLoader(false);
        return response.data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setPreLoader(false);

        //  setLoading(false);
        toast.error(message);
      }
    };

    getElection();
  }, []);

  if (preLoader) {
    return <DashboardLoader />;
  }

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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-medium">Total Elections</h2>

          <CountUpAnimation count={dashboard?.totalElections} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-medium">Ongoing Elections</h2>
          <CountUpAnimation count={dashboard?.ongoingElections} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-medium">Upcoming Elections</h2>
          <CountUpAnimation count={dashboard?.upcomingElections} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-medium 0">Completed Elections</h2>
          <CountUpAnimation count={dashboard?.compeletedElections} />
        </div>
      </div>

      <div className=" flex gap-6">
        <div className=" w-[70%]">
          {dashboard?.recentElections?.length > 0 &&
            dashboard?.recentElections?.map((election) => {
              return (
                <div
                  key={election._id}
                  className=" w-full bg-white h-fit mb-4 border border-blue-100 rounded-lg flex items-center justify-between shadow-lg p-6"
                >
                  <div>
                    <h2 className=" mb-1 capitalize font-medium">
                      {election.title}
                    </h2>
                    <span
                      className={`text-sm px-3 py-1 rounded-lg ${
                        election?.status === "Upcoming"
                          ? "text-yellow-600 bg-yellow-100"
                          : election?.status === "Ongoing"
                          ? "text-green-600 bg-green-100"
                          : "text-blue-600 bg-blue-100"
                      }`}
                    >
                      {election?.status}
                    </span>
                  </div>

                  <div className=" flex flex-col justify-center items-center">
                    <div className=" flex gap-2 items-center mb-1">
                      <span>
                        <FaRegCalendarCheck size={12} />
                      </span>
                      <span className="font-medium text-xs uppercase">
                        start date
                      </span>
                    </div>

                    <p className=" text-sm text-gray-600">
                      {moment(election?.startDate).format(
                        "MMM DD, YYYY hh:mm A"
                      )}
                    </p>
                  </div>

                  <div className=" flex flex-col justify-center items-center">
                    <div className=" flex gap-2 items-center mb-1 ">
                      <span>
                        <FaRegCalendarCheck size={12} />
                      </span>
                      <span className="font-medium text-xs uppercase">
                        end date
                      </span>
                    </div>

                    <p className=" text-sm text-gray-600">
                      {moment(election?.endDate).format("MMM DD, YYYY hh:mm A")}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        {/* <div className="bg-white h-fit w-[35%] shadow-lg rounded-lg p-3">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
                E
              </span>
              <div>
                <p className="text-sm text-gray-700">
                  New election "Annual Awards" created.
                </p>
                <p className="text-xs text-gray-500">5 minutes ago</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                V
              </span>
              <div>
                <p className="text-sm text-gray-700">
                  200 new voters added for "Employee of the Month".
                </p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-yellow-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                C
              </span>
              <div>
                <p className="text-sm text-gray-700">
                  Candidate "John Doe" registered for "Student Council
                  Elections".
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
