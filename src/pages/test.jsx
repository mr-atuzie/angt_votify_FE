import React from "react";
// import { GiLaurelCrown } from "react-icons/gi";

const Test = () => {
  const galleryImages = [
    "https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=612x612&w=0&k=20&c=F6PSgaagZEabgAfTvxE78YPhKtK-5a8yYoA_oSbGNMM=",
    "https://curlambassadors.ca/wp-content/uploads/2023/10/hair-model-events.jpg",
    "https://media.istockphoto.com/id/1182617710/photo/photo-of-cheerful-curly-girl-with-positive-emotions.jpg?s=612x612&w=0&k=20&c=HeCma1qBTyPS5NdvkEh-LD9rmxQSvDed_zOtmx7OYOg=",
    "https://media.istockphoto.com/id/1306514019/photo/beautiful-girl-with-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=4roFL5l37zg8gDsPuCTisDbIMnzvSGyKLwf8sjzH9oo=",
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex items-center space-x-4">
        <img
          src="https://i.insider.com/5a0373d9ec1ade082e107b03?width=700"
          alt="Contestant"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h1 className="text-3xl font-semibold">Rex atuzie</h1>
          <p className="text-gray-600">
            Contestant Code: <span className="font-mono">ASR34567</span>
          </p>
          <p className="text-sm text-green-600">Status: Active</p>
        </div>
      </div>

      {/* Vote Information */}
      <div className="my-6">
        <h2 className="text-2xl font-semibold">Voting</h2>
        <div className="flex space-x-8">
          <div>
            <p>Total Votes</p>
            <h3 className="text-xl font-bold">9,000</h3>
          </div>
          <div>
            <p>Current Rank</p>
            <h3 className="text-xl font-bold">#23</h3>
          </div>
          <div>
            <button className="bg-purple-600 text-white py-2 px-4 rounded">
              Vote Now
            </button>
          </div>
        </div>
        <div className="mt-4">
          <p>
            Voting Ends In: <span className="text-red-600">Countdown</span>
          </p>
        </div>
      </div>

      {/* Contestant Bio */}
      <div className="my-6">
        <h2 className="text-2xl font-semibold">About Rex atuzie</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
          eaque!
        </p>
      </div>

      {/* Gallery Section */}
      <div className="my-6">
        <h2 className="text-2xl font-semibold">Gallery</h2>
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

      {/* Footer Section */}
      <div className="my-6">
        <h2 className="text-2xl font-semibold">Share</h2>
        <div className="flex space-x-4">
          <a href="*" className="text-blue-600">
            Facebook
          </a>
          <a href="*" className="text-blue-400">
            Twitter
          </a>
          <a href="*" className="text-pink-600">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Test;
