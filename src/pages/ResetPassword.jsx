import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const initialState = {
    confirmPassword: "",
    password: "",
  };

  const { id } = useParams();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { confirmPassword, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!password || !confirmPassword) {
      setLoading(false);
      return toast.error("All fields are required.");
    }

    if (password.length < 8) {
      setLoading(false);
      return toast.error("Password must be at least 8 characters.");
    }

    if (password !== confirmPassword) {
      setLoading(false);
      return toast.error("Passwords do not match.");
    }

    try {
      const { data } = await axios.post(`/api/v1/user/reset-password/${id}`, {
        password,
      });
      setLoading(false);
      toast.success(data?.message);
      navigate("/login");
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "An error occurred.";
      setLoading(false);
      toast.error(message);
    }
  };

  return (
    <div className="w-full py-16 bg-blue-50 flex justify-center items-center min-h-screen">
      <div className="w-[90%] bg-white shadow-lg rounded-lg lg:w-[35%] mx-auto px-3 py-10 lg:py-12 lg:px-6">
        <form onSubmit={handleSubmit}>
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center mb-8 text-blue-600">
            <h4 className="text-xl lg:text-3xl font-extrabold -mt-2">
              Reset Password
            </h4>
            <p className="text-sm text-black mt-1">
              Enter your new password below.
            </p>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            {/* Password */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="password"
              >
                New Password
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                id="password"
                placeholder="Enter your new password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
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
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center">
            <button
              disabled={loading}
              className="text-sm lg:text-base w-full py-3 bg-blue-600 rounded-lg text-white hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all disabled:bg-gray-300"
              type="submit"
            >
              {loading ? "Updating Password..." : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
