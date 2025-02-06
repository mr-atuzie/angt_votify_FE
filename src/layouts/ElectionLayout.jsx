import { useDispatch, useSelector } from "react-redux";
import { fetchElectionData } from "../redux/features/election/electionSlice";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ElectionSidebar from "../components/ElectionSidebar";
import ElectionHeader from "../components/ElectionHeader";
import Loader from "../components/Loader";
import ElectionMobileNav from "../components/ElectionMobileNav";
import toast from "react-hot-toast";

const ElectionLayout = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { electionData, loading: electionLoading } = useSelector(
    (state) => state.election
  );

  // console.log(electionData);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      toast.error("Session time out,please login");
      navigate("/login", { replace: true });
    }
    dispatch(fetchElectionData(id));
  }, [dispatch, id, navigate, token]);

  if (electionLoading) return <Loader />;

  // if (!electionData) return <div>No election found for ID: {id}</div>;

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
