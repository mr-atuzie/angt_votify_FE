import { configureStore } from "@reduxjs/toolkit";
import electionReducer from "./features/election/electionSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    election: electionReducer,
  },
});
