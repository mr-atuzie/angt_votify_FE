import React from "react";
import { MdHowToVote } from "react-icons/md";
import { PiUsersFourDuotone } from "react-icons/pi";
// import { SlLogout } from "react-icons/sl";
import { GrSettingsOption } from "react-icons/gr";
import { MdSpaceDashboard } from "react-icons/md";
import { PiMoneyDuotone } from "react-icons/pi";
// import { IoAddSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const fontSize = 20;

const MobileNav = () => {
  return (
    <div className="  bg-white sticky left-0 bottom-0 z-50   w-full p-3 flex justify-between items-center  lg:hidden">
      <div className="flex justify-between w-full  gap-2">
        {[
          { to: "/dashboard", label: "Dashboard", Icon: MdSpaceDashboard },
          {
            to: "/dashboard/manage-elections",
            label: "Elections",
            Icon: MdHowToVote,
          },
          {
            to: "/dashboard/voter-management",
            label: "Voters ",
            Icon: PiUsersFourDuotone,
          },
          // {
          //   to: "/dashboard/create-election",
          //   label: "Add",
          //   Icon: IoAddSharp,
          // },
          {
            to: "/dashboard/subscription",
            label: "Subscription",
            Icon: PiMoneyDuotone,
          },
          {
            to: "/dashboard/setting/profile",
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
              <Icon size={fontSize} />
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

export default MobileNav;
