import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosPrivate from "../api/api";

const initialState = {
  loading: false,
  error: "",
  token: "",
};

export const signUpReducer = createAsyncThunk(
  "signupUser",
  async (userData) => {
    const response = await axiosPrivate.post("/register", userData);
    return response.data;
  }
);
export const signInReducer = createAsyncThunk(
  "signInUser",
  async (userData) => {
    const response = await axiosPrivate.post("/login", userData);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // signup
    [signUpReducer.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpReducer.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.error = action.payload.message;
      }
    },
    [signUpReducer.rejected]: (state, action) => {
      state.loading = false;
    },
    [signInReducer.pending]: (state, action) => {
      state.loading = true;
    },
    // login
    [signInReducer.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.error = action.payload.message;
        state.token = action.payload.token;
      }
    },
    [signInReducer.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
