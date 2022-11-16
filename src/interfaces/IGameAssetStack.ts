import IGameAsset from "./IGameAsset";

export interface IGameAssetStack {
  game_asset: IGameAsset,
  token_ids: string[],
  selected?: number,
}