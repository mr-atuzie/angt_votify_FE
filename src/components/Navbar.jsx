import React, { useState } from "react";
import { MdHowToVote } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiVipCrownLine } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className=" bg-white w-full ">
      <div className=" mx-auto  w-[85%] py-4 flex items-center justify-between ">
        <div>
          <h4 className="text-2xl font-medium text-blue-600">Truevotes</h4>
        </div>

        {/* Links */}
        <div className=" gap-10  hidden md:flex">
          <Link
            className=" cursor-pointer hover:underline tracking-wide"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className=" cursor-pointer hover:underline tracking-wide "
            to={"/pricing"}
          >
            Pricing
          </Link>
          <Link
            className=" cursor-pointer hover:underline tracking-wide "
            to={"/frequently-asked-questions"}
          >
            FAQ
          </Link>
          <Link
            className=" cursor-pointer hover:underline tracking-wide "
            to={"/reviews"}
          >
            Testimonal
          </Link>
          <Link
            className=" cursor-pointer hover:underline tracking-wide "
            to={"/contact"}
          >
            Contact
          </Link>
        </div>

        <div className="  flex items-center tracking-wide gap-5">
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
        <button onClick={() => setMenu(!menu)} className="md:hidden text-white">
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
        <div className=" w-[80%] p-4 bg-orange-50 h-screen fixed z-50 top-0 left-0">
          {/* Dashboard header */}

          <div className="flex items-center  space-x-2 ">
            <div className="text-blue-600">
              <MdHowToVote size={20} />
            </div>
            <h4 className="text-2xl font-bold ">The Grand Stage</h4>
          </div>

          <div className=" flex flex-col my-6 gap-4">
            <Link className=" flex font-medium items-center gap-2" to={"/"}>
              <span className=" text-pink-500">
                <RiVipCrownLine />
              </span>
              <span className=" ">Home</span>
            </Link>
            <Link className=" flex items-center gap-2" to={"/about"}>
              <span className=" text-pink-500">
                <RiVipCrownLine />
              </span>
              <span>About</span>
            </Link>
            <Link className=" flex items-center gap-2" to={"/contestants"}>
              <span className=" text-pink-500">
                <RiVipCrownLine />
              </span>
              <span className=" ">Contestant</span>
            </Link>
            <Link className=" flex items-center gap-2" to={"/contact"}>
              <span className=" text-pink-500">
                <RiVipCrownLine />
              </span>
              <span>Contact</span>
            </Link>
            <Link className=" flex items-center gap-2" to={"/Register"}>
              <span className=" text-pink-500">
                <RiVipCrownLine />
              </span>
              <span>Register</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
