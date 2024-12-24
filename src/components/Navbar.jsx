import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="lg:text-2xl font-extrabold text-blue-600">2ruevote</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {["Home", "Pricing", "FAQ", "Testimonial", "Contact"].map(
            (item, index) => (
              <NavLink
                key={index}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `text-base font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {item}
              </NavLink>
            )
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenu(!menu)}
          className="lg:hidden z-50 text-gray-800"
        >
          {menu ? <MdOutlineClose size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="bg-white shadow-lg w-full p-6 md:hidden fixed z-40 top-16 left-0">
          <div className="flex flex-col gap-4">
            {["Home", "Pricing", "FAQ", "Testimonial", "Contact"].map(
              (item, index) => (
                <NavLink
                  key={index}
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMenu(false)}
                  className={({ isActive }) =>
                    `text-base font-medium transition ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                >
                  {item}
                </NavLink>
              )
            )}

            <Link
              to="/register"
              className="bg-blue-600 text-center text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
