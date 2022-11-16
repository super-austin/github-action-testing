// External dependencies
import { 
    Box,
    Button,
    Card,
    Grid, 
    Link, 
    Typography 
} from "@mui/material";
import { useContext, useEffect, useState } from "react";

// SVG icons
import icHolder from "../../../assets/svg/gameDrops/ic-holder.svg";
import icWhitelistCross from "../../../assets/svg/gameDrops/ic-whitelist-cross.svg";
import icWhitelistSuccess from "../../../assets/svg/gameDrops/ic-whitelist-success.svg";
import icMintCoin from "../../../assets/svg/gameDrops/ic-mint-coin.svg";
import icVolume from "../../../assets/svg/gameDrops/ic-volume.svg";

// Internal dependencies
import { styles } from "../GameDropsPage.style";
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { store, useAppDispatch } from "../../../store/store";
import IDrop from "../../../interfaces/IDrop";
import * as utils from "../../../utils/date";
import { NearContext } from "../../../providers/NearProvider";
import { updatePhase } from "../../../store/slices/Drop/thunks/currentDrop";
import { Phase } from "../../../store/types/Drop.types";

enum STATE {
    OFF,
    PRE,
    LIVE,
    POST,
}

// calculate remaining time in milliseconds
const calculateRemainingTime = (startsAt: number) => {
    return startsAt - new Date().getTime();
};

export default function DropsTabWhitelist() {
    const dispatch = useAppDispatch();

    // States for counter cards
    const [ state, setState ] = useState(STATE.OFF);
    const [ drop, setDrop ] = useState<IDrop>();

    const [ whiteListOnList, setWhiteListOnList ] = useState(false);

    const [remainingTime, setRemainingTime] = useState(0);

    useEffect(() => {
        let stateDrop = store.getState().drop;
        setDrop(stateDrop.currentDrop);
        let state = updateState(stateDrop.currentDrop);
        setStartTime(stateDrop.currentDrop, state);
        checkWhitelist(stateDrop.currentDrop);

        dispatch(updatePhase(Phase.COMMUNITY));

        store.subscribe(() => {
            let stateDrop = store.getState().drop;
            setDrop(stateDrop.currentDrop);

            console.log(stateDrop.currentDrop)

            let state = updateState(stateDrop.currentDrop);
            setStartTime(stateDrop.currentDrop, state);

            checkWhitelist(stateDrop.currentDrop);
        });
    }, []);

    const { account, checkIfWhitelisted } = useContext(NearContext)!;

    const checkWhitelist = async (dropState: IDrop) => {

        if (account && dropState && dropState.name) {
            let isWhitelisted = await checkIfWhitelisted(dropState.name, 'Community');

            console.log({isWhitelisted});

            setWhiteListOnList(isWhitelisted);
        }
    };

    const setStartTime = (dropState: IDrop, state: STATE) => {

        if (dropState.community && dropState.community.ts_start && dropState.community.ts_end) {
            // start timer with 1 sec period
            const timer = setInterval(() => {

                if (state == STATE.LIVE) {
                    setRemainingTime(calculateRemainingTime(dropState.community.ts_end! * 1000));
                } else {
                    setRemainingTime(calculateRemainingTime(dropState.community.ts_start! * 1000));
                }

            }, 1000);

            // avoid memory leak
            return () => clearInterval(timer);


        }
    }

    const updateState = (dropState: IDrop) => {
        if (dropState.community.ts_start && dropState.community.ts_start * 1000 < (new Date()).getTime()) {
            if (dropState.community.ts_end && dropState.community.ts_end * 1000 > (new Date()).getTime()) {
                setState(STATE.LIVE);
                return STATE.LIVE;
            } else {
                setState(STATE.POST);
                return STATE.POST;
            }
        } else if (dropState.community) {
            setState(STATE.PRE);
            return STATE.PRE;
        }

        return STATE.OFF;
    }



    return (
        <>
            {state == STATE.PRE &&
                <>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Typography sx={styles.dropCountLabel}>Whitelist drops stating in</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <Card sx={[cardStyles.customCardUi, styles.dropStatesCard, styles.dropCountdownCard]}>
                                <Box sx={[cardStyles.customCardInner, styles.dropStatesCardInner]}>
                                    <Box sx={styles.dropCountdownList}>
                                        <Box sx={styles.dropCountContent}>
                                            <Typography sx={styles.dropCountDownValue}>{utils.getDays(remainingTime)} :</Typography>
                                            <Typography sx={styles.dropCountDownLabel}>Days</Typography>
                                        </Box>
                                        <Box sx={styles.dropCountContent}>
                                            <Typography sx={styles.dropCountDownValue}>{utils.getHours(remainingTime)} :</Typography>
                                            <Typography sx={styles.dropCountDownLabel}>Hours</Typography>
                                        </Box>
                                        <Box sx={styles.dropCountContent}>
                                            <Typography sx={styles.dropCountDownValue}>{utils.getMinutes(remainingTime)} :</Typography>
                                            <Typography sx={styles.dropCountDownLabel}>Min</Typography>
                                        </Box>
                                        <Box sx={styles.dropCountContent}>
                                            <Typography sx={styles.dropCountDownValue}>{utils.getSeconds(remainingTime)}</Typography>
                                            <Typography sx={styles.dropCountDownLabel}>Sec</Typography>
                                        </Box>  
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Card sx={[cardStyles.customCardUi, styles.dropStatesCard]}>
                                <Box sx={[cardStyles.customCardInner, styles.dropStatesCardInner]}>
                                    <Box sx={[styles.dropStatesLabelGroup, styles.dropStatesHeader]}>
                                        <img src={icHolder} alt="holder" />
                                        <Typography sx={styles.dropStatesLabel}>
                                            Holders Whitelist
                                        </Typography>
                                    </Box>
                                    <Box sx={styles.dropStatesLabelGroup}>
                                        <Typography sx={styles.dropStatesLabelBold}>200</Typography>
                                        <Typography sx={styles.dropStatesLabelDark}>members</Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Card sx={[cardStyles.customCardUi, styles.dropStatesCard]}>
                                {whiteListOnList === false ?
                                    <Box sx={[cardStyles.customCardInner, styles.dropStatesCardInner]}>
                                        <Box sx={[styles.dropStatesLabelGroup, styles.dropStatesHeader]}>
                                            <img src={icWhitelistCross} alt="holder" />
                                            <Typography sx={styles.dropStatesLabel}>
                                                Whitelist
                                            </Typography>
                                        </Box>
                                        <Box sx={styles.dropStatesLabelGroup}>
                                            <Typography sx={styles.dropStatesLabel}>You are not on the list</Typography>
                                        </Box>
                                    </Box>
                                    :
                                    <Box sx={[cardStyles.customCardInner, styles.dropStatesCardInner]}>
                                        <Box sx={[styles.dropStatesLabelGroup, styles.dropStatesHeader]}>
                                            <img src={icWhitelistSuccess} alt="holder" />
                                            <Typography sx={styles.dropStatesLabel}>
                                                Whitelist
                                            </Typography>
                                        </Box>
                                        <Box sx={styles.dropStatesLabelGroup}>
                                            <Typography sx={styles.dropStatesLabel}>You are on the list</Typography>
                                        </Box>
                                    </Box>
                                }
                            </Card>
                        </Grid>
                        <Grid item sm={12}>
                            { drop && drop.community.ts_start &&
                            <Typography sx={styles.dropCountEventDate}>{(new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'short'})).format(new Date(drop.community.ts_start * 1000))}</Typography>
                            }
                            <Box sx={styles.earnWhitelistRow}>
                                <Box sx={[globalStyles.btnSecondary, styles.earnWhitelistLabel]}>
                                    <Box sx={globalStyles.btnTextSecondary}>
                                        Learn how to earn a Whitelist spot
                                    </Box>
                                    <Link href="/"> here</Link>
                                </Box>
                                {whiteListOnList === false ?
                                    <Button sx={globalStyles.btnPrimary} color="primary">
                                        <Box sx={globalStyles.btnTextPrimary}>Join Whitelist</Box>
                                    </Button>
                                    :
                                    <Button sx={[globalStyles.btnSecondary, globalStyles.btnDisabled]} color="primary">
                                        <Box sx={globalStyles.btnTextDisabled}>Join Whitelist</Box>
                                    </Button>
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </>
            }
            {state == STATE.LIVE &&
                <>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Typography sx={styles.dropCountLabel}>Time for drop to end</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item md={5}>
                            <Card sx={[cardStyles.customCardUi, styles.dropStatesCard, styles.dropCountdownCard]}>
                                <Box sx={[cardStyles.customCardInner, styles.dropStatesCardInner]}>
                                    <Box sx={styles.dropCountdownList}>
                                         <Box sx={styles.dropCountContent}>
                                            <Typography sx={styles.dropCountDownValue}>{utils.getDays(remainingTime)} :</Typography>
                                            <Typography sx={styles.dropCountDownLabel}>Days</Typography>
                                        </Box>
                                        <Box sx={styles.dropCountContent}>
                                            <Typography sx={styles.dropCountDownValue}>{utils.getHours(remainingTime)} :</Typography>
                                            <Typography sx={styles.dropCountDownLabel}>Hours</Typography>
                                        </Box>
                                        <Box sx={styles.dropCountContent}>
                                            <Typography sx={styles.dropCountDownValue}>{utils.getMinutes(remainingTime)} :</Typography>
                                            <Typography sx={styles.dropCountDownLabel}>Min</Typography>
                                        </Box>
                                        <Box sx={styles.dropCountContent}>
                                            <Typography sx={styles.dropCountDownValue}>{utils.getSeconds(remainingTime)}</Typography>
                                            <Typography sx={styles.dropCountDownLabel}>Sec</Typography>
                                        </Box>  
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Card sx={[cardStyles.customCardUi, styles.dropStatesCard]}>
                                <Box sx={[cardStyles.customCardInner, styles.dropStatesCardInner]}>
                                    <Box sx={[styles.dropStatesLabelGroup, styles.dropStatesHeader]}>
                                        <img src={icHolder} alt="holder" />
                                        <Typography sx={styles.dropStatesLabel}>
                                            Whitelist
                                        </Typography>
                                    </Box>
                                    <Box sx={styles.dropStatesLabelGroup}>
                                        <Typography sx={styles.dropStatesLabelBold}>200</Typography>
                                        <Typography sx={styles.dropStatesLabelDark}>members</Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item md={2}>
                            <Card sx={[cardStyles.customCardUi, styles.dropStatesCard]}>
                                <Box sx={[cardStyles.customCardInner, styles.dropStatesCardInner]}>
                                    <Box sx={[styles.dropStatesLabelGroup, styles.dropStatesHeader]}>
                                        <Typography sx={styles.dropStatesLabel}>Solds NFTs</Typography>
                                    </Box>
                                    <Box sx={styles.dropStatesLabelGroup}>
                                        <Typography sx={styles.dropStatesLabelDark}>No</Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item md={2}>
                            <Card sx={[cardStyles.customCardUi, styles.dropStatesCard]}>
                                <Box sx={[cardStyles.customCardInner, styles.dropStatesCardInner]}>
                                    <Box sx={[styles.dropStatesLabelGroup, styles.dropStatesHeader]}>
                                        <Typography sx={styles.dropStatesLabel}>Total Sale</Typography>
                                    </Box>
                                    <Box sx={styles.dropStatesLabelGroup}>
                                        <Typography sx={styles.dropStatesLabelDark}>10K</Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item sm={12}>
                        { drop && drop.community.ts_end &&
                        <Typography sx={styles.dropCountEventDate}>{(new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'short'})).format(new Date(drop.community.ts_end * 1000))}</Typography>
                        }
                        </Grid>
                    </Grid>
                </>
            }
            {state == STATE.POST &&
                <>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <Typography sx={styles.dropCountLabel}>Time drop ended</Typography>
                            { drop && drop.community.ts_end &&
                            <Typography sx={styles.dropCountEventDate}>{(new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'short'})).format(new Date(drop.community.ts_end * 1000))}</Typography>
                            }
                        </Grid>
                        <Grid item md={4}>
                            <Card sx={[cardStyles.customCardUi, styles.dropStatesCard, styles.dropStatesPostCard]}>
                                <Box sx={[cardStyles.customCardInner, styles.dropStatesCardInner]}>
                                    <Box sx={[styles.dropStatesLabelGroup, styles.dropStatesHeader]}>
                                        <img src={icMintCoin} alt="holder" />
                                        <Typography sx={styles.dropStatesLabel}>
                                            Total noof mint
                                        </Typography>
                                    </Box>
                                    <Box sx={styles.dropStatesPostValue}>
                                        <Typography sx={styles.dropPostText}>1.8ETH</Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card sx={[cardStyles.customCardUi, styles.dropStatesCard, styles.dropStatesPostCard]}>
                                <Box sx={[cardStyles.customCardInner, styles.dropStatesCardInner]}>
                                    <Box sx={[styles.dropStatesLabelGroup, styles.dropStatesHeader]}>
                                        <img src={icVolume} alt="holder" />
                                        <Typography sx={styles.dropStatesLabel}>
                                            Total Volume
                                        </Typography>
                                    </Box>
                                    <Box sx={styles.dropStatesPostValue}>
                                        <Typography sx={styles.dropPostText}>1.8ETH</Typography>
                                        <Typography sx={styles.dropStatesLabel}>$11,895.66</Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </>
            }
        </>
    )
}