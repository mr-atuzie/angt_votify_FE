import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen relative flex animate-pulse">
      {/* Sidebar Loader */}
      <div className="fixed h-full w-[20%] bg-blue-800">
        <div className="p-4 space-y-4">
          <div className="h-8 w-3/4 bg-gray-700 rounded"></div>
          <div className="h-6 w-1/2 bg-gray-700 rounded"></div>
          <div className="h-6 w-2/3 bg-gray-700 rounded"></div>
          <div className="h-6 w-1/3 bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Main Content Loader */}
      <div className="flex-1 ml-[20%] bg-gray-100 space-y-6">
        {/* Header Loader */}
        <div className="p-6 bg-white shadow-md mb-4">
          <div className="h-8 w-1/3 bg-gray-300 rounded"></div>
          <div className="mt-2 h-6 w-1/4 bg-gray-300 rounded"></div>
        </div>

        {/* Content Boxes Loader */}
        <div className="p-6 space-y-4">
          <div className="bg-white p-4 shadow-md rounded">
            <div className="h-6 w-1/2 bg-gray-300 rounded mb-2"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <div className="h-6 w-1/2 bg-gray-300 rounded mb-2"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <div className="h-6 w-1/2 bg-gray-300 rounded mb-2"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
