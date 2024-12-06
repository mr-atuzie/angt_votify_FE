import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className=" min-h-screen flex">
      <div className=" w-[20%]">
        <DashboardSidebar />
      </div>
      <div className=" flex-1 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
