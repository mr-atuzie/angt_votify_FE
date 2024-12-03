import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { GiLaurelCrown, GiQueenCrown } from "react-icons/gi";

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

  const navigate = useNavigate("/");

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

    if (password.length < 6) {
      setLoading(false);
      return toast.error("Password must be up to 6 characters");
    }

    const userData = { name, email, phone, password };

    console.log(userData);

    navigate("/dashboard");

    //   try {
    //     await axios.post(
    //       `${process.env.REACT_APP_BACKEND_URL}/api/v1/pakam/register`,
    //       userData,
    //       {
    //         withCredentials: true,
    //       }
    //     );

    //     setLoading(false);

    //     toast.success("User Registered successfully");
    //     navigate("/dashboard");
    //   } catch (error) {
    //     const message =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     setLoading(false);
    //     toast.error(message);
    //   }
  };

  return (
    <div className="w-full flex justify-center items-center bg-white min-h-screen">
      <div className="w-[90%] lg:w-[43%] mx-auto py-10 lg:py-12 lg:px-6  ">
        {/* Logo and Title */}
        <div className="flex items-center justify-center space-x-2 mb-5">
          <div className="text-pink-500">
            <GiLaurelCrown size={20} />
          </div>
          <h4 className="text-2xl font-bold text-gray-800">The Grand Stage</h4>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center text-pink-500">
            <GiQueenCrown size={40} />
            <h4 className="text-5xl font-extrabold -mt-2 mb-6">
              Registration Form
            </h4>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
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

          {/* Entry Fee */}
          <p className="text-sm text-gray-600 mb-6">
            Pay the entry fee <span className="font-medium">₦5,000</span> to
            complete your registration.
          </p>

          {/* Submit Button */}
          <div className="flex flex-col items-center">
            <button
              disabled={loading}
              className="text-sm lg:text-base w-full py-3 bg-pink-600 rounded-lg text-white font-semibold hover:bg-pink-700 transition-all disabled:bg-gray-300"
              type="submit"
            >
              {loading ? "Loading..." : "Register"}
            </button>

            <p className="text-xs text-center font-medium mt-6 text-gray-500">
              Already have an account?
              <Link to="/login" className="text-pink-500 ml-1">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
