// External dependencies
import {
    Box,
    Button,
    Card, 
    FormControlLabel, 
    Grid, 
    Switch, 
    Typography
} from "@mui/material";

// SVG icons
import nearIcon from "../../../assets/svg/profile/ic-near-white.svg";
import icTrend from "../../../assets/svg/profile/ic-trend-up.svg";
import icNotification from "../../../assets/svg/profile/ic-notification.svg";
import icImport from "../../../assets/svg/profile/ic-import-blue.svg";

// Internal dependencies
import Headings from "../../../components/Headings";
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles } from "../GameProfile.style";

export default function GameProfileLaunch() {
    return (
        <Grid container sx={globalStyles.marginTop30}>
            <Grid item sm={12}>
                <Headings title={"Profile-Launch Version"} counts={0} lineColor={"pink"} />
            </Grid>
            <Grid item sm={12}>
                <Card sx={[cardStyles.customCardUi, styles.profileLaunchCard]}>
                    <Box>
                        <Box sx={styles.settingGamenautHeadIc}>
                            <img src={nearIcon} alt="near" />
                            Near
                        </Box>
                    </Box>
                    <Box sx={styles.profileLaunchLabels}>
                        <Typography sx={styles.profileLaunchLabelLight}>Your Balance</Typography>
                        <Typography component="h2" sx={styles.settingGamenautCardPrice}>$ 1,050.44</Typography>
                    </Box>
                    <Box>
                        <Typography sx={styles.settingGamenautCardCompare}>
                            <img src={icTrend} alt="trend" />
                            5% compared whit last month
                        </Typography>
                    </Box>
                    <Typography sx={[styles.settingGamenautCardCompare, styles.settingGamenautCardNotify]}>
                        <img src={icNotification} alt="trend" />
                        Notification
                        <FormControlLabel 
                            sx={[globalStyles.customSwitcher, globalStyles.customSwitcherPlain]}
                            label=""
                            control={<Switch />} 
                        />
                    </Typography>
                    <Box sx={styles.profileLaunchActions}>
                        <Button sx={globalStyles.btnPrimaryLink}>
                            <img src={icImport} alt="menu" />
                            Import  account 
                        </Button>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    )
}