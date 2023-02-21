import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, fetchUser } from "../../services/auth";

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  loading: false,
  userInfo: null,
  status: "idle",
  error: null,
  email: "",
  password: "",
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async (email, password) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/users`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.body;
    } catch (err) {
      return err.response.data;
    }
  }
);
// export const signIn = createAsyncThunk(
//   "user/signUpUser",
//   async (email, password) => {
//     try {
//       const response = await loginUser(email, password);
//       return response.body;
//     } catch (err) {
//       return err.response.data;
//     }
//   }
// );

// export const getUser = createAsyncThunk("user/getUser", async () => {
//   try {
//     const response = await fetchUser();
//     return response.data;
//   } catch (err) {
//     return err.message;
//   }
// });

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
      });
    // .addCase(getUser.pending, (state) => {
    //   state.status = "loading";
    // })
    // .addCase(getUser.fulfilled, (state, action) => {
    //   state.status = "succeeded";
    //   console.log(action.payload);
    //   return action.payload;
    // })
    // .addCase(getUser.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = action.error.message;
    // });
  },
});

export const { setEmail, setPassword } = userSlice.actions;
export const getUserStatus = (state) => state.user.status;
export const getUserInfo = (state) => state.user.userInfo;
export const getUserError = (state) => state.user.error;
export const getUserEmail = (state) => state.user.email;
export const getUserPassword = (state) => state.user.password;

export default userSlice.reducer;
