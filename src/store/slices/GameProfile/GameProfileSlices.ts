//  External Dependencies
import { createSlice } from "@reduxjs/toolkit";

//  Internal Dependencies
import { ProfileState } from "../../types/GameProfile.types";
import { initialProfile } from "./thunks/initializeProfile";

import {
  setDropsNotificationState,
  setOffersNotificationState,
} from "./thunks/setNotificationData";

const initialState: ProfileState = {
  notifyDrops: false,
  notifyOffers: false,
  isTFAEnabled: false,

  isError: false,
  isLoading: false,
};

export const gameProfileSlice = createSlice({
  name: "gameprofile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //  initial state
    builder.addCase(initialProfile.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
      return state;
    });
    builder.addCase(initialProfile.fulfilled, (state, action) => {
      state.isLoading = false;

      state.notifyDrops = action.payload.notifyDrops;
      state.notifyOffers = action.payload.notifyOffers;
      state.isTFAEnabled = action.payload.isTFAEnabled;

      return state;
    });
    builder.addCase(initialProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("error!");
      return state;
    });

    //  Drops Notification
    builder.addCase(setDropsNotificationState.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
      return state;
    });
    builder.addCase(setDropsNotificationState.fulfilled, (state, action) => {
      state.isLoading = false;

      state.notifyDrops = action.payload
        ? !state.notifyDrops
        : state.notifyDrops;

      return state;
    });
    builder.addCase(setDropsNotificationState.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("error!");
      return state;
    });

    //  Offers Notification
    builder.addCase(setOffersNotificationState.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
      return state;
    });
    builder.addCase(setOffersNotificationState.fulfilled, (state, action) => {
      state.isLoading = false;

      state.notifyOffers = action.payload
        ? !state.notifyOffers
        : state.notifyOffers;

      return state;
    });
    builder.addCase(setOffersNotificationState.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("error!");
      return state;
    });
  },
});
