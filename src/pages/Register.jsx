import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_USER } from "../redux/features/auth/authSlice";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const { firstname, email, password, lastname, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !firstname ||
      !email ||
      !phone ||
      !password ||
      !lastname ||
      !confirmPassword
    ) {
      setLoading(false);
      return toast.error("All fields are required");
    }
    if (password !== confirmPassword) {
      setLoading(false);
      return toast.error("Passwords do not match");
    }

    if (password.length < 8) {
      setLoading(false);
      return toast.error("Password must be up to 8 characters");
    }
    const name = `${firstname} ${lastname}`;
    const userData = { name, email, phone, password };

    console.log(userData);

    try {
      const { data } = await axios.post(`/api/v1/user/register`, userData);

      console.log(data);

      const userDetail = {
        fullname: data?.newUser.name,
        id: data?.newUser._id,
        email: data?.newUser.email,
        phone: data?.newUser.phone,
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
        <div className="w-[90%] mt-[60px] bg-white rounded-lg shadow-lg lg:w-[43%] mx-auto px-3 py-10 lg:py-12 lg:px-6  ">
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
                  htmlFor="firstname"
                >
                  First name
                </label>
                <input
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={handleInputChange}
                  id="firstname"
                  placeholder="Enter your firstname"
                  required
                />
                <small className="text-xs text-gray-600 mt-1 block">
                  Name as you'd like it to appear in the contest.
                </small>
              </div>

              {/* Last Name */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="lastname"
                >
                  Last name
                </label>
                <input
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={handleInputChange}
                  id="lastname"
                  placeholder="Enter your lastname"
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
                {/* <label
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
                /> */}

                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="phone"
                >
                  Phone Number
                </label>

                <PhoneInput
                  country={"ng"} // Default country
                  value={phone}
                  onChange={setPhone} // Update state with selected number
                  inputClass="phone-input-field" // Apply custom class to input field
                  buttonClass="phone-input-button" // Apply custom class to button
                  containerClass="phone-input-container" // Apply custom class to container
                />
                <small className="text-xs text-gray-600 mt-1 block">
                  Make sure your phone number is valid.
                </small>
              </div>

              {/* Password */}
              {/* <div>
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
              </div> */}

              {/* Password Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type={passwordVisible ? "text" : "password"} // Toggle input type
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    id="password"
                    placeholder="Enter your Password"
                    required
                  />
                  <span
                    onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <small className="text-xs text-gray-600 mt-1 block">
                  Password must be at least 8 characters.
                </small>
              </div>

              {/* Confirm Password */}
              {/* <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  id="confirmPassword"
                  placeholder="Re-enter your new password"
                  required
                />
              </div> */}

              {/* Confirm Password Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type={confirmPasswordVisible ? "text" : "password"} // Toggle input type
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleInputChange}
                    id="confirmPassword"
                    placeholder="Re-enter your new password"
                    required
                  />
                  <span
                    onClick={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    } // Toggle visibility
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
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
