import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import Banner from "../components/Banner";

const About = () => {
  const teamMembers = [
    {
      name: "Idris Ogungbo",
      role: "Co-Founder & CIO/CTO",
      image: "/images/idris.jpg",
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
      <div className="max-w-6xl mx-auto p-8 space-y-12">
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-6 shadow-md rounded-lg">
          <h1 className="text-4xl font-bold">About Us</h1>
        </header>

        <section className="text-center text-gray-700 px-6">
          <h2 className="text-3xl font-bold">Welcome to 2RueVote</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            2RueVote is an innovative platform committed to revolutionizing the
            way people engage with voting and democracy. We empower
            organizations and individuals with tools to participate in the
            voting process more effectively, securely, and transparently.
          </p>
        </section>

        <section className="text-center text-gray-700 px-6">
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            To become the leading platform for secure, transparent, and
            inclusive voting globally, fostering a stronger connection between
            citizens and the decisions that shape their lives.
          </p>
        </section>

        <section className="text-center text-gray-700 px-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Our mission is to modernize the voting process through technology,
            ensuring that all organizations and individuals have access to a
            simple, secure, and reliable voting system. We are committed to
            creating a platform that champions transparency, eliminates voter
            fraud, and increases voter participation globally.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
          <div className="mt-6 space-y-8">
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
        </section>
      </div>
      <Reviews />
      <Faq />
      <Banner />
      <Footer />
    </>
  );
};

export default About;
