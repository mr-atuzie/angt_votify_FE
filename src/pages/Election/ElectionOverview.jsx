import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import DashboardLoader from "../../components/DashboardLoader";
import {
  FaCalendarCheck,
  FaCalendarXmark,
  FaPeopleGroup,
} from "react-icons/fa6";
import { MdBallot } from "react-icons/md";

const ElectionOverview = () => {
  // const electionData = useSelector((state) => state.election.data);

  const electionData = useOutletContext();
  const [voters, setVoters] = useState(0);
  const [preLoader, setPreLoader] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    setPreLoader(true);
    const getTotalVoter = async () => {
      try {
        const { data } = await axios.get(`/api/v1/election/${id}/total`);

        setVoters(data);
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

  return (
    <div className="min-h-screen flex flex-col gap-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white shadow-md p-4 rounded-lg">
          {/* <h2 className="text-sm font-medium ">Start Date</h2> */}

          <div className="flex items-center justify-between mb-4">
            <h2 className="lg:text-lg font-medium">Start Date</h2>
            <div>
              <FaCalendarCheck className="text-purple-500 text-2xl" />
            </div>
          </div>
          <p className="text-lg font-bold text-blue-600">
            {moment(electionData?.startDate).format("MMM DD, YYYY hh:mm A")}
          </p>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="lg:text-lg font-medium">End Date</h2>
            <div>
              <FaCalendarXmark className="text-red-500 text-2xl" />
            </div>
          </div>
          <p className="text-lg font-bold text-blue-600">
            {moment(electionData?.endDate).format("MMM DD, YYYY hh:mm A")}
          </p>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="lg:text-lg font-medium">Total ballots</h2>
            <div>
              <MdBallot className="text-yellow-500 text-2xl" />
            </div>
          </div>
          <p className="text-lg font-bold text-blue-600">
            {electionData?.ballots.length}
          </p>
          {/* <CountUpAnimation count={electionData?.ballots.length} /> */}
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="lg:text-lg font-medium">Voters</h2>
            <div>
              <FaPeopleGroup className="text-blue-500 text-2xl" />
            </div>
          </div>

          {/* <CountUpAnimation count={voters} /> */}
          <p className="text-lg font-bold text-blue-600">{voters}</p>
        </div>
      </div>

      <div className="bg-white shadow-md  hidden rounded-lg p-6 max-w-md">
        <h2 className="text-LG font-medium mb-4">Election URLS</h2>

        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Share this URL with voters to participate:
          </p>
          <div className="bg-gray-100 p-2 rounded-lg mt-2">
            <Link to={`/voting/${electionData?._id}/login`}>
              <p className="text-blue-500 text-sm break-all">
                https://example.com/election/12345/vote
              </p>
            </Link>
          </div>
        </div>
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-all"
          onClick={() =>
            navigator.clipboard.writeText(
              "https://example.com/election/12345/vote"
            )
          }
        >
          Copy Link
        </button>
      </div>

      {/* Ballots Table */}
      {/* <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Ballot Forms
        </h2>
        <table className="w-full table-auto text-left text-sm">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Ballot Title</th>
              <th className="py-2">Description</th>
              <th className="py-2">Questions</th>
              <th className="py-2">Responses</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Presidential Ballot</td>
              <td className="py-2">Select the President</td>
              <td className="py-2">5</td>
              <td className="py-2">80</td>
              <td className="py-2">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default ElectionOverview;
