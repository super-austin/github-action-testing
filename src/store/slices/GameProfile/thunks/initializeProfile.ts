//  External Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

//  Internal Dependencies
import { getInitialProfileData } from "../../../../helper/ProfileHelper/ProfileHelper";

export const initialProfile = createAsyncThunk(
  "/game-profile/initialize",
  async () => {
    return await getInitialProfileData();
  }
);
