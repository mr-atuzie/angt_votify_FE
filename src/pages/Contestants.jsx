import React, { useState } from "react";
import { GiLaurelCrown } from "react-icons/gi";
// import Navbar from "../components/Navbar";

const Contestants = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contestants = [
    {
      id: 1,
      name: "ATUZIE REX HABINUCHI",
      code: "ART9085431",
      bio: "An enthusiastic and confident contestant with a passion for fashion and creative arts.",
      image:
        "https://media.istockphoto.com/id/1182617710/photo/photo-of-cheerful-curly-girl-with-positive-emotions.jpg?s=612x612&w=0&k=20&c=HeCma1qBTyPS5NdvkEh-LD9rmxQSvDed_zOtmx7OYOg=",
    },
    {
      id: 2,
      name: "CHIOMA OKAFOR",
      code: "ART728374",
      bio: "A dynamic and vibrant individual who loves performing arts and cultural heritage.",
      image:
        "https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=612x612&w=0&k=20&c=F6PSgaagZEabgAfTvxE78YPhKtK-5a8yYoA_oSbGNMM=",
    },
    {
      id: 2,
      name: "ADESUWA OKITIRAN",
      code: "ART128654",
      bio: "A dynamic and vibrant individual who loves performing arts and cultural heritage.",
      image:
        "https://media.istockphoto.com/id/1306514019/photo/beautiful-girl-with-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=4roFL5l37zg8gDsPuCTisDbIMnzvSGyKLwf8sjzH9oo=",
    },
    // Add more contestants here
  ];

  const filteredContestants = contestants.filter(
    (contestant) =>
      contestant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contestant.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="max-w-7xl bg-orange-50 mx-auto pb-20   ">
        <div className=" bg-white   p-4">
          <div className="flex items-center  space-x-2 ">
            <div className="text-pink-500">
              <GiLaurelCrown size={20} />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">
              The Grand Stage
            </h4>
          </div>
        </div>
        <div className=" w-[90%] mx-auto my-8  shadow-md rounded-md  bg-white p-4 ">
          {/* <h1 className="lg:text-3xl font-bold text-gray-800 text-center mb-4">
            All Contestants
          </h1> */}
          {/* Search Bar */}
          <div className="">
            <input
              type="text"
              placeholder="Search by name or contestant code"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 placeholder:text-sm bg-gray-50 rounded-md focus:outline-none focus:ring focus:border-purple-500"
            />
          </div>
        </div>

        {/* Contestant Grid */}
        <div className="grid grid-cols-1 w-[90%] mx-auto md:grid-cols-2  lg:grid-cols-3 gap-6">
          {filteredContestants.length > 0 ? (
            filteredContestants.map((contestant) => (
              <div
                key={contestant.id}
                className="bg-white rounded-lg shadow-md"
              >
                {/* Contestant Info */}
                <div className="flex flex-col items-center text-center">
                  <img
                    src={contestant.image}
                    alt={contestant.name}
                    className=" w-full object-cover mb-4"
                  />
                  <div className=" px-4">
                    <h2 className="lg:text-xl font-semibold text-gray-800">
                      {contestant.name}
                    </h2>
                    <p className="text-sm text-gray-600 font-mono">
                      {contestant.code}
                    </p>
                    <p className="text-sm text-gray-600">{contestant.bio}</p>
                    {/* Vote Button */}
                    <div className="my-4 text-center">
                      <a
                        href={`/vote/contestant/${contestant.id}`}
                        className="inline-block bg-pink-500 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                      >
                        Vote Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No contestants found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Contestants;
