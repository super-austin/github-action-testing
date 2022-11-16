// Internal Dependencies
import IGameAsset from "./IGameAsset";

// GameToken Interface
export default interface IGameToken {
  token_id: string,
  game_id: string,
  asset_data: IGameAsset,
}