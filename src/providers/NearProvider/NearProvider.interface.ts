// External dependencies
import { ConnectedWalletAccount } from "near-api-js";
import { ReactNode } from "react";

// Internal dependencies
import INFT from "../../interfaces/INFT";
import { IRedeemableToken } from "../../interfaces/IRedeemableToken";

// Props interface passed to the component
export default interface INearProviderProps {
    children: ReactNode;
}

// Interface for Provider
export interface INearProviderValue {
    account?: ConnectedWalletAccount;
    isWalletConnecting: boolean;
    isWalletError: boolean;
    isWalletSignedIn: boolean;
    nearPrice: number;
    signature: string;
    loginNear: () => void;
    mintNFT: (drop_id: string, drop_phase: string, token_metadata_title: string, quantity: number, price: number,) => void;
    redeemNFT: (tokens: IRedeemableToken[], token_type: string, token_family: string) => void;
    getSupplyInfoByToken: (tokenId: string) => Promise<TokenSupplyInfo>;
    getSupplyInfoByDrop: (dropName: string) => Promise<DropSupplyInfo>;
    checkIfWhitelisted: (dropId: string, phase: string) => Promise<boolean>;
}

// Interface for token's supply_info
export interface TokenSupplyInfo {
    supply_capacity?: number;
    minted_tokens?: number;
    error?: number;
}

// Interface for drop's supply_info
export interface DropSupplyInfo {
    supply_capacity?: number;
    error?: number;
}