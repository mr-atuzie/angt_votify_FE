import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosCloudUpload } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import api from "../axiosInstance";

const CreateElection = () => {
  const initialState = {
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    electionType: "",
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  function previewImageHandler(ev) {
    const file = ev.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }

    setSelectedImage(ev.target.files[0]);
  }

  const removeImage = () => {
    setSelectedImage(null);
    setPreviewImage(null);
  };

  const { title, startDate, endDate, electionType, description } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "startDate" || name === "endDate") {
      const localDate = new Date(value);
      const adjustedDate = new Date(
        localDate.getTime() - localDate.getTimezoneOffset() * 60000
      )
        .toISOString()
        .slice(0, 16); // Convert to local time without offset

      setFormData({ ...formData, [name]: adjustedDate });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataDoc = new FormData();

    // console.log({ title, description, startDate, endDate, electionType });

    if (!title || !description || !startDate || !endDate || !electionType) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    try {
      dataDoc.append("file", selectedImage);
      dataDoc.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
      dataDoc.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

      const res = await fetch(process.env.REACT_APP_CLOUD_URL, {
        method: "post",
        body: dataDoc,
      });

      const imageData = await res.json();

      const imagePath = imageData.secure_url.toString();

      const { data } = await api.post(`/api/v1/election/create`, {
        title,
        description,
        startDate,
        endDate,
        electionType,
        image: imagePath,
      });

      setLoading(false);

      toast.success("Election created");

      // console.log(data);

      navigate(`/election/${data.election?._id}/overview`);

      // navigate("/dashboard");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);
      toast.error(message);
    }
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="w-full flex justify-center items-cente lg:py-16 bg-blue-50 min-h-screen">
      <div className="w-full bg-white shadow-lg rounded-lg lg:w-[60%] mx-auto">
        {/* Header */}
        <div className="w-full bg-blue-800 rounded-t-lg text-white text-center py-4 ">
          <h1 className="text-xl uppercase font-semibold">Create Election</h1>
        </div>

        <div className="py-10 px-4 lg:px-8">
          {/* Instruction */}
          <p className="mb-6 text-gray-600 text-center text-sm">
            Fill out the form below to create a new election.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Input Fields */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {/* Add Photo */}
              {previewImage ? (
                <div className="relative">
                  <img
                    className="w-40 h-40 rounded-lg object-cover"
                    src={previewImage}
                    alt="Preview"
                  />
                  <button
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-white text-gray-500 rounded-full p-1"
                  >
                    X
                  </button>
                </div>
              ) : (
                <div>
                  <p className="block text-sm font-medium mb-1">
                    Election logo
                  </p>
                  <label
                    htmlFor="addPhoto"
                    className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col justify-center items-center h-40 w-40"
                  >
                    <input
                      id="addPhoto"
                      type="file"
                      className="hidden"
                      onChange={previewImageHandler}
                    />
                    <IoIosCloudUpload className="text-gray-500 text-2xl" />
                    <span className="text-xs text-gray-500 mt-2">
                      Upload image
                    </span>
                  </label>
                  <small className="text-gray-500">
                    Upload an image that represents the voting option For
                    election.
                  </small>
                </div>
              )}

              {/* Title */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="title"
                >
                  Election Title
                </label>
                <input
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  id="title"
                  placeholder="E.g. Most Beautiful Girl, Class President"
                  required
                />
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
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  value={description}
                  onChange={handleInputChange}
                  id="description"
                  name="description"
                  placeholder="Provide additional details for this ballot question..."
                ></textarea>
                <small className="text-gray-500">
                  Add more context to help voters understand the purpose of this
                  ballot.
                </small>
              </div>

              {/* Dates */}
              <div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="w-full">
                    <label
                      className="block text-sm font-medium  mb-1"
                      htmlFor="startDate"
                    >
                      Start Date
                    </label>
                    <input
                      id="startDate"
                      name="startDate"
                      value={startDate}
                      onChange={handleInputChange}
                      type="datetime-local"
                      className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="endDate"
                    >
                      End Date
                    </label>
                    <input
                      id="endDate"
                      name="endDate"
                      value={endDate}
                      onChange={handleInputChange}
                      type="datetime-local"
                      className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <p className=" text-xs mt-2  text-gray-500">
                  Please note that all election times will automatically include
                  an additional hour due to system settings. Ensure to account
                  for this adjustment when planning your schedules.
                </p>
              </div>

              {/* Election Type */}
              <div>
                <label
                  className="block text-sm font-medium  mb-1"
                  htmlFor="electionType"
                >
                  Election Type
                </label>
                <select
                  id="electionType"
                  name="electionType"
                  value={electionType}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="single">Single Choice</option>
                  <option value="multiple">Multiple Choice</option>
                  <option value="ranked">Ranked Choice</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 items-center justify-center">
              {/* <Link to={"/election/12345/overview"}> */}
              <button
                className="text-sm w-40 py-3 bg-blue-600 disabled:bg-blue-300 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all"
                type="submit"
                disabled={loading}
              >
                Save
              </button>
              {/* </Link> */}

              <button
                className="text-sm w-40 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 transition-all"
                type="button"
                onClick={back}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateElection;
