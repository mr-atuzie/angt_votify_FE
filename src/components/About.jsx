import React from "react";
import election1 from "../assets/election1.jpeg";
import election2 from "../assets/election2.jpeg";
import election3 from "../assets/election3.jpeg";
import election4 from "../assets/election3.jpeg";

const About = () => {
  const steps = [
    {
      title: "Free and Fair Elections",
      description:
        "We ensure transparency at every stage, eliminating bias and guaranteeing equal opportunities for all participants.",
      bgColor: "bg-pink-200",
      image: election1,
    },
    {
      title: "Seamless Voting Experience",
      description:
        "From setup to final results, our app simplifies the entire process, saving time and effort for administrators and voters alike.",
      bgColor: "bg-blue-200",
      image: election2,
    },
    {
      title: "Real-Time Results",
      description:
        "Stay informed with live updates as votes are cast and tallied. Watch the results unfold in real-time for a truly engaging and transparent process.",
      bgColor: "bg-yellow-200",
      image: election3,
    },
    {
      title: "Unmatched Security",
      description:
        "Built with cutting-edge technology, our platform ensures your election data is encrypted and protected against breaches.",
      bgColor: "bg-green-200",
      image: election4,
    },
  ];

  return (
    <section className="w-full py-5 lg:py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm bg-blue-100 text-blue-600 inline-block px-4 py-2 rounded-full">
            Why Choose Us
          </h2>
          <h1 className="mt-4 text-xl lg:text-5xl font-bold text-gray-800">
            Elevate Your Election Experience
          </h1>
        </div>

        {/* Steps */}
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border rounded-xl p-3 lg:p-6 bg-white shadow-md transition-transform hover:scale-105"
            >
              {/* <div
                className={`h-40 ${step.bgColor} rounded-lg mb-6`}
                aria-hidden="true"
              ></div> */}

              <img
                src={step?.image}
                className=" h-40 w-full  object-cover  mb-6 rounded-lg"
                alt=""
              />
              <h3 className="lg:text-xl font-semibold mb-3 text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
