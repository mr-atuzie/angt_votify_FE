import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/features/auth/authSlice";
import { useEffect } from "react";

const Private = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true }); // Avoids adding a new history entry
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? <Outlet /> : null; // Ensures nothing renders while redirecting
};

export default Private;
