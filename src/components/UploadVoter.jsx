import React, { useState } from "react";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoMdArrowBack } from "react-icons/io";
import { IoCloudUploadSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { fetchElectionData } from "../redux/features/election/electionSlice";
import { useDispatch } from "react-redux";
import api from "../axiosInstance";

const UploadVoter = ({ electionData, setFileMenu, fileMenu }) => {
  const [file, setFile] = useState(null);
  const [loading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setMessage("");
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleUpload = async () => {
    setMessage("");
    setUploading(true);

    if (!file) {
      setUploading(false);
      setMessage("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post(
        "/api/v1/voter/upload-voters/" + electionData?._id,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      dispatch(fetchElectionData(electionData?._id));
      setMessage(response.data.message);
      toast.success(response.data.message);
      setUploading(false);
      setFileMenu(false);
    } catch (error) {
      setUploading(false);
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
              Accepted formats: <strong>.csv</strong>
            </li>
            <li>
              Maximum file size: <strong>2MB</strong>
            </li>
            <li>
              The file must include headers: <strong>name, phone</strong>
            </li>
            <li>All email/phone number addresses must be valid.</li>
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

          {file ? (
            <button
              disabled={loading}
              onClick={handleUpload}
              className=" bg-blue-600 disabled:opacity-60 flex justify-center text-white px-4 py-2 rounded-md w-60 hover:bg-blue-700 transition"
            >
              {loading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <div className=" justify-center flex items-center gap-3">
                  <IoCloudUploadSharp />
                  Upload File
                </div>
              )}
            </button>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadVoter;
