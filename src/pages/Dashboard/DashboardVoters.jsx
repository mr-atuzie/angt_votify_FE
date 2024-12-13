import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import toast from "react-hot-toast";
import DashboardLoader from "../../components/DashboardLoader";
import { IoAddSharp } from "react-icons/io5";
import { getUserInitials } from "../../utils";

const DashboardVoters = () => {
  const initialState = {
    name: "",
    email: "",
    election: "",
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [preLoader, setPreLoader] = useState(true);
  const [elections, setElections] = useState([]);
  const [electionId, setElectionId] = useState("");

  const { name, email, election } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log({ name, email, phone, election, electionId });

    if (!name || !email || !phone || !electionId) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    try {
      const { data } = await axios.post(`/api/v1/voter`, {
        fullName: name,
        email,
        phone,
        electionId,
      });

      setLoading(false);

      console.log(data);
      setFormData(initialState);
      setElectionId("");
      toast.success("Voter added to election");

      // const redirectPath = `/election/${electionId}/voters`;

      // navigate(redirectPath);
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
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      <div className="flex  justify-between ">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Voters Mangagement
          </h1>
          <h1 className="text-gray-500">
            Welcome Back, <span className="text-blue-600">Rex</span>
          </h1>
        </div>

        <div className=" flex  gap-5  items-center ">
          <Link to={"/create-election"}>
            <button className="bg-blue-600 flex gap-2 items-center text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300">
              <span>
                <IoAddSharp size={20} />
              </span>
              <span> Add Election</span>
            </button>
          </Link>

          <button className="bg-white shadow-md font-medium tracking-wider uppercase border border-blue-600 text-blue-600  px-4 py-2 w-12 h-12  text-lg text-center flex justify-center items-center  rounded-full hover:bg-blue-700 transition">
            {getUserInitials("Atuzie Rex")}
          </button>
        </div>
      </div>

      <div className="bg-white w-[90%] rounded-lg shadow-lg lg:w-[60%] mx-auto">
        {/* Header */}
        <div className="bg-blue-800 uppercase py-4 text-center text-white text-lg font-bold">
          Add Voter
        </div>

        {/* Form */}
        <form className="p-8" onSubmit={handleSubmit}>
          <p className="text-center text-gray-700 mb-8">
            Add a voter to the election of your choice
          </p>

          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="text"
              name="name"
              placeholder="Enter voter's full name"
              value={name}
              onChange={handleInputChange}
              required
            />
            <small className="text-xs text-gray-600 mt-1 block">
              Name as you'd like it to appear in the contest.
            </small>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              name="email"
              type="email"
              placeholder="Enter voter's email address"
              required
              value={email}
              onChange={handleInputChange}
            />
            <small className="text-xs text-gray-600 mt-1 block">
              Make sure email address is correct
            </small>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>

            <PhoneInput
              country={"ng"} // Default country
              value={phone}
              onChange={setPhone} // Update state with selected number
              inputClass="phone-input-field" // Apply custom class to input field
              buttonClass="phone-input-button" // Apply custom class to button
              containerClass="phone-input-container" // Apply custom class to container
            />
            <small className="text-gray-500">
              Ensure this number is correct to receive the verification code via
              SMS.
            </small>
          </div>

          {/* Election Type */}
          <div className=" mb-14">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="election"
            >
              Election
            </label>
            <select
              id="election"
              name="election"
              value={election}
              onChange={(e) => setElectionId(e.target.value)}
              className="border placeholder:text-gray-500 border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option disabled value={""}>
                Select Election
              </option>
              {elections.length > 0 &&
                elections.map((election) => {
                  return (
                    <option
                      className=" text-sm"
                      key={election?._id}
                      value={election?._id}
                    >
                      {election?.title}
                    </option>
                  );
                })}
              {/* <option value="multiple">Class President 2024/2025</option>
              <option value="ranked">Employee of the month</option> */}
            </select>
            <small className="text-gray-500">
              Select Election you will like to add voter to
            </small>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 items-center justify-center">
            <button
              className="text-sm lg:text-base w-40 py-3 bg-blue-600 rounded-lg text-white hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all"
              type="submit"
              disabled={loading}
            >
              {loading ? "Saving" : "Save"}
            </button>
            <button
              className="text-sm lg:text-base w-40 py-3 bg-red-600 rounded-lg text-white hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 transition-all"
              type="button"
              onClick={() => navigate(-1)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardVoters;
