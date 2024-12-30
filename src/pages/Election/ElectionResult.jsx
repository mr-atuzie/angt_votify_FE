import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ResultTable from "../../components/ResultTable";
import * as XLSX from "xlsx";
import DashboardLoader from "../../components/DashboardLoader";

const ElectionResult = () => {
  const { id } = useParams();
  const [ballots, setBallots] = useState([]);
  const [preLoader, setPreLoader] = useState(false);
  const electionData = useOutletContext() || { title: "Unknown Election" };

  useEffect(() => {
    const fetchBallots = async () => {
      setPreLoader(true);
      try {
        const { data } = await axios.get(`/api/v1/ballot/election/${id}`);
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

  const generateExcel = () => {
    if (!ballots.length) {
      toast.error("No ballots available for this election.");
      return;
    }

    const workbook = XLSX.utils.book_new();

    ballots.forEach((ballot) => {
      const data = ballot.votingOptions.map((option) => ({
        "Voting Option": option.name,
        Votes: option.votes.length,
        Percentage: `${(
          (option.votes.length /
            ballot.votingOptions.reduce(
              (sum, opt) => sum + opt.votes.length,
              0
            )) *
            100 || 0
        ).toFixed(2)}%`,
      }));

      const worksheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, worksheet, ballot.title);
    });

    XLSX.writeFile(workbook, `${electionData.title}_results.xlsx`);
    toast.success("Election results downloaded successfully!");
  };

  return (
    <div className="">
      {ballots.length > 0 ? (
        <>
          <h2 className="text-center  lg:text-lg font-medium text-gray-700">
            Track real time results of{" "}
            <span className="text-blue-500">{electionData.title}</span> Election
          </h2>

          <div className="flex justify-center my-5">
            <button
              onClick={generateExcel}
              className="bg-green-500 text-sm lg:text-base text-white py-2 px-6 rounded-lg hover:bg-green-600"
            >
              Download Results
            </button>
          </div>

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

export default ElectionResult;
