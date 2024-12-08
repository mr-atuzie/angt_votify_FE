import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BallotForm = () => {
  const initialState = {
    title: "",
    ballotDescription: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { title, ballotDescription } = formData;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    localStorage.setItem("text", formData);

    navigate("/election/12345/ballot/option");
  };

  return (
    <div className=" min-h-screen absolute z-50 top-0 left-0 bottom-0 w-full bg-black/70 flex justify-end">
      <div className=" bg-white h-full p-10 w-[50%]">
        <form>
          <h4 className="text-5xl text-blue-600 mb-2 font-extrabold ">
            Edit Ballot Question
          </h4>
          <p className=" text-gray-500 mb-8">
            Multiple questions -Voters can selection more than one option.
          </p>

          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            {/* title */}
            <div>
              <label
                className="block text-sm   mb-1 capitalize"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="title"
                name="title"
                value={title}
                onChange={handleInputChange}
                id="title"
                placeholder="E.g Most Beautiful Girl, Class Presidnt"
                required
              />
              <small className=" text-gray-500">
                The question's title is what the voter is voting on. For
                example, if you want to elect a new President for your
                organization, you would input "President" as the question's
                title.
              </small>
            </div>

            <div>
              <label htmlFor="title">Description</label>
              <textarea
                value={ballotDescription}
                onChange={handleInputChange}
                id="ballotDescription"
                name="ballotDescription"
                placeholder="Enter detailed description for the ballot..."
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg  h-40 block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
              <small className=" text-gray-500">
                Provide additional details or context for the question being
                voted on.
                {/*. This helps voters understand the purpose and
                importance of the ballot. */}
              </small>
            </div>

            {/* Election Type
            <div>
              <label className="block mb-1" htmlFor="electionType">
                Election Type
              </label>
              <select
                id="electionType"
                name="electionType"
                value={electionType}
                onChange={handleInputChange}
                className="border placeholder:text-gray-500 border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="" disabled selected>
                  Select type
                </option>
                <option value="single">Single Choice</option>
                <option value="multiple">Multiple Choice</option>
                <option value="ranked">Ranked Choice</option>
              </select>
            </div> */}
          </div>

          {/* Submit Button */}

          <div className=" flex gap-4 items-center">
            <button
              disabled={loading}
              className="text-sm lg:text-base w-40 py-3  text-center bg-blue-600 rounded-lg text-white  hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all disabled:bg-gray-300"
              type="submit"
              onClick={handleSubmit}
            >
              {loading ? "Loading..." : "Save"}
            </button>

            <button
              disabled={loading}
              className="text-sm lg:text-base w-40 py-3  text-center bg-red-600 rounded-lg text-white  hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 transition-all disabled:bg-gray-300"
              type="submit"
            >
              {loading ? "Loading..." : "Close"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BallotForm;
