import React from "react";
import { MdBallot, MdRocketLaunch } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { GrSettingsOption } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";

const ElectionSidebar = ({ id }) => {
  return (
    <div className="w-full h-full bg-blue-900 p-4 py-6 text-white">
      <div className="mb-6">
        <h1 className="font-semibold text-lg text-center">2RUEVOTES</h1>
      </div>
      <div className="flex flex-col gap-2">
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
            to: `/election/${id}/setting/general`,
            label: "Settings",
            Icon: GrSettingsOption,
          },
          {
            to: `/election/${id}/result`,
            label: "Result",
            Icon: FaChartPie,
          },
          {
            to: `/election/${id}/launch`,
            label: "Launch",
            Icon: MdRocketLaunch,
          },
        ].map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `tracking-wide cursor-pointer py-2 flex items-center rounded-md gap-2 px-4 transition-all duration-300 ${
                isActive
                  ? "bg-white text-blue-900"
                  : "hover:bg-blue-800 text-white"
              }`
            }
            end={label === "Overview"}
          >
            <span>
              <Icon size={20} />
            </span>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ElectionSidebar;
