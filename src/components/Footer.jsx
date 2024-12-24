import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaVoteYea } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-6 text-gray-200">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Logo Section */}
        <div className="text-left">
          <div className="flex items-center space-x-2 text-blue-600">
            <FaVoteYea size={20} />
            <h1 className="lg:text-xl uppercase font-extrabold ">2ruevote</h1>
          </div>
          <p className="text-sm text-gray-400">
            Simplifying voting, connecting communities.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h2 className="lg:text-xl text-blue-500 font-semibold mb-4">
            About Us
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-purple-500">
                Home
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-purple-500">
                How It Works
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-purple-500">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="lg:text-xl text-blue-500 font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#contestants" className="hover:text-purple-500">
                Contestants
              </a>
            </li>
            <li>
              <a href="#rules" className="hover:text-purple-500">
                Rules
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-purple-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-purple-500">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div className="text-left">
          <h2 className="lg:text-xl text-blue-500 font-semibold mb-4">
            Stay Connected
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Follow us on social media to stay updated.
          </p>
          <div className="flex justify-start gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/2ruevote?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/2ruevote?igsh=MW9nZGZkeXJjMDd4ag%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="mt-6">
            {/* <p className="text-sm">Phone: +234 80 1234 5678</p> */}
            <p className="text-sm">Email: info@2ruevotes.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center">
        <p className="text-xs text-gray-400">
          © 2024 2rueVotes. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Powered by <span className="font-bold text-purple-500">ANGT-HUB</span>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
