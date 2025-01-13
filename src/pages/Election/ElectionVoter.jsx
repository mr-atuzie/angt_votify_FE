import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const ElectionVoter = () => {
  const initialState = {
    name: "",
    email: "",
  };

  const { id } = useParams();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const [preLoader, setPreLoader] = useState(false);

  // Fetch the ballot details when the component mounts
  useEffect(() => {
    setPreLoader(true);
    const fetchVoter = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/v1/voter/${id}`);
        console.log(data);

        setFormData({
          name: data.voter.fullName || "",
          email: data.voter.email || "",
        });

        setPhone(data.voter.phone);
        // setTitle(data?.title || "");
        // setDescription(data?.description || "");
        setLoading(false);
        setPreLoader(false);
      } catch (error) {
        setLoading(false);
        setPreLoader(false);
        const message =
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch voter.";
        toast.error(message);
      }
    };

    fetchVoter();
  }, [id]);

  const { name, email } = formData;

  if (preLoader) {
    return <Loader />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // if (!title) {
    //   setLoading(false);
    //   return toast.error("All fields are required");
    // }

    console.log({ name, email, phone });

    try {
      const { data } = await axios.put(`/api/v1/voter/${id}`, {
        fullName: name,
        email,
        phone,
      });

      setLoading(false);

      toast.success("Voter details updated successfully");
      console.log(data);
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
    <div className="min-h-screen  bg-gray-100 p-3 lg:p-6 flex flex-col gap-6">
      <div className="bg-white rounded-lg shadow-lg w-full lg:w-[60%] mx-auto">
        {/* Header */}
        <div className="bg-blue-800 uppercase py-4 text-center text-white text-lg font-bold">
          Voter Details
        </div>

        {/* Form */}
        <form className="p-3 lg:p-8" onSubmit={handleSubmit}>
          {/* <p className="text-center text-sm lg:text-base text-gray-700 mb-8">
            Add a voter to the election:{" "}
            <span className="text-blue-600 font-semibold">
              {electionData?.title}
            </span>
          </p> */}

          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="text"
              name="name"
              placeholder="Enter voter's full name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              className="border border-gray-300 p-3 bg-gray-50 rounded-lg block w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              name="email"
              type="email"
              placeholder="Enter voter's email address"
              required
              value={email}
              onChange={handleInputChange}
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>

            <PhoneInput
              country={"ng"} // Default country
              value={phone}
              onChange={setPhone} // Update state with selected number
              inputClass="phone-input-field" // Apply custom class to input field
              buttonClass="phone-input-button" // Apply custom class to button
              containerClass="phone-input-container" // Apply custom class to container
            />
            <small className="text-gray-500">
              Ensure this number is correct to receive the verification code via
              SMS.
            </small>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 items-center justify-center">
            <button
              className="text-sm lg:text-base w-40 py-3 bg-blue-600 rounded-lg text-white hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all disabled:bg-gray-300"
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Loading..." : "Edit"}
            </button>

            <button
              className="text-sm lg:text-base w-40 py-3 bg-red-600 rounded-lg text-white hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 transition-all"
              type="button"
              //   onClick={() => navigate(-1)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ElectionVoter;
