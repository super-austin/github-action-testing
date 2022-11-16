//  External Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

//  Internal Dependencies
import { getGameStatsDataHelper } from "../../../../helper/GameDetailsHelper/GameDetailsHelper";

import { GAME_ID } from "../../../../constants/api";

//  Get GameStats Info
export const getGameStatsData = createAsyncThunk(
  "/game-info/gamestats",
  async (gameID: string = GAME_ID) => {
    return await getGameStatsDataHelper(gameID);
  }
);
