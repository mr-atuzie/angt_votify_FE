import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { IoFingerPrintSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import DashboardLoader from "../../components/DashboardLoader";
import VoteCard from "../../components/VoteCard";

const Voting = () => {
  const { electionId, voterId } = useParams();

  const [ballots, setBallots] = useState([]);
  const [preLoader, setPreLoader] = useState(false);

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

  // const handleCastVote = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   console.log(voteFor);
  //   console.log(voterId);

  //   // try {
  //   //   await axios.post(`/api/v1/user/login`, {});

  //   //   setLoading(false);

  //   //   toast.success("Login successfully");
  //   //   navigate("/dashboard");
  //   // } catch (error) {
  //   //   const message =
  //   //     (error.response &&
  //   //       error.response.data &&
  //   //       error.response.data.message) ||
  //   //     error.message ||
  //   //     error.toString();

  //   //   setLoading(false);
  //   //   toast.error(message);
  //   // }
  // };

  if (preLoader) {
    return <DashboardLoader />;
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      {/* Header */}
      <header className="w-full py-10 flex items-center flex-col justify-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white shadow-lg">
        {/* <img
          className=" w-14 h-10 rounded-lg object-cover"
          src={ballots[0].electionId.image}
          alt={ballots[0].electionId.title}
        /> */}

        <div>
          <h1 className=" text-xl lg:text-4xl font-extrabold uppercase tracking-widest text-center">
            {ballots.length > 0 && ballots[0].electionId.title}
          </h1>
          <p className=" text-sm lg:text-base capitalize">
            {ballots.length > 0 && ballots[0].electionId.description}
          </p>
        </div>
      </header>
      <>
        {ballots.length > 0 &&
          ballots.map((ballot) => {
            // Use a fallback for votes if undefined
            const hasVoted = ballot.voters?.includes(voterId) || false;

            return (
              <VoteCard
                key={ballot?._id}
                voterId={voterId}
                voteFor={voteFor}
                setVoteFor={setVoteFor}
                hasVoted={hasVoted}
                ballot={ballot}
                electionId={electionId}
                setBallots={setBallots}
              />
            );
          })}
      </>
    </div>
  );
};

export default Voting;
