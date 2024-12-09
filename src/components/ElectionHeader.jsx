import React from "react";

const ElectionHeader = ({ electionName, electionStatus, electionType }) => {
  //   const [currentPage, setCurrentPage] = useState("");
  //   const location = useLocation();

  // //   useEffect(() => {
  // //     const path = location.pathname.split("/").pop();
  // //     setCurrentPage(path.replace(/-/g, " ").toUpperCase()); // Format the page name
  // //   }, [location]);

  console.log(electionStatus);

  return (
    <header className=" bg-blue-900 py-4 shadow-lg px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-xl capitalize text-white font-medium">
            {electionName}
          </h1>

          <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-lg">
            {electionStatus}
          </span>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 w-10 h-10  text-lg text-center flex justify-center items-center  rounded-full hover:bg-blue-700 transition">
          RA
        </button>
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
