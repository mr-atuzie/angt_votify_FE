import React, { useState } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const DashboardVoters = () => {
  const initialState = {
    name: "",
    email: "",
    electionType: "",
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { name, email, electionType } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    navigate("/election/12345/overview");
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      <div className="flex items-start justify-between ">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Voters Managements
          </h1>
          <h1 className="text-gray-500">
            Welcome Back, <span className="text-blue-600">Rex</span>
          </h1>
        </div>

        <div className=" flex items-center gap-6">
          {/* <Link to={"/create-election"}>
            <button className="bg-white flex gap-2 items-center border border-blue-600 text-blue-600 px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300">
              <span>
                <IoIosCloudUpload size={20} />
              </span>
              <span>Import</span>
            </button>
          </Link> */}
          <Link to={"/create-election"}>
            <button className="bg-blue-600 flex gap-2 items-center text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300">
              <span>
                <IoIosCloudUpload size={20} />
              </span>
              <span>Import Voters</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="w-[90%] bg-white shadow-lg rounded-lg lg:w-[50%] mx-auto py-10 lg:py-12 lg:px-6 ">
        {/* Welcome Back Section */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center mb-8 text-blue-600">
            <h4 className="text-5xl font-extrabold -mt-2">Add Voter</h4>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm  mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
                id="name"
                placeholder="Enter your voter name"
                required
              />
              <small className="text-xs text-gray-600 mt-1 block">
                Name as you'd like it to appear in the contest.
              </small>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                id="email"
                placeholder="Enter your voter Email"
                required
              />
              <small className="text-xs text-gray-600 mt-1 block">
                Make sure your email address is correct.
              </small>
            </div>

            {/* Election Type */}
            <div>
              <label className="block text-sm mb-1" htmlFor="electionType">
                Election
              </label>
              <select
                id="electionType"
                name="electionType"
                value={electionType}
                onChange={handleInputChange}
                className="border placeholder:text-gray-500 border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="" disabled selected>
                  Select Election
                </option>
                <option value="single">Most beautiful girl in niigeria</option>
                <option value="multiple">Class President 2024/2025</option>
                <option value="ranked">Employee of the month</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}

          <button
            disabled={loading}
            className="text-sm lg:text-base w-40 py-3  text-center bg-blue-600 rounded-lg text-white  hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all disabled:bg-gray-300"
            type="submit"
          >
            {loading ? "Loading..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardVoters;
