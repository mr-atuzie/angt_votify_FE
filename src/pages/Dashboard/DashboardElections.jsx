import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import DashboardLoader from "../../components/DashboardLoader";
import DashboardElectionCard from "../../components/DashboardElectionCard";

const DashboardElections = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [preLoader, setPreLoader] = useState(true);
  const [elections, setElections] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submit logic here
    console.log("Search submitted for:", searchQuery);
  };

  useEffect(() => {
    setPreLoader(true);
    const getElection = async () => {
      try {
        const response = await axios.get(`/api/v1/user/election`);
        console.log(response.data);
        setElections(response.data);
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
    <div className="min-h-screen ">
      <div className=" w-full mx-auto flex flex-col gap-5">
        {elections.length > 0 ? (
          <>
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
            <div className=" flex flex-col gap-5">
              {elections.map((election) => {
                return (
                  <DashboardElectionCard
                    key={election?._id}
                    election={election}
                    setElections={setElections}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No Election yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardElections;
