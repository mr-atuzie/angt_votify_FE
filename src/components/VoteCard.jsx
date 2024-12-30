import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoFingerPrintSharp } from "react-icons/io5";

const VoteCard = ({
  ballot,
  hasVoted,
  voteFor,
  setVoteFor,
  voterId,
  electionId,
  setBallots,
}) => {
  const [loading, setLoading] = useState(false);

  const handleCastVote = async (e, ballotId) => {
    e.preventDefault();

    if (!voteFor) {
      toast.error("Please select an option before submitting your vote.");
      return;
    }

    setLoading(true);

    console.log(voteFor);

    try {
      const { data } = await axios.post(`/api/v1/voter/cast-vote`, {
        votingOptionId: voteFor,
        voterId,
        ballotId,
      });

      // votingOptionId, voterId;
      console.log(data);
      const response = await axios.get(`/api/v1/ballot/election/${electionId}`);

      setBallots(response.data);
      setLoading(false);
      toast.success("Vote successfully submitted!");

      // Optionally refresh or update the UI if necessary
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setLoading(false);
      toast.error(`Failed to cast vote: ${message}`);
    }
  };
  return (
    <div
      key={ballot._id}
      className=" w-full lg:w-[50%] mx-auto my-12 bg-white rounded-lg shadow-2xl overflow-hidden"
    >
      {/* Election Info */}
      <div className="lg:px-8  lg:py-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <h1 className="text-xl lg:text-2xl uppercase font-bold tracking-wide">
          {ballot.title}
        </h1>
        <p className="text-gray-200 text-sm">{ballot.description}</p>
      </div>

      {/* Ballot Options */}
      <form>
        <div className=" p-4  lg:p-8 grid grid-cols-1 gap-6">
          {ballot.votingOptions.length > 0 ? (
            ballot.votingOptions.map((option) => (
              <label
                key={option._id}
                className="flex flex-col lg:flex-row items-center gap-6 bg-gradient-to-b from-gray-50 to-gray-100 shadow-lg p-6 rounded-xl border border-gray-300 cursor-pointer"
              >
                {/* Profile Picture */}
                <img
                  className="lg:w-20 lg:h-20 h-14 w14 object-cover rounded-full border-4 border-blue-600"
                  src={option.image}
                  alt={option.name || "Option Image"}
                />

                {/* Option Details */}
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-800 capitalize">
                    {option.name}
                  </h2>
                  <p className="text-gray-500 text-sm lg:text-base capitalize">
                    {option.description}
                  </p>
                </div>

                {/* Radio Button */}
                <input
                  type="radio"
                  name={`candidate-${ballot._id}`}
                  value={option._id}
                  onChange={(e) => setVoteFor(e.target.value)}
                  className="w-6 h-6 border-2 border-gray-300 text-blue-700 focus:ring-2 focus:ring-blue-400 rounded-full"
                />
              </label>
            ))
          ) : (
            <p className="text-center text-gray-500">No options available.</p>
          )}
        </div>

        {/* Vote Button */}
        <div className="flex justify-center items-center mt-8 mb-10">
          {hasVoted ? (
            <button
              disabled
              className="flex text-sm lg:text-base items-center bg-gray-600 cursor-not-allowed tracking-wide text-white font-semibold rounded-full px-6 py-3 shadow-md"
            >
              <span className="mr-3 text-lg">Vote Already Submitted</span>
              <IoFingerPrintSharp size={35} />
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => handleCastVote(e, ballot._id)}
              className="flex  text-sm lg:text-base items-center bg-blue-700 hover:bg-blue-800 tracking-wide text-white font-semibold rounded-full px-6 py-3 shadow-md transition transform hover:scale-105"
            >
              <span className="mr-3">
                {loading ? "Loading..." : "Submit Your Vote"}
              </span>
              <IoFingerPrintSharp size={35} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VoteCard;
