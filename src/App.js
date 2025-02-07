import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import axios from "axios";

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
// import Settings from "./pages/Settings";

// Dashboard
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardElections from "./pages/Dashboard/DashboardElections";
import DashboardVoters from "./pages/Dashboard/DashboardVoters";
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
// import BallotLayout from "./layouts/BallotLayout";
import ElectionDateSetting from "./components/ElectionDateSetting";
import ElectionDeleteForm from "./components/ElectionDeleteForm";
import ElectionTypeSetting from "./components/ElectionTypeSetting";
import ElectionGeneralSetting from "./components/ElectionGeneralSetting";
import EditBallotQuestion from "./pages/Election/EditBallotQuestion";
import EditBallotOption from "./pages/Election/EditBallotOption";
import ElectionResult from "./pages/Election/ElectionResult";
import VotingLogin from "./pages/Voting/VotingLogin";
import Voting from "./pages/Voting/Voting";
import DashboardSettingLayout from "./layouts/DashboardSettingLayout";
import DashboardGeneralSetting from "./components/DashboardGeneralSetting";
import DashboardSecuritySetting from "./components/DashboardSecuritySetting";
import OrganisationForm from "./components/OrganisationForm";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import Private from "./components/Private";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import How from "./pages/How";
import VerifyEmail from "./pages/VerifyEmail";
import NotFound from "./pages/NotFound";
import ElectionVoter from "./pages/Election/ElectionVoter";
import ElectionLaunch from "./pages/Election/ElectionLaunch";
import Team from "./pages/Team";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<How />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashbaord" element={<Dashboard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonial" element={<Testimonal />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:id" element={<ResetPassword />} />

          {/* dashboard lay out */}
          {/* <Route path="/dashboard" element={<Private />}> */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* Default dashboard route */}
            <Route index element={<Dashboard />} />

            {/* Individual dashboard sections */}
            <Route path="manage-elections" element={<DashboardElections />} />
            <Route path="voter-management" element={<DashboardVoters />} />

            <Route path="subscription" element={<DashboardPricing />} />

            <Route path="create-election" element={<CreateElection />} />

            {/* Settings layout with nested routes */}
            <Route path="setting" element={<DashboardSettingLayout />}>
              <Route path="profile" element={<DashboardGeneralSetting />} />
              <Route
                path="change-password"
                element={<DashboardSecuritySetting />}
              />
              <Route path="organisation" element={<OrganisationForm />} />
            </Route>
          </Route>
          {/* </Route> */}

          {/* Election layout */}
          {/* Election Routes */}
          {/* <Route path="/election/:id" element={<Private />}> */}
          <Route path="/election/:id" element={<ElectionLayout />}>
            {/* Overview Route */}
            <Route index path="overview" element={<ElectionOverview />} />

            {/* Results Route */}
            <Route path=":result" element={<ElectionResult />} />

            <Route path="manage" element={<ElectionLaunch />} />

            {/* Ballot Routes */}
            <Route path="ballot" element={<ElectionBallot />} />
            <Route
              path="ballot/create-question"
              element={<CreateBallotQuestion />}
            />
            <Route
              path="ballot/edit-question/:ballotId"
              element={<EditBallotQuestion />}
            />
            <Route
              path="ballot/create-option/:ballotId"
              element={<CreateBallotOption />}
            />
            <Route
              path="ballot/:ballotId/edit-option/:optionId"
              element={<EditBallotOption />}
            />

            {/* Voters Routes */}
            <Route path="voters" element={<ElectionVoters />} />
            <Route path="voter/:id" element={<ElectionVoter />} />
            <Route path="voters/create" element={<ElectionAddVoters />} />

            {/* Settings Layout */}
            <Route path="setting" element={<SettingLayout />}>
              <Route path="general" element={<ElectionGeneralSetting />} />
              <Route path="election-date" element={<ElectionDateSetting />} />
              <Route path="election-type" element={<ElectionTypeSetting />} />
              <Route path="delete" element={<ElectionDeleteForm />} />
            </Route>
          </Route>
          {/* </Route> */}

          {/* voting */}
          <Route
            path="voting/:electionId/voter/:voterId/login"
            element={<VotingLogin />}
          />

          <Route
            path="voting/:electionId/voter/:voterId/vote"
            element={<Voting />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
