// External dependencies
import { Box, Button, Card, Grid, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// SVG icons
import newsCover from "../../../assets/img/game-detail/news-cover.png";
import icRedirect from "../../../assets/svg/gameDetail/ic-redirect.svg";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles } from "../GameDetailPage.style";
import Headings from "../../../components/Headings";
import { newsList } from "../GameDetailPage.const";


export default function GamenautNews () {
    return (
        <Box component="section" sx={globalStyles.customSectionSpacing}>
            <Card sx={[cardStyles.customCardUi, styles.newsGameWrapper]}>
                <Grid 
                    container
                    direction="row"
                    spacing={4}
                >
                    <Grid item md={5}>
                        <Headings title={"News"} counts={0} lineColor={"pink"} />
                        <List component="ul" sx={styles.newsList}>
                            {
                                newsList?.map((item, index) => {
                                    return (
                                        <ListItem key={index}>
                                            <Box>
                                                <Typography sx={styles.newsTitle}>{item.title}</Typography>
                                                <Box sx={styles.newsActions}>
                                                    <Typography>
                                                        <img src={item.iconView} alt="icon" />
                                                        {item.views}
                                                    </Typography>
                                                    <Typography>
                                                        <img src={item.iconTime} alt="icon" />
                                                        {item.time}
                                                    </Typography>
                                                    <Typography>{item.date}</Typography>
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Link to={item.url}>
                                                    <img src={item.iconRedirect} alt="redirect" />
                                                </Link>
                                            </Box>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Grid>
                    <Grid item md={3}>
                        <Card sx={[cardStyles.customCardUi, cardStyles.cardPlain, styles.newsCover]}>
                            <img src={newsCover} alt="news" />
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Box sx={styles.newsContent}>
                            <Typography variant="h2" sx={styles.newsMainTitle}>
                                Released New Call of Duty: Modern Warfare 2 Trailer
                            </Typography>
                            <Typography sx={styles.newsDetailText}>
                                WidiLand is a P2E blockchain game that has a “new earth” style. Cook, breed, farm and cultivate to complete your daily quests. Will you be a hard-working citizen?
                            </Typography>
                            <Box sx={styles.newsActionCard}>
                                <Typography sx={styles.newsDate}>
                                    3 Sep, 2022
                                </Typography>
                                <Button sx={globalStyles.btnPrimaryLink}>
                                    Continue Reading
                                    <img src={icRedirect} className="icon-redirect btn-icon" alt="redirect" />
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}