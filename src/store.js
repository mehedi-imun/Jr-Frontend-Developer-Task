import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
  },
});
