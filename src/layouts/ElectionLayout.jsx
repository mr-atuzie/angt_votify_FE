import { useDispatch, useSelector } from "react-redux";
import { fetchElectionData } from "../redux/features/election/electionSlice";
import { fetchLoginStatus } from "../redux/features/auth/authSlice";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ElectionSidebar from "../components/ElectionSidebar";
import ElectionHeader from "../components/ElectionHeader";
import Loader from "../components/Loader";
import ElectionMobileNav from "../components/ElectionMobileNav";

const ElectionLayout = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { electionData, loading: electionLoading } = useSelector(
    (state) => state.election
  );

  useEffect(() => {
    // Check login status and fetch election data
    const initialize = async () => {
      const loginStatus = await dispatch(fetchLoginStatus());
      console.log("election layout check session.....");

      if (!loginStatus.payload) {
        navigate("/login");
        return;
      }
      dispatch(fetchElectionData(id));
    };

    initialize();
  }, [dispatch, id, navigate]);

  if (electionLoading) return <Loader />;

  if (!electionData) return <div>No election found for ID: {id}</div>;

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="fixed h-full w-[20%] hidden lg:block">
        <ElectionSidebar id={electionData?._id} />
      </div>
      <div className="flex-1 lg:ml-[20%] relative bg-gray-100 flex flex-col gap-6">
        <ElectionHeader
          electionName={electionData?.title}
          electionImage={electionData?.image}
          electionStatus={electionData?.status}
          electionType={electionData?.electionType}
        />
        <div className="p-3 lg:p-6">
          <Outlet context={electionData} />
        </div>
      </div>
      <ElectionMobileNav id={electionData?._id} />
    </div>
  );
};

export default ElectionLayout;
