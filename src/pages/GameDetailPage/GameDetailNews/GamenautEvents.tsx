// External dependencies
import { Box, Grid, List, ListItem, Typography, Link } from "@mui/material";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles } from "../GameDetailPage.style";
import { eventListing } from "../GameDetailPage.const";
import Headings from "../../../components/Headings";


export default function GamenautEvents () {
    return (
        <Box sx={globalStyles.customSectionSpacing}>
            <Headings title={"Events"} counts={12} lineColor={"purple"} />
            <Grid
                container
                direction="row"
                sx={globalStyles.marginBottom36}
            >
                <Grid item md={2}>
                    <Typography variant="h6" sx={[cardStyles.customCardUi, styles.eventDateTag]}>
                        03 Sep, Today
                    </Typography>
                </Grid>
                <Grid item md={10}>
                    <List sx={styles.customEventListing}>
                        {
                            eventListing.slice(0, 3).map((item, index) => {
                                return (
                                    <ListItem sx={cardStyles.customCardUi} key={index}>
                                        <Box sx={styles.customEventLogo}>
                                            <img src={item.thumb} alt="event" />
                                        </Box>
                                        <Box>
                                            <Link href="/game-details" sx={styles.customEventTitle}>{item.title}</Link>
                                            <Box sx={styles.eventStats}>
                                                <Typography><span className="light">{item.stats1}</span></Typography>
                                                <Typography>
                                                    <img src={item.stats2Icon} alt="event" className="event-logo" />
                                                    <span className="light">
                                                        {item.stats2}
                                                    </span>
                                                </Typography>
                                                <Typography>
                                                    <img src={item.stats3Icon} alt="event" />
                                                    <span className="light">
                                                        {item.stats3}
                                                    </span>
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={styles.eventActions}>
                                            <Box component="span" sx={styles.eventTeamTag}>
                                                {item.teamTag1}
                                                <img src={item.teamTag1Icon} alt="team" />
                                            </Box>
                                            <Typography>{item.vsText}</Typography>
                                            <Box component="span" sx={styles.eventTeamTag}>
                                                {item.teamTag2}
                                                <img src={item.teamTag2Icon} alt="team" />
                                            </Box>
                                        </Box>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
            >
                <Grid item md={2}>
                    <Typography variant="h6" sx={[cardStyles.customCardUi, styles.eventDateTag]}>
                        04 Sep, Monday
                    </Typography>
                </Grid>
                <Grid item md={10}>
                    <List sx={styles.customEventListing}>
                        {
                            eventListing.slice(0, 2).map((item, index) => {
                                return (
                                    <ListItem sx={cardStyles.customCardUi} key={index}>
                                        <Box sx={styles.customEventLogo}>
                                            <img src={item.thumb} alt="event" className="img-fluid" />
                                        </Box>
                                        <Box>
                                            <Link href="/game-details" sx={styles.customEventTitle}>{item.title}</Link>
                                            <Box sx={styles.eventStats}>
                                                <Typography><span className="light">{item.stats1}</span></Typography>
                                                <Typography>
                                                    <img src={item.stats2Icon} alt="event" className="event-logo" />
                                                    <span className="light">
                                                        {item.stats2}
                                                    </span>
                                                </Typography>
                                                <Typography>
                                                    <img src={item.stats3Icon} alt="event" />
                                                    <span className="light">
                                                        {item.stats3}
                                                    </span>
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={styles.eventActions}>
                                            <Box component="span" sx={styles.eventTeamTag}>
                                                {item.teamTag1}
                                                <img src={item.teamTag1Icon} alt="team" />
                                            </Box>
                                            <Typography>{item.vsText}</Typography>
                                            <Box component="span" sx={styles.eventTeamTag}>
                                                {item.teamTag2}
                                                <img src={item.teamTag2Icon} alt="team" />
                                            </Box>
                                        </Box>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
}