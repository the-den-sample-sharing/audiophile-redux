import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  loading: false,
  user: null,
  status: "idle",
  isAuthenticated: false,
  error: null,
  firstName: "",
  lastName: "",
  bio: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
      console.log(state.firstName);
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
      console.log(state.lastName);
    },
    setUsername: (state, action) => {
      state.username = action.payload;
      console.log(state.username);
    },
    setBio: (state, action) => {
      state.bio = action.payload;
      console.log(state.bio);
    },
  },
});

export const { setFirstName, setBio, setLastName, setUsername } =
  profileSlice.actions;

export const getFirstName = (state) => state.profile.firstName;
export const getLastName = (state) => state.profile.lastName;
export const getUsername = (state) => state.profile.username;
export const getBio = (state) => state.profile.bio;

export default profileSlice.reducer;
