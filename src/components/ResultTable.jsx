import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Registering necessary components for Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale
);

const ResultTable = ({ ballot }) => {
  const [chartType, setChartType] = useState("bar"); // State to toggle between bar and pie charts

  // Calculate total votes
  const totalVotes = ballot.votingOptions.reduce(
    (sum, option) => sum + option.votes.length,
    0
  );

  // Colors for the pie chart
  const pieColors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4CAF50",
    "#FF9F40",
    "#9966FF",
  ];

  // Bar chart data
  const barChartData = {
    labels: ballot.votingOptions.map((option) => option.name),
    datasets: [
      {
        label: "Votes",
        data: ballot.votingOptions.map((option) => {
          return totalVotes > 0 ? (option.votes.length / totalVotes) * 100 : 0;
        }),
        backgroundColor: "#4CAF50",
        borderColor: "#388E3C",
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data
  const pieChartData = {
    labels: ballot.votingOptions.map((option) => option.name),
    datasets: [
      {
        data: ballot.votingOptions.map((option) => option.votes.length),
        backgroundColor: pieColors.slice(0, ballot.votingOptions.length), // Assign colors dynamically
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Maintain consistent aspect ratio
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            if (chartType === "bar") {
              const percentage = tooltipItem.raw.toFixed(2);
              return `${tooltipItem.label}: ${percentage}%`;
            } else {
              return `${tooltipItem.label}: ${tooltipItem.raw} votes`;
            }
          },
        },
      },
    },
    scales:
      chartType === "bar"
        ? {
            y: {
              beginAtZero: true,
              max: 100,
            },
          }
        : {},
  };

  return (
    <div className="shadow-lg rounded-lg bg-white p-3 lg:p-6 mb-6 space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 lg:p-6 rounded-lg">
        <h1 className="lg:text-3xl capitalize font-bold">{ballot?.title}</h1>
        <p className="text-xs capitalize lg:text-sm lg:mt-2">
          {ballot?.description}
        </p>
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

      {/* Chart Section */}
      <div className="max-w-md mx-auto mt-6 space-y-4">
        <h2 className="text-center text-lg font-semibold">Vote Distribution</h2>

        <div className="flex justify-center items-center space-x-4">
          <label
            htmlFor="chartType"
            className="font-medium text-sm lg:text-base text-gray-700"
          >
            Chart Type:
          </label>
          <select
            id="chartType"
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
            className="p-2 border text-xs lg:text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="bar">Bar Chart</option>
            <option value="pie">Pie Chart</option>
          </select>
        </div>

        <div className="relative w-full h-64">
          {" "}
          {/* Fixed height */}
          {chartType === "bar" ? (
            <Bar data={barChartData} options={options} />
          ) : (
            <Pie data={pieChartData} options={options} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
