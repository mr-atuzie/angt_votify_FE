import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosCloudUpload } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { PiUsersFourFill } from "react-icons/pi";
import { Link, useOutletContext, useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const ElectionVoters = () => {
  const [menu, setMenu] = useState(false);
  const [voters, setVoters] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [preLoader, setPreLoader] = useState(false);
  const electionData = useOutletContext();

  const { id } = useParams();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setPreLoader(true);
    const getVoters = async () => {
      try {
        const response = await axios.get(`/api/v1/voter/election/${id}`);
        // console.log(response.data.voters);
        setPreLoader(false);
        setVoters(response.data.voters);
        return response.data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        //  setLoading(false);
        setPreLoader(false);
        toast.error(message);
      }
    };

    getVoters();
  }, [id]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submit logic here
    console.log("Search submitted for:", searchQuery);
    // setVoters(true);
  };

  if (!electionData) {
    return <div>No election data available</div>;
  }

  if (preLoader) {
    return <Loader />;
  }

  return (
    <>
      <div className="min-h-screen  bg-gray-100 p-6 flex flex-col gap-6">
        {voters.length > 0 ? (
          <>
            <div className=" flex justify-between items-center ">
              {/* Search Bar with Button */}
              <form onSubmit={handleSearchSubmit} className=" w-[45%] ">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
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
                    placeholder="Search voter name"
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

              <div className=" flex gap-2 ">
                <button className="bg-white border w-36 border-blue-500 text-blue-500 flex items-center justify-center gap-2    rounded-md hover:bg-blue-700 transition">
                  <span>
                    <IoIosCloudUpload size={20} />
                  </span>
                  <span>Import</span>
                </button>

                <Link to={`/election/${electionData?._id}/voters/create`}>
                  <button
                    onClick={() => setMenu(!menu)}
                    className="bg-blue-600  text-white px-4 py-2 gap-2 flex items-center justify-center rounded-md hover:bg-blue-700 transition"
                  >
                    <span>
                      <IoAddSharp size={20} />
                    </span>
                    Add Voter
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg bg-white">
              {/* Table Header */}
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="bg-blue-800 text-white uppercase text-xs">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Verified
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                      Registered On
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {voters.map((voter) => (
                    <tr key={voter._id} className="bg-white hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {voter.fullName}
                      </td>
                      <td className="px-6 py-4">{voter.email}</td>
                      <td className="px-6 py-4">{voter.phone}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-1 rounded ${
                            voter.isVerified ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {voter.isVerified ? "Verified" : "Unverified"}
                        </span>
                      </td>
                      {/* <td className="px-6 py-4 text-gray-500">
                        {new Date(voter.createdAt).toLocaleDateString()}
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className=" flex justify-center min-h-[70vh] items-center h-full w-full">
            <div className=" flex flex-col justify-center items-center gap-2">
              <div className=" flex items-center gap-2">
                <span>
                  <PiUsersFourFill size={50} />
                </span>
                <h1 className=" text-4xl ">Add Voters</h1>
              </div>

              <p>
                Get started by adding Voters to{" "}
                <span className="text-blue-600 font-medium">
                  Most Beautiful Girl Nigeria
                </span>{" "}
                Election
              </p>

              <div className=" flex gap-2 mt-4">
                <button className="bg-white border w-36 border-blue-500 text-blue-500 flex items-center justify-center gap-2    rounded-md hover:bg-blue-700 transition">
                  <span>
                    <IoIosCloudUpload size={20} />
                  </span>
                  <span>Import</span>
                </button>

                <Link to={`/election/${electionData?._id}/voters/create`}>
                  <button
                    onClick={() => setMenu(!menu)}
                    className="bg-blue-600  text-white px-4 py-2 gap-2 flex items-center justify-center rounded-md hover:bg-blue-700 transition"
                  >
                    <span>
                      <IoAddSharp size={20} />
                    </span>
                    Add Voter
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ElectionVoters;
