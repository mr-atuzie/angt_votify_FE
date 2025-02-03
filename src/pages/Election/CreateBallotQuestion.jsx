import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useOutletContext } from "react-router-dom";
import api from "../../axiosInstance";

const CreateBallotQuestion = () => {
  const electionData = useOutletContext();

  const initialState = {
    title: "",
    description: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { title, description } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!title) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    try {
      const { data } = await api.post(`/api/v1/ballot/create-ballot`, {
        title,
        description,
        electionId: electionData?._id,
      });

      setLoading(false);

      toast.success("Ballot created successfully");
      console.log(data);

      const redirectPath = `/election/${electionData._id}/ballot/create-option/${data.ballot._id}`;

      navigate(redirectPath);
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

  return (
    <div className="min-h-screen  bg-gray-100 lg:p-6 flex flex-col gap-6">
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

      <div className="bg-white rounded-lg shadow-lg w-full lg:w-[60%] mx-auto">
        {/* Header */}
        <div className="bg-blue-800 uppercase py-4 text-center text-white text-lg font-bold">
          Add Ballot Details
        </div>

        {/* Form */}
        <form className=" p-4 lg:p-8">
          {/* Election Title */}
          <p className="text-center text-sm lg:text-base capitalize text-gray-700 mb-8">
            Create a ballot question for the{" "}
            <span className="text-blue-600 font-semibold">
              {electionData?.title}
            </span>{" "}
            Election
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
                value={description}
                onChange={handleInputChange}
                id="description"
                name="description"
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

            <button
              className="text-sm lg:text-base w-40 py-3 bg-red-600 rounded-lg text-white hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 transition-all disabled:bg-gray-300"
              type="button"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBallotQuestion;
