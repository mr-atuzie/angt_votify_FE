import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { selectUser } from "../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { getUserInitials } from "../utils";

const ElectionHeader = ({
  electionName,
  electionStatus,
  electionType,
  electionImage,
}) => {
  //   const [currentPage, setCurrentPage] = useState("");
  //   const location = useLocation();

  // //   useEffect(() => {
  // //     const path = location.pathname.split("/").pop();
  // //     setCurrentPage(path.replace(/-/g, " ").toUpperCase()); // Format the page name
  // //   }, [location]);

  // console.log(electionStatus);
  const { fullname } = useSelector(selectUser);

  return (
    <header className=" bg-blue-900 py-4 shadow-lg px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={electionImage} className=" w-14 h-14 rounded-lg" alt="" />
          <h1 className="text-xl capitalize text-white font-medium">
            {electionName}
          </h1>

          <span
            className={`text-xs px-3 py-1 rounded-lg 
    ${electionStatus === "Upcoming" ? "bg-yellow-100 text-yellow-600" : ""} 
    ${electionStatus === "Ongoing" ? "bg-green-100 text-green-600" : ""} 
    ${electionStatus === "Ended" ? "bg-blue-100 text-blue-600" : ""}`}
          >
            {electionStatus}
          </span>
        </div>

        <div className=" gap-5 flex items-center">
          <Link
            to={"/dashboard"}
            className=" flex items-center text-white gap-2"
          >
            <span>
              <MdSpaceDashboard />
            </span>
            <span className="text-white">Dashboard</span>
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 w-10 h-10  text-lg text-center flex justify-center items-center  rounded-full hover:bg-blue-700 transition">
            {getUserInitials(fullname)}
          </button>
        </div>
      </div>
      {/* <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className=" font-bold text-gray-800">
            {currentPage ? currentPage : "Dashboard"}
          </h1>
        </div>
      </div> */}
    </header>
  );
};

export default ElectionHeader;
