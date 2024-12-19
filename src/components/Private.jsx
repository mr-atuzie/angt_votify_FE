import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/features/auth/authSlice";

const Private = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    // Redirect to login page if session is expired
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Private;
