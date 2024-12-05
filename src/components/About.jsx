import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen py-10 bg-white ">
      <div className=" w-[90%]  mx-auto ">
        <div className=" flex flex-col gap-4 justify-center mb-10 items-center">
          <div className="  text-center px-6 py-1.5 bg-blue-50 rounded-md w-fit">
            How it works
          </div>
          <h1 className=" text-4xl text-center">Get started in 4 steps</h1>
        </div>

        <div className=" gap-5 flex justify-between items-center">
          <div className=" border rounded-lg p-5">
            <div className=" h-52 bg-pink-200 rounded-lg mb-5"></div>

            <h3 className=" font-medium mb-2">Create Ballot</h3>
            <p className=" text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              quam cum deleniti velit recusandae ipsam autem sed voluptate totam
              nobis, aperiam quae similique odit enim assumenda. Eum ullam quo
              hic.
            </p>
          </div>

          <div className=" border rounded-lg p-5">
            <div className=" h-52 rounded-lg bg-blue-200 mb-5"></div>
            <h3 className=" font-medium mb-2">Add Voters</h3>
            <p className=" text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              quam cum deleniti velit recusandae ipsam autem sed voluptate totam
              nobis, aperiam quae similique odit enim assumenda. Eum ullam quo
              hic.
            </p>
          </div>

          <div className=" border rounded-lg p-5">
            <div className=" h-52 bg-yellow-200 rounded-lg mb-5"></div>

            <h3 className=" font-medium mb-2">Launch Election</h3>
            <p className=" text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              quam cum deleniti velit recusandae ipsam autem sed voluptate totam
              nobis, aperiam quae similique odit enim assumenda. Eum ullam quo
              hic.
            </p>
          </div>

          <div className=" border rounded-lg p-5">
            <div className=" h-52 bg-green-200 rounded-lg mb-5"></div>

            <h3 className=" font-medium mb-2">Monitor Results</h3>
            <p className=" text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              quam cum deleniti velit recusandae ipsam autem sed voluptate totam
              nobis, aperiam quae similique odit enim assumenda. Eum ullam quo
              hic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
