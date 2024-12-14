import React from "react";
// import { useParams } from "react-router-dom";
import { IoFingerPrintSharp } from "react-icons/io5";

const Voting = () => {
  //   const { electionId, voterId } = useParams();

  // Hardcoded Election and Ballot Options
  const electionTitle = "Presidential Election 2024";
  const options = [
    {
      _id: "1",
      name: "John Doe",
      description: "Candidate for President",
      image:
        "https://media.istockphoto.com/id/1352025984/photo/headshot-of-cheerful-young-businessman.jpg?s=612x612&w=0&k=20&c=6LxOFkwfu3XYgfySJfI1uTpP1JUX4ZIgl_1CdpQBk3s=",
    },
    {
      _id: "2",
      name: "Jane Smith",
      description: "Candidate for Treasurer",
      image:
        "https://media.istockphoto.com/id/1201144328/photo/smiling-black-man-in-suit-posing-on-studio-background.jpg?s=612x612&w=0&k=20&c=abcU_jcFCUgSkmpXAd5qfrsUFUcdv6oOMdtW2U-m_8g=",
    },
    {
      _id: "3",
      name: "Alex Johnson",
      description: "Candidate for Vice President",
      image:
        "https://images.squarespace-cdn.com/content/v1/6622cfa4f013197ec9fbc6e8/605a8e2b-1369-4eb4-aeef-b455f700d80f/Headshot+112.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      {/* Header */}
      <header className="w-full py-10 flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white shadow-lg">
        <h1 className="text-4xl font-extrabold uppercase tracking-widest text-center">
          Department of Medicine Election
        </h1>
      </header>

      {/* Election Container */}
      <div className="w-[60%] mx-auto my-12 bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Election Info */}
        <div className="px-8 py-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
          <h1 className="text-2xl uppercase font-bold tracking-wide">
            {electionTitle}
          </h1>
          <p className=" text-gray-200 text-sm">Vote for the President</p>
        </div>

        {/* Ballot Options */}
        <form>
          <div className="p-8 grid grid-cols-1 gap-6">
            {options.length > 0 ? (
              options.map((option) => (
                <label
                  key={option._id}
                  className="flex flex-col lg:flex-row items-center gap-6 bg-gradient-to-b from-gray-50 to-gray-100 shadow-lg p-6 rounded-xl border border-gray-300 cursor-pointer"
                >
                  {/* Profile Picture */}
                  <img
                    className="w-24 h-24 object-cover rounded-full border-4 border-blue-600"
                    src={option?.image}
                    alt={option?.name || "Option Image"}
                  />

                  {/* Option Details */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                      {option?.name}
                    </h2>
                    <p className="text-gray-500 ">{option?.description}</p>
                  </div>

                  {/* Radio Button */}
                  <input
                    type="radio"
                    name="candidate"
                    value={option._id}
                    className="w-6 h-6 border-2 border-gray-300 text-blue-700 focus:ring-2 focus:ring-blue-400 rounded-full"
                  />
                </label>
              ))
            ) : (
              <p className="text-center text-gray-500">No ballots available.</p>
            )}
          </div>
        </form>

        {/* Vote Button */}
        <div className="flex justify-center items-center mt-8 mb-10">
          <button className="flex items-center bg-blue-700 hover:bg-blue-800 tracking-wide text-white font-semibold rounded-full px-6 py-3 shadow-md transition transform hover:scale-105">
            <span className="mr-3 text-lg">Submit Your Vote</span>
            <IoFingerPrintSharp size={35} />
          </button>
        </div>
      </div>

      <div className="w-[60%] mx-auto my-12 bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Election Info */}
        <div className="px-8 py-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
          <h1 className="text-2xl uppercase font-bold tracking-wide">
            {electionTitle}
          </h1>
          <p className="text-gray-200 text-sm">Vote for the President</p>
        </div>

        {/* Ballot Options */}
        <form>
          <div className="p-8 grid grid-cols-1 gap-6">
            {options.length > 0 ? (
              options.map((option) => (
                <label
                  key={option._id}
                  className="flex flex-col lg:flex-row items-center gap-6 bg-gradient-to-b from-gray-50 to-gray-100 shadow-lg p-6 rounded-xl border border-gray-300 cursor-pointer"
                >
                  {/* Profile Picture */}
                  <img
                    className="w-24 h-24 object-cover rounded-full border-4 border-blue-600"
                    src={option?.image}
                    alt={option?.name || "Option Image"}
                  />

                  {/* Option Details */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                      {option?.name}
                    </h2>
                    <p className="text-gray-500 ">{option?.description}</p>
                  </div>

                  {/* Radio Button */}
                  <input
                    type="radio"
                    name="candidate"
                    value={option._id}
                    className="w-6 h-6 border-2 border-gray-300 text-blue-700 focus:ring-2 focus:ring-blue-400 rounded-full"
                  />
                </label>
              ))
            ) : (
              <p className="text-center text-gray-500">No ballots available.</p>
            )}
          </div>
        </form>

        {/* Vote Button */}
        <div className="flex justify-center items-center mt-8 mb-10">
          <button className="flex items-center bg-blue-700 hover:bg-blue-800 tracking-wide text-white font-semibold rounded-full px-6 py-3 shadow-md transition transform hover:scale-105">
            <span className="mr-3 text-lg">Submit Your Vote</span>
            <IoFingerPrintSharp size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Voting;
