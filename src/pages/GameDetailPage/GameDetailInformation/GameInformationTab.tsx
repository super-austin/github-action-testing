// External dependencies
import { Card, Grid, CardMedia, Box, Typography } from "@mui/material";

// Internal dependencies
import { styles as cardStyle } from "../../../components/Common/GameDetailCard.style";
import { styles as globalStyle } from "../../../components/Common/Global.style";
import { featureCards } from "../GameDetailPage.const";
import GameFiDescription from "./GameFiDescription";
import GameGallery from "./GameGallery";
import GameLeaderBoard from "./GameLeaderBoard";
import GamePlayDescription from "./GameplayDescription";
import GameStats from "./GameStats";

export default function GameInformationTab () {
    return (
        <>
            <Grid container spacing={3} sx={[cardStyle.featureCardWrapper, globalStyle.customSectionSpacing]}>
                {
                    featureCards?.map((item, index) => {
                        return (
                            <Grid item sm={3} key={index}>
                                <Card sx={[cardStyle.customCardUi, cardStyle.featureCardUi]}>
                                    <Box sx={cardStyle.featureCardIcon}>
                                        <Box sx={(cardStyle as any)[item.iconClass]}>
                                            <CardMedia
                                                component="img"
                                                image={item.icon}
                                                alt={item.alt}
                                                sx={cardStyle.featureIcImg}
                                            />
                                        </Box>
                                    </Box>
                                    <Typography sx={cardStyle.featureCardTitle}>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={cardStyle.featureCardText}>
                                        {item.text}
                                    </Typography>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <GamePlayDescription />
            <GameStats />
            <GameLeaderBoard />
            <GameFiDescription />
            <GameGallery />
        </>
    )
}