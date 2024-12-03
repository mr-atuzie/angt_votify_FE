import React from "react";
// import { GiLaurelCrown } from "react-icons/gi";
// import avatar from "../assets/award.svg";
import { Link } from "react-router-dom";
import CountUpAnimation from "../components/CountUpAnimation";
import ShareLinks from "../components/ShareLinks";

const Dashboard = () => {
  const galleryImages = [
    // "https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=612x612&w=0&k=20&c=F6PSgaagZEabgAfTvxE78YPhKtK-5a8yYoA_oSbGNMM=",
    "https://media.istockphoto.com/id/1182617710/photo/photo-of-cheerful-curly-girl-with-positive-emotions.jpg?s=612x612&w=0&k=20&c=HeCma1qBTyPS5NdvkEh-LD9rmxQSvDed_zOtmx7OYOg=",
    "https://media.istockphoto.com/id/1306514019/photo/beautiful-girl-with-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=4roFL5l37zg8gDsPuCTisDbIMnzvSGyKLwf8sjzH9oo=",
  ];

  const contestUrl = "https://luxelueur.netlify.app/vote/contestant/1234";
  const contestTitle = "Vote for me for Miss Universe 2024!";
  const contestHashtag = "#MissUniverse2024";
  return (
    <div className=" w-full  space-y-6 ">
      {/* Contestant Info */}
      {/* <div className="flex items-center justify-center space-x-2 my-4">
        <GiLaurelCrown size={30} className="text-pink-500" />
        <h2 className="font-semibold capitalize text-pink-500">Dashboard</h2>
      </div> */}

      {/* Header Section */}
      <div className="flex items-center space-x-4">
        {/* <img
          src={avatar}
          alt="Contestant"
          className="w-24 h-24 object-cover "
        /> */}
        <div>
          <h1 className=" text-xl lg:text-3xl font-semibold">Rex atuzie</h1>
          <p className="text-gray-600 mb-1  text-sm lg:text-base">
            contestant code: <span className="font-mono">ASR34567</span>
          </p>
          <p className=" shadow-md text-xs w-fit p-2 bg-green-50 rounded-lg lg:text-sm text-green-600">
            Status: Active
          </p>
        </div>
      </div>

      {/* Vote Information */}
      <div className="my-6">
        <h2 className=" lg:text-2xl font-semibold">Voting</h2>
        <div className="flex space-x-5 lg:space-x-8">
          <div>
            <p className=" text-sm lg:text-base">Total Votes</p>
            {/* <h3 className="text-xl font-bold">9,000</h3> */}

            <CountUpAnimation count={9000} />
          </div>
          <div>
            <p className=" text-sm lg:text-base">Current Rank</p>
            {/* <h3 className="text-xl font-bold">#23</h3> */}
            <CountUpAnimation count={100} />
          </div>
          <Link to={"/vote/contestant/1234"}>
            <button className="bg-pink-500 font-medium text-sm lg:text-base text-white py-2 px-4 rounded-md">
              Vote Now
            </button>
          </Link>
        </div>
        <div className="mt-4">
          {/* <p className="text-sm lg:text-base">
            Voting Ends In: <span className="text-red-600">Countdown</span>
          </p> */}
          {/* Votes Start and End */}
          <div className="flex items-center text-sm space-x-2 mb-3">
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
                  d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                />
              </svg>
            </span>
            <div>
              <h2 className="font-medium capitalize text-gray-600">
                Voting Starts
              </h2>
              <p className=" ">January 1, 2024</p>
            </div>
          </div>

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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </span>
            <div>
              <h2 className="font-medium capitalize text-gray-600 ">
                Voting Ends
              </h2>
              <p className="">January 31, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contestant Bio */}
      <div className="my-6">
        <div className=" flex justify-between items-end">
          <h2 className="text-pink-500 lg:text-2xl font-semibold">
            About Rex atuzie
          </h2>

          <Link to={"/dashboard/edit-profile"}>
            <span className=" text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </span>
          </Link>
        </div>
        <p className=" text-sm lg:text-base">
          An enthusiastic and confident contestant with a passion for fashion
          and creative arts.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="my-6">
        <div className=" flex justify-between items-end">
          <h2 className="  text-pink-500 lg:text-2xl font-semibold">Gallery</h2>

          <Link to={"/dashboard/add-photo"}>
            <span className=" text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 md:grid-cols-3 gap-4">
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

      {/* Footer Section */}
      <div className="my-6">
        <div className=" flex justify-between items-end">
          <h2 className="  text-pink-500 lg:text-2xl font-semibold">Share</h2>

          <div>
            <span className=" text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </span>
          </div>
        </div>
        <ShareLinks
          url={contestUrl}
          title={contestTitle}
          hashtag={contestHashtag}
        />
        {/* <div className="flex text-sm space-x-4">
          <a href="*" className="text-blue-600">
            Facebook
          </a>
          <a href="*" className="text-blue-400">
            Twitter
          </a>
          <a href="*" className="text-pink-600">
            Instagram
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
