// External dependencies
import { Card, CardContent, Grid, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Internal dependencies
import Headings from "../../../components/Headings";
import requirementList from "../GameDetailPage.const";
import { styles as cardStyle } from "../../../components/Common/GameDetailCard.style";

export default function GameHardwareTab() {
    return (
        <>
            <Headings title="Hardware Requirements" counts={0} lineColor={"blue"} />
            <Box sx={cardStyle.requirementCardWrapper}>
                <Card sx={cardStyle.customCardUi}>
                    <CardContent>
                        <Grid container>
                            {
                                requirementList?.map((item, index) => {
                                    return (
                                        <Grid item sm={6} key={index}>
                                            <Card sx={[cardStyle.customCardUi, cardStyle.cardPlain, cardStyle.requirementCard]}>
                                                <Box sx={cardStyle.iconWrapper}>
                                                    <Box component="span" sx={cardStyle.iconRequire}>
                                                        <img src={item.icon} alt="hardware-icon"/>
                                                    </Box>
                                                    <Typography variant="h4" sx={cardStyle.requireText}>{item.type}</Typography>
                                                </Box>
                                                <List component="ul" sx={cardStyle.requriementList}>
                                                    {
                                                        item.features.map((el, index) => {
                                                            return (
                                                                <ListItem key={index}>
                                                                    <Typography sx={cardStyle.featureTitle}>{el.featureType}</Typography>
                                                                    {el.featureName}
                                                                </ListItem>
                                                            )
                                                        })
                                                    }
                                                </List>
                                                <ul className="requirement-list">
                                                    
                                                </ul>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}