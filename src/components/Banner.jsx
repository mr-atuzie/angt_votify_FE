import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-blue-700 text-white">
      {/* Main Content Section */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Section */}
          <h2 className="text-xl lg:text-4xl font-semibold mb-4">
            Experience You Can Trust
          </h2>
          <p className=" lg:text-lg text-gray-200 mb-8">
            With years of expertise, our platform simplifies every step of the
            election process. From secure registration to seamless voting and
            real-time progress tracking, we ensure efficiency, security, and
            confidence throughout.
          </p>

          {/* Call to Action Section */}
          <h3 className="text-xl font-medium mb-4 text-gray-100">
            Ready to Transform Your Election Process?
          </h3>
          <p className=" lg:text-lg text-gray-200 mb-8">
            Let us help you organize transparent, efficient, and stress-free
            elections that your team and voters will love.
          </p>

          <Link
            to={"/register"}
            className="bg-white text-blue-700 text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:bg-blue-100"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;
