import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import Banner from "../components/Banner";
import ceoImage from "../assets/idris.jpg";
import image1 from "../assets/election1.jpeg";
import image2 from "../assets/election2.jpeg";
import image3 from "../assets/election3.jpeg";

const About = () => {
  const teamMembers = [
    {
      name: "Idris Ogungbo",
      role: "Co-Founder & CIO/CTO",
      image: ceoImage,
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

  const sections = [
    {
      title: "Welcome to 2RueVote",
      subtitle: "Empowering secure and transparent voting",
      text: "2RueVote is an innovative platform committed to revolutionizing the way people engage with voting and democracy. We empower organizations and individuals with tools to participate in the voting process more effectively, securely, and transparently.",
      image: image1,
    },
    {
      title: "Our Vision",
      subtitle: "A future of secure and inclusive voting",
      text: "To become the leading platform for secure, transparent, and inclusive voting globally, fostering a stronger connection between citizens and the decisions that shape their lives.",
      image: image2,
    },
    {
      title: "Our Mission",
      subtitle: "Modernizing voting through technology",
      text: "Our mission is to modernize the voting process through technology, ensuring that all organizations and individuals have access to a simple, secure, and reliable voting system. We are committed to creating a platform that champions transparency, eliminates voter fraud, and increases voter participation globally.",
      image: image3,
    },
  ];

  return (
    <>
      <Navbar />
      <div className=" mt-[60px] mx-auto p-8 space-y-16">
        {/* Hero Section */}
        {/* <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-8 shadow-md rounded-lg">
          <h1 className="text-4xl font-bold">About Us</h1>
        </header> */}

        {/* Sections */}
        {sections.map((section, index) => (
          <section
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Text Content */}
            <div className="w-full  text-gray-700 text-center md:text-left ">
              <div className="flex flex-col gap-4 justify-center mb-3 lg:mb-6 items-center md:items-start">
                <div className="px-6 py-1.5 bg-blue-50 rounded-md w-fit text-blue-600 font-medium">
                  {section.title}
                </div>
                <h2 className=" text-black lg:text-3xl font-semibold text-center">
                  {section.subtitle}
                </h2>
              </div>
              <p className="lg:text-lg">{section.text}</p>
            </div>
          </section>
        ))}

        {/* Meet Our Team */}
        <section>
          <div className="flex flex-col gap-4 justify-center mb-10 items-center">
            <div className="text-center px-6 py-1.5 bg-blue-50 rounded-md w-fit text-blue-600 font-medium">
              Meet Our Team
            </div>
            {/* <h2 className="text-3xl font-bold text-center"></h2> */}
          </div>
          <div className="mt-6 space-y-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white  rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6"
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
