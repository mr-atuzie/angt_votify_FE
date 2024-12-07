import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollTop from "./components/ScrollTop";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import FAQ from "./pages/FAQ";
import Testimonal from "./pages/Testimonal";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardElections from "./pages/DashboardElections";
import DashboardVoters from "./pages/DashboardVoters";
import DashboardCandidates from "./pages/DashboardCandidates";
import DashboardPricing from "./pages/DashboardPricing";
import Settings from "./pages/Settings";
import CreateElection from "./pages/CreateElection";
import ElectionLayout from "./layouts/ElectionLayout";
import ElectionOverview from "./pages/ElectionOverview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashbaord" element={<Dashboard />} />
          <Route path="/frequently-asked-questions" element={<FAQ />} />
          <Route path="/reviews" element={<Testimonal />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="elections" element={<DashboardElections />} />
            <Route path="voter-management" element={<DashboardVoters />} />
            <Route
              path="candidate-management"
              element={<DashboardCandidates />}
            />
            <Route path="pricing" element={<DashboardPricing />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="/create-election" element={<CreateElection />} />

          <Route path="/election" element={<ElectionLayout />}>
            <Route path=":id/overview" element={<ElectionOverview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
