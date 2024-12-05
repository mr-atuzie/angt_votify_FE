import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Features = () => {
  return (
    <div className=" flex items-center bg-blue-50 justify-center">
      <div className="bg-white py-10  rounded-2xl w-[97%] my-4  flex flex-col items-center gap-5 justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold  ">
            Key Features of Our Voting Platform
          </h2>
          <p className=" text-gray-600 mb-8">
            Explore the essential features that empower seamless, secure, and
            interactive elections.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1: Secure Voting */}
          <div className=" border p-5 rounded-lg text-center flex flex-col justify-center items-center">
            <div className="text-blue-600 text-4xl mb-4">
              <MdOutlineSecurity size={40} />
            </div>
            <h3 className="text-xl font-medium  mb-2">Secure Voting</h3>
            <p className=" text-gray-600 ">
              End-to-end encryption and multi-factor authentication ensure that
              your votes are protected.
            </p>
          </div>

          {/* Feature 2: User Management */}
          <div className="border p-5 rounded-lg text-center flex flex-col justify-center items-center">
            <div className="text-blue-600 text-4xl mb-4">
              <FaUsers size={40} />
            </div>
            <h3 className="text-xl font-medium  mb-2">User Management</h3>
            <p className="text-gray-600">
              Easily manage voters, candidates, and administrators with our
              intuitive dashboard.
            </p>
          </div>

          {/* Feature 3: Real-Time Results */}
          <div className="p-5 rounded-lg border flex flex-col justify-center items-center text-center">
            <div className="text-blue-600 flex justify-center items-center text-4xl mb-4">
              <FaChartPie size={40} />
            </div>
            <h3 className="text-xl font-medium mb-2">Real-Time Results</h3>
            <p className=" text-gray-600">
              Get live updates on voting results as they come in, with
              customizable data display options.
            </p>
          </div>

          {/* Feature 3: Real-Time Results */}
          <div className="p-5 rounded-lg border flex flex-col justify-center items-center text-center">
            <div className="text-blue-600 flex justify-center items-center text-4xl mb-4">
              <MdMarkEmailRead size={40} />
            </div>
            <h3 className="text-xl font-medium mb-2">Real-Time Results</h3>
            <p className=" text-gray-600">
              Get live updates on voting results as they come in, with
              customizable data display options.
            </p>
          </div>

          {/* Feature 2: User Management */}
          <div className="border p-5 rounded-lg text-center flex flex-col justify-center items-center">
            <div className="text-blue-600 text-4xl mb-4">
              <BiSupport size={40} />
            </div>
            <h3 className="text-xl font-medium  mb-2">User Management</h3>
            <p className="text-gray-600">
              Easily manage voters, candidates, and administrators with our
              intuitive dashboard.
            </p>
          </div>

          {/* Feature 1: Secure Voting */}
          <div className=" border p-5 rounded-lg text-center flex flex-col justify-center items-center">
            <div className="text-blue-600 text-4xl mb-4">
              <MdOutlineSecurity size={40} />
            </div>
            <h3 className="text-xl font-medium  mb-2">Secure Voting</h3>
            <p className=" text-gray-600 ">
              End-to-end encryption and multi-factor authentication ensure that
              your votes are protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
