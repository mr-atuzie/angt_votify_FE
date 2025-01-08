import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const ElectionDateSetting = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  // Adjust time offset before saving
  const adjustForTimezone = (dateString) => {
    const localDate = new Date(dateString);
    return new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16); // Return local time in ISO format without the time zone
  };

  const handleSaveChanges = async () => {
    setLoading(true);

    if (!startDate || !endDate) {
      toast.error("Please enter all required fields");
      setLoading(false);
      return;
    }

    try {
      const adjustedStartDate = adjustForTimezone(startDate);
      const adjustedEndDate = adjustForTimezone(endDate);

      const { data } = await axios.put(`/api/v1/election/${id}`, {
        startDate: adjustedStartDate,
        endDate: adjustedEndDate,
      });

      console.log(data);
      setLoading(false);
      toast.success("Election date has been updated");
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
    <div className="min-h-screen flex gap-10 flex-col">
      <div className="bg-white rounded-lg shadow-lg w-full mx-auto mt-8">
        <div className="w-full bg-blue-800 text-white text-center py-4 rounded-t-lg">
          <h1 className="text-lg lg:text-2xl uppercase font-semibold">
            Election Date
          </h1>
        </div>

        <form className="space-y-6 p-3 lg:p-6">
          <p className="mb-6 text-gray-600 text-center text-sm">
            Update the election start and end dates below.
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="w-full">
              <label
                htmlFor="start-date"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Start Date
              </label>
              <input
                type="datetime-local"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="end-date"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                End Date
              </label>
              <input
                type="datetime-local"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSaveChanges}
              disabled={loading}
              className={`px-6 py-3 text-sm lg:text-base text-white font-medium rounded-lg ${
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

export default ElectionDateSetting;
