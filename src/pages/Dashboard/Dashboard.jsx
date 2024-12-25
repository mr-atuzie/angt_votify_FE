import React, { useEffect, useState } from "react";

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
    <div className="min-h-screen bg-gray-100  flex flex-col gap-6">
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
        <div className="w-[70%] space-y-4">
          {dashboard?.recentElections?.length > 0 &&
            dashboard?.recentElections?.map((election) => (
              <Link
                key={election._id}
                to={`/election/${election?._id}/overview`}
                className="block"
              >
                <div className="w-full bg-white h-fit border rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Election Image */}
                  <img
                    className="w-16 h-16 object-cover rounded-md"
                    src={election.image}
                    alt={election.title}
                  />

                  {/* Election Details */}
                  <div className="flex-1">
                    <h2 className="capitalize font-semibold text-gray-800 text-lg mb-2">
                      {election.title}
                    </h2>
                    <span
                      className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${
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

                  {/* Dates Section */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Start Date */}
                    <div className="flex flex-col items-center text-gray-600">
                      <div className="bg-blue-100 p-3 rounded-lg shadow-md flex flex-col items-center w-28">
                        <span className="text-xs font-medium uppercase text-blue-500">
                          Start Date
                        </span>
                        <p className="text-sm font-semibold text-gray-800">
                          {moment(election?.startDate).format("MMM DD")}
                        </p>
                        <p className="text-xs text-gray-500">
                          {moment(election?.startDate).format("YYYY, hh:mm A")}
                        </p>
                      </div>
                    </div>

                    {/* End Date */}
                    <div className="flex flex-col items-center text-gray-600">
                      <div className="bg-green-100 p-3 rounded-lg shadow-md flex flex-col items-center w-28">
                        <span className="text-xs font-medium uppercase text-green-500">
                          End Date
                        </span>
                        <p className="text-sm font-semibold text-gray-800">
                          {moment(election?.endDate).format("MMM DD")}
                        </p>
                        <p className="text-xs text-gray-500">
                          {moment(election?.endDate).format("YYYY, hh:mm A")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
