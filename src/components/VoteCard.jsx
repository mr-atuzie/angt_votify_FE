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
      className="w-[95%] lg:w-[50%] mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Election Info */}
      <div className="px-4 py-6 sm:px-6 sm:py-8 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wide">
          {ballot.title}
        </h1>
        <p className="text-sm sm:text-base text-gray-200 lg:mt-2">
          {ballot.description}
        </p>
      </div>

      {/* Ballot Options */}
      <form>
        <div className="p-4 sm:p-6 grid gap-4">
          {ballot.votingOptions.length > 0 ? (
            ballot.votingOptions.map((option) => (
              <label
                key={option._id}
                className="flex items-center justify-between gap-4 bg-gray-50 shadow-md p-4 sm:p-6 rounded-lg border border-gray-300 cursor-pointer"
              >
                <div className=" flex gap-2 lg:gap-4 items-center">
                  {/* Profile Picture */}
                  <img
                    className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-full border-4 border-blue-600"
                    src={option.image}
                    alt={option.name || "Option Image"}
                  />

                  {/* Option Details */}
                  <div>
                    <h2 className="font-semibold text-gray-800 capitalize">
                      {option.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 capitalize">
                      {option.description}
                    </p>
                  </div>
                </div>

                {/* Radio Button */}
                <input
                  type="radio"
                  name={`candidate-${ballot._id}`}
                  value={option._id}
                  onChange={(e) => setVoteFor(e.target.value)}
                  className="w-5 h-5 border-gray-300 text-blue-600 focus:ring-blue-400 rounded-full"
                />
              </label>
            ))
          ) : (
            <p className="text-center text-gray-500">No options available.</p>
          )}
        </div>

        {/* Vote Button */}
        <div className="flex justify-center items-center mt-6 mb-4">
          {hasVoted ? (
            <button
              disabled
              className="text-sm sm:text-base bg-gray-600 cursor-not-allowed text-white font-medium rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-md flex items-center"
            >
              <span className="mr-2">Vote Already Submitted</span>
              <IoFingerPrintSharp size={24} />
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => handleCastVote(e, ballot._id)}
              className="text-sm sm:text-base bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-md flex items-center transition-transform transform hover:scale-105"
            >
              <span className="mr-2">
                {loading ? "Loading..." : "Submit Your Vote"}
              </span>
              <IoFingerPrintSharp size={24} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VoteCard;
