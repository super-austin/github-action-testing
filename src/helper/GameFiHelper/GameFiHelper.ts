//  External Dependencies
import axios, { AxiosError } from "axios";

//  Internal Dependencies
import { UserStatistics } from "./GameFiHelper.types";

import {
  BACKEND_URL,
  GameServerURL,
  GAME_ID,
  X_SERVER_TOKEN,
} from "../../constants/api";
import { store } from "../../store/store";

/*
 *  GameFi / GameStatistics
 */
export async function getGameStatisticsData(gameID: string = GAME_ID) {
  // let user = store.getState().user.user;
  // let userId = user.userId;

  const userId = "3v9dqLN";

  if (userId) {
    //  Define AXIOS_HEADER
    const headers = {
      "X-GAME-ID": gameID,
      "X-SERVER-TOKEN": X_SERVER_TOKEN,
    };

    try {
      const { data } = await axios.get(
        `${GameServerURL}/api/v0/users/${userId}`,
        { headers }
      );
      return {
        total_coin_collected: data.total_coin_collected,
        damage_done: data.damage_done,
        deaths: data.deaths,
        boss_kills: data.boss_kills,
        metamon_kills: data.metamon_kills,
        extracts: data.extracts,
        kills: data.kills,
        time_alive: data.time_alive,
      };
    } catch (err) {
      if (err instanceof AxiosError) return err.response?.data;
    }
  }
}
