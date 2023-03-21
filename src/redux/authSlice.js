import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  token: "",
};

export const signUpReducer = createAsyncThunk(
  "signupUser",
  async (userData) => {
    const res = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await res.json();
  }
);
export const signInReducer = createAsyncThunk(
  "signInUser",
  async (userData) => {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await res.json();
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
        state.id = action.payload.id;
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
