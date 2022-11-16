// GameAsset Interface
export default interface IGameAsset {
  asset_id: string,
  name: string,
  type: string,
  rarity: number,
  description: string,
  supply: number,
  image: string,
  game_id: string,
}