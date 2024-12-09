import React from "react";
import { MdBallot, MdRocketLaunch } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { GrSettingsOption } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const fontSize = 20;

const ElectionSidebar = () => {
  return (
    <div className=" w-full h-full  bg-blue-900 p-4 py-6 text-white">
      <div className="mb-6">
        <h1 className=" font-semibold text-lg text-center">2RUEVOTES</h1>
      </div>
      <div className="flex flex-col gap-2">
        {[
          {
            to: "/election/12345/overview",
            label: "Overview",
            Icon: IoHome,
          },
          {
            to: "/election/12345/ballot",
            label: "Ballot",
            Icon: MdBallot,
          },
          {
            to: "/election/12345/voters",
            label: "Voters",
            Icon: PiUsersFourFill,
          },
          {
            to: "/election/12345/setting",
            label: "Settings",
            Icon: GrSettingsOption,
          },
          {
            to: "/election/12345/support",
            label: "Support",
            Icon: BiSupport,
          },
          {
            to: "/election/12345/launch",
            label: "Lanuch",
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
            end
          >
            <span>
              <Icon size={fontSize} />
            </span>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ElectionSidebar;
