import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import ContentLoader from "react-content-loader";

import axios from "axios";
import moment from "moment";

const VotingLogin = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [preLoader, setPreLoader] = useState(false);
  const [voting, setVoting] = useState(null);

  const { electionId } = useParams();

  useEffect(() => {
    setPreLoader(true);
    const getElection = async () => {
      try {
        const { data } = await axios.get(
          `/api/v1/election/${electionId}/status`
        );
        console.log(data);
        setPreLoader(false);
        setVoting(data);
        return data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        //  setLoading(false);
        setPreLoader(false);
        toast.error(message);
      }
    };

    getElection();
  }, [electionId]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (password.length < 8) {
      setLoading(false);
      return toast.error("Password must be up to 8 characters");
    }

    const userData = { email, password };

    try {
      await axios.post(`/api/v1/user/login`, userData);

      setLoading(false);

      toast.success("Login successfully");
      navigate("/dashboard");
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

  if (preLoader) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[90%] md:w-[50%] lg:w-[40%] bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Skeleton */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-700 py-8 px-4 text-center rounded-t-lg">
            <ContentLoader
              speed={2}
              width="100%"
              height={40}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              className="mx-auto"
            >
              <rect x="10%" y="10" rx="4" ry="4" width="80%" height="20" />
            </ContentLoader>
          </div>

          {/* Body Skeleton */}
          <div className="px-6 py-8">
            <div className="space-y-6">
              {/* Voter ID Field */}
              <ContentLoader
                speed={2}
                width="100%"
                height={80}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="10" rx="4" ry="4" width="80%" height="20" />
                <rect x="0" y="40" rx="4" ry="4" width="100%" height="20" />
              </ContentLoader>

              {/* Voter Code Field */}
              <ContentLoader
                speed={2}
                width="100%"
                height={80}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="10" rx="4" ry="4" width="80%" height="20" />
                <rect x="0" y="40" rx="4" ry="4" width="100%" height="20" />
              </ContentLoader>

              {/* Button */}
              <ContentLoader
                speed={2}
                width="100%"
                height={50}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="10" rx="6" ry="6" width="100%" height="40" />
              </ContentLoader>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <header className="w-full py-6 flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white shadow-lg">
        <h1 className="text-3xl font-bold uppercase tracking-wide text-center">
          {voting?.election.title} <br /> Election
        </h1>
      </header>

      {voting?.hasStarted ? (
        <main className="min-h-screen flex  justify-center bg-gradient-to-b from-blue-50 to-gray-100 py-16">
          <div className="w-[90%] lg:w-[35%] bg-white shadow-xl rounded-xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-blue-800 text-white text-center py-6">
              <h2 className="text-2xl font-semibold uppercase">
                Login to Vote
              </h2>
              <p className="text-sm mt-2 tracking-wide">
                Secure your vote with confidence
              </p>
            </div>

            {/* Form Section */}
            <div className="px-6 py-8">
              <form onSubmit={handleSubmit}>
                <p className="text-gray-600 text-center font-medium mb-6">
                  Enter your credentials to access the voting platform.
                </p>

                {/* Input Fields */}
                <div className="space-y-6">
                  {/* Voter ID */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Voter ID
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      placeholder="E.g., VOTER-51442789"
                      className="mt-2 block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
                      required
                    />
                  </div>

                  {/* Voter Code */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Voter Code
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      placeholder="Enter your Voter Code"
                      className="mt-2 block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 w-full py-4 bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-sm font-medium rounded-lg shadow-md hover:from-indigo-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform transform hover:scale-105 disabled:bg-gray-300"
                >
                  {loading ? "Loading..." : "Login to Vote"}
                </button>
              </form>
            </div>
          </div>
        </main>
      ) : (
        <main className="min-h-screen flex  justify-center bg-gray-100">
          <div className="w-[90%] md:w-[50%] h-fit my-11 lg:w-[40%] bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-900 text-white py-8 px-4 text-center rounded-t-lg">
              <h2 className="text-2xl font-bold">
                {voting?.hasEnded ? "Voting Ended" : "Voting Not Started"}
              </h2>
              <p className="mt-2 text-sm">
                {voting?.hasEnded
                  ? "The election has concluded. Thank you for participating!"
                  : `Voting will begin on ${moment(
                      voting?.election.startDate
                    ).format("MMMM Do, YYYY")}.`}
              </p>
            </div>
            <div className="px-6 py-8 text-center">
              <p className="text-gray-700 text-lg font-medium">
                Stay tuned for updates!
              </p>
              <p className="mt-4 text-sm text-gray-500">
                We appreciate your interest in the election process. If you have
                any questions, feel free to contact the administration.
              </p>
              {/* <button
                onClick={() => navigate("/")}
                className="mt-6 px-6 py-3 bg-blue-700 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform transform hover:scale-105"
              >
                Return Home
              </button> */}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default VotingLogin;