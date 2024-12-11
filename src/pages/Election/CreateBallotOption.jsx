import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosCloudUpload } from "react-icons/io";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

const CreateBallotOption = () => {
  const { id, ballotId } = useParams();
  const electionData = useOutletContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataDoc = new FormData();

    // Check if there's no image or other required fields
    if (!selectedImage || !title || !description) {
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

      const { data } = await axios.post(`/api/v1/ballot/create-ballot-option`, {
        name: title,
        description,
        image: imagePath,
        ballotId,
      });

      setLoading(false);
      toast.success("Ballot option added successfully");
      console.log(data);

      const redirectPath = `/election/${id}/ballot`;
      console.log(redirectPath);
      navigate(redirectPath);
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

  return (
    <div className="min-h-screen  bg-gray-100 p-6 flex flex-col gap-6">
      {/* header */}
      {/* <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Most Beautiful Girl Nigeria
          </h1>

          <span className="bg-yellow-100 text-yellow-600 text-sm px-3 py-1 rounded-full">
            Building
          </span>
        </div>
      </div> */}

      <div className="bg-white rounded-lg shadow-md h-full w-[60%] mx-auto">
        {/* Header */}
        <div className="bg-blue-800 py-4 text-center uppercase text-white text-lg font-semibold">
          Ballot Option
        </div>

        {/* Form */}
        <form className="p-8">
          <p className="text-center text-gray-600 mb-6">
            Add a voting option for{" "}
            <span className="text-blue-600 font-semibold">
              {electionData?.title}e
            </span>{" "}
            Ballot.
          </p>

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
                <p className="block text-sm font-medium mb-1">Option Photo</p>
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
                  Upload an image that represents the voting option. For
                  example, a photo of a person, dish, or product.
                </small>
              </div>
            )}

            {/* Option Name */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="title">
                Option Name
              </label>
              <input
                className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
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
                onChange={(e) => setDescription(e.target.value)}
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
              onClick={() => navigate(-1)}
              className="w-40 py-2 text-sm lg:text-base bg-red-600 text-white rounded-lg hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 transition disabled:bg-gray-400"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBallotOption;
