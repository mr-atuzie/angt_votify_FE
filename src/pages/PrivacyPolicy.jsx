import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  const iconSize = 15;
  return (
    <>
      <Navbar />
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-6 shadow-md">
        <h1 className="text-4xl font-bold">2rueVote</h1>
      </header>
      <div className="bg-white p-6 rounded-b-lg shadow-lg">
        <h2 className="text-3xl uppercase font-bold text-center my-4">
          Privacy Policy
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Effective Date: 04-02-2025
        </p>

        <div className="space-y-8 text-gray-800">
          <section>
            <h3 className="lg:text-xl font-semibold flex items-center gap-2">
              <FaShieldAlt size={iconSize} className="text-blue-500" />
              Information We Collect
            </h3>
            <p>
              We collect both personal and non-personal information to improve
              our services.
            </p>
            <ul className="list-disc list-inside pl-5">
              <li>Name, email, phone number, and payment details.</li>
              <li>Voting preferences and voluntarily provided information.</li>
              <li>
                Browser type, IP address, device info, and geolocation data.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="lg:text-xl font-semibold flex items-center gap-2">
              <FaShieldAlt size={iconSize} className="text-blue-500" /> How We
              Use Your Information
            </h3>
            <p>
              We use collected data to enhance platform functionality, ensure
              security, and communicate with users.
            </p>
          </section>

          <section>
            <h3 className="lg:text-xl font-semibold flex items-center gap-2">
              <FaShieldAlt size={iconSize} className="text-blue-500" /> Data
              Security
            </h3>
            <p>
              We implement strong security measures to protect your information
              but cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h3 className="lg:text-xl font-semibold flex items-center gap-2">
              <FaShieldAlt size={iconSize} className="text-blue-500" />
              Sharing Your Information
            </h3>
            <p>
              We do not sell or rent your data but may share it with trusted
              service providers or legal authorities when necessary.
            </p>
          </section>

          <section>
            <h3 className="lg:text-xl font-semibold flex items-center gap-2">
              <FaShieldAlt size={iconSize} className="text-blue-500" />
              Cookies and Tracking
            </h3>
            <p>
              We use cookies to enhance your experience, and you can disable
              them in your browser settings.
            </p>
          </section>

          <section>
            <h3 className="lg:text-xl font-semibold flex items-center gap-2">
              <FaShieldAlt size={iconSize} className="text-blue-500" /> Your
              Rights
            </h3>
            <p>
              You have the right to access, correct, delete, or opt-out of
              personal data processing.
            </p>
          </section>

          <section>
            <h3 className="lg:text-xl font-semibold flex items-center gap-2">
              <FaShieldAlt size={iconSize} className="text-blue-500" />
              Children’s Privacy
            </h3>
            <p>
              We do not knowingly collect data from children under 18. If found,
              it will be deleted immediately.
            </p>
          </section>

          <section>
            <h3 className="lg:text-xl font-semibold flex items-center gap-2">
              <FaShieldAlt size={iconSize} className="text-blue-500" />
              Changes to This Policy
            </h3>
            <p>
              We may update this policy periodically, and users are encouraged
              to review it regularly.
            </p>
          </section>

          <section>
            <h3 className="lg:text-xl font-semibold flex items-center gap-2">
              <FaShieldAlt size={iconSize} className="text-blue-500" />
              Contact Us
            </h3>
            <p>Email: info@angthub.com, idris.ogungbo@angthub.com</p>
            <p>Phone: +2348062430048</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
