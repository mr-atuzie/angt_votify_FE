import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Navbar from "../components/Navbar";
import { selectUser } from "../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import api from "../axiosInstance";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const { email } = useSelector(selectUser);
  // const sentTo = sessionStorage.getItem("sentTo");

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const otpCode = otp.join("");
    if (otpCode.length < 6) {
      setLoading(false);
      return toast.error("Please enter all fields.");
    }

    try {
      const { data } = await api.post("/api/v1/user/verify-email", {
        code: otpCode,
      });

      toast.success(data);

      navigate("/dashboard");
      // console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  const resend = async () => {
    setLoading(true);
    try {
      await axios.get("/api/v1/users/resend");
      toast.success("Your verification code has been resent");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="bg-white w-[95%] lg:w-[50%] mx-auto border shadow-lg rounded-lg">
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-center text-gray-800">
              Email Verification
            </h1>
            <p className="text-sm text-center text-gray-600">
              A verification code has been sent to your email address:{" "}
              <span className="text-primary text-blue-500 font-medium">
                ({email})
              </span>
              . Please enter the code below to verify your account and proceed.
            </p>

            <div className="flex justify-center gap-2">
              {otp.map((_, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-xl font-semibold text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              ))}
            </div>

            <button
              disabled={loading}
              type="submit"
              className="disabled:opacity-50 w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>

            <button
              type="button"
              onClick={resend}
              className="text-center w-full text-sm text-primary font-medium"
            >
              Didn’t receive the code?{" "}
              <span className="underline">Resend Verification Code</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
