import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" flex items-center bg-blue-50 justify-center">
      <div className="bg-white py-10  rounded-2xl w-[97%] my-4  flex flex-col items-center gap-5 justify-center">
        <div className="bg-black font-medium text-sm w-fit px-6 text-white rounded-full  p-2">
          The Easiest Way to Make Voting Interactive.
        </div>

        <h1 className="text-center text-5xl w-[60%] font-semibold">
          Manage elections easily with a{" "}
          <span className="text-blue-600">cloud-based platform</span> designed
          for secure and interactive voting experiences.
        </h1>

        <p className=" w-[50%] text-center  text-lg">
          Our platform ensures every vote is counted, empowering organizations
          to run seamless and secure elections.
        </p>

        <Link
          to={"/register"}
          className="bg-blue-600 designed text-sm lg:text-base text-white font-medium py-3 px-6 rounded-full transition-all"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
