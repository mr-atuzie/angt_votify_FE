import React, { useEffect, useState } from "react";
import { MdBallot } from "react-icons/md";
// import { IoIosCloudUpload } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";

import Ballot from "../../components/Ballot";
import { Link, useOutletContext, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import DashboardLoader from "../../components/DashboardLoader";

const ElectionBallot = () => {
  const { id } = useParams();

  const [ballots, setBallots] = useState([]);
  const [preLoader, setPreLoader] = useState(false);

  useEffect(() => {
    setPreLoader(true);
    const getBallot = async () => {
      try {
        const response = await axios.get(`/api/v1/ballot/election/${id}`);

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
  }, [id]);

  const electionData = useOutletContext();

  const handleDeleteBallot = async (ballotId) => {
    console.log({
      ballotId,
      msg: "delete",
    });

    try {
      await axios.delete(`/api/v1/ballot/${ballotId}`);

      const response = await axios.get(`/api/v1/ballot/election/${id}`);
      console.log(response.data);
      setBallots(response.data);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      //  setLoading(false);
      toast.error(message);
    }
  };

  const clearBallotOptions = async (ballotId) => {
    console.log("clear ballot options", ballotId);

    try {
      await axios.put(`/api/v1/ballot/clearAllOptions/${ballotId}`);

      const response = await axios.get(`/api/v1/ballot/election/${id}`);
      console.log(response.data);
      setBallots(response.data);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      //  setLoading(false);
      toast.error(message);
    }
  };

  const handleDeleteVotingOption = async (optionId) => {
    console.log(optionId);

    try {
      await axios.delete(`/api/v1/ballot/voting-option/${optionId}`);

      const response = await axios.get(`/api/v1/ballot/election/${id}`);
      console.log(response.data);
      setBallots(response.data);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      //  setLoading(false);
      toast.error(message);
    }
  };

  if (preLoader) {
    return <DashboardLoader />;
  }

  return (
    <div>
      <div className="min-h-screen   flex flex-col gap-6">
        {ballots.length > 0 ? (
          <div className=" flex flex-col gap-10">
            <div className=" flex gap-2 mt-4">
              {/* <button className="bg-white border w-36 border-blue-500 text-blue-500 flex items-center justify-center gap-2    rounded-md hover:bg-blue-700 transition">
                <span>
                  <IoIosCloudUpload size={20} />
                </span>
                <span>Import</span>
              </button> */}

              <Link to={`/election/${id}/ballot/create-question`}>
                <button className="bg-blue-600  text-white px-4 py-2 gap-2 flex items-center justify-center rounded-md hover:bg-blue-700 transition">
                  <span>
                    <IoAddSharp size={20} />
                  </span>
                  Add Ballot
                </button>
              </Link>
            </div>
            {ballots.map((ballot) => {
              return (
                <Ballot
                  key={ballot._id}
                  ballot={ballot}
                  electionData={electionData}
                  handleDeleteBallot={handleDeleteBallot}
                  handleDeleteVotingOption={handleDeleteVotingOption}
                  clearBallotOptions={clearBallotOptions}
                />
              );
            })}
          </div>
        ) : (
          <div className=" flex justify-center min-h-[70vh] items-center h-full w-full">
            <div className=" flex flex-col justify-center items-center gap-2">
              <div className=" flex items-center gap-2">
                <span>
                  <MdBallot size={50} />
                </span>
                <h1 className=" text-xl lg:text-4xl ">Build Your Ballot</h1>
              </div>

              <p className=" text-sm lg:text-base text-center">
                Get started by adding questions to{" "}
                <span className="text-blue-600 font-medium">
                  {electionData?.title}
                </span>{" "}
                ballot
              </p>

              <div className=" flex gap-2 mt-4">
                {/* <button className="bg-white border w-36 border-blue-500 text-blue-500 flex items-center justify-center gap-2    rounded-md hover:bg-blue-700 transition">
                  <span>
                    <IoIosCloudUpload size={20} />
                  </span>
                  <span>Import</span>
                </button> */}

                <Link to={`/election/${id}/ballot/create-question`}>
                  <button className="bg-blue-600 text-sm lg:text-base  text-white px-4 py-2 gap-2 flex items-center justify-center rounded-md hover:bg-blue-700 transition">
                    <span>
                      <IoAddSharp size={20} />
                    </span>
                    Add Ballot
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectionBallot;
