import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ElectionSidebar from "../components/ElectionSidebar";
import ElectionHeader from "../components/ElectionHeader";

const ElectionLayout = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className=" min-h-screen relative flex">
      <div className=" fixed h-full w-[20%]">
        <ElectionSidebar />
      </div>
      <div className=" flex-1 ml-[20%] bg-gray-100">
        <ElectionHeader
          electionName={"Most Beautiful Girl in Nigeria"}
          celectionStatus={"Active"}
          electionType={"Multiple"}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default ElectionLayout;
