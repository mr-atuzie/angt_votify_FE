import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { useParams } from "react-router-dom";
import { IoFingerPrintSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import DashboardLoader from "../../components/DashboardLoader";

const Voting = () => {
  const { electionId, voterId } = useParams();

  const [ballots, setBallots] = useState([]);
  const [preLoader, setPreLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  const [voteFor, setVoteFor] = useState("");

  console.log(ballots);

  useEffect(() => {
    setPreLoader(true);
    const getBallot = async () => {
      try {
        const response = await axios.get(
          `/api/v1/ballot/election/${electionId}`
        );

        setBallots(response.data);
        setPreLoader(false);
        return response.data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        //  setLoading(false);
        setPreLoader(false);
        toast.error(message);
      }
    };

    getBallot();
  }, [electionId]);

  const handleCastVote = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(voteFor);
    console.log(voterId);

    // try {
    //   await axios.post(`/api/v1/user/login`, {});

    //   setLoading(false);

    //   toast.success("Login successfully");
    //   navigate("/dashboard");
    // } catch (error) {
    //   const message =
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //     error.message ||
    //     error.toString();

    //   setLoading(false);
    //   toast.error(message);
    // }
  };

  if (preLoader) {
    return <DashboardLoader />;
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      {/* Header */}
      <header className="w-full py-10 flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white shadow-lg">
        <h1 className="text-4xl font-extrabold uppercase tracking-widest text-center">
          Department of Medicine Election
        </h1>
      </header>

      {ballots.length > 0 &&
        ballots.map((ballot) => {
          return (
            <div
              key={ballot?._id}
              className="w-[60%] mx-auto my-12 bg-white rounded-lg shadow-2xl overflow-hidden"
            >
              {/* Election Info */}
              <div className="px-8 py-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                <h1 className="text-2xl uppercase font-bold tracking-wide">
                  {ballot?.title}
                </h1>
                <p className=" text-gray-200 text-sm">{ballot?.description}</p>
              </div>

              {/* Ballot Options */}
              <form>
                <div className="p-8 grid grid-cols-1 gap-6">
                  {ballot.votingOptions.length > 0 ? (
                    ballot?.votingOptions.map((option) => (
                      <label
                        key={option._id}
                        className="flex flex-col lg:flex-row items-center gap-6 bg-gradient-to-b from-gray-50 to-gray-100 shadow-lg p-6 rounded-xl border border-gray-300 cursor-pointer"
                      >
                        {/* Profile Picture */}
                        <img
                          className="w-24 h-24 object-cover rounded-full border-4 border-blue-600"
                          src={option?.image}
                          alt={option?.name || "Option Image"}
                        />

                        {/* Option Details */}
                        <div className="flex-1">
                          <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                            {option?.name}
                          </h2>
                          <p className="text-gray-500 ">
                            {option?.description}
                          </p>
                        </div>

                        {/* Radio Button */}
                        <input
                          type="radio"
                          name="candidate"
                          value={option._id}
                          onChange={(e) => setVoteFor(e.target.value)}
                          className="w-6 h-6 border-2 border-gray-300 text-blue-700 focus:ring-2 focus:ring-blue-400 rounded-full"
                        />
                      </label>
                    ))
                  ) : (
                    <p className="text-center text-gray-500">
                      No ballots available.
                    </p>
                  )}
                </div>
                {/* Vote Button */}

                <div className="flex justify-center items-center mt-8 mb-10">
                  <button
                    type="submit"
                    onClick={handleCastVote}
                    className="flex items-center bg-blue-700 hover:bg-blue-800 tracking-wide text-white font-semibold rounded-full px-6 py-3 shadow-md transition transform hover:scale-105"
                  >
                    <span className="mr-3 text-lg">
                      {loading ? "loading" : "Submit your vote"}
                    </span>
                    <IoFingerPrintSharp size={35} />
                  </button>
                  {/* {ballot.votingOptions.votes.includes(voterId) ? (
                    <button
                      disabled
                      className="flex items-center bg-gray-600 hover:bg-gray-800 tracking-wide text-white font-semibold rounded-full px-6 py-3 shadow-md transition transform hover:scale-105"
                    >
                      <span className="mr-3 text-lg">
                        Vote Already Submitted
                      </span>
                      <IoFingerPrintSharp size={35} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleCastVote}
                      className="flex items-center bg-blue-700 hover:bg-blue-800 tracking-wide text-white font-semibold rounded-full px-6 py-3 shadow-md transition transform hover:scale-105"
                    >
                      <span className="mr-3 text-lg">Submit Your Vote</span>
                      <IoFingerPrintSharp size={35} />
                    </button>
                  )} */}
                </div>
              </form>
            </div>
          );
        })}
    </div>
  );
};

export default Voting;
