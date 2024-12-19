import React, { useEffect, useState } from "react";

import ResultTable from "../../components/ResultTable";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";

const ElectionResult = () => {
  const { id } = useParams();

  const [ballots, setBallots] = useState([]);
  const [preLoader, setPreLoader] = useState(false);

  const electionData = useOutletContext();

  useEffect(() => {
    setPreLoader(true);
    const getBallot = async () => {
      try {
        const { data } = await axios.get(`/api/v1/ballot/election/${id}`);

        // console.log(data);
        setPreLoader(false);
        setBallots(data);

        console.log(data);

        // return response.data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setPreLoader(false);
        //  setLoading(false);
        toast.error(message);
      }
    };

    getBallot();
  }, [id]);

  if (preLoader) {
    return <Loader />;
  }

  return (
    <div className="p-6">
      {ballots.length > 0 ? (
        <>
          <h2 className=" text-center capitalize text-lg mb-5 font-medium text-gray-700">
            Track real time result of{" "}
            <span className=" text-blue-500">{electionData?.title}</span>{" "}
            Election{" "}
          </h2>
          <div className=" flex flex-col gap-10">
            <div className=" w-[60%] mx-auto">
              {ballots.map((ballot) => {
                return <ResultTable key={ballot?._id} ballot={ballot} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <div className=" flex justify-center min-h-[70vh] items-center h-full w-full">
          <p className="text-center text-gray-500 col-span-full">
            No ballots available.
          </p>
        </div>
      )}
    </div>
  );
};

export default ElectionResult;
