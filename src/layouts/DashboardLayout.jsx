import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className=" min-h-screen flex">
      <div className=" w-[30%] bg-blue-600"></div>
      <div className=" w-[70%]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
