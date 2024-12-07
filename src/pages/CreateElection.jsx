import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateElection = () => {
  const initialState = {
    title: "",
    startDate: "",
    endDate: "",
    electionType: "",
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { title, startDate, endDate, electionType } = formData;

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
    <div className="w-full  flex justify-center items-center  bg-blue-50 min-h-screen">
      <div className="w-[90%] bg-white shadow-lg rounded-lg lg:w-[40%] mx-auto py-10 lg:py-12 lg:px-6 ">
        {/* Welcome Back Section */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center mb-8 text-blue-600">
            <h4 className="text-5xl font-extrabold -mt-2">Create Election</h4>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            {/* title */}
            <div>
              <label
                className="block text-sm   mb-1 capitalize"
                htmlFor="title"
              >
                election title
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="title"
                name="title"
                value={title}
                onChange={handleInputChange}
                id="title"
                placeholder="E.g Most Beautiful Girl, Class Presidnt"
                required
              />
            </div>

            <div className="flex gap-6">
              {/* Start Date */}
              <div className="w-full">
                <label
                  className="block text-sm mb-1 capitalize"
                  htmlFor="startDate"
                >
                  Start Date
                </label>
                <input
                  id="startDate"
                  name="startDate"
                  value={startDate}
                  onChange={handleInputChange}
                  type="datetime-local"
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              {/* End Date */}
              <div className="w-full">
                <label
                  className="block text-sm mb-1 capitalize"
                  htmlFor="endDate"
                >
                  End Date
                </label>
                <input
                  id="endDate"
                  name="endDate"
                  value={endDate}
                  onChange={handleInputChange}
                  type="datetime-local"
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>

            {/* Election Type */}
            <div>
              <label className="block mb-1" htmlFor="electionType">
                Election Type
              </label>
              <select
                id="electionType"
                name="electionType"
                value={electionType}
                onChange={handleInputChange}
                className="border placeholder:text-gray-500 border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="" disabled selected>
                  Select type
                </option>
                <option value="single">Single Choice</option>
                <option value="multiple">Multiple Choice</option>
                <option value="ranked">Ranked Choice</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}

          <button
            disabled={loading}
            className="text-sm lg:text-base w-40 py-3  text-center bg-blue-600 rounded-lg text-white  hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all disabled:bg-gray-300"
            type="submit"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateElection;
