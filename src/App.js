import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollTop from "./components/ScrollTop";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DasboardLayout from "./pages/DasboardLayout";
import Profile from "./pages/Profile";
import VotingLayout from "./pages/VotingLayout";
import Vote from "./pages/Vote";
import Contestants from "./pages/Contestants";
import EditProfile from "./pages/EditProfile";
import AddPhotoPage from "./pages/AddPhotoPage";
// import Test from "./pages/test";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contestants" element={<Contestants />} />

          <Route path="/dashboard" element={<DasboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-photo" element={<AddPhotoPage />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Route>

          <Route path="/vote" element={<VotingLayout />}>
            <Route path="contestant/:contestant_id" element={<Vote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
