import React from "react";
import { MdOutlineBallot } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { NavLink, Outlet, useOutletContext, useParams } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaCogSolid } from "react-icons/lia";

const SettingLayout = () => {
  const fontSize = 15;
  const { id } = useParams();

  const electionData = useOutletContext();

  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
      <div className=" w-full h-fit bg-white lg:w-[25%] mx-auto p-3 lg:mt-8 shadow-lg rounded-lg flex flex-col ">
        <h2 className="lg:text-lg text-blue-600 uppercase te tracking-wide font-semibold mb-3">
          Edit Election
        </h2>
        <div className=" flex lg:flex-col overflow-scroll lg:overflow-auto">
          {[
            {
              to: `/election/${id}/setting/general`,
              label: "General Setting",
              Icon: LiaCogSolid,
            },
            {
              to: `/election/${id}/setting/election-date`,
              label: "Election Dates",
              Icon: FaRegCalendarDays,
            },
            {
              to: `/election/${id}/setting/election-type`,
              label: "Election Type",
              Icon: MdOutlineBallot,
            },
            {
              to: `/election/${id}/setting/delete`,
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
                  `tracking-wide cursor-pointer  py-2 mb-1 flex items-center rounded-md gap-2 px-4 transition-all duration-300 ${
                    isActive
                      ? "bg-blue-100 text-blue-600 font-medium"
                      : "hover:bg-blue-100 hover:text-blue-500 text-gray-600"
                  }`
                }
                end
              >
                <span>
                  <Icon size={fontSize} />
                </span>
                <span className=" whitespace-nowrap text-xs ">{label}</span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex-1">
        <Outlet context={electionData} />
      </div>
    </div>
  );
};

export default SettingLayout;
