import React from "react";
import { Outlet } from "react-router-dom";
import { GiLaurelCrown } from "react-icons/gi";

const VotingLayout = () => {
  return (
    <div className=" min-h-screen ">
      {/* Dashboard header */}
      <div className=" bg-white   p-4">
        <div className="flex items-center  space-x-2 ">
          <div className="text-pink-500">
            <GiLaurelCrown size={20} />
          </div>
          <h4 className="text-2xl font-bold text-gray-800">The Grand Stage</h4>
        </div>
      </div>
      <div className=" w-[90%]  mx-auto lg:w-[85%] ">
        <Outlet />
      </div>
    </div>
  );
};

export default VotingLayout;
