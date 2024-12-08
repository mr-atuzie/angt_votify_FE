import React, { useState } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { PiUsersFourFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const ElectionVoters = () => {
  const [menu, setMenu] = useState(false);
  const [ballot, setBallot] = useState(true);
  return (
    <div>
      {/* {menu && (
        <BallotForm menu={menu} setMenu={setMenu} setBallot={setBallot} />
      )} */}

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
            rex
            <div className="bg-white shadow-md rounded-lg p-6">
              <table className="w-full table-auto text-left text-sm">
                <thead>
                  <tr className="text-gray-600 border-b">
                    <th className="py-2">Name</th>
                    <th className="py-2">Voter ID</th>
                    <th className="py-2">Email</th>
                    <th className="py-2">Verified</th>
                    {/* <th className="py-2">Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Atuzie Rex Habinuchi</td>
                    <td className="py-2">VOTER-12764555</td>
                    <td className="py-2">rexatuzie@gmail.com</td>
                    <td className=" text-yellow-500">Pending</td>
                    {/* <td className="py-2">
                      <button className="text-blue-600 hover:underline">
                        View
                      </button>
                    </td> */}
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Okachi Wori</td>
                    <td className="py-2">VOTER-12764555</td>
                    <td className="py-2">okachi@gmail.com</td>
                    <td className=" text-green-500">Verified</td>
                    {/* <td className="py-2">
                      <button className="text-blue-600 hover:underline">
                        View
                      </button>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className=" flex justify-center min-h-[70vh] items-center h-full w-full">
            <div className=" flex flex-col justify-center items-center gap-2">
              <div className=" flex items-center gap-2">
                <span>
                  <PiUsersFourFill size={50} />
                </span>
                <h1 className=" text-4xl ">Add Voters</h1>
              </div>

              <p>
                Get started by adding Voters to{" "}
                <span className="text-blue-600 font-medium">
                  Most Beautiful Girl Nigeria
                </span>{" "}
                Election
              </p>

              <div className=" flex gap-2 mt-4">
                <button className="bg-white border w-36 border-blue-500 text-blue-500 flex items-center justify-center gap-2    rounded-md hover:bg-blue-700 transition">
                  <span>
                    <IoIosCloudUpload size={20} />
                  </span>
                  <span>Import</span>
                </button>

                <Link to={"/election/12345/voter/create"}>
                  <button
                    onClick={() => setMenu(!menu)}
                    className="bg-blue-600  text-white px-4 py-2 gap-2 flex items-center justify-center rounded-md hover:bg-blue-700 transition"
                  >
                    <span>
                      <IoAddSharp size={20} />
                    </span>
                    Add Voter
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectionVoters;
