import React from "react";

const ResultTable = ({ ballot }) => {
  return (
    <div className="shadow-lg rounded-lg bg-white p-6 mb-6 space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold">{ballot?.title}</h1>
        <p className="text-sm mt-2">{ballot?.description}</p>
      </div>

      {/* Voting Options Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-700">Option</th>
              <th className="px-6 py-4 font-medium text-gray-700 text-center">
                Votes
              </th>
              <th className="px-6 py-4 font-medium text-gray-700 text-center">
                Percentage
              </th>
            </tr>
          </thead>
          {ballot?.votingOptions.length > 0 ? (
            <tbody>
              {ballot.votingOptions.map((option, index) => (
                <tr key={index} className="border-t even:bg-gray-50">
                  <td className="px-6 py-4">{option.name}</td>
                  <td className="px-6 py-4 text-center">
                    {option.votes.length}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {/* {(
                      (option.votes.length /
                        ballot.votingOptions.length.reduce(
                          (a, b) => a + b.votes,
                          0
                        )) *
                      100
                    ).toFixed(2)}{" "}
                    % */}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="3" className="text-center text-gray-500 py-6">
                  No ballots available.
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      {/* Real-Time Pie Chart Section */}
      <div className="max-w-md mx-auto">
        <h2 className="text-center text-lg font-semibold mb-4">
          Vote Distribution
        </h2>
        {/* <Pie
          data={{
            labels: ballot?.votingOptions.map((option) => option.name),
            datasets: [
              {
                data: ballot?.votingOptions.map((option) => option.votes),
                backgroundColor: ["#6366F1", "#34D399", "#FBBF24", "#F43F5E"],
                hoverBackgroundColor: [
                  "#4F46E5",
                  "#10B981",
                  "#F59E0B",
                  "#E11D48",
                ],
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  usePointStyle: true,
                  color: "#4B5563",
                },
              },
            },
          }}
        /> */}
      </div>
    </div>
  );
};

export default ResultTable;
