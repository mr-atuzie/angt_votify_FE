import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "otp-input-react";
import toast from "react-hot-toast";
import axios from "axios";

const VerifyEmail = () => {
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const sentTo = sessionStorage.getItem("sentTo");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!OTP) {
      setLoading(false);
      return toast.error("Please enter all fields.");
    }

    try {
      const { data } = await axios.post("/api/v1/users/verify-email", {
        code: OTP,
      });

      navigate("/dashboard");
      console.log(data);
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
    <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-md mx-auto border shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            Verify Your Email
          </h1>
          <p className="text-sm text-center text-gray-600">
            We sent a code to{" "}
            <span className="text-primary font-medium">({sentTo})</span>. Enter
            the code to continue.
          </p>

          <div className="flex flex-col gap-4">
            <label
              className="text-sm font-medium text-gray-700 text-center"
              htmlFor="code"
            >
              Enter Verification Code
            </label>
            <OtpInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              className="otp-container"
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "1.5rem",
                borderRadius: "8px",
                border: "1px solid #D1D5DB",
                backgroundColor: "#F9FAFB",
                color: "#374151",
                textAlign: "center",
              }}
              focusStyle={{
                border: `2px solid #FF5D2E`,
              }}
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="disabled:opacity-50 w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            {loading ? "Loading..." : "Submit"}
          </button>

          <button
            type="button"
            onClick={resend}
            className="text-center w-full text-sm text-primary font-medium"
          >
            Didn’t receive the email? <span className="underline">Resend</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
