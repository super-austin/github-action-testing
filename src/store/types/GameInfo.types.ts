export interface GameInfoState {
  leaderboard: LeaderBoardItem[];
  leaderboardSize: number;
  isLoading: boolean;
  isError: boolean;
  gameStats: GameStats;
  collectible: {
    minted: CollectibleItem[];
    notMinted: CollectibleItem[];
  };
}

export interface LeaderBoardItem {
  rank?: number;
  player?: string;
  time?: number;
  totalGP?: number;
}

export interface LeaderBoardItemResponse {
  id: string;
  kills: number;
  percentile: number;
  rank: number;
  role: string;
  time_alive: number;
  top1: number;
  top3: number;
  top10: number;
  username: string;
}

export interface LeaderBoardRequest {
  pageIndex?: number;
  pageSize?: number;
  gameID?: string;
}

export interface GameStats {
  numberOfLivePlayers: GameStatsItem;
  numberOfPlayers: GameStatsItem;
  NFTStats: GameStatsItem;
  serverStatus: string;
  totalRewards: TotalRewardsItem;
  gameAssets: number;
  totalRewardsGivenOut: GameStatsItem;
}

export interface GameStatsItem {
  value: number;
  percentage: number;
}

export interface TotalRewardsItem {
  near: number;
  dollar: number;
}

export interface CollectibleItem {
  imageURL: string;
  icon: string;
}
