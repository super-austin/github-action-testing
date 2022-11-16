// Internal dependencies
import INFT from "./INFT";

// Drop Interface
export default interface IDrop {
  drop_id: string; // id of drop
  name: string;
  description: string;
  game_id: string;
  private: Phase;
  community: Phase;
  public: Phase;
}

interface Phase {
  block_start?: number;
  block_end?: number;
  ts_start?: number; // in seconds
  ts_end?: number; // in seconds
  tokens: TokenDrop[];
}

export interface TokenDrop {
  title: string;
  asset_data?: INFT;
  price: number;
  supply_per_phase: number;
  limit_per_account: number;
}
