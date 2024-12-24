import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
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
    </div>
  );
};

export default Banner;
