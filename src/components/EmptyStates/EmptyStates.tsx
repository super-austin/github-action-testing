// External dependencies
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

// Internal dependencies
import { styles } from "./EmptyStates.style";
import { styles as cardStyles } from "../Common/GameDetailCard.style";

export default function EmptyStates(
    { icon, title, titleCapital, content, graphic }:
    { icon: string; title: string; content: string; graphic: string; titleCapital: string;}
    ) {
    return (
        <>
            <Card sx={[cardStyles.customCardUi, styles.emptyStatesCard]}>
                <Box sx={[styles.emptyStatesCardInner]}>
                    <Grid container justifyContent="center">
                        <Grid item sm={4}>
                            {icon
                            ?
                            <Box sx={[styles.emptyStatesIcon]}>
                                <img src={icon} alt="state-icon" />
                            </Box>
                            :
                                <></>
                            }
                            <Typography sx={styles.emptyStatesTitle}>
                                {title}
                            </Typography>
                            {titleCapital
                            ?
                                <Typography sx={styles.emptyStateTitleCapital}>
                                    {titleCapital}
                                </Typography>
                            :
                                <></>
                            }
                            {content
                            ?
                                <Typography sx={styles.emptyStatesContent}>
                                    {content}
                                </Typography>
                            :
                                <></>
                            }
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item sm={8} sx={styles.emptyStatesGraphic}>
                            {graphic
                            ?
                                <img src={graphic} alt="state-icon" />
                            :
                                <></>
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </>
    )
}