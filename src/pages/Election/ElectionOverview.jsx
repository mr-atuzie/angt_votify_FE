import React, { useEffect, useState } from "react";
import moment from "moment";
import { useOutletContext, useParams } from "react-router-dom";
import toast from "react-hot-toast";
// import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
// import { useSelector } from "react-redux";
import DashboardLoader from "../../components/DashboardLoader";
import {
  FaCalendarCheck,
  FaCalendarXmark,
  FaPeopleGroup,
} from "react-icons/fa6";
import { MdBallot } from "react-icons/md";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { PiUsersFourFill } from "react-icons/pi";
import api from "../../axiosInstance";

ChartJS.register(ArcElement, Tooltip, Legend);

const ElectionOverview = () => {
  // const electionData = useSelector((state) => state.election.data);

  const electionData = useOutletContext();
  const [voters, setVoters] = useState(0);
  const [verifiedVoters, setVerifiedVoters] = useState(0);
  const [preLoader, setPreLoader] = useState(false);

  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // const navigate = useNavigate();

  const { id } = useParams();

  // useEffect(() => {
  //   if (isLoggedIn === false) {
  //     navigate("/login");
  //   }
  // }, [isLoggedIn, navigate]);

  useEffect(() => {
    setPreLoader(true);
    const getTotalVoter = async () => {
      try {
        const { data } = await api.get(`/api/v1/election/${id}/total`);

        console.log(data);

        setVoters(data.totalVoters);
        setVerifiedVoters(data.verifiedPercentage);
        setPreLoader(false);
        // return response.data;
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

    getTotalVoter();
  }, [id]);

  if (preLoader) {
    return <DashboardLoader />;
  }

  // const data = {
  //   labels: ["Verified Voters", "Non-Verified Voters"],
  //   datasets: [
  //     {
  //       data: [verifiedVoters, voters - verifiedVoters],
  //       backgroundColor: ["#4caf50", "#f44336"],
  //       hoverBackgroundColor: ["#66bb6a", "#ef5350"],
  //     },
  //   ],
  // };

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       position: "bottom",
  //     },
  //   },
  // };

  return (
    <div className="min-h-screen flex flex-col gap-8">
      {/* Row 1: Key Metrics */}
      <div className="flex flex-wrap gap-6 justify-between">
        <div className="flex-1 min-w-[240px] bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="lg:text-lg font-medium">Start Date</h2>
            <FaCalendarCheck className="text-purple-500 text-2xl" />
          </div>
          <p className="text-lg font-bold text-blue-600">
            {moment(electionData?.startDate)
              .local()
              .format("MMM DD, YYYY hh:mm A")}
          </p>
        </div>

        <div className="flex-1 min-w-[240px] bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="lg:text-lg font-medium">End Date</h2>
            <FaCalendarXmark className="text-red-500 text-2xl" />
          </div>
          <p className="text-lg font-bold text-blue-600">
            {moment(electionData?.endDate).format("MMM DD, YYYY hh:mm A")}
          </p>
        </div>

        <div className="flex-1 min-w-[240px] bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="lg:text-lg font-medium">Total Ballots</h2>
            <MdBallot className="text-yellow-500 text-2xl" />
          </div>
          <p className="text-lg font-bold text-blue-600">
            {electionData?.ballots.length}
          </p>
        </div>
      </div>

      {/* Row 2: Voter Data */}
      <div className="flex flex-wrap gap-6 justify-between">
        <div className="flex-1 min-w-[240px] bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="lg:text-lg font-medium">Total Voters</h2>
            <FaPeopleGroup className="text-blue-500 text-2xl" />
          </div>
          <p className="text-lg font-bold text-blue-600">{voters}</p>
        </div>

        <div className="flex-1 min-w-[240px] bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="lg:text-lg font-medium">Verified Voters</h2>
            <PiUsersFourFill className="text-green-500 text-2xl" />
          </div>
          <div>
            <p className="text-lg font-bold text-blue-600">
              {verifiedVoters} voters
            </p>
          </div>
        </div>
      </div>

      {/* Voter Statistics Chart */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-medium">Voter Statistics</h2>
        <p
          className={`text-xs lg:text-sm font-medium  mb-4 ${
            (verifiedVoters / voters) * 100 < 50
              ? "text-red-500"
              : (verifiedVoters / voters) * 100 < 70
              ? "text-orange-500"
              : "text-green-500"
          }`}
        >
          ({((verifiedVoters / voters) * 100).toFixed(2)}%) voting percentage
        </p>
        {voters === 0 ? (
          <p className="text-gray-600 text-center">
            No voter data available yet.
          </p>
        ) : (
          <div className="relative h-64 w-full">
            <Doughnut
              data={{
                labels: ["Verified Voters", "Non-Verified Voters"],
                datasets: [
                  {
                    data: [verifiedVoters, voters - verifiedVoters],
                    backgroundColor: ["#4caf50", "#f44336"],
                    hoverBackgroundColor: ["#66bb6a", "#ef5350"],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: "bottom" },
                },
              }}
            />
          </div>
        )}
      </div>

      {/* Row 3: Buttons */}
      {/* <div className="flex justify-center gap-4 mt-6">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition">
          Start
        </button>
        <button className="bg-red-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600 transition">
          End
        </button>
      </div> */}
    </div>
  );
};

export default ElectionOverview;
