import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Registering the necessary components for Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const ResultTable = ({ ballot }) => {
  // Calculate total votes, considering multiple votes per user
  const totalVotes = ballot.votingOptions.reduce(
    (sum, option) => sum + option.votes.length,
    0
  );

  // Prepare the data for the Bar chart (converted to percentage)
  const barChartData = {
    labels: ballot.votingOptions.map((option) => option.name),
    datasets: [
      {
        label: "Votes",
        data: ballot.votingOptions.map((option) => {
          // Calculate the percentage for each option
          return totalVotes > 0 ? (option.votes.length / totalVotes) * 100 : 0;
        }),
        backgroundColor: "#4CAF50", // Bar color
        borderColor: "#388E3C", // Bar border color
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          // Customize tooltips to show votes and percentages
          label: (tooltipItem) => {
            const percentage = tooltipItem.raw.toFixed(2);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensure the y-axis starts at 0
        max: 100, // The y-axis will now scale from 0% to 100%
      },
    },
  };

  return (
    <div className="shadow-lg rounded-lg bg-white p-3 lg:p-6 mb-6 space-y-8">
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
          <tbody>
            {ballot?.votingOptions.length > 0 ? (
              ballot.votingOptions.map((option, index) => (
                <tr key={index} className="border-t even:bg-gray-50">
                  <td className="px-6 py-4">{option.name}</td>
                  <td className="px-6 py-4 text-center">
                    {option.votes.length}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {totalVotes > 0
                      ? ((option.votes.length / totalVotes) * 100).toFixed(2)
                      : 0}
                    %
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center text-gray-500 py-6">
                  No voting options available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bar Chart Section */}
      <div className="max-w-md mx-auto mt-6">
        <h2 className="text-center text-lg font-semibold mb-4">
          Vote Distribution
        </h2>
        <Bar data={barChartData} options={options} />
      </div>
    </div>
  );
};

export default ResultTable;
