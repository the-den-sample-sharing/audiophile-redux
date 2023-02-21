import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, fetchUser, createUser } from "../../services/auth";
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

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (email, password) => {
    try {
      const response = await createUser(email, password);
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/users/me`);
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
      .addCase(signUpUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload;
        console.log("userinfoo", state.userInfo);
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload;
        console.log("userinfoo", state.userInfo);
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
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
