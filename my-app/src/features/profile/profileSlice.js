import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  loading: false,
  profileData: null,
  status: "idle",
  isAuthenticated: false,
  error: null,
  firstName: "",
  lastName: "",
  bio: "",
};

export const createProfile = createAsyncThunk(
  "profile/createProfile",
  async ({ firstName, lastName, username, bio }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/profiles`,
        {
          firstName,
          lastName,
          username,
          bio,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      throw new Error(err.response.data);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(createProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profileData = action.payload;
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFirstName, setBio, setLastName, setUsername } =
  profileSlice.actions;

export const getFirstName = (state) => state.profile.firstName;
export const getLastName = (state) => state.profile.lastName;
export const getUsername = (state) => state.profile.username;
export const getBio = (state) => state.profile.bio;
export const getProfileData = (state) => state.profile.bio;

export default profileSlice.reducer;
