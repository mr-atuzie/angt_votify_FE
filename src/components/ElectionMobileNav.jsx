import React from "react";
import { NavLink } from "react-router-dom";
import { MdBallot } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { GrSettingsOption } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";

const ElectionMobileNav = ({ id }) => {
  return (
    <div className="  bg-white sticky left-0 bottom-0 z-50   w-full p-3 flex justify-between items-center  lg:hidden">
      <div className="flex justify-between w-full  gap-2">
        {[
          {
            to: `/election/${id}/overview`,
            label: "Overview",
            Icon: IoHome,
          },
          {
            to: `/election/${id}/ballot`,
            label: "Ballot",
            Icon: MdBallot,
          },
          {
            to: `/election/${id}/voters`,
            label: "Voters",
            Icon: PiUsersFourFill,
          },
          {
            to: `/election/${id}/result`,
            label: "Result",
            Icon: FaChartPie,
          },
          {
            to: `/election/${id}/setting/general`,
            label: "Settings",
            Icon: GrSettingsOption,
          },
        ].map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `tracking-wide cursor-pointer py-2 flex flex-col items-center rounded-md gap-2  transition-all duration-300 ${
                isActive
                  ? "bg-white text-blue-900"
                  : "hover:bg-blue-800 text-gray-500"
              }`
            }
            end
          >
            <span>
              <Icon size={20} />
            </span>
            <span className=" text-xs">{label}</span>
          </NavLink>
        ))}

        {/* <button
            onClick={logout}
            className=" py-2 flex items-center px-4 mt-6  gap-2 tracking-wide font-medium shadow-sm rounded-lg bg-blue-800/60"
          >
            <span>
              <SlLogout size={fontSize} />
            </span>
            <span>{loading ? "Loading" : "Logout"}</span>
          </button> */}
      </div>
    </div>
  );
};

export default ElectionMobileNav;
