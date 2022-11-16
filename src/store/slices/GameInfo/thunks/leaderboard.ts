//  External Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

//  Internal Dependencies
import { getLeaderBoardDataHelper } from "../../../../helper/GameDetailsHelper/GameDetailsHelper";

import { LeaderBoardRequest } from "../../../types/GameInfo.types";
import { GAME_ID } from "../../../../constants/api";

//  Get LeaderBoard Info
export const getLeaderBoardData = createAsyncThunk(
  "/game-info/leaderboard",
  async ({
    pageIndex = 0,
    pageSize = 5,
    gameID = GAME_ID,
  }: LeaderBoardRequest) => {
    return await getLeaderBoardDataHelper({ pageIndex, pageSize, gameID });
  }
);
