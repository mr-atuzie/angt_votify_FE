import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import ElectionSidebar from "../components/ElectionSidebar";
import ElectionHeader from "../components/ElectionHeader";
import axios from "axios";

const ElectionLayout = () => {
  const { id } = useParams();
  const [electionData, setElectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchElectionData = async () => {
      try {
        const { data } = await axios.get(`/api/v1/election/${id}`); // Replace with your API URL

        setElectionData(data);

        console.log(data);
      } catch (error) {
        console.error("Error fetching election data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchElectionData();
  }, [id]);

  if (loading) {
    return "Loading....";
  }

  return (
    <div className=" min-h-screen relative flex">
      <div className=" fixed h-full w-[20%]">
        <ElectionSidebar />
      </div>
      <div className=" flex-1 ml-[20%] bg-gray-100">
        <ElectionHeader
          electionName={electionData?.title}
          electionStatus={electionData?.status}
          electionType={electionData?.electionType}
        />
        <Outlet context={electionData} />
      </div>
    </div>
  );
};

export default ElectionLayout;
