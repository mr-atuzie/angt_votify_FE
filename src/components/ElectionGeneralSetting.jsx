import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchElectionData } from "../redux/features/election/electionSlice";
import { IoIosCloudUpload } from "react-icons/io";
import api from "../axiosInstance";

const ElectionGeneralSetting = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

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

  const handleSaveChanges = async () => {
    setLoading(true);

    const dataDoc = new FormData();

    let newImage;

    if (!title || !description || !previewImage) {
      setLoading(false);
      return toast.error("Enter all required fields");
    }

    try {
      if (selectedImage) {
        dataDoc.append("file", selectedImage);
        dataDoc.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
        dataDoc.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

        const res = await fetch(process.env.REACT_APP_CLOUD_URL, {
          method: "post",
          body: dataDoc,
        });

        const imageData = await res.json();
        const imagePath = imageData.secure_url.toString();
        newImage = imagePath;
      } else {
        newImage = electionData?.image;
      }

      const { data } = await api.put(`/api/v1/election/${id}`, {
        title,
        description,
        image: newImage,
      });
      dispatch(fetchElectionData(id));

      toast.success(data.message);
      setLoading(false);
      // const response = await axios.get(`/api/v1/ballot/election/${id}`);
      // console.log(response.data);
      // setBallots(response.data);
      // return response.data;
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

  const electionData = useOutletContext();

  useEffect(() => {
    setTitle(electionData?.title || "");
    setDescription(electionData?.description || "");
    setPreviewImage(electionData?.image || "");
  }, [electionData]);

  return (
    <div className="min-h-screen flex gap-10 flex-col  ">
      <div className="bg-white rounded-lg shadow-lg w-full mx-auto mt-8">
        {/* Header */}
        <div className="w-full bg-blue-800 text-white text-center py-4 rounded-t-lg">
          <h1 className=" text-lg lg:text-2xl uppercase font-semibold">
            General Settings
          </h1>
        </div>

        <form className="space-y-6 p-3 lg:p-6">
          {/* Instruction Text */}
          <p className="mb-6 text-gray-600 text-center text-sm">
            Fill out the form below to edit election.
          </p>

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
              <p className="block text-sm font-medium mb-1">Election logo</p>
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
                <span className="text-xs text-gray-500 mt-2">Upload image</span>
              </label>
              <small className="text-gray-500">
                Upload an image that represents the voting option For election.
              </small>
            </div>
          )}

          {/* Election Title */}
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
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="E.g. Most Beautiful Girl, Class President"
              required
            />
            <small className="text-gray-500">
              Provide a clear and descriptive title for this election.
            </small>
          </div>

          {/* Description */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              name="description"
              placeholder="Provide additional details for this election..."
            ></textarea>
            <small className="text-gray-500">
              Add more context to help voters understand the purpose of this
              election.
            </small>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSaveChanges}
              disabled={loading}
              className={`px-6 py-3 text-sm lg:text-base text-white font-medium rounded-lg ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } focus:outline-none`}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ElectionGeneralSetting;
