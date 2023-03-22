import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: "",
  token: "",
};
// signup 
export const signUpReducer = createAsyncThunk(
  "signUpUser",
  async (userData) => {
    const res = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return res.json();
  }
);
// login 
export const signInReducer = createAsyncThunk(
  "signInUser",
  async (userData) => {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return res.json();
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
        state.token = action.payload.token;
      }
    },
    [signUpReducer.rejected]: (state, action) => {
      state.loading = false;
    },
    // login
    [signInReducer.pending]: (state, action) => {
      state.loading = true;
    },
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
      state.error = action.payload.error;
    },
  },
});

export default authSlice.reducer;
