import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const DashboardGeneralSetting = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSaveChanges = async () => {
    setLoading(true);

    try {
      const { data } = await axios.put(`/api/v1/user/profile`, {
        fullname: name,
        email,
      });
      // dispatch(fetchElectionData(id));

      console.log(data);
      setLoading(false);

      toast.success(data.message);
      setEmail("");
      setName("");
      // const response = await axios.get(`/api/v1/ballot/election/${id}`);
      // console.log(response.data);
      // setBallots(response.data);
      // return response.data;
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
          <h1 className="text-2xl uppercase font-semibold">PROFILE</h1>
        </div>

        <form className="space-y-6 p-6">
          {/* Instruction Text */}
          <p className="mb-6 text-gray-600 text-center text-sm">
            Fill out the form below to create a new election.
          </p>

          {/* user fullname */}
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
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Enter your Name"
              required
            />
            <small className="text-xs text-gray-600 mt-1 block">
              Your name or the name of the primary contact of the account.
            </small>
          </div>

          {/*Email */}
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
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter your Email"
              required
            />
            <small className="text-xs text-gray-600 mt-1 block">
              Make sure your email address is correct.
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

export default DashboardGeneralSetting;
