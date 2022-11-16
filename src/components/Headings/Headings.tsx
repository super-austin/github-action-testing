import { Typography, Box } from "@mui/material";
import { styles } from "./Headings.style";

export default function Headings (
        {title, counts, lineColor}: 
        {title: string; counts: number; lineColor: string;}
    ) {
    return (
        <Box sx={styles.HeadingWrapper}>
            <Typography variant="h4" sx={styles.headingTitle}>
                <span className={`line ${lineColor}`}></span>
                {title}

                {counts
                ?
                    <Box component="span" sx={[styles.headingCounts, styles.countPurple]}>{counts}</Box>
                :
                    <></>
                }
            </Typography>
        </Box>
    )
}