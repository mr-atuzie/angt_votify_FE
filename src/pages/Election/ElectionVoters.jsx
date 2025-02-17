import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoAddSharp } from "react-icons/io5";
import { PiUsersFourFill } from "react-icons/pi";
import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import UploadVoter from "../../components/UploadVoter";
import { VscFileSubmodule } from "react-icons/vsc";
import DashboardLoader from "../../components/DashboardLoader";
import api from "../../axiosInstance";

const ElectionVoters = () => {
  const [voters, setVoters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [preLoader, setPreLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;
  const electionData = useOutletContext();
  const [fileMenu, setFileMenu] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setPreLoader(true);
    const getVoters = async () => {
      try {
        const response = await api.get(`/api/v1/voter/election/${id}`);
        setPreLoader(false);
        setVoters(response.data.voters);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setPreLoader(false);
        toast.error(message);
      }
    };
    getVoters();
  }, [id]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log("Search submitted for:", searchQuery);

    try {
      const { data } = await api.get(`/api/v1/voter/election/${id}/search`, {
        params: { fullName: searchQuery },
      });

      console.log(data.voters);
      console.log(data);

      setVoters(data.voters);
      // return response.data;
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

  // console.log(voters);

  const downloadCSV = () => {
    const csvHeaders = ["Name,Email,Phone,Voted,voter ID,voting Code,link"];
    const csvRows = voters.map((voter) => {
      const voted = voter.isVerified ? "Yes" : "No";
      const electionLink = `${process.env.REACT_APP_CLIENT_URL}/voting/${electionData?._id}/voter/${voter._id}/login`;
      return `${voter.fullName},${voter.email ? voter.emal : "null"},${
        voter.phone
      },${voted},${voter.voterId},${voter.verificationCode},${electionLink}`;
    });
    const csvContent = [csvHeaders, ...csvRows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${electionData?.title || "voters"}_details.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!electionData) {
    return <div>No election data available</div>;
  }

  const handleViewDetails = (voterId) => {
    navigate(`/election/${electionData?._id}/voter/${voterId}`);
  };

  const totalVoters = voters.length;
  const paginatedVoters = voters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (preLoader) {
    return <DashboardLoader />;
  }

  return (
    <>
      {fileMenu && (
        <UploadVoter
          electionData={electionData}
          fileMenu={fileMenu}
          setFileMenu={setFileMenu}
        />
      )}
      <div className="min-h-screen flex flex-col gap-6">
        {voters.length > 0 ? (
          <>
            <div className="flex flex-col gap-4 lg:flex-row justify-between items-center">
              <form onSubmit={handleSearchSubmit} className="w-full lg:w-[45%]">
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                    placeholder="Search voter name"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </div>
              </form>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFileMenu(!fileMenu)}
                  className="bg-blue-600 text-sm lg:text-base text-white px-4 py-2 gap-2 flex items-center justify-center rounded-md hover:bg-blue-700 transition"
                >
                  <VscFileSubmodule size={20} />
                  Upload File
                </button>

                <Link to={`/election/${electionData?._id}/voters/create`}>
                  <button className="bg-blue-600 text-sm lg:text-base text-white px-4 py-2 gap-2 flex items-center justify-center rounded-md hover:bg-blue-700 transition">
                    <IoAddSharp size={20} />
                    Add Voter
                  </button>
                </Link>
              </div>

              <button
                onClick={downloadCSV}
                className="bg-green-600 text-sm lg:text-base text-white px-4 py-2 gap-2 flex items-center justify-center rounded-md hover:bg-green-700 transition"
              >
                Download Voters
              </button>
            </div>

            <div className="flex justify-between items-center ">
              <p>Total Voters: {totalVoters}</p>
            </div>

            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg bg-white">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="bg-blue-800 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3">#</th>{" "}
                    {/* Serial Number Column */}
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Phone</th>
                    <th className="px-4 py-3">Voted</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {paginatedVoters.map((voter, index) => (
                    <tr key={voter._id} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-4 text-gray-900 font-medium">
                        {index + 1} {/* Display Serial Number */}
                      </td>
                      <td className="px-4 whitespace-nowrap py-4 font-medium text-gray-900">
                        {voter.fullName}
                      </td>
                      <td className="px-4 whitespace-nowrap py-4">
                        {voter.email ? voter.email : "null"}
                      </td>
                      <td className="px-4 whitespace-nowrap py-4">
                        0{voter.phone}
                      </td>
                      <td className="px-4 whitespace-nowrap py-4">
                        {voter.isVerified ? "Yes" : "No"}
                      </td>
                      <td className="px-4 py-4">
                        <button
                          onClick={() => handleViewDetails(voter._id)}
                          className="text-blue-600 whitespace-nowrap hover:underline"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${
                  currentPage === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Previous
              </button>

              {Array.from({
                length: Math.ceil(totalVoters / itemsPerPage),
              }).map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 text-sm lg:text-base rounded ${
                      page === currentPage
                        ? "bg-blue-700  text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, Math.ceil(totalVoters / itemsPerPage))
                  )
                }
                disabled={currentPage === Math.ceil(totalVoters / itemsPerPage)}
                className={`px-3 py-1 rounded ${
                  currentPage === Math.ceil(totalVoters / itemsPerPage)
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center min-h-[70vh] items-center h-full w-full">
            <div className="flex flex-col justify-center items-center gap-2">
              <PiUsersFourFill size={50} />
              <h1 className="text-xl lg:text-4xl">Add Voters</h1>
              <p className="text-center lg:text-base text-sm">
                Get started by adding voters to{" "}
                <span className="text-blue-600 font-medium">
                  {electionData?.title}
                </span>
              </p>
              <div className=" flex items-center gap-3">
                <Link to={`/election/${electionData?._id}/voters/create`}>
                  <button className="bg-blue-600 text-white px-4 py-2 gap-2 flex items-center justify-center rounded-md hover:bg-blue-700 transition">
                    <IoAddSharp size={20} />
                    Add Voter
                  </button>
                </Link>

                <button
                  onClick={() => setFileMenu(!fileMenu)}
                  className="bg-blue-600 text-sm lg:text-base text-white px-4 py-2 gap-2 flex items-center justify-center rounded-md hover:bg-blue-700 transition"
                >
                  <VscFileSubmodule size={20} />
                  Upload File
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ElectionVoters;
