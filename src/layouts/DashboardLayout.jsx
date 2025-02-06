import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";
import { selectUser } from "../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import MobileNav from "../components/MobileNav";

const DashboardLayout = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fullname } = useSelector(selectUser);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className=" hidden lg:block  fixed h-full w-[20%]">
        <DashboardSidebar />
      </div>
      <div className=" w-full flex-1 lg:ml-[20%] bg-gray-100 p-3 lg:p-6 flex flex-col gap-6">
        <DashboardHeader fullname={fullname} />
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
};

export default DashboardLayout;
