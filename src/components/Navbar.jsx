import React, { useState } from "react";
import { MdHowToVote } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className=" bg-white w-full ">
      <div className=" mx-auto w-[90%]  lg:w-[85%] py-4 flex items-center justify-between ">
        <div>
          <h4 className="text-2xl font-extrabold text-blue-900">2ruevote</h4>
        </div>

        {/* Links */}
        <div className=" gap-10  hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `tracking-wide cursor-pointer ${
                isActive ? " text-blue-600 " : "text-black hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `tracking-wide cursor-pointer ${
                isActive ? " text-blue-600 " : "text-black hover:text-blue-600"
              }`
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/frequently-asked-questions"
            className={({ isActive }) =>
              `tracking-wide cursor-pointer ${
                isActive ? " text-blue-600 " : "text-black hover:text-blue-600"
              }`
            }
          >
            FAQ
          </NavLink>

          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              `tracking-wide cursor-pointer ${
                isActive ? " text-blue-600 " : "text-black hover:text-blue-600"
              }`
            }
          >
            Testimonal
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `tracking-wide cursor-pointer ${
                isActive ? " text-blue-600 " : "text-black hover:text-blue-600"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        <div className=" hidden  lg:flex items-center tracking-wide gap-1 lg:gap-5">
          <Link className=" cursor-pointer " to={"/login"}>
            Login
          </Link>
          <Link
            className=" cursor-pointer hover:bg-transparent hover:border-2 hover:border-blue-600 hover:text-blue-600 bg-blue-600 rounded-full px-6 py-1.5 text-white"
            to={"/register"}
          >
            Sign up
          </Link>
        </div>

        {/* Hamburger Menu for mobile */}
        <button onClick={() => setMenu(!menu)} className="md:hidden text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {menu && (
        <div className=" w-[80%] p-4 bg-white h-screen fixed z-50 top-0 left-0">
          {/* Dashboard header */}

          <div className="flex items-center text-blue-800  space-x-2 ">
            <div className="">
              <MdHowToVote size={20} />
            </div>
            <h4 className="text-2xl font-bold ">The Grand Stage</h4>
          </div>

          <div className=" flex flex-col my-6 gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `tracking-wide cursor-pointer ${
                  isActive
                    ? " text-blue-600 "
                    : "text-black hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `tracking-wide cursor-pointer ${
                  isActive
                    ? " text-blue-600 "
                    : "text-black hover:text-blue-600"
                }`
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/frequently-asked-questions"
              className={({ isActive }) =>
                `tracking-wide cursor-pointer ${
                  isActive
                    ? " text-blue-600 "
                    : "text-black hover:text-blue-600"
                }`
              }
            >
              FAQ
            </NavLink>

            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `tracking-wide cursor-pointer ${
                  isActive
                    ? " text-blue-600 "
                    : "text-black hover:text-blue-600"
                }`
              }
            >
              Testimonal
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `tracking-wide cursor-pointer ${
                  isActive
                    ? " text-blue-600 "
                    : "text-black hover:text-blue-600"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
