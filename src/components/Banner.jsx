import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" h-[50vh] bg-blue-600 flex-col gap-4 flex justify-center items-center">
      <h1 className="text-center text-5xl w-[50%] text-white font-semibold">
        Manage elections easily with real time results.
      </h1>

      <Link
        to={"/register"}
        className="bg-white  text-sm lg:text-base text-blue-600 font-medium py-3 px-6 rounded-full "
      >
        Get started now
      </Link>
    </div>
  );
};

export default Banner;
