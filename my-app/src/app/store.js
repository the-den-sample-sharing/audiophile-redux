import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import profileReducer from "../features/profile/profileSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});
