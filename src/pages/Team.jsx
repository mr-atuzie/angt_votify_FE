import React from "react";
import Navbar from "../components/Navbar";
import CEO from "../assets/idris.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Idris Ogungbo",
      role: "Co-Founder & CIO/CTO",
      image: CEO,
      description:
        "Idris Ogungbo is a visionary technologist leading 2RueVote’s technological innovation. With over a decade of experience across fintech, maritime, telecoms, and oil & gas, he specializes in software development, cybersecurity, and systems architecture. He is also the founder of ANGT-Hub, a virtual tech hub connecting experts with learners.",
    },
    {
      name: "Ayoola Ayoyinka",
      role: "Product Manager",
      image: "/images/ayoola.jpg",
      description:
        "Ayoola brings extensive product management experience to 2RueVote, focusing on user experience and product development. He ensures that 2RueVote delivers intuitive, user-centric solutions by optimizing its features for a seamless, trusted, and engaging voting experience.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className=" mt-[60px]">
        <div className="max-w-6xl mx-auto p-8">
          <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-6 shadow-md rounded-lg">
            <h1 className="text-4xl font-bold">Meet Our Team</h1>
          </header>
          <div className="mt-10 space-y-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {member.name}
                  </h2>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 mt-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
