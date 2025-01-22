import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const ElectionVoter = () => {
  const initialState = {
    name: "",
    email: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [preLoader, setPreLoader] = useState(false);

  // Fetch the voter details when the component mounts
  useEffect(() => {
    setPreLoader(true);
    const fetchVoter = async () => {
      try {
        const { data } = await axios.get(`/api/v1/voter/${id}`);
        setFormData({
          name: data.voter.fullName || "",
          email: data.voter.email || "",
        });
        setPhone(data.voter.phone);
        setPreLoader(false);
      } catch (error) {
        setPreLoader(false);
        toast.error(
          error.response?.data?.message || "Failed to fetch voter details."
        );
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
    try {
      await axios.put(`/api/v1/voter/${id}`, {
        fullName: name,
        email,
        phone,
      });
      setLoading(false);
      toast.success("Voter details updated successfully");
      navigate(-1);
    } catch (error) {
      setLoading(false);
      toast.error(
        error.response?.data?.message || "Failed to update voter details."
      );
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this voter?")) {
      setLoading(true);
      try {
        await axios.delete(`/api/v1/voter/${id}`);
        toast.success("Voter deleted successfully");
        navigate(-1);
      } catch (error) {
        setLoading(false);
        toast.error(error.response?.data?.message || "Failed to delete voter.");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center ">
      <div className="bg-white h-fit mx-auto shadow-md rounded-lg w-[95%] lg:w-[50%]">
        {/* Header */}
        <div className="bg-blue-700 text-white text-lg font-semibold text-center py-4 rounded-t-lg">
          Voter Details
        </div>

        {/* Form */}
        <form className=" p-3 lg:p-6 space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter voter's full name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter voter's email address"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>
            <PhoneInput
              country={"ng"}
              value={phone}
              onChange={setPhone}
              inputClass="phone-input-field"
              containerClass="phone-input-container"
            />
            <small className="text-gray-500 block mt-1">
              Ensure this number is correct to receive SMS updates.
            </small>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className={`w-full mr-2 py-2 rounded-lg ${
                loading
                  ? "bg-gray-300"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              className="w-full ml-2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              onClick={handleDelete}
            >
              Delete Voter
            </button>
          </div>

          {/* Back Button */}
          <button
            type="button"
            className="w-full mt-4 py-2 text-gray-600 hover:text-blue-600"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ElectionVoter;
