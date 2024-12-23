import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsTrash3 } from "react-icons/bs";
import { FaEye, FaRegCalendarCheck, FaVoteYea } from "react-icons/fa";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DashboardElectionCard = ({ election, setElections }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteElection = async (id) => {
    setLoading(true);

    try {
      await axios.delete(`/api/v1/election/${id}`);

      const response = await axios.get(`/api/v1/user/election`);
      setElections(response.data);
      toast.success(`election has been deleted`);
      setLoading(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);
      toast.error(message);
    }
  };

  return (
    <div
      key={election?._id}
      className="w-full bg-white border border-gray-300 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img
            src={election?.image}
            alt={election?.title}
            className="w-10 h-10 rounded-lg object-contain"
          />
          <h2 className="text-lg font-medium capitalize">{election?.title}</h2>
        </div>
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

      {/* Date Section */}
      <div className="border-t border-gray-200 pt-4">
        <div className="grid grid-cols-3 gap-4 text-sm">
          {[
            {
              icon: <FaRegCalendarCheck size={15} />,
              label: "Start Date",
              value: moment(election?.startDate).format("MMM DD, YYYY hh:mm A"),
            },
            {
              icon: <FaRegCalendarXmark size={15} />,
              label: "End Date",
              value: moment(election?.endDate).format("MMM DD, YYYY hh:mm A"),
            },
            {
              icon: <FaVoteYea size={15} />,
              label: "Election Type",
              value: (
                <span className="text-blue-600 capitalize">
                  {election?.electionType}
                </span>
              ),
            },
          ].map(({ icon, label, value }, index) => (
            <div key={index}>
              <div className="flex items-center gap-2">
                {icon}
                <h4 className="font-medium text-xs uppercase mb-1">{label}</h4>
              </div>
              <p className="text-gray-500">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 flex gap-6 items-center">
        <Link to={`/election/${election?._id}/overview`}>
          <button className="text-sm px-4 py-2 flex items-center gap-2 font-normal rounded-lg bg-blue-100 text-blue-400">
            <FaEye size={15} /> View Details
          </button>
        </Link>
        <button
          onClick={() => handleDeleteElection(election?._id)}
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-red-100 text-red-600"
        >
          <BsTrash3 size={15} />
          {loading ? "Deleting" : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default DashboardElectionCard;
