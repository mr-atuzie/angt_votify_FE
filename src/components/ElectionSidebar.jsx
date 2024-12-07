import React from "react";
import { MdBallot } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { GrSettingsOption } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";

const fontSize = 20;

const ElectionSidebar = () => {
  return (
    <div className=" w-full h-full  bg-blue-900 p-4 py-6 text-white">
      <div></div>
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
            to: "/election/12345/edit",
            label: "Edit Election",
            Icon: GrEdit,
          },
          {
            to: "/election/12345/settngs",
            label: "Settings",
            Icon: GrSettingsOption,
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
