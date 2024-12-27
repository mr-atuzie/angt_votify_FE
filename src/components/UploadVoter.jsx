import axios from "axios";
import React, { useState } from "react";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoMdArrowBack } from "react-icons/io";

const UploadVoter = ({ electionData, setFileMenu, fileMenu }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setMessage("");
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleUpload = async () => {
    setMessage("");
    if (!file) {
      setMessage("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "/api/v1/voter/upload-voters/" + electionData?._id,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred while uploading."
      );
    }
  };

  return (
    <div className=" z-50 absolute bg-black/60  flex justify-center  min-h-screen  w-full inset-0">
      <div className="bg-white rounded-lg w-[95%] h-fit mt-8 lg:mt-16 lg:w-[50%] mx-auto shadow-md">
        <div className="bg-blue-800 p-4 flex items-center gap-10 uppercase text-white ">
          <button onClick={() => setFileMenu(!fileMenu)}>
            <IoMdArrowBack size={25} />
          </button>
          <h1 className=" text-center text-lg font-semibold">
            Upload Voter File
          </h1>
        </div>
        <div className="w-full p-6 ">
          <p className="text-gray-600 mb-6 text-sm lg:text-base">
            Please ensure your file meets the following requirements:
          </p>
          <ul className="list-disc list-inside text-sm lg:text-base text-gray-600 mb-6">
            <li>
              Accepted formats: <strong>.xlsx, .csv</strong>
            </li>
            <li>
              Maximum file size: <strong>2MB</strong>
            </li>
            <li>
              The file must include headers:{" "}
              <strong>name, email, phone number</strong>
            </li>
            <li>All email addresses must be valid.</li>
          </ul>

          {message && (
            <div
              className={`p-3 my-3 text-sm text-center rounded ${
                message.includes("success")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <div className="mb-4 h-40 flex justify-center border-2 border-gray-400 rounded-lg border-dashed items-center w-60 bg-gray-200">
            <label
              htmlFor="file"
              className="text-sm flex items-center gap-2 font-medium text-gray-500 cursor-pointer"
            >
              <VscFileSubmodule size={25} /> Click to select file
              <input
                id="file"
                name="file"
                type="file"
                accept=".xlsx,.csv"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {file && (
            <button
              onClick={handleUpload}
              className=" bg-blue-600 text-white px-4 py-2 rounded-md w-60 hover:bg-blue-700 transition"
            >
              Upload File
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadVoter;
