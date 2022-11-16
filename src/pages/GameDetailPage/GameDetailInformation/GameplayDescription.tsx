// External dependencies
import React from "react";
import { Button, Card, Grid, Typography, Box, Modal, Fade } from "@mui/material";
import ReactPlayer from 'react-player';

// SVG icons
import readMoreIcon from "../../../assets/svg/gameDetail/read-more.svg";
import videoIcon from "../../../assets/svg/gameDetail/video-icon.svg";
import videoCover from "../../../assets/img/game-detail/video-cover.png";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyle} from "../../../components/Common/GameDetailCard.style";
import { styles } from "../GameDetailPage.style";
import { styles as headingStyles } from "../../../components/Headings/Headings.style";
import { styles as modalStyles} from "../../../components/Common/GameDetailModal.style";
// import Headings from "../../components/Headings";

// JSON data
import { gamePlayDetails } from "../GameDetailPage.const";

export default function GamePlayDescription () {
    const [ open, setOpen ] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={globalStyles.customSectionSpacing}>
            <Box>
                <Grid container>
                    <Grid item sm={12}>
                        <Box sx={headingStyles.HeadingWrapper}>
                            <Typography variant="h4" sx={headingStyles.headingTitle}>
                                <span className="line pink"></span>
                                Gameplay Description
                            </Typography>
                            <Button 
                                sx={[headingStyles.headingSubtitle, headingStyles.countPink]}
                                onClick={handleOpen}
                            >
                                <img src={videoIcon} alt="video" />
                                Watch Video
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {
                gamePlayDetails?.map((item, index) => {
                    return (
                        <Grid container key={index}>
                            <Grid item sm={12}>
                                <Card sx={[cardStyle.customCardUi, styles.gameDescriptionBox]}>
                                    <img src={item.gameDescThumb} alt="game-cover" />
                                </Card>
                            </Grid>

                            <Grid item sm={6}>
                                <Box sx={styles.gameDescBox}>
                                    <Typography variant="h4" sx={styles.descTitle}>
                                        {item.gameTitle1}
                                    </Typography>
                                    <Typography sx={styles.descText}>
                                        {item.gameInfo1}
                                    </Typography>
                                </Box>
                                <Box sx={styles.gameDescBox}>
                                    <Typography variant="h4" sx={styles.descTitle}>
                                        {item.gameTitle2}
                                    </Typography>
                                    <Typography sx={styles.descText}>
                                        {item.gameInfo2}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item sm={6}>
                                <Box sx={styles.gameDescBox}>
                                    <Typography variant="h4" sx={styles.descTitle}>
                                        {item.gameTitle3}
                                    </Typography>
                                    <Typography sx={styles.descText}>
                                        {item.gameInfo3a}
                                    </Typography>
                                    <Typography sx={styles.descText}>
                                        {item.gameInfo3b}
                                    </Typography>
                                    <Typography sx={styles.descText}>
                                        {item.gameInfo3c}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item sm={12}>
                                <Box>
                                    <Button sx={globalStyles.btnSecondary} color="secondary">
                                        <Box sx={globalStyles.btnTextSecondary}>Read More</Box>
                                        <img src={readMoreIcon} alt="read-more" className="btn-icon" />
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    )
                })
            }

            {/* Video Modal */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                
                BackdropProps={{
                timeout: 500,
                
                }}
            >
                <Fade in={open}>
                    <Box sx={[cardStyle.customCardUi, modalStyles.gamenautModalUi, modalStyles.gamenautVideoModalUi]}>
                        <ReactPlayer 
                            width="100%"
                            height="500px"
                            controls={true}
                            playing={true}
                            playsinline={true}
                            loop={true}
                            light={videoCover}
                            url={"https://youtu.be/SgP1oOQd3lk"}
                            muted={true}
                        />
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}