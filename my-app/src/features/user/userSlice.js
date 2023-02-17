import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signUpUser } from "../../services/auth";

const initialState = {
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
});

export const { setEmail, setPassword } = userSlice.actions;

export default userSlice.reducer;
