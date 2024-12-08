import React from "react";
import { Outlet } from "react-router-dom";
import ElectionSidebar from "../components/ElectionSidebar";

const ElectionLayout = () => {
  return (
    <div className=" min-h-screen relative flex">
      <div className=" fixed h-full w-[20%]">
        <ElectionSidebar />
      </div>
      <div className=" flex-1 ml-[20%] bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default ElectionLayout;
