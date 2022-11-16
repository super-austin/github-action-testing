//  External Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

//  Internal Dependencies
import {
  setDropsNotification,
  setOffersNotification,
} from "../../../../helper/ProfileHelper/ProfileHelper";

export const setDropsNotificationState = createAsyncThunk(
  "/game-profile/setDropsNotification",
  async (newState: boolean) => {
    return await setDropsNotification(newState);
  }
);

export const setOffersNotificationState = createAsyncThunk(
  "/game-profile/setOffersNotification",
  async (newState: boolean) => {
    return await setOffersNotification(newState);
  }
);
