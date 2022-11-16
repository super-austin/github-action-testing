// External dependencies
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

// SVG icons
import emptyStatisticIcon from "../../../assets/svg/empty-states/empty-game-statistics-icon.svg";
import emptyStatisticGraphic from "../../../assets/svg/empty-states/empty-game-statistics-graphic.svg";
import emptyFactionWarIcon from "../../../assets/svg/empty-states/empty-faction-wars-icon.svg";
import emptyFactioTableGraphic from "../../../assets/svg/empty-states/empty-faction-table-graphic.svg";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import EmptyStates from "../../../components/EmptyStates";
import Headings from "../../../components/Headings";
import GameFiFactionTable from "./GameFiFactionTable";
import GameFiStatsCharts from "./GameFiStatsCharts";

import { getGameStatisticData } from "../../../store/slices/GameFi/thunks/gamestatistics";
import { useAppDispatch } from "../../../store/store";
import { GameStatisticsState } from "../../../store/types/GameFi.types";

export default function GameFiStatistics() {
  // Empty states
  const [gameFiStatistics] = useState(true);
  const [gameStatistics, setGameStatistics] = useState<GameStatisticsState>({
    total_coin_collected: 0,
    damage_done: 0,
    deaths: 0,
    boss_kills: 0,
    metamon_kills: 0,
    extracts: 0,
    kills: 0,
    time_alive: 0,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getInitialData = async () => {
      const { payload } = await dispatch(getGameStatisticData());
      setGameStatistics(payload);
    };

    getInitialData();
  }, []);

  return (
    <>
      <Grid container sx={globalStyles.customSectionSpacing}>
        <Grid item sm={12}>
          <Headings title="Game Statistics" counts={0} lineColor={"purple"} />
        </Grid>
      </Grid>

      {gameFiStatistics === false ? (
        <EmptyStates
          icon={emptyStatisticIcon}
          title={"Game statistics not collected yet"}
          content={
            "It will display game time, earnings, number of kills, K-D ratio, number of wins, W-L ratio, survival time"
          }
          graphic={emptyStatisticGraphic}
          titleCapital={""}
        />
      ) : (
        <GameFiStatsCharts data={gameStatistics} />
      )}
      {gameFiStatistics === false ? (
        <EmptyStates
          icon={emptyFactionWarIcon}
          title={"The 'Faction Wars' table has not yet been formed"}
          content={
            "Compete with players, earn points to enter the top rankings. This section will display the top players in the game, ranked by total game points earned."
          }
          graphic={emptyFactioTableGraphic}
          titleCapital={""}
        />
      ) : (
        <GameFiFactionTable />
      )}
    </>
  );
}
