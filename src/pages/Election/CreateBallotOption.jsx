import React, { useState } from "react";
import { IoIosCloudUpload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CreateBallotOption = () => {
  const initialState = {
    title: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { title, description } = formData;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    localStorage.setItem("text", formData);

    navigate("/election/12345/ballot");
  };

  return (
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

      <div className="bg-white rounded-lg shadow-md h-full w-[60%] mx-auto">
        {/* Header */}
        <div className="bg-blue-800 py-4 text-center uppercase text-white text-lg font-semibold">
          Ballot Option
        </div>

        {/* Form */}
        <form className="p-8">
          <p className="text-center text-gray-600 mb-6">
            Add a voting option for{" "}
            <span className="text-blue-600 font-semibold">Mrs River State</span>{" "}
            Ballot.
          </p>

          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-6 mb-8">
            {/* Add Photo */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="addPhoto"
              >
                Option Photo
              </label>
              <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col justify-center items-center h-40 w-40">
                <IoIosCloudUpload className="text-gray-500 text-2xl" />
                <span className="text-xs text-gray-500 mt-2">Upload image</span>
              </div>
              <small className="text-gray-500">
                Upload an image that represents the voting option. For example,
                a photo of a person, dish, or product.
              </small>
            </div>

            {/* Option Name */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="optionName"
              >
                Option Name
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                name="optionName"
                value={title}
                onChange={handleInputChange}
                id="optionName"
                placeholder="E.g., Jane Doe, Chocolate Cake, iPhone 15"
                required
              />
              <small className="text-gray-500">
                Enter the name or title of the option being voted for.
              </small>
            </div>

            {/* Description */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                value={description}
                onChange={handleInputChange}
                id="description"
                name="description"
                placeholder="Provide a detailed description of the option..."
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg h-40 block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
              <small className="text-gray-500">
                Describe the option in detail to help voters understand what
                they are voting for.
              </small>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-40 py-2 text-sm lg:text-base bg-blue-600 text-white rounded-lg hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition disabled:bg-gray-300"
              type="submit"
            >
              {loading ? "Loading..." : "Save"}
            </button>

            <button
              disabled={loading}
              className="w-40 py-2 text-sm lg:text-base bg-red-600 text-white rounded-lg hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 transition disabled:bg-gray-300"
              type="button"
            >
              {loading ? "Loading..." : "Cancel"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBallotOption;
