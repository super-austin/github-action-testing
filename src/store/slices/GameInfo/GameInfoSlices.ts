//  External Dependencies
import { createSlice } from "@reduxjs/toolkit";

//  Internal Dependencies
import { GameInfoState } from "../../types/GameInfo.types";
import {
  getLeaderBoardData,
  getGameStatsData,
  getCollectibleData,
} from "./thunks";
import { resetCollectibles } from "./thunks/collectibles";

const initialState: GameInfoState = {
  leaderboard: [],
  leaderboardSize: 0,
  isLoading: false,
  isError: false,
  gameStats: {
    numberOfLivePlayers: {
      value: 0,
      percentage: 0,
    },
    numberOfPlayers: {
      value: 0,
      percentage: 0,
    },
    NFTStats: {
      value: 0,
      percentage: 0,
    },
    serverStatus: "",
    totalRewards: {
      near: 0,
      dollar: 0,
    },
    gameAssets: 0,
    totalRewardsGivenOut: {
      value: 0,
      percentage: 0,
    },
  },
  collectible: {
    minted: [],
    notMinted: [],
  },
};

export const gameinfoSlice = createSlice({
  name: "gameinfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //  LeaderBoard
    builder.addCase(getLeaderBoardData.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
      return state;
    });
    builder.addCase(getLeaderBoardData.fulfilled, (state, action) => {
      state.leaderboard = action.payload.entries;
      state.leaderboardSize = action.payload.leaderboard_size;
      state.isLoading = false;
      return state;
    });
    builder.addCase(getLeaderBoardData.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log("error!");
      return state;
    });

    //  GameStats
    builder.addCase(getGameStatsData.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
      return state;
    });
    builder.addCase(getGameStatsData.fulfilled, (state, action) => {
      if (action.payload) {
        state.gameStats = action.payload.gameStats;
      }
      state.isLoading = false;
      return state;
    });
    builder.addCase(getGameStatsData.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log("error!");
      return state;
    });

    //  Collectibles
    builder.addCase(getCollectibleData.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
      return state;
    });
    builder.addCase(getCollectibleData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.collectible = {
        minted: action.payload.minted,
        notMinted: action.payload.nonMinted,
      };
      return state;
    });
    builder.addCase(getCollectibleData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("error!");
      return state;
    });
    builder.addCase(resetCollectibles.fulfilled, (state = initialState) => {
      state = state;
      return state;
    });
  },
});
