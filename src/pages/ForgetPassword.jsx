import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

const ForgetPassword = () => {
  const initialState = {
    email: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { email } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      setLoading(false);
      return toast.error("Email field is required.");
    }

    try {
      const { data } = await axios.post(`/api/v1/user/forget-password`, {
        email,
      });

      setLoading(false);
      toast.success(data?.message || "Password reset link sent successfully!");
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "An error occurred.";
      setLoading(false);
      toast.error(message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full py-16 bg-blue-50 min-h-screen flex items-center justify-center">
        <div className="w-[90%] lg:w-[35%] bg-white shadow-lg rounded-lg px-4 py-10 lg:px-6 lg:py-12">
          <form onSubmit={handleSubmit}>
            {/* Header Section */}
            <div className="text-center mb-8 text-blue-600">
              <h4 className="text-xl lg:text-3xl font-extrabold">
                Forgot Password
              </h4>
              <p className="text-sm text-black mt-2">
                Please enter your registered email to reset your password.
              </p>
            </div>

            {/* Input Field */}
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                disabled={loading}
                className="w-full py-3 text-white bg-blue-600 rounded-lg text-sm lg:text-base hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all disabled:bg-gray-300"
                type="submit"
              >
                {loading ? "Sending Reset Link..." : "Send Reset Link"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
