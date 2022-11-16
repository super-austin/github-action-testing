// External dependencies
import React, { useState } from "react";
import { Card, Grid, Box, Typography } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

// SVG icons
import rewardUpArrow from "../../../assets/svg/gameFi/reward-up-arrow.svg";
import emptyChallengeIcon from "../../../assets/svg/empty-states/empty-challenge-icon.svg";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles } from "../GameFiPage.style";
import Headings from "../../../components/Headings";
import { gameFiChallengeCard } from "../GameFi.const";
import EmptyStates from "../../../components/EmptyStates";

export default function GameFiChallenges () {
    // Progress states
    const [progress, setProgress] = React.useState(75);

    // Empty states
    const [ gameFiChallenges, setGameFiChallenges ] = useState(true);

    return (
        <>
            <Grid
                container
                sx={globalStyles.customSectionSpacing}
            >
                <Grid item sm={12}>
                    <Headings title="Challenges and Quests" counts={0} lineColor={"blue"} />
                </Grid>
            </Grid>

            {gameFiChallenges==false ?
                <EmptyStates 
                    icon={emptyChallengeIcon} 
                    title={"Challenges and Quests"} 
                    content={"This will display in-game challenges and quests that you must complete to unlock rewards."} 
                    graphic={""}
                    titleCapital={""}
                />
                :
                <Grid 
                    container
                    spacing={4}
                >
                    {
                        gameFiChallengeCard?.map((item, index) => {
                            return (
                                <Grid item sm={6} md={6} lg={4} key={index}>
                                    <Card sx={[cardStyles.customCardUi, styles.gameFiChallengeCard, cardStyles.cardBorder15]}>
                                        <Box sx={styles.challengeCardHeader}>
                                            <Box sx={(styles as any)[item.cardIcon]}>
                                                <img src={item.thumb} alt="challenge-icon" />
                                            </Box>
                                            <Box>
                                                <Typography>{item.desc}</Typography>
                                                <Box sx={styles.challengeStars}>
                                                    <img src={item.ratingIc} alt="star" />
                                                    <img src={item.ratingIc} alt="star" />
                                                    <img src={item.ratingIcBlank} alt="star" />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box sx={styles.challengeCardProgressHead}>
                                                <Typography sx={styles.challengeCardText}>
                                                    Progress
                                                </Typography>
                                                <Typography sx={[styles.challengeProgressValue, styles.challengeCardText]}>
                                                    {item.progress}
                                                </Typography>
                                            </Box>
                                            <LinearProgress 
                                                sx={(globalStyles as any)[item.cardProgress]}
                                                variant="determinate" 
                                                value={progress} 
                                            />
                                        </Box>
                                        <Box>
                                            <Typography sx={styles.challengeCardText}>Reward</Typography>
                                            <Box sx={styles.challengeCardRewards}>
                                                <Box sx={[cardStyles.customCardUi, styles.challengeCardRewardsBox]}>
                                                    <img src={item.rewardThumb1} alt="reward-icon" />
                                                </Box>
                                                <Box sx={[cardStyles.customCardUi, styles.challengeCardRewardsBox]}>
                                                    <img src={item.rewardThumb2} alt="reward-icon" />
                                                </Box>
                                                <Box sx={[cardStyles.customCardUi, styles.challengeCardRewardsBox]}>
                                                    <img src={item.rewardThumb3} alt="reward-icon" />
                                                </Box>
                                                <Box sx={[cardStyles.customCardUi, styles.challengeCardRewardsBox]}>
                                                    <img src={item.rewardThumb4} alt="reward-icon" />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={styles.challengeCardActions}>
                                            <Typography sx={[styles.challengeCardText, globalStyles.marginBottom0]}>
                                                Experience
                                            </Typography>
                                            <Typography sx={styles.challengeUpStats}>
                                                <img src={rewardUpArrow} alt="arrow" />
                                                26,25
                                            </Typography>
                                        </Box>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            }
        </>
    )
}