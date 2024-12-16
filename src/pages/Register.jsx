import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_USER } from "../redux/features/auth/authSlice";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { name, email, password, phone } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !phone || !password) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (password.length < 8) {
      setLoading(false);
      return toast.error("Password must be up to 8 characters");
    }

    const userData = { fullName: name, email, phone, password };

    try {
      const { data } = await axios.post(`/api/v1/user/register`, userData);

      console.log(data);

      const userDetail = {
        fullname: data?.newUser.fullName,
        id: data?.newUser._id,
      };

      dispatch(SET_USER(userDetail));
      dispatch(SET_LOGIN(true));

      setLoading(false);

      toast.success("User Registered successfully");
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
      <div className="w-full flex justify-center items-center bg-blue-50 py-10 min-h-screen">
        <div className="w-[90%] bg-white rounded-lg shadow-lg lg:w-[43%] mx-auto px-3 py-10 lg:py-12 lg:px-6  ">
          {/* Registration Form */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center text-blue-600">
              <h4 className=" text-2xl lg:text-5xl font-extrabold  mb-6">
                Registration Form
              </h4>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  id="name"
                  placeholder="Enter your Name"
                  required
                />
                <small className="text-xs text-gray-600 mt-1 block">
                  Name as you'd like it to appear in the contest.
                </small>
              </div>

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
                <small className="text-xs text-gray-600 mt-1 block">
                  Make sure your email address is correct.
                </small>
              </div>

              {/* Phone Number */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                  id="phone"
                  placeholder="Enter your Phone Number"
                  required
                />
                <small className="text-xs text-gray-600 mt-1 block">
                  Make sure your phone number is valid.
                </small>
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
                <small className="text-xs text-gray-600 mt-1 block">
                  Password must be at least 8 characters.
                </small>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center">
              <button
                disabled={loading}
                className="text-sm lg:text-base w-full py-3 bg-blue-600 rounded-full text-white  hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all disabled:bg-gray-300"
                type="submit"
              >
                {loading ? "Loading..." : "Register"}
              </button>

              <p className="text-sm text-center  my-8 ">
                Already have an account?
                <Link to="/login" className="text-blue-500 ml-1">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
