import React from "react";
import { FaPoll, FaUsers, FaRocket, FaChartBar } from "react-icons/fa";

const StepsSection = () => {
  const steps = [
    {
      title: "Create Ballot",
      description:
        "Design your election with precision. Define your ballot structure, add questions, and customize options to ensure clarity for voters. Whether it’s a simple yes/no poll or a complex multi-choice questionnaire, the ballot creation process is intuitive and flexible.",
      icon: <FaPoll className="text-blue-600 text-5xl" />,
      bgColor: "bg-blue-100",
    },
    {
      title: "Add Voters",
      description:
        "Easily import and manage your voter list. Provide access credentials, customize voting rights, and ensure a seamless experience for participants. From bulk uploads to individual entries, the process is efficient and secure.",
      icon: <FaUsers className="text-green-600 text-5xl" />,
      bgColor: "bg-green-100",
    },
    {
      title: "Launch Election",
      description:
        "Set your election in motion. Configure start and end times, notify participants, and activate the voting process. Launch with confidence, knowing every step has been optimized for smooth operation.",
      icon: <FaRocket className="text-yellow-600 text-5xl" />,
      bgColor: "bg-yellow-100",
    },
    {
      title: "Monitor Results",
      description:
        "Track the progress of your election in real time. Gain insights into participation rates, ensure compliance, and view results as votes are counted. Stay informed and in control every step of the way.",
      icon: <FaChartBar className="text-purple-600 text-5xl" />,
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm bg-blue-100 text-blue-600 inline-block px-4 py-2 rounded-full">
            Get Started in 4 Steps
          </h2>
          <h1 className="mt-4 text-3xl lg:text-5xl font-bold text-gray-800">
            Simplify Your Election Process
          </h1>
          <p className="mt-4 text-gray-600 lg:w-2/3 mx-auto">
            Follow these straightforward steps to ensure your organization's
            election is streamlined, secure, and efficient.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-md transition-transform hover:scale-105 ${step.bgColor}`}
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
