import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

// Public
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import FAQ from "./pages/FAQ";
import Testimonal from "./pages/Testimonal";
import Settings from "./pages/Settings";

// Dashboard
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardElections from "./pages/Dashboard/DashboardElections";
import DashboardVoters from "./pages/Dashboard/DashboardVoters";
import DashboardCandidates from "./pages/Dashboard/DashboardCandidates";
import DashboardPricing from "./pages/Dashboard/DashboardPricing";

import CreateElection from "./pages/CreateElection";

//Election Overvieww
import ElectionLayout from "./layouts/ElectionLayout";
import ElectionOverview from "./pages/Election/ElectionOverview";
import ElectionBallot from "./pages/Election/ElectionBallot";

import ElectionAddVoters from "./pages/Election/ElectionAddVoters";
import ElectionVoters from "./pages/Election/ElectionVoters";

import CreateBallotQuestion from "./pages/Election/CreateBallotQuestion";
import CreateBallotOption from "./pages/Election/CreateBallotOption";

import SettingLayout from "./layouts/SettingLayout";
import BallotLayout from "./layouts/BallotLayout";
import ElectionDateSetting from "./components/ElectionDateSetting";
import ElectionDeleteForm from "./components/ElectionDeleteForm";
import ElectionTypeSetting from "./components/ElectionTypeSetting";
import ElectionGeneralSetting from "./components/ElectionGeneralSetting";

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

          {/* dashboard lay out */}
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

          {/* Election layout */}
          <Route path="/election" element={<ElectionLayout />}>
            <Route path=":id/overview" element={<ElectionOverview />} />

            {/* ballot laout */}
            <Route path=":id/ballot" element={<BallotLayout />}>
              <Route index element={<ElectionBallot />} />

              <Route
                path=":ballotId/create-ballot-question"
                element={<CreateBallotQuestion />}
              />
              <Route
                path=":ballotId/create-ballot-option"
                element={<CreateBallotOption />}
              />
            </Route>

            <Route path=":id/voters" index element={<ElectionVoters />} />
            <Route path=":id/voter/create" element={<ElectionAddVoters />} />

            {/* setting layout */}
            <Route path=":id/setting" element={<SettingLayout />}>
              <Route
                index
                path="general"
                element={<ElectionGeneralSetting />}
              />
              <Route path="election-date" element={<ElectionDateSetting />} />
              <Route path="election-type" element={<ElectionTypeSetting />} />

              <Route index path="delete" element={<ElectionDeleteForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
