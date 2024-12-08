import React, { useState } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { PiUsersFourFill } from "react-icons/pi";
import { Link, useOutletContext } from "react-router-dom";

const ElectionVoters = () => {
  const [menu, setMenu] = useState(false);
  const [ballot, setBallot] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submit logic here
    console.log("Search submitted for:", searchQuery);
    setBallot(true);
  };

  const electionData = useOutletContext();

  if (!electionData) {
    return <div>No election data available</div>;
  }

  console.log(electionData);

  // const electionName = "Most Beautiful Girl in Nigeria";

  return (
    <>
      <div className="min-h-screen  bg-gray-100 p-6 flex flex-col gap-6">
        {/* header */}
        {/* <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Most Beautiful Girl Nigeria
            </h1>

            <span className="bg-yellow-100 text-yellow-600 text-sm px-3 py-1 rounded-full">
              Building
            </span>
          </div>
        </div> */}
        {/* <div className="bg-white shadow-md p-6">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-gray-900">
              <h1>{currentPage ? currentPage : "Dashboard"}</h1>
            </div>
            <div className="text-sm text-gray-600">
              <p>{electionName}</p>
              <p>
                Status:{" "}
                <span
                  className={`font-semibold ${
                    electionStatus === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {electionStatus}
                </span>
              </p>
              <p>
                Type: <span className="font-semibold">{electionType}</span>
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {currentPage ? currentPage : "Dashboard"}
            </h1>

            <span className="bg-yellow-100 text-yellow-600 text-sm px-3 py-1 rounded-full">
              {electionStatus}
            </span>
          </div>

          <div className="flex flex-col text-sm text-gray-600">
            <p>{electionName}</p>
            <p>Type: {electionType}</p>
          </div>
        </div> */}

        {ballot ? (
          <>
            {/* Search Bar with Button */}
            <form onSubmit={handleSearchSubmit} className=" w-[45%]">
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
                    <th scope="col" className="px-6 py-3">
                      Registered On
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {/* Example Row */}
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      John Doe
                    </td>
                    <td className="px-6 py-4">johndoe@example.com</td>
                    <td className="px-6 py-4">+1 234 567 890</td>
                    <td className="px-6 py-4">
                      <span className=" text-green-500  px-2.5 py-1 rounded">
                        Verified
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">2024-12-08</td>
                  </tr>
                  {/* Example Row */}
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Jane Smith
                    </td>
                    <td className="px-6 py-4">janesmith@example.com</td>
                    <td className="px-6 py-4">+44 123 456 7890</td>
                    <td className="px-6 py-4">
                      <span className=" text-red-500 t px-2.5  py-1 rounded">
                        Unverified
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">2024-11-22</td>
                  </tr>
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

                <Link to={"/election/12345/voter/create"}>
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
