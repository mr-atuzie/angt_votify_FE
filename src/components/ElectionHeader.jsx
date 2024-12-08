import React from "react";

const ElectionHeader = ({ electionName, electionStatus, electionType }) => {
  //   const [currentPage, setCurrentPage] = useState("");
  //   const location = useLocation();

  // //   useEffect(() => {
  // //     const path = location.pathname.split("/").pop();
  // //     setCurrentPage(path.replace(/-/g, " ").toUpperCase()); // Format the page name
  // //   }, [location]);

  return (
    <header className=" bg-blue-900 py-2 shadow-lg px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-xl text-white font-medium">
            Most Beautiful Girl Nigeria
          </h1>

          <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-lg">
            Building
          </span>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Edit Election
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
