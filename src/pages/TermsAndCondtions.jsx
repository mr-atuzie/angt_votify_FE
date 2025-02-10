import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TermsAndConditions = () => {
  const iconSize = 15;
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-6 shadow-md">
        <h1 className="text-4xl font-bold">2rueVote</h1>
      </header>
      <div className="bg-white p-6 rounded-b-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center my-4">
          Terms and Conditions
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Effective Date: 04-02-2025
        </p>

        <div className="space-y-8 text-gray-800">
          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 1.
              Acceptance of Terms
            </h3>
            <p>
              By using 2RueVote.com, you agree to comply with these Terms and
              all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 2.
              Changes to Terms
            </h3>
            <p>
              We reserve the right to modify, amend, or update these Terms at
              any time.
            </p>
          </section>

          <section>
            <h3 className="  lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 3.
              Eligibility
            </h3>
            <p>
              You must be at least 18 years old or the legal age of majority in
              your jurisdiction to use 2RueVote.com.
            </p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 4.
              Account Registration and Security
            </h3>
            <p>
              You are responsible for maintaining the confidentiality of your
              login credentials.
            </p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 5.
              User Responsibilities
            </h3>
            <ul className="list-disc list-inside pl-5">
              <li>You will not use the Site for any illegal activities.</li>
              <li>
                You will not attempt to interfere with the Site’s security.
              </li>
              <li>You will not violate other users' privacy rights.</li>
            </ul>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 6.
              Voting and Participation
            </h3>
            <p>
              By voting on 2RueVote.com, you agree to follow all rules and
              guidelines provided.
            </p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 7.
              Intellectual Property
            </h3>
            <p>
              All content on 2RueVote.com is the property of 2RueVote and its
              licensors.
            </p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle iconSize={iconSize} className="text-blue-500" /> 8.
              Privacy and Data Protection
            </h3>
            <p>Your use of the Site is governed by our Privacy Policy.</p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 9.
              Third-Party Links and Content
            </h3>
            <p>
              We do not assume responsibility for third-party content linked on
              our site.
            </p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 10.
              Disclaimers and Limitation of Liability
            </h3>
            <p>
              2RueVote.com is provided on an "as-is" basis without warranties.
            </p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 11.
              Indemnification
            </h3>
            <p>
              You agree to indemnify and hold harmless 2RueVote and its
              affiliates from any claims arising from your use of the Site.
            </p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 12.
              Termination
            </h3>
            <p>
              We reserve the right to terminate your access to the Site at our
              discretion.
            </p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 13.
              Governing Law
            </h3>
            <p>
              These Terms are governed by the laws of the Federal Republic of
              Nigeria.
            </p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 14.
              Dispute Resolution
            </h3>
            <p>Disputes shall be resolved through arbitration in Nigeria.</p>
          </section>

          <section>
            <h3 className=" lg:text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle size={iconSize} className="text-blue-500" /> 15.
              Contact Information
            </h3>
            <p>Email: info@angthub.com, idris.ogungbo@angthub.com</p>
            <p>Phone: +2348062430048</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
