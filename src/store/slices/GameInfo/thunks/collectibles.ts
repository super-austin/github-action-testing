//  External Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

//  Internal Dependencies
import { getCollectibleDataHelper } from "../../../../helper/GameDetailsHelper/GameDetailsHelper";

//  Get Collectible Info
export const getCollectibleData = createAsyncThunk(
  "/game-info/collectible",
  async () => {
    return await getCollectibleDataHelper();
  }
);

export const resetCollectibles = createAsyncThunk(
  "game-info/collectibles/reset",
  async () => {
    return;
  }
)
