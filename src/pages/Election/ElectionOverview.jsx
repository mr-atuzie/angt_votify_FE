import React from "react";
import moment from "moment";
import { useOutletContext } from "react-router-dom";

const ElectionOverview = () => {
  // const electionData = useSelector((state) => state.election.data);

  const electionData = useOutletContext();
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-sm font-medium text-gray-500">Start Date</h2>
          <p className="text-lg font-bold text-blue-600">
            {moment(electionData?.startDate).format("MMM DD, YYYY hh:mm A")}
          </p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-sm font-medium text-gray-500">End Date</h2>
          <p className="text-lg font-bold text-blue-600">
            {moment(electionData?.endDate).format("MMM DD, YYYY hh:mm A")}
          </p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-sm font-medium text-gray-500">Total Ballots</h2>
          <p className="text-lg font-semibold text-gray-800">5</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-sm font-medium text-gray-500">Voters</h2>
          <p className="text-lg font-semibold text-gray-800">120</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-md">
        <h2 className="text-LG font-medium mb-4">Election URLS</h2>
        {/* <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Start Date:</span> 2024-12-10
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-medium">End Date:</span> 2024-12-20
        </p> */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Share this URL with voters to participate:
          </p>
          <div className="bg-gray-100 p-2 rounded-lg mt-2">
            <p className="text-blue-500 text-sm break-all">
              https://example.com/election/12345/vote
            </p>
          </div>
        </div>
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-all"
          onClick={() =>
            navigator.clipboard.writeText(
              "https://example.com/election/12345/vote"
            )
          }
        >
          Copy Link
        </button>
      </div>

      {/* Ballots Table */}
      {/* <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Ballot Forms
        </h2>
        <table className="w-full table-auto text-left text-sm">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Ballot Title</th>
              <th className="py-2">Description</th>
              <th className="py-2">Questions</th>
              <th className="py-2">Responses</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Presidential Ballot</td>
              <td className="py-2">Select the President</td>
              <td className="py-2">5</td>
              <td className="py-2">80</td>
              <td className="py-2">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default ElectionOverview;
