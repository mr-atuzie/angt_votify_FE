import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import DashboardLoader from "../../components/DashboardLoader";
import VoteCard from "../../components/VoteCard";
import { FaPoll } from "react-icons/fa";

const Voting = () => {
  const { electionId, voterId } = useParams();

  const [ballots, setBallots] = useState([]);
  const [preLoader, setPreLoader] = useState(false);

  // Store selected votes per ballot ID
  const [selectedVotes, setSelectedVotes] = useState({});

  useEffect(() => {
    setPreLoader(true);
    const getBallot = async () => {
      try {
        const response = await axios.get(
          `/api/v1/ballot/election/${electionId}`
        );
        setBallots(response.data);
      } catch (error) {
        const message =
          error.response?.data?.message || error.message || error.toString();
        toast.error(message);
      } finally {
        setPreLoader(false);
      }
    };

    getBallot();
  }, [electionId]);

  // Handle updating the selected vote per ballot
  const handleVoteSelection = (ballotId, optionId) => {
    setSelectedVotes((prev) => ({
      ...prev,
      [ballotId]: optionId,
    }));
  };

  if (preLoader) {
    return <DashboardLoader />;
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      {/* Header */}
      <header className="w-full py-10 flex items-center gap-2 lg:gap-4 justify-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white shadow-lg">
        {ballots.length > 0 && (
          <>
            <img
              className="w-14 h-10 rounded-lg object-cover"
              src={ballots[0]?.electionId?.image || "/default.jpg"}
              alt={ballots[0]?.electionId?.title || "Election"}
            />
            <div>
              <h1 className="text-xl lg:text-4xl font-extrabold uppercase tracking-widest text-center">
                {ballots[0]?.electionId?.title}
              </h1>
              <p className="text-sm lg:text-base capitalize">
                {ballots[0]?.electionId?.description}
              </p>
            </div>
          </>
        )}
      </header>

      {/* Ballots */}
      <div className="flex flex-col items-center">
        {/* <Link to={`/voting/result/${electionId}`}>view results</Link> */}

        <Link
          to={`/voting/result/${electionId}`}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md transition-colors mb-6"
        >
          <FaPoll className="text-lg" />
          <span>View Results</span>
        </Link>
        {ballots.length > 0 ? (
          ballots.map((ballot) => {
            const hasVoted = ballot?.voters?.includes(voterId) || false;

            return (
              <VoteCard
                key={ballot._id}
                voterId={voterId}
                voteFor={selectedVotes[ballot._id] || ""}
                setVoteFor={(optionId) =>
                  handleVoteSelection(ballot._id, optionId)
                }
                hasVoted={hasVoted}
                ballot={ballot}
                electionId={electionId}
                setBallots={setBallots}
              />
            );
          })
        ) : (
          <p className="text-gray-600 text-lg mt-6">No ballots available.</p>
        )}
      </div>
    </div>
  );
};

export default Voting;
