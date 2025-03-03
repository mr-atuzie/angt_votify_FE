import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ResultTable from "../../components/ResultTable";
import DashboardLoader from "../../components/DashboardLoader";
import api from "../../axiosInstance";

const VotingResult = () => {
  const { id } = useParams();
  const [ballots, setBallots] = useState([]);
  const [preLoader, setPreLoader] = useState(false);

  useEffect(() => {
    const fetchBallots = async () => {
      setPreLoader(true);
      try {
        const { data } = await api.get(`/api/v1/ballot/election/${id}`);
        setBallots(data || []);
      } catch (error) {
        const message =
          error.response?.data?.message ||
          error.message ||
          "Error loading data.";
        toast.error(message);
      } finally {
        setPreLoader(false);
      }
    };
    fetchBallots();
  }, [id]);

  if (preLoader) {
    return <DashboardLoader />;
  }

  return (
    <div className="">
      {ballots.length > 0 ? (
        <>
          {/* Header */}
          {ballots.length > 0 && (
            <header className="w-full py-10 flex flex-col items-center gap-2 lg:gap-4 justify-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white shadow-lg">
              <div className=" flex items-center gap-2">
                <img
                  className="w-14 h-10 rounded-lg object-cover"
                  src={ballots[0]?.electionId?.image || "/default.jpg"}
                  alt={ballots[0]?.electionId?.title || "Election"}
                />
                <div>
                  <h1 className="text-lg lg:text-4xl font-extrabold uppercase tracking-widest text-center">
                    {ballots[0]?.electionId?.title}
                  </h1>
                  <p className="text-sm lg:text-base capitalize">
                    {ballots[0]?.electionId?.description}
                  </p>
                </div>
              </div>

              <h2 className="text-center text-xs  lg:text-lg font-medium text-gray-100">
                You are viewing real time results of{" "}
                <span className="text-blue-500">
                  {ballots[0]?.electionId?.title}
                </span>{" "}
                Election
              </h2>
            </header>
          )}
          {/* 
          <Link
            className=" text-sm text-gray-600 flex justify-center items-center font-medium w-full capitalize text-center"
            to={`/voting/result/${id}`}
          >
            Back
          </Link> */}
          <div className="flex flex-col gap-10">
            <div className=" w-full lg:w-[60%] mx-auto">
              {ballots.map((ballot) => (
                <ResultTable key={ballot._id} ballot={ballot} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center min-h-[70vh]">
          <p className="text-gray-500">
            No ballots available for this election.
          </p>
        </div>
      )}
    </div>
  );
};

export default VotingResult;
