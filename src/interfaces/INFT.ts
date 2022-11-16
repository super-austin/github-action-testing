import { TokenSupplyInfo } from "../providers/NearProvider/NearProvider.interface";

// NFT Interface
export default interface INFT {
    token_id: string; // id of token
    game_id: string; // id of game
    collection_name: string; // collection name
    title: string; // NFT name
    description: string; // NFT description
    media: string; // NFT media URL
    copies?: number; // number of copies of this NFT when token is minted
    rarity?: string; // rarity of NFT
    nft_type?: string; // type of token
    extra?: string; // extra information
    reference?: string; // reference
    supply_info?: TokenSupplyInfo; // token's supply info
}
