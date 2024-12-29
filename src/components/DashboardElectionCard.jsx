// import axios from "axios";
import moment from "moment";
import React from "react";
// import toast from "react-hot-toast";
// import { BsTrash3 } from "react-icons/bs";
// import { FaEye, FaRegCalendarCheck } from "react-icons/fa";
// import { FaRegCalendarXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DashboardElectionCard = ({ election, setElections }) => {
  // const [loading, setLoading] = useState(false);

  // const handleDeleteElection = async (id) => {
  //   setLoading(true);

  //   try {
  //     await axios.delete(`/api/v1/election/${id}`);

  //     const response = await axios.get(`/api/v1/user/election`);
  //     setElections(response.data);
  //     toast.success(`election has been deleted`);
  //     setLoading(false);
  //   } catch (error) {
  //     const message =
  //       (error.response &&
  //         error.response.data &&
  //         error.response.data.message) ||
  //       error.message ||
  //       error.toString();

  //     setLoading(false);
  //     toast.error(message);
  //   }
  // };

  return (
    <Link
      key={election._id}
      to={`/election/${election?._id}/overview`}
      className="block"
    >
      <div className="w-full bg-white h-fit border-2 border-gray-200 rounded-lg shadow-md p-4 lg:p-6 hover:shadow-lg transition duration-300 flex justify-between lg:items-center flex-col lg:flex-row  gap-4">
        <div className="flex gap-4">
          {/* Election Image */}
          <img
            className=" w-10 h-10 lg:w-16 lg:h-16 object-cover rounded-md"
            src={election.image}
            alt={election.title}
          />
          {/* Election Details */}
          <div>
            <h2 className="capitalize font-semibold text-gray-800 lg:text-lg">
              {election.title}
            </h2>
            <span
              className={`flex text-xs lg:text-sm font-medium ${
                election?.status === "Upcoming"
                  ? "text-yellow-600 "
                  : election?.status === "Ongoing"
                  ? "text-green-600"
                  : "text-red-600 "
              }`}
            >
              {election?.status}
            </span>
          </div>
        </div>

        {/* Dates Section */}
        <div className="flex items-center gap-4">
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
  );
};

export default DashboardElectionCard;
