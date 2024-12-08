import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { GoTrash } from "react-icons/go";

import { BsThreeDotsVertical } from "react-icons/bs";

const BallotCard = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  // Show tooltip on mouse enter
  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  // Hide tooltip on mouse leave
  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };
  return (
    <div className=" flex justify-between items-center">
      <div className="pb-1.5 w-full flex items-center gap-4 border-b">
        <img
          className=" w-20 object-cover rounded-full h-20"
          src="https://orlandosydney.com/wp-content/uploads/2022/02/Corporate-Headshot-Photo.-By-Photographer-orlandosydney.com-OS1_8302.jpg"
          alt=""
        />

        <div>
          <h2>Atuie Rex</h2>
          <p className=" text-sm text-gray-500">
            Vote for a trust,Bravery and Grit
          </p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Trigger button */}
        <button>
          <BsThreeDotsVertical size={20} />
        </button>
        {/* Tooltip content */}
        {isTooltipVisible && (
          <div className="absolute border  z-40 bg-gray-100 px-2   shadow-lg w-44 text-sm  flex flex-col gap-2  rounded-lg py-4  right-3  top-4 mb-2 whitespace-nowrap">
            {/* Edit  */}
            <button className="flex bg-white rounded-lg w-full p-2 text-center items-center gap-2">
              <BiEdit size={20} />
              <span className=" ">Edit</span>
            </button>

            {/* view photos btn */}
            {/* <button className="flex bg-white  rounded-lg w-full p-2 text-center items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <span className=" ">View photo</span>
                </button> */}

            {/* delete post btn */}

            <button className="flex items-center p-2 text-center  bg-white rounded-lg gap-2 ">
              <GoTrash />
              <span className="">Delete</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BallotCard;
