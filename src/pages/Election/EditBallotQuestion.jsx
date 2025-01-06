import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const EditBallotQuestion = () => {
  const electionData = useOutletContext();

  const navigate = useNavigate();

  const { ballotId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [preLoader, setPreLoader] = useState(false);

  // Fetch the ballot details when the component mounts
  useEffect(() => {
    setPreLoader(true);
    const fetchBallot = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/v1/ballot/${ballotId}`);

        setTitle(data?.title || "");
        setDescription(data?.description || "");
        setLoading(false);
        setPreLoader(false);
      } catch (error) {
        setLoading(false);
        setPreLoader(false);
        const message =
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch ballot.";
        toast.error(message);
      }
    };

    fetchBallot();
  }, [ballotId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!title) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    try {
      const { data } = await axios.patch(`/api/v1/ballot/${ballotId}`, {
        title,
        description,
        electionId: electionData?._id,
      });

      setLoading(false);

      toast.success("Ballot updated successfully");
      console.log(data);

      const redirectPath = `/election/${electionData._id}/ballot`;

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

  if (preLoader) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen  bg-gray-100 p-6 flex flex-col gap-6">
      <div className="bg-white rounded-lg shadow-lg w-[60%] mx-auto">
        {/* Header */}
        <div className="bg-blue-800 uppercase py-4 text-center text-white text-lg font-bold">
          Edit Ballot Details
        </div>

        {/* Form */}
        <form className="p-8">
          {/* Election Title */}
          <p className="text-center capitalize text-gray-700 mb-8">
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
                onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
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

export default EditBallotQuestion;
