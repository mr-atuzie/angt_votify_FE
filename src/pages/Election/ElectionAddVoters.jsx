import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ElectionAddVoters = () => {
  const initialState = {
    name: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialState);
  // const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState(""); // Initial state for phone number

  const { name, email } = formData;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);

    localStorage.setItem("text", formData);

    navigate("/election/12345/voters");
  };

  return (
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

      <div className="bg-white rounded-lg shadow-lg w-[60%] mx-auto">
        {/* Header */}
        <div className="bg-blue-800 py-4 text-center text-white text-lg font-bold">
          Add Voter
        </div>

        {/* Form */}
        <form className="p-8" onSubmit={handleSubmit}>
          <p className="text-center text-gray-700 mb-8">
            Add a voter to the election:{" "}
            <span className="text-blue-600 font-semibold">
              Most Beautiful Girl Nigeria
            </span>
          </p>

          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="text"
              placeholder="Enter voter's full name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="email"
              placeholder="Enter voter's email address"
              required
              value={email}
              onChange={handleInputChange}
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>
            {/* <PhoneInput
              country={"ng"} // Default country
              value={phone}
              dropdownStyle={{ height: "50px" }}
              onChange={setPhone} // This simplifies updating the state
              inputClass="!border-gray-300 !bg-gray-50 !rounded-lg  !w-full !text-sm !focus:ring-2 !focus:ring-blue-300"
              buttonClass="!border-gray-300 !bg-gray-50 !py-3 !h-30 !rounded-l-lg !focus:ring-2 !focus:ring-blue-300"
            /> */}
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

          {/* Submit Buttons */}
          <div className="flex gap-4 items-center justify-center">
            <button
              className="text-sm lg:text-base w-40 py-3 bg-blue-600 rounded-lg text-white hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all"
              type="submit"
            >
              Save
            </button>
            <button
              className="text-sm lg:text-base w-40 py-3 bg-red-600 rounded-lg text-white hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 transition-all"
              type="button"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ElectionAddVoters;
