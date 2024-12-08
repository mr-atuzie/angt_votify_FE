import React, { useState } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ElectionAddVoters = () => {
  const initialState = {
    title: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { title, description } = formData;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    localStorage.setItem("text", formData);

    navigate("/election/12345/voters");
  };

  return (
    <div className="min-h-screen  bg-gray-100 p-6 flex flex-col gap-6">
      {/* header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Most Beautiful Girl Nigeria
          </h1>

          <span className="bg-yellow-100 text-yellow-600 text-sm px-3 py-1 rounded-full">
            Building
          </span>
        </div>
      </div>

      <div className="  bg-white rounded-lg h-full w-[60%] mx-auto">
        <div className="  w-full bg-blue-800 py-3 font-medium text-center text-white text-lg">
          ADD VOTER
        </div>
        <form className="p-10">
          <p className=" text-center mb-8">
            Add Voter to{" "}
            <span className="text-blue-600 font-medium">
              Most Beautiful Girl Nigeria
            </span>{" "}
            Election
          </p>

          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            {/* Title */}
            <div>
              <label className="block text-sm mb-1 capitalize" htmlFor="title">
                Name
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                id="title"
                placeholder="Enter voter name"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 capitalize" htmlFor="title">
                Email Address
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                id="title"
                placeholder="Enter voter email address"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 capitalize" htmlFor="title">
                Phone Number
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                id="title"
                placeholder="Enter voter phone number"
                required
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 items-center">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="text-sm lg:text-base w-40 py-3 text-center bg-blue-600 rounded-lg text-white hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all disabled:bg-gray-300"
              type="submit"
            >
              {loading ? "Loading..." : "Save"}
            </button>

            <button
              disabled={loading}
              className="text-sm lg:text-base w-40 py-3 text-center bg-red-600 rounded-lg text-white hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 transition-all disabled:bg-gray-300"
              type="button"
            >
              {loading ? "Loading..." : "Close"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ElectionAddVoters;
