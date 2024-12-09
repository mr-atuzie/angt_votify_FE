import React, { useState } from "react";

const ElectionTypeSetting = () => {
  const [electionType, setElectionType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSaveChanges = () => {
    setLoading(true);
    console.log({ electionType });
    // Add logic to save changes
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex gap-10 flex-col  ">
      <div className="bg-white rounded-lg shadow-md mt-8 w-full mx-auto">
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
    </div>
  );
};

export default ElectionTypeSetting;