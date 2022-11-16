// External dependencies
import { Box, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";

// Internal dependencies
import { styles } from "./MyCollectionPage.style";
import { getNonMintedGameAssetStacksForUser, makeRedeemableToken } from "../../helper/GGHelper/GGHelper";
import { NearContext } from "../../providers/NearProvider";
import { IGameAssetStack } from "../../interfaces/IGameAssetStack";


// Temp user_id
const USER_ID = "62f3c52105f5d851a33ab0ef";

/**
 * MyCollectionPage Component
 * @path /my-collection
 */
export default function MyCollectionPage() {
    // state variables and functions
    const [gameAssets, setGameAssets] = useState<IGameAssetStack[]>();

    // initialize
    useEffect(() => {
        // get the latest drop
        loadData();
    }, []);

    // load data
    const loadData = async () => {
        let assets = await getNonMintedGameAssetStacksForUser(USER_ID);

        // Preset all selections to max
        assets.map(asset => {
            asset.selected = asset.token_ids.length
        })

        setGameAssets(assets);
    }

    const { loginNear, redeemNFT, isWalletSignedIn, account } = useContext(NearContext)!;

    const handleBtnDown = (asset: IGameAssetStack, index: number) => {
        asset.selected = (asset.selected && asset.selected > 1) ? asset.selected - 1 : 1;

        if (gameAssets) {
            gameAssets[index] = asset
            setGameAssets([...gameAssets]);
        }
    }

    const handleBtnUp = (asset: IGameAssetStack, index: number) => {
        asset.selected = (asset.selected && asset.selected < asset.token_ids.length) ? asset.selected + 1 : asset.selected;

        if (gameAssets) {
            gameAssets[index] = asset
            setGameAssets([...gameAssets]);
        }
    }

    // mint NFT
    const handleMint = async (gameToken: IGameAssetStack) => {
        if (!isWalletSignedIn) {
            await loginNear();
        }

        if (account) {
            let mintAmount = gameToken.selected || 0;
            let tokensToMint = gameToken.token_ids.slice(0, mintAmount);

            let tokens = await Promise.all(tokensToMint?.map( async token_id => {
                // request token from server
                let redeemableToken = await makeRedeemableToken(USER_ID, account.accountId, token_id, gameToken.game_asset.game_id);
                let nonce = token_id.split(":")[2];

                if (!nonce) {
                    throw new Error("Can't parse nonce");
                }
                redeemableToken.nonce = nonce

                return redeemableToken;
            }))
            // Make Near function call
            redeemNFT(tokens, gameToken.game_asset.name, gameToken.game_asset.asset_id);
        }
    }


    return (
        <>
            <Box sx={styles.mainContainer}>
                <Box sx={styles.notifyCaption}>
                    My Collection - Non-Minted
                </Box>
                <ul>
                    {gameAssets?.map((asset, index) => (
                        <li key={index}>
                           <Box sx={styles.nftContainer}>
                                <Box sx={styles.nftWrapper}>
                                    <Box
                                        sx={{
                                            ...styles.nftMedia,
                                            ...{
                                                background: `url(${asset.game_asset.image}) round`,
                                            },
                                        }}
                                    ></Box>
                                    <Box sx={styles.nftInfoBox}>
                                        <Box sx={styles.nftBadge}>{asset.game_asset.asset_id}</Box>
                                        <Box sx={styles.nftName}>{asset.game_asset.name}</Box>
                                        <Box sx={styles.nftSupplyBox}>
                                            <Box sx={styles.nftProgressBar}>
                                                <Box sx={styles.nftProgressFill}></Box>
                                            </Box>
                                        </Box>
                                        <Box sx={styles.nftQuantityBox}>
                                            <Box sx={styles.nftQuantityInfo}>&nbsp;Qt: {asset.selected}</Box>
                                            <Box sx={styles.nftQuantityButton}>
                                                <Button
                                                    style={styles.nftBtnDown}
                                                    onClick={() => handleBtnDown(asset, index)}
                                                ></Button>
                                                <Button
                                                    style={styles.nftBtnUp}
                                                    onClick={() => handleBtnUp(asset, index)}
                                                ></Button>
                                            </Box>
                                        </Box>
                                        <Box sx={styles.nftMintBox}>
                                            <Button
                                                sx={styles.nftBtnMint}
                                                onClick={() => handleMint(asset)}
                                                disabled={false}
                                            >
                                                Mint
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </li>
                    ))}
                </ul>
                
            </Box>
        </>
    );
}
