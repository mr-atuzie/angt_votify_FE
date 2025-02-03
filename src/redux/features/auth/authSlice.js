import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  user:
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  loading: false, // General loading state
  error: null, // General error state
  isLoggedIn: false,
};

// export const fetchLoginStatus = createAsyncThunk(
//   "auth/fetchLoginStatus",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/api/v1/user/loginStatus`);
//       // Log the response
//       // console.log("loginStatus", data);

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data || "Error fetching ballot data"
//       );
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
      if (action.payload.message === "invalid signature") {
        state.isLoggedIn = false;
      }
    },
    SET_USER(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     // Fetch election data
  //     .addCase(fetchLoginStatus.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchLoginStatus.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.isLoggedIn = action.payload;
  //     })
  //     .addCase(fetchLoginStatus.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { SET_LOGIN, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
