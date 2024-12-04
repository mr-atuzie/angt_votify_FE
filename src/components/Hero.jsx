import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" h-screen bg-black">
      <div>
        <h1 className=" text-6xl font-extrabold relative block overflow-hidden">
          MISS UNIVERSE 2024
        </h1>

        <p className="text-sm lg:text-lg md:text-2xl ">
          Register now for a chance to win exciting cash prizes and showcase
          your beauty, talent on the grand stage
        </p>

        <Link
          to={"/register"}
          className="bg-blue-600 hover:bg-pink-600 text-sm lg:text-base  text-white font-medium py-3 px-6 rounded-lg transition-all"
        >
          Register now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
