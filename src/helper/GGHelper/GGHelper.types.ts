import INFT from "../../interfaces/INFT";
import { IRedeemableToken } from "../../interfaces/IRedeemableToken";

export interface GetNonMintedGameAssetsForUserRequest {
  game_id?: string;
  user_id: string;
}

export interface GetNonMintedGameAssetsForUserResponse {
  game_assets: GameToken[];
}

export interface GetNonMintedGameAssetStacksForUserRequest {
  game_id?: string;
  user_id: string;
}

export interface GetNonMintedGameAssetStacksForUserResponse {
  game_assets: GameAssetStack[];
}

interface GameToken {
  token_id: string;
  game_id: string;
  asset_data: GameAsset;
}

interface GameAsset {
  asset_id: string;
  name: string;
  type: string;
  rarity: number;
  description: string;
  supply: number;
  image: string;
  game_id: string;
}

interface GameAssetStack {
  game_asset: GameAsset;
  token_ids: string[];
}

export interface MakeRedeemableTokenRequest {
  user_id: string;
  near_wallet_id: string;
  game_id: string;
  token_id: string;
}

export interface MakeRedeemableTokenResponse {
  redeemable_token: IRedeemableToken;
}

export interface GetLatestDropResponse {
  drop: Drop;
}

interface Drop {
  _id: string;
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

interface TokenDrop {
  title: string;
  asset_data?: INFT;
  price: number;
  supply_per_phase: number;
  limit_per_account: number;
}

export interface GetWhitelistsForDropRequest {
  drop_id: string;
}

export interface GetWhitelistForDropResponse {
  whitelists: Whitelist[];
}

interface Whitelist {
  group_name: string;
  price: number;
  max_purchase_per_user: number;
  multiple_purchase: boolean;
  starts_at: number;
  ends_at: number;
  whitelist_start_block: number;
  whitelist_end_block: number;
  whitelist_start_at: Date;
  whitelist_end_at: Date;
  drop_id: string;
}

export interface GetTokenMetadataByIdReqest {
  token_id: string;
}

export interface GetTokenMetadataByIdResponse {
  token: TokenMetadata;
}

interface TokenMetadata {
  token_id: string;
  title: string;
  description: string;
  media: string;
  copies: number;
  rarity: string;
  nft_type: string;
  collection_name: string;
  extra: string;
  reference: string;
  game_id: string;
}
