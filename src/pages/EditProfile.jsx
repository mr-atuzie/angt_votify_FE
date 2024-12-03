import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");

  const { name, email, password, phone } = formData;

  const navigate = useNavigate("/");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const maxLength = 50;

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !phone || !password) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (password.length < 6) {
      setLoading(false);
      return toast.error("Password must be up to 6 characters");
    }

    const userData = { name, email, phone, password };

    console.log(userData);

    navigate("/dashboard");

    //   try {
    //     await axios.post(
    //       `${process.env.REACT_APP_BACKEND_URL}/api/v1/pakam/register`,
    //       userData,
    //       {
    //         withCredentials: true,
    //       }
    //     );

    //     setLoading(false);

    //     toast.success("User Registered successfully");
    //     navigate("/dashboard");
    //   } catch (error) {
    //     const message =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     setLoading(false);
    //     toast.error(message);
    //   }
  };
  return (
    <div className=" w-full ">
      <div className="flex items-center justify-center space-x-2 mb-5">
        {/* <span className=" text-pink-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </span> */}
        <h2 className=" text-pink-500 font-semibold capitalize">
          Edit Profile
        </h2>
      </div>
      {/* Registration Form */}
      <form onSubmit={handleSubmit}>
        {/* Input Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium  mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              id="name"
              placeholder="Enter your Name"
              required
            />
            <small className="text-xs text-gray-600 mt-1 block">
              Name as you'd like it to appear in the contest.
            </small>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              id="email"
              placeholder="Enter your Email"
              required
            />
            <small className="text-xs text-gray-600 mt-1 block">
              Make sure your email address is correct.
            </small>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium  mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              id="phone"
              placeholder="Enter your Phone Number"
              required
            />
            <small className="text-xs text-gray-600 mt-1 block">
              Make sure your phone number is valid.
            </small>
          </div>

          {/* bio */}
          <div>
            <label className="block text-sm font-medium  mb-1" htmlFor="bio">
              Bio
            </label>

            <textarea
              id="bio"
              name="bio"
              rows={4}
              value={bio}
              onChange={handleBioChange}
              maxLength={maxLength}
              className="border border-gray-300 p-2.5 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Tell us about yourself "
            />

            <small className="text-xs text-gray-600 mt-1 block">
              {bio.length}/{maxLength} characters used
            </small>
          </div>
        </div>

        {/* Submit Button */}

        <button
          disabled={loading}
          className="text-sm lg:text-base w-full  mb-20 py-3 bg-pink-600 rounded-lg text-white font-semibold hover:bg-pink-700 transition-all disabled:bg-gray-300"
          type="submit"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
