import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../axiosInstance";

// Async thunk to fetch election data
export const fetchElectionData = createAsyncThunk(
  "election/fetchElectionData",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/api/v1/election/${id}`);
      // console.log("Fetched Election Data: ", response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error fetching election data"
      );
    }
  }
);

// Async thunk to fetch ballot and its voting options
export const fetchBallotData = createAsyncThunk(
  "election/fetchBallotData",
  async (electionId, thunkAPI) => {
    try {
      console.log("Election ID:", electionId); // Debugging
      const response = await api.get(`/api/v1/ballot/election/${electionId}`);
      // Log the response
      // console.log({ re: response.data });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error fetching ballot data"
      );
    }
  }
);

const electionSlice = createSlice({
  name: "election",
  initialState: {
    electionData: null, // For election data
    ballotData: null, // For ballot and its options
    loading: false, // General loading state
    error: null, // General error state
  },
  reducers: {
    clearElectionData: (state) => {
      state.electionData = null;
    },
    clearBallotData: (state) => {
      state.ballotData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch election data
      .addCase(fetchElectionData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchElectionData.fulfilled, (state, action) => {
        state.loading = false;
        state.electionData = action.payload;
      })
      .addCase(fetchElectionData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch ballot data
      .addCase(fetchBallotData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBallotData.fulfilled, (state, action) => {
        state.loading = false;
        state.ballotData = action.payload;
      })
      .addCase(fetchBallotData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions for clearing data
export const { clearElectionData, clearBallotData } = electionSlice.actions;

export default electionSlice.reducer;
