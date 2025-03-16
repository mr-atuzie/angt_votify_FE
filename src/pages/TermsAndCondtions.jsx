import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  const iconSize = 20;
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-500 to-indigo-700 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="bg-white max-w-4xl w-full rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 uppercase">
            Terms and Conditions
          </h2>
          <p className="text-gray-500 text-center mt-2">
            Effective Date: 04-02-2025
          </p>

          <div className="mt-6 space-y-6 text-gray-800">
            {[
              {
                title: "Acceptance of Terms",
                details:
                  "By using 2RueVote.com, you agree to comply with these Terms and all applicable laws and regulations.",
              },
              {
                title: "Changes to Terms",
                details:
                  "We reserve the right to modify, amend, or update these Terms at any time.",
              },
              {
                title: "Eligibility",
                details:
                  "You must be at least 18 years old or the legal age of majority in your jurisdiction to use 2RueVote.com.",
              },
              {
                title: "Account Registration and Security",
                details:
                  "You are responsible for maintaining the confidentiality of your login credentials.",
              },
              {
                title: "User Responsibilities",
                details: [
                  "You will not use the Site for any illegal activities.",
                  "You will not attempt to interfere with the Site’s security.",
                  "You will not violate other users' privacy rights.",
                ],
              },
              {
                title: "Voting and Participation",
                details:
                  "By voting on 2RueVote.com, you agree to follow all rules and guidelines provided.",
              },
              {
                title: "Intellectual Property",
                details:
                  "All content on 2RueVote.com is the property of 2RueVote and its licensors.",
              },
              {
                title: "Privacy and Data Protection",
                details:
                  "Your use of the Site is governed by our Privacy Policy.",
              },
              {
                title: "Third-Party Links and Content",
                details:
                  "We do not assume responsibility for third-party content linked on our site.",
              },
              {
                title: "Disclaimers and Limitation of Liability",
                details:
                  '2RueVote.com is provided on an "as-is" basis without warranties.',
              },
              {
                title: "Indemnification",
                details:
                  "You agree to indemnify and hold harmless 2RueVote and its affiliates from any claims arising from your use of the Site.",
              },
              {
                title: "Termination",
                details:
                  "We reserve the right to terminate your access to the Site at our discretion.",
              },
              {
                title: "Governing Law",
                details:
                  "These Terms are governed by the laws of the Federal Republic of Nigeria.",
              },
              {
                title: "Dispute Resolution",
                details:
                  "Disputes shall be resolved through arbitration in Nigeria.",
              },
              {
                title: "Contact Information",
                details: ["Email: hello@2ruevote.com", "Phone: +2348062430048"],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-gray-50 mt-[60px] p-5 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-600">
                  <FaCheckCircle size={iconSize} className="text-blue-500" />
                  {section.title}
                </h3>
                {Array.isArray(section.details) ? (
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    {section.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-gray-700">{section.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
