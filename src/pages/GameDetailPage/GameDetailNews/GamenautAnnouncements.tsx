// External dependencies
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import Headings from "../../../components/Headings";
import { announcementList } from "../GameDetailPage.const";

export default function GamenautAnnouncements () {
    const slideSettings = {
        dots: false,
        infinite: false,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        rows: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]    
    };

    return (
        <Box sx={[globalStyles.customSectionSpacing, cardStyles.announceCardWrapper]}>
            <Headings title={"Announcements"} counts={0} lineColor={""} />
            <Grid 
                direction="row" 
                container
                spacing={4}
            >
                <Grid item md={12} sx={cardStyles.announceCardGrid}>
                    <Slider {...slideSettings}>
                    {
                        announcementList.map((item, index)=> {
                            return (
                                <Box key={index}>
                                    <Card sx={[cardStyles.customCardUi, cardStyles.customGamenautCard]}>
                                        <Box sx={cardStyles.gamenautCardThumb}>
                                            <img src={item.thumb} alt="game-thumb" className={item.gameThumbClass} />
                                        </Box>
                                        <CardContent sx={cardStyles.gamenautCardBody}>
                                            <Box sx={cardStyles.gamenautCardInner}>
                                                <Typography sx={[cardStyles.gamenautCardDate, cardStyles.gamenautCardText]}>{item.date}</Typography>
                                                <Typography sx={[cardStyles.gamenautCardText, cardStyles.gamenautCardTextIcon]}>
                                                    {item.cardTextPrimary}
                                                    <Link to="/">
                                                        <img src={item.redirectIc} alt="redirect" />
                                                    </Link>
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                    <Typography variant="h2" sx={cardStyles.gamenautTitle}>{item.gameTitle}</Typography>
                                    <Typography sx={cardStyles.gamenautSubTitle}>{item.gameSubtitle}</Typography>
                                </Box>
                            )
                        })
                    }
                    </Slider>
                </Grid>
            </Grid>
        </Box>
    )
}