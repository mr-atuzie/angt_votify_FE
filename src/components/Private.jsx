import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  // const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const [loading, setLoading] = useState(true); // Track loading state
  const session = sessionStorage.getItem("token");

  // useEffect(() => {
  //   console.log("Private page....");

  //   const checkLoginStatus = async () => {
  //     try {
  //       await dispatch(fetchLoginStatus()).unwrap(); // Dispatch and resolve async thunk
  //     } catch (error) {
  //       console.error("Failed to fetch login status:", error);
  //     } finally {
  //       setLoading(false); // Stop loading regardless of outcome
  //     }
  //   };

  //   checkLoginStatus();
  // }, [dispatch]);

  // Show a loading indicator while checking login status
  // if (loading) {
  //   return <Loader />;
  // }

  // Navigate to login if not logged in
  return session ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Private;
