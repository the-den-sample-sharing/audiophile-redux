import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  loading: false,
  userInfo: {},
  status: "idle",
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
          email: email,
          password: password,
        },
        {
          withCredentials: true,
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          form: {
            email: email,
            password: password,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const token = localStorage.getItem("token");
      console.log("tokennn", token);
      const response = await axios.post(
        `${BASE_URL}/api/v1/users/sessions`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
          url: `${BASE_URL}/api/v1/users/sessions`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: {
            email: email,
            password: password,
          },
        }
      );
      console.log(response.data);
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
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    return err.message;
  }
});
export const logOut = createAsyncThunk("user/logOut", async () => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/v1/users/sessions`, {
      method: "DELETE",
      credentials: "include",
    });
    return response.data;
  } catch (err) {
    return err.message;
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
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload;
        console.log("statusss", state.status);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        return action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("statusss", state.status);
        console.log("loggedout");
        return action.payload;
      });
  },
});

export const { setEmail, setPassword } = userSlice.actions;
export const getUserStatus = (state) => state.user.status;
export const getUserInfo = (state) => state.user.userInfo;
export const getUserError = (state) => state.user.error;
export const getUserEmail = (state) => state.user.email;
export const getUserPassword = (state) => state.user.password;

export default userSlice.reducer;
