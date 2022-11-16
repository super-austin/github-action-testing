// External dependencies
import { 
    Box,
    Card,
    Grid, 
    Typography 
} from "@mui/material";
import { useEffect, useState } from "react";

// SVG icons
import icMintCoin from "../../../assets/svg/gameDrops/ic-mint-coin.svg";
import icVolume from "../../../assets/svg/gameDrops/ic-volume.svg";

// Internal dependencies
import { styles } from "../GameDropsPage.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { store, useAppDispatch } from "../../../store/store";
import IDrop from "../../../interfaces/IDrop";
import * as utils from "../../../utils/date";
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

export default function DropsTabPublic() {
    const dispatch = useAppDispatch();

    // States for counter cards
    const [ state, setState ] = useState(STATE.OFF);
    const [ drop, setDrop ] = useState<IDrop>();

    const [remainingTime, setRemainingTime] = useState(0);

    useEffect(() => {
        let stateDrop = store.getState().drop;
        setDrop(stateDrop.currentDrop);
        let state = updateState(stateDrop.currentDrop);
        setStartTime(stateDrop.currentDrop, state);

        dispatch(updatePhase(Phase.PUBLIC));

        store.subscribe(() => {
            let stateDrop = store.getState().drop;
            setDrop(stateDrop.currentDrop);

            console.log(stateDrop.currentDrop)

            let state = updateState(stateDrop.currentDrop);
            setStartTime(stateDrop.currentDrop, state);
        });
    }, []);

    const setStartTime = (dropState: IDrop, state: STATE) => {

        if (dropState.public && dropState.public.ts_start && dropState.public.ts_end) {
            // start timer with 1 sec period
            const timer = setInterval(() => {

                if (state == STATE.LIVE) {
                    setRemainingTime(calculateRemainingTime(dropState.public.ts_end! * 1000));
                } else {
                    setRemainingTime(calculateRemainingTime(dropState.public.ts_start! * 1000));
                }

            }, 1000);

            // avoid memory leak
            return () => clearInterval(timer);


        }
    }

    const updateState = (dropState: IDrop) => {
        if (dropState.public.ts_start && dropState.public.ts_start * 1000 < (new Date()).getTime()) {
            if (dropState.public.ts_end && dropState.public.ts_end * 1000 > (new Date()).getTime()) {
                setState(STATE.LIVE);
                return STATE.LIVE;
            } else {
                setState(STATE.POST);
                return STATE.POST;
            }
        } else if (dropState.public) {
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
                            <Typography sx={styles.dropCountLabel}>Public drop stating in</Typography>
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
                        <Grid item sm={12}>
                        { drop && drop.public.ts_start &&
                        <Typography sx={styles.dropCountEventDate}>{(new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'short'})).format(new Date(drop.public.ts_start * 1000))}</Typography>
                        }
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
                        <Grid item sm={12}>
                        { drop && drop.public.ts_end &&
                        <Typography sx={styles.dropCountEventDate}>{(new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'short'})).format(new Date(drop.public.ts_end * 1000))}</Typography>
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
                            { drop && drop.public.ts_end &&
                            <Typography sx={styles.dropCountEventDate}>{(new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'short'})).format(new Date(drop.public.ts_end * 1000))}</Typography>
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