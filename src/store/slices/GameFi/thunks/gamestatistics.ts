//  External Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

//  Internal Dependencies
import { getGameStatisticsData } from "../../../../helper/GameFiHelper/GameFiHelper";

import { GAME_ID } from "../../../../constants/api";

//  Get GameStats Info
export const getGameStatisticData = createAsyncThunk(
  "/game-fi/gamestatistics",
  async (gameID: string = GAME_ID) => {
    return await getGameStatisticsData(gameID);
  }
);
