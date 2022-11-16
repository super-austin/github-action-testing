import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/User.types"
import { getUserData, logoutUser } from "./thunks/user"


export const initialState: UserState = {
  user: {
    userId: "",
    email: "",
    userName: "",
  },
  isLoading: false,
  isError: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      return state;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      return state;
    });
    builder.addCase(getUserData.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      console.log("error!");
      return state;
    });
    builder.addCase(logoutUser.fulfilled, (state = initialState) => {
      state = initialState;
      return state;
    });
  }
})