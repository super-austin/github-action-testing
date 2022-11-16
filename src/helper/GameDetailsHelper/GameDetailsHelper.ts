//  External Dependencies
import axios, { AxiosError } from "axios";

//  Internal Dependencies
import {
  LeaderBoardItem,
  LeaderBoardRequest,
  LeaderBoardItemResponse,
  CollectibleItem,
  GameStats,
} from "./GameDetailsHelper.types";

//  TODO: Static data
import {
  STATIC_GAMENAUT_USER_ID,
  STATIC_GAME_ID,
  STATIC_IMAGE_URL,
} from "./GameDetails.statics";

import {
  BACKEND_URL,
  GameServerURL,
  GAME_ID,
  X_SERVER_TOKEN,
} from "../../constants/api";
import { store } from "../../store/store";

/*
--------------------
LeaderBoard
--------------------
*/
export async function getLeaderBoardDataHelper({
  pageIndex = 0,
  pageSize = 5,
  gameID = GAME_ID,
}: LeaderBoardRequest) {
  //  Define AXIOS_HEADER
  const headers = {
    "X-GAME-ID": gameID,
    "X-SERVER-TOKEN": X_SERVER_TOKEN,
  };

  try {
    //  Get LeaderBoard Data from GameAPI
    const { data } = await axios.get(
      `${GameServerURL}/api/v0/stats/leaderboard?start=${
        pageIndex * pageSize
      }&size=${pageSize}`,
      { headers }
    );

    //  Get Players' Total Score
    const { entries, leaderboard_size } = data;

    const entries_array = Object.entries(entries) as [
      string,
      LeaderBoardItemResponse
    ][];
    const leaderboardTableData: Array<LeaderBoardItem> = entries_array.map(
      (entry: [string, LeaderBoardItemResponse]) => {
        return {
          rank: parseInt(entry[0], 10) + 1,
          // player: entry[1].username,
          player: STATIC_GAMENAUT_USER_ID[parseInt(entry[0], 10) % 5],
          time: entry[1].time_alive,
          totalGP: entry[1].kills,
        };
      }
    );
    return { entries: leaderboardTableData, leaderboard_size };
  } catch (err) {
    if (err instanceof AxiosError) return err.response?.data;
  }
}

/*
--------------------
Collectibles
--------------------
*/
export async function getCollectibleDataHelper() {
  let user = store.getState().user.user;
  let userId = user.userId;

  if (userId) {
    try {
      //  Configuring Promises
      const promises = [
        axios.post(`${BACKEND_URL}getMintedGameAssetsForUser`, {
          // game_id: STATIC_GAME_ID,
          user_id: userId,
        }), //  Minted Collectibles
        axios.post(`${BACKEND_URL}getNonMintedGameAssetsForUser`, {
          // game_id: STATIC_GAME_ID,
          user_id: userId,
        }), //  Non-Minted Collectibles
      ];

      const result = await Promise.allSettled(promises);

      //  Analyzing Result
      let minted: Array<CollectibleItem> = [];
      let nonMinted: Array<CollectibleItem> = [];

      //  result[0]: Minted Collectibles
      if (result[0].status === "fulfilled") {
        minted = result[0].value.data.game_assets.map(
          (
            asset: {
              token_id: string;
              game_id: string;
              asset_data: {
                asset_id: string;
                name: string;
                rarity: number;
                description: string;
                supply: number;
                image: string;
                game_id: string;
              };
            },
            index: number
          ) => {
            return {
              imageURL: STATIC_IMAGE_URL[index % STATIC_IMAGE_URL.length],
              icon: "",
            };
          }
        );
      }
      //  result[1]: Non-Minted Collectibles
      if (result[1].status === "fulfilled") {
        nonMinted = result[1].value.data.game_assets.map(
          (
            asset: {
              token_id: string;
              game_id: string;
              asset_data: {
                asset_id: string;
                name: string;
                rarity: number;
                description: string;
                supply: number;
                image: string;
                game_id: string;
              };
            },
            index: number
          ) => {
            return {
              imageURL: STATIC_IMAGE_URL[index % STATIC_IMAGE_URL.length],
              icon: "",
            };
          }
        );
      }

      console.log(minted, nonMinted);
      return { minted, nonMinted };
    } catch (err) {
      if (err instanceof AxiosError) return err.response?.data;
    }
  }
}

/*
--------------------
GameStats
--------------------
*/

export async function getGameStatsDataHelper(gameID: string = GAME_ID) {
  let user = store.getState().user.user;
  let userId = user.userId;

  console.log({ userId });

  if (userId) {
    //  Define AXIOS_HEADER
    const headers = {
      "X-GAME-ID": gameID,
      "X-SERVER-TOKEN": X_SERVER_TOKEN,
    };

    try {
      //  Configuring Promises
      const promises = [
        axios.get(`${GameServerURL}/api/v0/realtime/player_count`, { headers }), // Number of live Players
        axios.post(`${BACKEND_URL}getEarnedGameAssetsForGame`, {
          game_id: STATIC_GAME_ID,
        }), // NFT Stats
        axios.get(`${GameServerURL}/api/v0/matchmaking/server_status`, {
          headers,
        }), // Server Status
        axios.post(`${BACKEND_URL}getTotalEarnedRewardsForGame`, {
          game_id: STATIC_GAME_ID,
        }), // Total Rewards
        axios.post(`${BACKEND_URL}getGameAssetsForUser`, {
          game_id: STATIC_GAME_ID,
          user_id: userId,
        }), // Game Assets
        axios.post(`${BACKEND_URL}getEarnedGamepointsForGame`, {
          game_id: STATIC_GAME_ID,
        }), // Total rewards given out
      ];

      const result = await Promise.allSettled(promises);

      const newStates: GameStats = {
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
      };

      //  Analyzing result
      //  result[0]: Total Number of Live Players
      if (result[0].status === "fulfilled") {
        newStates.numberOfLivePlayers = {
          value: result[0].value.data.player_count,
          percentage: 0,
        };
      } else
        newStates.numberOfLivePlayers = {
          value: 0,
          percentage: 0,
        };

      // //  result[1]: NFT Stats
      if (result[1].status === "fulfilled") {
        newStates.NFTStats = {
          value: result[1].value.data.earned_count,
          percentage: result[1].value.data.percent_change,
        };
      } else
        newStates.NFTStats = {
          value: 0,
          percentage: 0,
        };

      //  result[2]: Server Status
      if (result[2].status === "fulfilled") {
        const status = result[2].value.data;
        newStates.serverStatus = Object.entries(status).find((server) => {
          return server[1] === "ONLINE";
        })
          ? "ONLINE"
          : "OFFLINE";
      } else newStates.serverStatus = "";

      //  result[3]: Total Rewards
      if (result[3].status === "fulfilled") {
        newStates.totalRewards = {
          near: result[3].value.data.total_rewards_near,
          dollar: result[3].value.data.total_rewards_dollar,
        };
      } else
        newStates.totalRewards = {
          near: 0,
          dollar: 0,
        };

      //  result[4]: Game Assets
      if (result[4].status === "fulfilled") {
        newStates.gameAssets = result[4].value.data.game_assets.length;
      } else newStates.gameAssets = 0;

      //  result[5]: Total Rewards givenout
      if (result[5].status === "fulfilled") {
        newStates.totalRewardsGivenOut = {
          value: result[5].value.data.earned_gamepoints || 0,
          percentage: result[5].value.data.percent_change,
        };
      } else
        newStates.totalRewardsGivenOut = {
          value: 0,
          percentage: 0,
        };
      return { gameStats: newStates };
    } catch (err) {
      if (err instanceof AxiosError) return err.response?.data;
    }
  }
}
