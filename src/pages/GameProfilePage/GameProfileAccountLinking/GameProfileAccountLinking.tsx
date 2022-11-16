// External dependencies
import {
	Box,
	Typography,
    Grid,
    Card,
    Button,
} from "@mui/material";

// SVG icons
import discordIcon from "../../../assets/svg/profile/ic-discord-white.svg";
import nearIcon from "../../../assets/svg/profile/ic-near-white.svg";
import menuIc from "../../../assets/svg/profile/ic-menu-primary.svg";
import icTrend from "../../../assets/svg/profile/ic-trend-up.svg";
import etheriumIc from "../../../assets/svg/profile/ic-etherium.svg";
import icImport from "../../../assets/svg/profile/ic-import-blue.svg";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles } from "../GameProfile.style";
import Headings from "../../../components/Headings";

// JSON data

export default function GameProfileAccountLinking() {
    return (
        <Box sx={[globalStyles.marginTop30, styles.settingAccountLinkingWrapper]}>
            <Headings title={"Account Linking"} counts={0} lineColor={"pink"} />
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <Card sx={[cardStyles.customCardUi, cardStyles.settingCard]}>
                        <Box sx={[cardStyles.customCardInner, cardStyles.settingCardInner]}>
                            <Box sx={cardStyles.settingCardHeader}>
                                <Box sx={cardStyles.cardNotificationThumb}>
                                    <img src={discordIcon} alt="notify" />
                                </Box>
                                <Box sx={cardStyles.cardNotificationActions}>
                                    <Button sx={globalStyles.btnSecondary} color="secondary">
                                        <Box sx={globalStyles.btnTextSecondary}>Connect</Box>
                                    </Button>
                                </Box>
                            </Box> 
                            <Typography sx={cardStyles.settingCardSubTitle}>Discord</Typography>
                            <Typography sx={cardStyles.settingCardContent}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card sx={[cardStyles.customCardUi, styles.settingGamenautCard]}>
                        <Box sx={styles.settingGamenautCardHeader}>
                            <Box sx={styles.settingGamenautHeadIc}>
                                <img src={nearIcon} alt="near" />
                                Near
                            </Box>
                            <Box sx={cardStyles.cardNotificationActions}>
                                <img src={menuIc} alt="menu" />
                            </Box>
                        </Box> 
                        <Box sx={styles.settingGamenautCardBody}>
                            <Typography>Your Balance</Typography>
                            <Typography component="h2" sx={styles.settingGamenautCardPrice}>$ 1,050.44</Typography>
                            <Typography sx={styles.settingGamenautCardCompare}>
                                <img src={icTrend} alt="trend" />
                                5% compared whit last month
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card sx={[cardStyles.customCardUi, styles.settingGamenautCard]}>
                        <Box sx={styles.settingGamenautCardHeader}>
                            <Box sx={styles.settingGamenautHeadIc}>
                                <img src={etheriumIc} alt="near" />
                                Ethereum
                            </Box>
                            <Box sx={[cardStyles.cardNotificationActions, styles.settingGamenautActions]}>
                                <Button sx={globalStyles.btnPrimaryLink}>
                                    <img src={icImport} alt="menu" />
                                    Import  account 
                                </Button>
                            </Box>
                        </Box> 
                        <Box sx={styles.settingGamenautCardBody}>
                            <Typography>Your Balance</Typography>
                            <Typography component="h2" sx={styles.settingGamenautCardPrice}>
                                18,050 ETH
                            </Typography>
                            <Typography sx={styles.settingGamenautCardCompare}>
                                <img src={icTrend} alt="trend" />
                                5% compared whit last month
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}