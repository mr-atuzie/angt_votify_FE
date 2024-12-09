import React from "react";
import { MdOutlineBallot } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaCogSolid } from "react-icons/lia";

const SettingLayout = () => {
  const fontSize = 15;
  return (
    <div className="flex px-6 gap-10">
      <div className=" h-fit bg-white w-[25%] mx-auto p-3 mt-8 shadow-lg rounded-lg flex flex-col ">
        <h2 className="text-lg text-blue-800 uppercase te tracking-wide font-semibold mb-3">
          Edit Election
        </h2>
        {[
          {
            to: "/election/12345/setting/general",
            label: "General Setting",
            Icon: LiaCogSolid,
          },
          {
            to: "/election/12345/setting/election-date",
            label: "Election Dates",
            Icon: FaRegCalendarDays,
          },
          {
            to: "/election/12345/setting/election-type",
            label: "Election Type",
            Icon: MdOutlineBallot,
          },
          {
            to: "/election/12345/setting/delete",
            label: "Delete",
            Icon: FaRegTrashAlt,
          },
          // { to: "/dashboard/pricing", label: "Pricing", Icon: IoMdPricetags },
          // {
          //   to: "/dashboard/settings",
          //   label: "Settings",
          //   Icon: GrSettingsOption,
          // },
        ].map(({ to, label, Icon }) => (
          <div key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `tracking-wide cursor-pointer py-2 mb-1 flex items-center rounded-md gap-2 px-4 transition-all duration-300 ${
                  isActive
                    ? "bg-blue-800 text-white"
                    : "hover:bg-blue-100 hover:text-blue-500 text-gray-600"
                }`
              }
              end
            >
              <span>
                <Icon size={fontSize} />
              </span>
              <span>{label}</span>
            </NavLink>
          </div>
        ))}
      </div>
      <div className=" flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingLayout;
