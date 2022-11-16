//  Internal Dependencies
import { RootState } from "../store";

//  Select Loading Status
export const selectLoadingStatus = () => (state: RootState) => {
  return state.gameinfo.isLoading;
};

//  Select Error Status
export const selectErrorStatus = () => (state: RootState) => {
  return state.gameinfo.isError;
};

//  Select LeaderBoardData
export const selectLeaderBoardData = () => (state: RootState) => {
  return {
    isLoading: state.gameinfo.isLoading,
    isError: state.gameinfo.isError,
    leaderboard: state.gameinfo.leaderboard,
    leaderboardSize: state.gameinfo.leaderboardSize,
  };
};

//  Select GameStatsData
export const selectGameStatsData = () => (state: RootState) => {
  return {
    isLoading: state.gameinfo.isLoading,
    isError: state.gameinfo.isError,
    gameStats: state.gameinfo.gameStats,
  };
};

//  Select CollectibleData
export const selectCollectibleData = () => (state: RootState) => {
  return {
    isLoading: state.gameinfo.isLoading,
    isError: state.gameinfo.isError,
    collectible: state.gameinfo.collectible,
  };
};
