import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  profileData: null,
  status: "idle",
  isAuthenticated: false,
  error: null,
  firstName: "",
  lastName: "",
  bio: "",
  avatarFile: null,
};

export const createProfile = createAsyncThunk(
  "profile/createProfile",
  async (formData) => {
    console.log("formdata", formData);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/profiles`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
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

export const getUserProfile = createAsyncThunk(
  "profile/getUserProfile",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/profiles`, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("responseeee", response.data);
      return response.data;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setBio: (state, action) => {
      state.bio = action.payload;
    },
    setAvatarFile: (state, action) => {
      state.avatarFile = action.payload;
      console.log(state.avatarFile);
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
      })
      .addCase(getUserProfile.pending, (state) => {
        state.status = "idle";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profileData = action.payload;
        console.log("sliceprofile", state.profileData);
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFirstName, setBio, setLastName, setUsername, setAvatarFile } =
  profileSlice.actions;

export const getFirstName = (state) => state.profile.firstName;
export const getLastName = (state) => state.profile.lastName;
export const getUsername = (state) => state.profile.username;
export const getBio = (state) => state.profile.bio;
export const getProfileData = (state) => state.profile.bio;
export const getLoadStatus = (state) => state.profile.status;
export const getAvatarFile = (state) => state.profile.avatarFile;

export default profileSlice.reducer;
