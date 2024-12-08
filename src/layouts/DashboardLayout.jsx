import React from "react";
import { Outlet, useParams } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout = () => {
  const { pageName } = useParams();

  // Fallback to a default value if no parameter is found
  const displayName = pageName ? pageName.replace("-", " ") : "Dashboard";

  console.log({ params: displayName, location: "" });

  return (
    <div className=" min-h-screen flex">
      <div className=" fixed h-full w-[20%]">
        <DashboardSidebar />
      </div>
      <div className=" flex-1 ml-[20%] bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
