import React from "react";
import {
  FaCogs,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

const WhatWeOffer = () => {
  const features = [
    {
      title: "Customizable Election Setup",
      description:
        "Design your voting process to perfectly match your organization's specific requirements.",
      icon: <FaCogs className="text-blue-600 text-4xl" />,
      bgColor: "bg-indigo-100",
    },
    {
      title: "User Management",
      description:
        "Easily manage voter registration, roles, and permissions to ensure smooth election administration.",
      icon: <FaUsers className="text-green-600 text-4xl" />,
      bgColor: "bg-green-100",
    },
    {
      title: "Secure Voting",
      description:
        "Protect voter data and ensure election integrity with robust encryption and authentication measures.",
      icon: <FaShieldAlt className="text-yellow-600 text-4xl" />,
      bgColor: "bg-yellow-100",
    },
    {
      title: "Real-Time Monitoring & Results",
      description:
        "Monitor participation and view live vote counts on an intuitive dashboard.",
      icon: <FaChartLine className="text-blue-600 text-4xl" />,
      bgColor: "bg-blue-100",
    },
    {
      title: "Fast, Accurate Final Results",
      description:
        "Get immediate, reliable, and error-free results as soon as voting concludes.",
      icon: <FaClock className="text-pink-600 text-4xl" />,
      bgColor: "bg-pink-100",
    },
  ];

  return (
    <section className="w-full py-5 lg:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm bg-blue-100 text-blue-600 inline-block px-4 py-2 rounded-full">
            What We Offer
          </h2>
          <h1 className="mt-4 text-xl lg:text-5xl font-bold text-gray-800">
            Empower Your Organization with Our Features
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg transition-transform hover:scale-105 ${feature.bgColor}`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="lg:text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
