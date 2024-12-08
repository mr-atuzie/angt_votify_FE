import React, { useState } from "react";
import { MdBallot } from "react-icons/md";
import { IoIosCloudUpload } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import BallotForm from "../components/BallotForm";
import Ballot from "../components/Ballot";
// import BallotOptions from "../components/BallotOptions";
// import { Link } from "react-router-dom";

const ElectionBallot = () => {
  const [menu, setMenu] = useState(false);
  const [ballot, setBallot] = useState(true);

  return (
    <div>
      {menu && (
        <BallotForm menu={menu} setMenu={setMenu} setBallot={setBallot} />
      )}

      <div className="min-h-screen  bg-gray-100 p-6 flex flex-col gap-6">
        {/* header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Most Beautiful Girl Nigeria
            </h1>

            <span className="bg-yellow-100 text-yellow-600 text-sm px-3 py-1 rounded-full">
              Building
            </span>
          </div>
        </div>

        {ballot ? (
          <div className=" flex flex-col gap-10">
            <Ballot />
            <Ballot />
          </div>
        ) : (
          <div className=" flex justify-center min-h-[70vh] items-center h-full w-full">
            <div className=" flex flex-col justify-center items-center gap-2">
              <div className=" flex items-center gap-2">
                <span>
                  <MdBallot size={50} />
                </span>
                <h1 className=" text-4xl ">Build Your Ballot</h1>
              </div>

              <p>
                Get started by adding questions to{" "}
                <span className="text-blue-600 font-medium">
                  Most Beautiful Girl Nigeria
                </span>{" "}
                ballot
              </p>

              <div className=" flex gap-2 mt-4">
                <button className="bg-white border w-36 border-blue-500 text-blue-500 flex items-center justify-center gap-2    rounded-md hover:bg-blue-700 transition">
                  <span>
                    <IoIosCloudUpload size={20} />
                  </span>
                  <span>Import</span>
                </button>

                <button
                  onClick={() => setMenu(!menu)}
                  className="bg-blue-600  text-white px-4 py-2 gap-2 flex items-center justify-center rounded-md hover:bg-blue-700 transition"
                >
                  <span>
                    <IoAddSharp size={20} />
                  </span>
                  Add Questions
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectionBallot;
