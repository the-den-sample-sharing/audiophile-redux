import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signUpUser, loginUser, getUser } from "../../services/auth";

const initialState = {
  loading: false,
  userInfo: {},
  status: "",
  email: "",
  password: "",
};

export const createUserAsync = createAsyncThunk(
  "user/signUpUser",
  async (email, password) => {
    const response = await signUpUser(email, password);

    return response.data;
  }
);
export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (email, password) => {
    const response = await loginUser(email, password);

    return response.data;
  }
);
export const getUserAsync = createAsyncThunk("user/getUser", async () => {
  const response = await getUser();

  return response.data;
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
    // setUser: (state, action) => {},
  },
  extraReducers: {
    [getUserAsync.pending]: (state) => {
      state.status = "loading";
    },
    [getUserAsync.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.status = "success";
    },
  },
});

export const { setEmail, setPassword, setUser } = userSlice.actions;

export default userSlice.reducer;
