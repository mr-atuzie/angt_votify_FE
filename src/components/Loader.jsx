import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-3 md:p-6 flex flex-col gap-4 animate-pulse">
      {/* Header Loader */}
      <div className="hidden flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
        <div className="h-10 w-36 bg-blue-300 rounded"></div>
      </div>

      {/* Overview Cards Loader */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2"
            >
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
          ))}
      </div>

      {/* Elections and Recent Activity Loader */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Elections Section */}
        <div className="w-full md:w-[70%] space-y-4">
          {Array(2)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="w-full bg-white lg:h-28 border border-gray-200 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg p-4  gap-2"
              >
                <div className="space-y-2">
                  <div className="h-4 w-40 bg-gray-300 rounded"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white w-full md:w-[35%] shadow-lg rounded-lg p-4">
          <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>
          <ul className="space-y-4">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-gray-300 rounded-full h-8 w-8"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-40 bg-gray-200 rounded"></div>
                    <div className="h-3 w-28 bg-gray-300 rounded"></div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Loader;
