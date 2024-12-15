import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const DashboardSecuritySetting = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSaveChanges = async () => {
    setLoading(true);

    if (password.length < 8) {
      setLoading(false);
      return toast.error("Password must be up to 8 characters");
    }

    if (password.length !== confirmPassword) {
      setLoading(false);
      return toast.error("Passwords does not match");
    }

    try {
      const { data } = await axios.put(`/api/v1/user/profile/change-password`, {
        password,
      });
      // dispatch(fetchElectionData(id));

      console.log(data);
      setLoading(false);

      toast.success(data.message);
      setPassword("");
      setConfirmPassword("");

      return data;
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
    <div className="min-h-screen flex gap-10 flex-col  ">
      <div className="bg-white rounded-lg shadow-lg w-full mx-auto mt-8">
        {/* Header */}
        <div className="w-full bg-blue-800 text-white text-center py-4 rounded-t-lg">
          <h1 className="text-2xl uppercase font-semibold">CHANGE PASSWORD</h1>
        </div>

        <form className="space-y-6 p-6">
          {/* Instruction Text */}
          <p className="mb-6 text-gray-600 text-center text-sm">
            Fill out the form below to create a new election.
          </p>

          {/* password */}
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
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Enter your Password"
              required
            />
            <small className="text-xs text-gray-600 mt-1 block">
              Password must be at least 8 characters.
            </small>
          </div>

          {/*confirm password */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={() => setConfirmPassword("")}
              id="confirmPassword"
              placeholder="Re-enter Password"
              required
            />
            <small className="text-xs text-gray-600 mt-1 block">
              Password must be at least 8 characters.
            </small>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSaveChanges}
              disabled={loading}
              className={`px-6 py-3 text-white font-medium rounded-lg ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } focus:outline-none`}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardSecuritySetting;
