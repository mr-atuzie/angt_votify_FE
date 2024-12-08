import React, { useState } from "react";

const EditElectionPage = () => {
  const [startDate, setStartDate] = useState("2024-12-15"); // Example date
  const [endDate, setEndDate] = useState("2024-12-15"); // Example date
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [electionType, setElectionType] = useState("Single Choice");
  const [loading, setLoading] = useState(false);

  const handleDeleteElection = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this election? This action cannot be undone."
      )
    ) {
      console.log("Election deleted");
      // Add logic to delete the election
    }
  };

  const handleSaveChanges = () => {
    setLoading(true);
    console.log({ startDate, electionType });
    // Add logic to save changes
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex gap-10 flex-col bg-gray-100 p-10">
      <div className="bg-white rounded-lg shadow-lg w-[60%] mx-auto mt-8">
        {/* Header */}
        <div className="w-full bg-blue-800 text-white text-center py-4 rounded-t-lg">
          <h1 className="text-2xl uppercase font-semibold">General Settings</h1>
        </div>

        <form className="space-y-6 p-6">
          {/* Instruction Text */}
          <p className="mb-6 text-gray-600 text-center text-sm">
            Fill out the form below to create a new election.
          </p>

          {/* Election Title */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="title"
            >
              Election Title
            </label>
            <input
              className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="E.g. Most Beautiful Girl, Class President"
              required
            />
            <small className="text-gray-500">
              Provide a clear and descriptive title for this election.
            </small>
          </div>

          {/* Description */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              name="description"
              placeholder="Provide additional details for this election..."
            ></textarea>
            <small className="text-gray-500">
              Add more context to help voters understand the purpose of this
              election.
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

      <div className="bg-white rounded-lg shadow-lg w-[60%] mx-auto mt-8">
        {/* Header */}
        <div className="w-full bg-blue-800 text-white text-center py-4 rounded-t-lg">
          <h1 className="text-2xl uppercase font-semibold"> Election Date</h1>
        </div>

        <form className="space-y-6 p-6">
          {/* Instruction Text */}
          <p className="mb-6 text-gray-600 text-center text-sm">
            Update the election start and end dates below.
          </p>

          <div className="flex justify-between items-center gap-6">
            {/* Start Date */}
            <div className="w-full">
              <label
                htmlFor="start-date"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* End Date */}
            <div className="w-full">
              <label
                htmlFor="end-date"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
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

      <div className="bg-white rounded-lg shadow-md w-[60%] mx-auto">
        {/* Header */}
        <div className="w-full bg-blue-800 text-white text-center py-4">
          <h1 className="text-xl uppercase font-semibold">Election Type</h1>
        </div>

        <form className="space-y-6 p-6">
          {/* Instruction */}
          <p className="mb-6 text-gray-600 text-center text-sm">
            Select a new election type for this election.
          </p>

          {/* Election Type */}
          <div>
            <label
              htmlFor="election-type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Election Type
            </label>
            <select
              id="election-type"
              value={electionType}
              onChange={(e) => setElectionType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Single Choice">Single Choice</option>
              <option value="Multiple Choice">Multiple Choice</option>
              <option value="Ranked Choice">Ranked Choice</option>
            </select>
          </div>

          {/* Save Button */}
          <div className="flex justify-cenetr">
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

      <div className="bg-white rounded-lg shadow-md w-[60%] mx-auto">
        {/* Header */}
        <div className="w-full bg-red-600 text-white text-center py-4">
          <h1 className="text-xl uppercase font-semibold">Delete Election</h1>
        </div>

        <form className="space-y-6 p-6">
          {/* Instruction */}
          <p className="mb-6 text-gray-600 text-center text-sm">
            Are you sure you want to delete this election? This action is not
            reversible. Please contact support if you need to make a change to
            an election that has already launched.
          </p>

          {/* Election Name Input */}
          <div>
            <label
              htmlFor="election-name"
              className="block text-sm font-medium  mb-2"
            >
              Type Election Name to Confirm
            </label>
            <input
              type="text"
              id="election-name"
              //   value={electionNameInput}
              //   onChange={(e) => setElectionNameInput(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter the election name"
              required
            />
            <small className="text-gray-600">
              Type the exact name of the election to confirm deletion.
            </small>
          </div>

          <div className=" flex justify-center">
            {/* Delete Button */}
            <button
              type="button"
              onClick={handleDeleteElection}
              // disabled={electionNameInput !== electionName}
              className={`px-6 py-3 text-white font-medium rounded-lg bg-red-600 hover:bg-red-700" focus:outline-none`}
            >
              Delete Election
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditElectionPage;
