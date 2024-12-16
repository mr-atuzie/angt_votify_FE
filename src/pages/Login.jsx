import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_USER } from "../redux/features/auth/authSlice";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (password.length < 8) {
      setLoading(false);
      return toast.error("Password must be up to 8 characters");
    }

    const userData = { email, password };

    try {
      const { data } = await axios.post(`/api/v1/user/login`, userData);

      setLoading(false);

      const userDetail = {
        fullname: data?.user.fullName,
        id: data?.user._id,
      };

      console.log(userDetail);

      dispatch(SET_USER(userDetail));
      dispatch(SET_LOGIN(true));

      toast.success("Login successfully");
      navigate("/dashboard");
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
    <>
      <Navbar />
      <div className="w-full py-16  bg-blue-50 min-h-screen">
        <div className="w-[90%] bg-white shadow-lg rounded-lg lg:w-[35%] mx-auto px-3 py-10 lg:py-12 lg:px-6 ">
          {/* Welcome Back Section */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center mb-8 text-blue-600">
              <h4 className=" text-2xl lg:text-5xl font-extrabold -mt-2">
                Welcome Back
              </h4>
              <p className="text-sm text-gray-500 ">Log into your dashboard</p>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 gap-6 mb-6">
              {/* Email */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  id="email"
                  placeholder="Enter your Email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  id="password"
                  placeholder="Enter your Password"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center">
              <button
                disabled={loading}
                className="text-sm lg:text-base w-full py-3 bg-blue-600 rounded-lg text-white  hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all disabled:bg-gray-300"
                type="submit"
              >
                {loading ? "Loading..." : "Login"}
              </button>

              <p className="text-sm text-center font-medium mt-6 ">
                Don't have an account?
                <Link to="/register" className="text-blue-600 ml-1">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
