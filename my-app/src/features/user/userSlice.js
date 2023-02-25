import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  loading: false,
  user: null,
  status: "idle",
  isAuthenticated: false,
  error: null,
  email: "",
  password: "",
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/users`,
        {
          email,
          password,
        },
        {
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

export const logIn = createAsyncThunk(
  "user/logIn",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/users/sessions`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }
);

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/users/me`, {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
      console.log(state.email);
    },
    setPassword: (state, action) => {
      state.password = action.payload;
      console.log(state.password);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload;
        console.log("statusss", state.status);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        console.log("statusss", state.status);
        console.log("userr", state.user);
      })
      .addCase(logIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        console.log("getuserr", state.user);
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setEmail, setPassword } = userSlice.actions;
export const getUserStatus = (state) => state.user.status;
export const getUserData = (state) => state.user.user;
export const getUserError = (state) => state.user.error;
export const getUserEmail = (state) => state.user.email;
export const getUserPassword = (state) => state.user.password;

export default userSlice.reducer;
