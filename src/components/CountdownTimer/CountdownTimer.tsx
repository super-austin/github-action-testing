// External dependencies
import { Box } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";

// Internal dependencies
import { styles } from "./CountdownTimer.style";
import ICountdownTimerProps from "./CountdownTimer.interface";
import * as utils from "../../utils/date";

// calculate remaining time in milliseconds
const calculateRemainingTime = (startsAt: number) => {
    return startsAt - new Date().getTime();
};

/**
 * CountdownTimer Component
 */
export default function CountdownTimer(props: ICountdownTimerProps) {
    // props
    const { startsAt } = props;
    // state variables and functions
    const [remainingTime, setRemainingTime] = useState<number>(() =>
        calculateRemainingTime(startsAt)
    );

    useEffect(() => {
        // start timer with 1 sec period
        const timer = setInterval(() => {
            setRemainingTime(calculateRemainingTime(startsAt));
        }, 1000);

        // avoid memory leak
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Box sx={styles.dateCountdownContainer}>
                <Box sx={styles.dateCountdownWrapper}>
                    <Box sx={styles.dateDisplay}>
                        <Box sx={styles.dateGroup as CSSProperties}>
                            <Box sx={styles.dateNumber}>
                                {utils.getDays(remainingTime)}
                            </Box>
                            <Box sx={styles.dateUnit}>DAYS</Box>
                        </Box>
                        <Box sx={styles.liSymbol as CSSProperties}>
                            <Box sx={styles.dateNumber}>&nbsp;:&nbsp;</Box>
                        </Box>
                        <Box sx={styles.dateGroup as CSSProperties}>
                            <Box sx={styles.dateNumber}>
                                {utils.getHours(remainingTime)}
                            </Box>
                            <Box sx={styles.dateUnit}>HOURS</Box>
                        </Box>
                        <Box sx={styles.liSymbol as CSSProperties}>
                            <Box sx={styles.dateNumber}>&nbsp;:&nbsp;</Box>
                        </Box>
                        <Box sx={styles.dateGroup as CSSProperties}>
                            <Box sx={styles.dateNumber}>
                                {utils.getMinutes(remainingTime)}
                            </Box>
                            <Box sx={styles.dateUnit}>MIN</Box>
                        </Box>
                        <Box sx={styles.liSymbol as CSSProperties}>
                            <Box sx={styles.dateNumber}>&nbsp;:&nbsp;</Box>
                        </Box>
                        <Box sx={styles.dateGroup as CSSProperties}>
                            <Box sx={styles.dateNumber}>
                                {utils.getSeconds(remainingTime)}
                            </Box>
                            <Box sx={styles.dateUnit}>SEC</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.dropDateContainer}>
                {utils.getLocalString(startsAt)}
            </Box>
        </>
    );
}
