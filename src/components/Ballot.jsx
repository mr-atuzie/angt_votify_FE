import React from "react";
import BallotCard from "./BallotCard";

const Ballot = () => {
  const options = [1, 2, 3, 4, 5, 6];
  return (
    <div className=" w-[60%] mx-auto bg-white rounded-lg shadow-lg">
      <div className=" px-4 py-4 bg-blue-800 text-white">
        <div>
          <h1 className=" text-lg font-medium">Mrs Nigeria</h1>
        </div>
      </div>
      <div className=" flex flex-col gap-2 p-4">
        {options.map(() => {
          return <BallotCard />;
        })}
      </div>
    </div>
  );
};

export default Ballot;
