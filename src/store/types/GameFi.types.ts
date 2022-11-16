export interface GameFiState {
  gameStatistics: GameStatisticsState;
  isError: Boolean;
  isLoading: Boolean;
}

export interface GameStatisticsState {
  total_coin_collected: number;
  damage_done: number;
  deaths: number;
  boss_kills: number;
  metamon_kills: number;
  extracts: number;
  kills: number;
  time_alive: number;
}
