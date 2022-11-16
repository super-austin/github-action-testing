//  External Dependencies
import { createSlice } from "@reduxjs/toolkit";

//  Internal Dependencies
import { GameFiState } from "../../types/GameFi.types";

import { getGameStatisticData } from "./thunks/gamestatistics";

const initialState: GameFiState = {
  gameStatistics: {
    total_coin_collected: 0,
    damage_done: 0,
    deaths: 0,
    boss_kills: 0,
    metamon_kills: 0,
    extracts: 0,
    kills: 0,
    time_alive: 0,
  },
  isError: false,
  isLoading: false,
};

export const gamefiSlice = createSlice({
  name: "gamefi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //  Statistics
    builder.addCase(getGameStatisticData.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
      return state;
    });
    builder.addCase(getGameStatisticData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.gameStatistics = action.payload;
      return state;
    });
    builder.addCase(getGameStatisticData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("error!");
      return state;
    });
  },
});
