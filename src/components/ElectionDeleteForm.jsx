import React from "react";

const ElectionDeleteForm = () => {
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

  return (
    <div className="min-h-screen flex gap-10 flex-col  ">
      <div className="bg-white rounded-lg shadow-md w-full mt-8 mx-auto">
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

export default ElectionDeleteForm;
