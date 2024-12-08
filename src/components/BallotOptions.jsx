import React, { useState } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BallotOptions = () => {
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

    navigate("/election/12345/ballot");
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
          Mrs Nigeria
        </div>
        <form className="p-10">
          <h4 className="text-5xl text-center text-blue-800 mb-6 font-extrabold">
            Create Ballot Options
          </h4>

          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            {/* Add Photo */}
            <div>
              <label
                className="block text-sm mb-1 capitalize"
                htmlFor="addPhoto"
              >
                Add Photo
              </label>
              <div className="bg-gray-100 rounded-lg border-2 border-gray-600 flex flex-col justify-center items-center h-40 w-40 border-dashed">
                <div className="flex gap-1 text-gray-500 items-center">
                  <span>
                    <IoIosCloudUpload />
                  </span>
                  <span className="text-xs">Upload image</span>
                </div>
              </div>
              <small className="text-gray-500">
                Upload an image to represent this option (e.g., a photo for a
                candidate).
              </small>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm mb-1 capitalize" htmlFor="title">
                Title
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                id="title"
                placeholder="E.g. Most Beautiful Girl, Class President"
                required
              />
              <small className="text-gray-500">
                The title is what the voter is voting on. For example,
                "President" or "Most Beautiful Girl."
              </small>
            </div>

            {/* Description */}
            <div>
              <label
                className="block text-sm mb-1 capitalize"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                value={description}
                onChange={handleInputChange}
                id="description"
                name="description"
                placeholder="Enter detailed description for the ballot..."
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg h-40 block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
              <small className="text-gray-500">
                Provide additional details about the option. This helps voters
                understand the context.
              </small>
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

export default BallotOptions;
