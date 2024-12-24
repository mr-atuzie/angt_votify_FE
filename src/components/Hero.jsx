import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex items-center justify-center bg-blue-50 lg:min-h-[50vh] py-5 lg:py-10">
      <div className="bg-white rounded-2xl shadow-lg px-4 lg:px-8 py-12 w-[90%] lg:w-[70%] flex flex-col items-center gap-4 lg:gap-8 text-center">
        {/* Tagline */}
        <div className="bg-black text-white text-xs lg:text-sm font-medium px-6 py-2 rounded-full">
          Streamline Your Organization's Elections with Ease
        </div>

        {/* Title */}
        <h1 className="text-xl lg:text-5xl capitalize font-bold leading-tight text-gray-800">
          Manage elections effortlessly with a{" "}
          <span className="text-blue-600">cloud-based platform</span> designed
          for interactive voting experiences.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed lg:w-[75%]">
          Simplify the election process for your organization. Our app ensures
          your next election is free, fair, seamless, and secure.
        </p>

        {/* CTA Button */}
        <Link
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm lg:text-base font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
