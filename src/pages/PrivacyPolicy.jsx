import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  const iconSize = 20;

  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-500 to-indigo-700 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="bg-white mt-[60px] max-w-4xl w-full rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 uppercase">
            Privacy Policy
          </h2>
          <p className="text-gray-500 text-center mt-2">
            Effective Date: 04-02-2025
          </p>

          <div className="mt-6 space-y-6 text-gray-800">
            {[
              {
                title: "Information We Collect",
                details: [
                  "We collect both personal and non-personal information to improve our services.",
                  "Name, email, phone number, and payment details.",
                  "Voting preferences and voluntarily provided information.",
                  "Browser type, IP address, device info, and geolocation data.",
                ],
              },
              {
                title: "How We Use Your Information",
                details: [
                  "We use collected data to enhance platform functionality, ensure security, and communicate with users.",
                ],
              },
              {
                title: "Data Security",
                details: [
                  "We implement strong security measures to protect your information but cannot guarantee absolute security.",
                ],
              },
              {
                title: "Sharing Your Information",
                details: [
                  "We do not sell or rent your data but may share it with trusted service providers or legal authorities when necessary.",
                ],
              },
              {
                title: "Cookies and Tracking",
                details: [
                  "We use cookies to enhance your experience, and you can disable them in your browser settings.",
                ],
              },
              {
                title: "Your Rights",
                details: [
                  "You have the right to access, correct, delete, or opt-out of personal data processing.",
                ],
              },
              {
                title: "Children’s Privacy",
                details: [
                  "We do not knowingly collect data from children under 18. If found, it will be deleted immediately.",
                ],
              },
              {
                title: "Changes to This Policy",
                details: [
                  "We may update this policy periodically, and users are encouraged to review it regularly.",
                ],
              },
              {
                title: "Contact Us",
                details: ["Email: hello@2ruevote.com", "Phone: +2348062430048"],
              },
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-600">
                  <FaShieldAlt size={iconSize} className="text-blue-500" />
                  {section.title}
                </h3>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {section.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
