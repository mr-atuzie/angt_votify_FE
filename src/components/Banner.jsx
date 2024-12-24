import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="h-[30vh] lg:h-[50vh] bg-blue-600 flex-col gap-4 flex justify-center items-center">
        <h1 className="text-center text-3xl w-[90%] lg:text-5xl lg:w-[50%] text-white font-semibold">
          Manage elections easily with real-time results.
        </h1>

        <Link
          to={"/register"}
          className="bg-white text-blue-600 lg:text-base text-lg py-3 px-6 rounded-full mt-4"
        >
          Get Started Now
        </Link>
      </div>

      {/* Main Content Section */}
      <section className="px-6 lg:px-20 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Section */}
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue-800 mb-4">
            An Experience You Can Trust
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            With years of expertise, our platform simplifies every step of the
            election process. From registration to voting and tracking real-time
            progress, we ensure ease and confidence.
          </p>

          {/* Call to Action Section */}
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Ready to Elevate Your Next Election?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Let’s help you run efficient, transparent, and stress-free elections
            your team will love.
          </p>

          <Link
            to={"/register"}
            className="bg-blue-600 text-white text-lg py-3 px-8 rounded-full"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p className="text-sm">
          © 2024 Election Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Banner;
