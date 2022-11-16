// External dependencies
import { createContext, useEffect, useState } from "react";
import {
    connect,
    keyStores,
    WalletConnection,
    ConnectedWalletAccount,
    KeyPair
} from "near-api-js";
import { parseNearAmount } from "near-api-js/lib/utils/format";
import axios from "axios";

// Internal dependencies
import INearProviderProps, {
    DropSupplyInfo,
    INearProviderValue,
    TokenSupplyInfo,
} from "./NearProvider.interface";
import { nearConfig, BASE_GAS } from "../../configs/NearConfig";
import INFT from "../../interfaces/INFT";
import { IRedeemableToken } from "../../interfaces/IRedeemableToken";

// Export near context
export const NearContext = createContext<INearProviderValue | null>(null);

/**
 * Context Provider for interacting with near wallet
 * @param {INearProviderProps} children (children components)
 * @returns ContextProvider
 */
export default function NearProvider({ children }: INearProviderProps) {
    /* state variables and functions */
    const [account, setAccount] = useState<ConnectedWalletAccount>();
    const [walletConnection, setWalletConnection] =
        useState<WalletConnection>();
    const [isWalletError, setWalletError] = useState<boolean>(false);
    const [isWalletConnecting, setWalletConnecting] = useState<boolean>(false);
    const [isWalletSignedIn, setWalletSignedIn] = useState<boolean>(false);
    const [nearPrice, setNearPrice] = useState<number>(0);
    const [signature, setSignature] = useState("");

    useEffect(() => {
        // initialize wallet connection
        connectNear();

        // get near price
        axios
            .get("https://helper.mainnet.near.org/fiat")
            .then((res) => {
                setNearPrice(res.data.near.usd);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    // connect to near wallet
    const connectNear = async () => {
        try {
            const keyStore = new keyStores.BrowserLocalStorageKeyStore();
            const near = await connect({ ...nearConfig, keyStore });
            const walletConnection = new WalletConnection(near, null);
            setWalletConnection(walletConnection);
            if (walletConnection.isSignedIn()) {
                const account = walletConnection.account();
                setAccount(account);
                setWalletSignedIn(true);
                // generate signature from keyPair
                const keyPair = await keyStore.getKey(nearConfig.networkId, account.accountId);
                const message = Buffer.from('signature');
                const signed = Buffer.from(keyPair.sign(message).signature).toString('hex');
                setSignature(signed);
            }
        } catch (e) {
            console.log(e);
            setWalletError(true);
        }
        setWalletConnecting(false);
    };

    // login with near wallet
    const loginNear = async () => {
        const PENDING_ACCESS_KEY_PREFIX = "pending_key";
        const currentUrl = new URL(window.location.href);
        const newUrl = new URL(walletConnection?._walletBaseUrl + "/login/");
        newUrl.searchParams.set("success_url", currentUrl.href);
        newUrl.searchParams.set("failure_url", currentUrl.href);

        const accessKey = KeyPair.fromRandom("ed25519");
        newUrl.searchParams.set("public_key", accessKey.getPublicKey().toString());
        newUrl.searchParams.set("contract_id", nearConfig.nftContractName); // any contract is fine really

        await walletConnection?._keyStore.setKey(
            walletConnection?._networkId,
            PENDING_ACCESS_KEY_PREFIX + accessKey.getPublicKey(),
            accessKey
        );

        window.location.assign(newUrl.toString());
    };

    /**
     * mint amount of NFTs in DropsContract
     * @param tokenId NFT tokenId
     * @param dropName Drop name
     * @param amount amount of NFTs to mint
     * @param whitelistName Whitelist name
     */
    const mintNFT = async (
        drop_name: string,
        drop_phase: string,
        token_metadata_title: string,
        quantity: number,
        price: number,
    ) => {
        if (!account) {
            throw new Error("Account must be defined");
        }
        try {
            const res = await account.functionCall({
                contractId: nearConfig.dropContractName,
                methodName: "purchase",
                args: {
                    drop_id: drop_name,
                    drop_phase,
                    token_metadata_title,
                    quantity,
                },
                gas: 300 * BASE_GAS,
                attachedDeposit: parseNearAmount(
                    String(price * quantity + 0.0001)
                ),
            });

            console.log({res});
        } catch (err) {
            console.error(err);
        }
    };

    /**
     * redeem NFT - direct call to nft contract
     * @param signature redeemable token generated by the server
     * @param tokenFamity token family
     * @param token minable token
     */
     const redeemNFT = async (
        tokens: IRedeemableToken[],
        token_type: string,
        token_family: string,
    ) => {
        if (!account) {
            throw new Error("Account must be defined");
        }
        try {
            const res = await account.functionCall({
                contractId: nearConfig.nftContractName,
                methodName: "redeem",
                args: {
                    redeemable_tokens: tokens,
                    token_type,
                    token_family,
                    receiver_id: account.accountId
                },
                gas: 300 * BASE_GAS,
                attachedDeposit: parseNearAmount("0.125"),
            });
            console.log({res});
        } catch (err) {
            console.error(err);
        }
    };

    /**
     * pull token's supply information from the dropscontract
     * @param tokenId NFT tokenId
     * @returns { supply_capacity, minted_tokens }
     */
    const getSupplyInfoByToken = async (
        tokenId: string
    ): Promise<TokenSupplyInfo> => {
        if (!account) {
            throw new Error("Account must be defined");
        }
        const res: TokenSupplyInfo = await account.viewFunction(
            nearConfig.nftContractName,
            "supply_get_by_token",
            {
                token_type: tokenId,
            }
        );
        if (res.error) {
            throw new Error("Token does not exist");
        }
        return res;
    };

    const getSupplyInfoByDrop = async (
        dropName: string
    ): Promise<DropSupplyInfo> => {
        if (!account) {
            throw new Error("Account must be defined");
        }
        const res: DropSupplyInfo = await account.viewFunction(
            nearConfig.nftContractName,
            "supply_get_by_drop",
            {
                collection_name: dropName,
            }
        );
        if (res.error) {
            throw new Error("Drop does not exist");
        }
        return res;
    };

    const checkIfWhitelisted = async (
        dropId: string,
        phase: string,
    ): Promise<boolean> => {

        if (!account) {
            throw new Error ("Account must be connected");
        }
        const response = await account.viewFunction(
            nearConfig.dropContractName,
            "mgt_accounts",
            {
                drop_id: dropId,
                drop_phase: phase,
            }
        );
        
        if (response) {
            let accountId = account.accountId;
            return response.indexOf(accountId) > -1 ? true : false;
        }

        throw new Error("Could not get whitelist");
    }

    return (
        <NearContext.Provider
            value={{
                account,
                isWalletConnecting,
                isWalletError,
                isWalletSignedIn,
                nearPrice,
                signature,
                loginNear,
                mintNFT,
                redeemNFT,
                getSupplyInfoByToken,
                getSupplyInfoByDrop,
                checkIfWhitelisted,
            }}
        >
            {children}
        </NearContext.Provider>
    );
}