import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateBallotQuestion = () => {
  const initialState = {
    title: "",
    ballotDescription: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { title, ballotDescription } = formData;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    localStorage.setItem("text", formData);

    navigate("/election/12345/ballot/option");
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
        <div className="bg-blue-800 uppercase py-4 text-center text-white text-lg font-bold">
          Add Ballot Question
        </div>

        {/* Form */}
        <form className="p-8">
          {/* Election Title */}
          <p className="text-center text-gray-700 mb-8">
            Create a ballot question for the election:{" "}
            <span className="text-blue-600 font-semibold">
              Most Beautiful Girl in Nigeria
            </span>
          </p>

          {/* Ballot Title */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="title">
                Ballot Title
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                id="title"
                placeholder="E.g., Most Beautiful Girl in Lagos"
                required
              />
              <small className="text-gray-500">
                Provide a clear and descriptive title for this ballot.
              </small>
            </div>

            {/* Description */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={ballotDescription}
                onChange={handleInputChange}
                id="ballotDescription"
                name="ballotDescription"
                placeholder="Provide additional details for this ballot question..."
              ></textarea>
              <small className="text-gray-500">
                Add more context to help voters understand the purpose of this
                ballot.
              </small>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 items-center justify-center">
            <button
              className="text-sm lg:text-base w-40 py-3 bg-blue-600 rounded-lg text-white hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all disabled:bg-gray-300"
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Loading..." : "Save"}
            </button>
            <Link to="/election/12345/ballot/6789/create-ballot-option">
              <button
                className="text-sm lg:text-base w-40 py-3 bg-red-600 rounded-lg text-white hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 transition-all disabled:bg-gray-300"
                type="button"
                disabled={loading}
              >
                {loading ? "Loading..." : "Cancel"}
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBallotQuestion;
