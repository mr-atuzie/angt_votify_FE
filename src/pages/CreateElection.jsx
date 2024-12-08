import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateElection = () => {
  const initialState = {
    title: "",
    startDate: "",
    endDate: "",
    electionType: "",
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  // const [loading, setLoading] = useState(false);

  const { title, startDate, endDate, electionType } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    navigate("/election/12345/overview");
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="w-full flex justify-center items-center bg-blue-50 min-h-screen">
      <div className="w-[90%] bg-white shadow-lg rounded-lg lg:w-[40%] mx-auto">
        {/* Header */}
        <div className="w-full bg-blue-800 text-white text-center py-4 ">
          <h1 className="text-xl uppercase font-semibold">Create Election</h1>
        </div>

        <div className="py-10 px-6 lg:px-8">
          {/* Instruction */}
          <p className="mb-6 text-gray-600 text-center text-sm">
            Fill out the form below to create a new election.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Input Fields */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {/* Title */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="title"
                >
                  Election Title
                </label>
                <input
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  id="title"
                  placeholder="E.g. Most Beautiful Girl, Class President"
                  required
                />
              </div>

              {/* Dates */}
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Election Type */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="electionType"
                >
                  Election Type
                </label>
                <select
                  id="electionType"
                  name="electionType"
                  value={electionType}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="single">Single Choice</option>
                  <option value="multiple">Multiple Choice</option>
                  <option value="ranked">Ranked Choice</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 items-center justify-center">
              <Link to={"/election/12345/overview"}>
                <button
                  className="text-sm w-40 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all"
                  type="submit"
                >
                  Save
                </button>
              </Link>

              <button
                className="text-sm w-40 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 transition-all"
                type="button"
                onClick={back}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateElection;
