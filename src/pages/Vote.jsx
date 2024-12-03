import React from "react";
import { GiLaurelCrown } from "react-icons/gi";
import CountUpAnimation from "../components/CountUpAnimation";

const Vote = () => {
  const galleryImages = [
    "https://media.istockphoto.com/id/1306514019/photo/beautiful-girl-with-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=4roFL5l37zg8gDsPuCTisDbIMnzvSGyKLwf8sjzH9oo=",
  ];
  return (
    <div>
      {/* <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Vote for Rex atuzie
      </h3> */}

      <div className=" mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Contestant Gallery"
              className="rounded-lg"
            />
          ))}
        </div>
      </div>

      <div>
        {/* <h1 className=" text-xl lg:text-3xl font-semibold">Rex atuzie</h1>
        <p className="text-gray-600 mb-1 text-sm lg:text-base">
          Contestant Code: <span className="font-mono">ASR34567</span>
        </p> */}
        {/* Contestant's Name */}
        <div className="flex items-center text-sm space-x-2">
          <span className="text-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </span>
          <div>
            <h2 className="font-semibold capitalize ">Name</h2>
            <p className=" font-medium text-gray-600">Atuzie Rex Habinuchi</p>
          </div>
        </div>

        {/* Contestant's Code */}
        <div className="flex items-center my-3 text-sm space-x-2">
          <span className="text-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
              />
            </svg>
          </span>
          <div>
            <h2 className="font-semibold capitalize ">Code</h2>
            <p className="font-mono text-gray-600">ART9085431</p>
          </div>
        </div>

        {/* Contestant Bio */}
        <div>
          <h2 className=" lg:text-2xl font-semibold">About Rex atuzie</h2>
          <p className=" text-sm lg:text-base">
            An enthusiastic and confident contestant with a passion for fashion
            and creative arts.
          </p>
        </div>
      </div>

      {/* Vote Information */}
      <div className=" my-4 lg:my-6">
        <h2 className="lg:text-2xl font-semibold">Voting</h2>
        <div className="flex space-x-5 lg:space-x-8">
          <div>
            <p className=" text-sm lg:text-base">Total Votes</p>
            {/* <h3 className="text-xl font-bold">9,000</h3> */}
            <CountUpAnimation
              // from={0}
              // to={1552}
              // duration={3}
              count={2500}
              // className="text-4xl font-bold text-purple-500"
            />
          </div>
          <div>
            <p className=" text-sm lg:text-base">Current Rank</p>
            {/* <h3 className="text-xl font-bold">#23</h3> */}
            <CountUpAnimation
              count={50}
              // from={0}
              // to={23}
              // duration={3}
              // className="text-4xl font-bold text-purple-500"
            />
          </div>
        </div>
        {/* <div className="mt-4">
          <p className="text-sm lg:text-base">
            Voting Ends In: <span className="text-red-600">Countdown</span>
          </p>
        </div> */}
      </div>

      <form className=" border border-orange-50 my-8 py-8 px-4 shadow-sm rounded-lg">
        <div className="flex items-center justify-center space-x-2 ">
          <div className="text-pink-500">
            <GiLaurelCrown size={20} />
          </div>
          <h4 className="text-xl font-bold text-gray-800">The Grand Stage</h4>
        </div>
        <p className=" text-sm text-center mb-5">
          Ensure the contestant is who you wnat to vote for
        </p>

        {/* Input Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* No of votes */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Total number of vots you want
            </label>
            <input
              className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              name="name"
              id="name"
              placeholder="Enter the total number of vots you want"
              required
            />
          </div>

          {/* Full Name */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              required
            />
            <small className="text-xs text-gray-400 mt-1 block">
              Name as you'd like it to appear in the contest.
            </small>
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your Phone Number"
              required
            />
          </div>

          <p className=" text-gray-600 text-center">
            Each vote cost{" "}
            <span className=" font-semibold text-black">200NGN</span>
          </p>

          <button
            // disabled={loading}
            className="text-sm mt-4 uppercase lg:text-base w-full py-3 bg-pink-600 rounded-lg text-white font-semibold hover:bg-pink-700 transition-all disabled:bg-gray-300"
            type="submit"
          >
            Proceed to make payment
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Vote;
