import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import { FaRegTrashAlt } from "react-icons/fa";
import { LiaCogSolid } from "react-icons/lia";
// import { HiBuildingOffice2 } from "react-icons/hi2";

import { FaKey } from "react-icons/fa6";
import { PiMoneyDuotone } from "react-icons/pi";

const DashboardSettingLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row px-3 lg:px-6 gap-5 lg:gap-10">
      <div className="h-fit bg-white w-full lg:w-[30%] mx-auto p-2 lg:p-5 mt-8 shadow-lg rounded-lg flex flex-col">
        <h2 className="  lg:text-lg text-blue-500 uppercase tracking-wide font-semibold mb-3 lg:mb-6">
          Account Setting
        </h2>

        <div className=" flex lg:flex-col overflow-scroll lg:overflow-auto">
          {[
            {
              to: `/dashboard/setting/profile`,
              label: "Profile Setting",
              Icon: LiaCogSolid,
            },
            {
              to: `/dashboard/setting/change-password`,
              label: "Change Password",
              Icon: FaKey,
            },
            {
              to: "/dashboard/subscription",
              label: "Subscription",
              Icon: PiMoneyDuotone,
            },
          ].map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2  rounded-md transition-all duration-300 ${
                  isActive
                    ? " text-blue-600 bg-blue-100"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-500"
                }`
              }
              end
            >
              <Icon size={20} />
              <span className=" text-xs  whitespace-nowrap  lg:text-sm font-medium">
                {label}
              </span>
            </NavLink>
          ))}
        </div>
      </div>

      <div className=" flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardSettingLayout;
