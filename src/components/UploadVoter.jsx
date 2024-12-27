import axios from "axios";
import React, { useState } from "react";
import { VscFileSubmodule } from "react-icons/vsc";

const UploadVoter = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/upload-voters", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred while uploading."
      );
    }
  };

  return (
    <div className=" z-50 absolute bg-black/60  flex justify-center items-center  min-h-screen  w-full inset-0">
      <div className="bg-white rounded-lg  lg:w-[50%] mx-auto shadow-md">
        <div className="bg-blue-800 py-4 text-center uppercase text-white text-lg font-semibold">
          Upload Voter File
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

          <div className="mb-4 h-40  flex justify-center border-2 border-gray-400 rounded-lg border-dashed  items-center  w-60 bg-gray-200">
            <label
              id="file"
              className="text-sm flex items-center gap-2  font-medium text-gray-500"
            >
              <VscFileSubmodule size={25} /> Select File
            </label>
            <input
              name="file"
              type="file"
              accept=".xlsx,.csv"
              onChange={handleFileChange}
              className="mt-1 hidden  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            onClick={handleUpload}
            className=" bg-blue-600 text-white px-4 py-2 rounded-md w-60 hover:bg-blue-700 transition"
          >
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadVoter;
