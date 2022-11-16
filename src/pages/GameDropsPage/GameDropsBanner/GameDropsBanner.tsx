// External dependencies
import { 
    Box,
    Grid, 
    Link, 
    List,
    ListItem,
    Typography
} from "@mui/material";

// SVG icons
import verifiedIcon from "../../../assets/svg/gameDrops/ic-tick.svg";
import reaperGamesIc from "../../../assets/svg/gameDrops/ic-reaper.svg";
import actionTag from "../../../assets/svg/gameDrops/action-tag.svg";

// Internal dependencies
import { styles } from "../GameDropsPage.style";
import { styles as globalStyles } from "../../../components/Common/Global.style";

// JSON data
import { communitySocial } from "../../GameDetailPage/GameDetailPage.const";

export default function GameDropsHero() {
    return (
        <Box sx={styles.dropsHeroBanner}>
            <Grid container justifyContent="space-between">
                <Grid item md={4}>
                    <List component="ul" sx={styles.dropsBannerSocial}>
                        {communitySocial?.map((item, index) => {
                            return (
                            <ListItem key={index}>
                                <Link href={item.url} target="_blank">
                                    <img src={item.icon} alt="social-icon" />
                                </Link>
                            </ListItem>
                            );
                        })}
                    </List>
                </Grid>
                <Grid item md={4}>
                    <Box sx={styles.dropLabelFlex}>
                        <Typography sx={styles.dropsHeroLabel}>
                            Developer
                        </Typography>
                        <Typography sx={[styles.dropsHeroLabel, styles.verifiedLabel]}>
                            <img src={verifiedIcon} alt="tick" />
                            Verified
                        </Typography>
                    </Box>
                    <Box sx={globalStyles.marginTop20}>
                        <Typography sx={styles.dropsHeroLabel}>
                            <img src={reaperGamesIc} alt="tick" />
                            Reaper Games
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item md={4}>
                    <Box sx={styles.dropBannerWrapper}>
                        <Typography sx={styles.dropCategory}>Name of the Drop</Typography>
                        <Typography variant="h1" sx={styles.dropGameTitle}>
                            Join the New Era of Art Collection
                        </Typography>
                        <Typography sx={styles.dropBannerSubTitle}>Factions of the Mon System </Typography>
                        <Typography sx={styles.dropBannerContent}>
                            WidiLand is a P2E blockchain game that has a “new earth” style. Cook, breed, farm and cultivate to complete your daily quests. 
                        </Typography>
                        <Box sx={styles.dropBannerActionsTag}>
                            <Typography sx={styles.dropCategory}>
                                <img src={actionTag} alt="action" />
                                Action
                            </Typography>
                            <Typography sx={styles.dropCategory}>
                                <img src={actionTag} alt="action" />
                                Adventure
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}