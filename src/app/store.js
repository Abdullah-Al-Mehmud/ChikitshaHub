import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
// import authReducer from ""
// authSlice
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
