// External Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

// Internal Dependencies
import { getUserByAccessToken } from "../../../../helper/GGAuthHelper/GGAuthHelper";

export const getUserData = createAsyncThunk(
  "/user/get-data",
  async (accessToken: string) => {
    return await getUserByAccessToken(accessToken);
  }
);

export const logoutUser = createAsyncThunk("/user/logout", () => {
  localStorage.removeItem("persist:user");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  return;
});

export const getProfileInfo = createAsyncThunk("/users/getProfile", () => {});
