import React, { useState } from "react";

import { MdHowToVote } from "react-icons/md";
import { PiUsersFourDuotone } from "react-icons/pi";
import { SlLogout } from "react-icons/sl";
import { GrSettingsOption } from "react-icons/gr";
import { MdSpaceDashboard } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
// import { IoMdPricetags } from "react-icons/io";
import { PiMoneyDuotone } from "react-icons/pi";

const fontSize = 20;

const DashboardSidebar = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/api/v1/user/logout`);

      setLoading(false);

      toast.success(data);

      console.log(data);

      navigate(`/login`);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);
      toast.error(message);
    }
  };
  return (
    <div className=" w-full h-full  bg-blue-900 p-4 py-6 text-white">
      <div className="mb-6">
        <Link className=" cursor-pointer" to={"/"}>
          <h1 className=" font-semibold text-lg text-center">2RUEVOTES</h1>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { to: "/dashboard", label: "Dashboard", Icon: MdSpaceDashboard },
          {
            to: "/dashboard/manage-elections",
            label: "Manage Elections",
            Icon: MdHowToVote,
          },
          {
            to: "/dashboard/voter-management",
            label: "Voter Management",
            Icon: PiUsersFourDuotone,
          },
          // {
          //   to: "/dashboard/candidate-management",
          //   label: "Candidate Management",
          //   Icon: FaUsersGear,
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

        <button
          onClick={logout}
          className=" py-2 flex items-center px-4 mt-6  gap-2 tracking-wide font-medium shadow-sm rounded-lg bg-blue-800/60"
        >
          <span>
            <SlLogout size={fontSize} />
          </span>
          <span>{loading ? "Loading" : "Logout"}</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
