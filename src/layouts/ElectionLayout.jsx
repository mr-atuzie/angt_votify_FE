import { useDispatch, useSelector } from "react-redux";
import { fetchElectionData } from "../redux/features/election/electionSlice";
import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import ElectionSidebar from "../components/ElectionSidebar";
import ElectionHeader from "../components/ElectionHeader";
import Loader from "../components/Loader";

const ElectionLayout = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { electionData, loading } = useSelector((state) => state.election);

  useEffect(() => {
    // Dispatch the action to fetch election data
    dispatch(fetchElectionData(id));

    // console.log("Fetching election with ID:", id); // Log the ID
  }, [dispatch, id]); // Make sure to include dispatch and id as dependencies

  if (loading) return <Loader />;
  // if (error) return <div>Error: {error}</div>;

  if (!electionData) return <div>No election found for ID: {id}</div>;

  // console.log("Fetched Election Data:", electionData);

  return (
    <div className="min-h-screen relative flex flex-col lg:flex-row">
      <div className="fixed h-full w-[20%] hidden lg:block">
        <ElectionSidebar id={electionData?._id} />
      </div>
      <div className="flex-1 lg:ml-[20%] bg-gray-100">
        <ElectionHeader
          electionName={electionData?.title}
          electionImage={electionData?.image}
          electionStatus={electionData?.status}
          electionType={electionData?.electionType}
        />

        <Outlet context={electionData} />
      </div>
    </div>
  );
};

export default ElectionLayout;
