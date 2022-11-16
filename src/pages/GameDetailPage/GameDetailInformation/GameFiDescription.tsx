// External dependencies
import React, { useRef, useState } from "react";
import { Box, Button, Grid, List, ListItem, Typography, Link } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// SVG icons
import gamefiDetail from "../../../assets/img/game-detail/gamefi-detail.png";
import readMoreIcon from "../../../assets/svg/gameDetail/read-more.svg";
import gamenautCommunityLogo from "../../../assets/svg/gameDetail/gamenaut-community-logo.svg";
import icSlidePrev from "../../../assets/svg/gameDetail/slide-prev-blue.svg";
import icSlideNext from "../../../assets/svg/gameDetail/slide-next-blue.svg";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles } from "../GameDetailPage.style";
import { communitySocial, gameFiDescriptionRules } from "../GameDetailPage.const";
import Headings from "../../../components/Headings";

export default function GameFiDescription() {
  const [ open, setOpen ] = useState(false);
  const sliderRef = useRef<any>();


  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    arrows:false
  };

  return (
    <Box sx={styles.gameFiDetailWrapper}>
      {!open ? (
        <Box sx={globalStyles.customSectionSpacing}>
          <Headings
            title={"GameFi Description"}
            counts={0}
            lineColor={"blue"}
          />
          <Grid container direction="row" alignItems="center">
            <Grid item md={6} sx={styles.gameFiDetailImg}>
              <img src={gamefiDetail} alt="detail-thumb" />
            </Grid>
            <Grid item md={6}>
              <Typography variant="h2" component="h2" sx={styles.gameFiTitle}>
                Evil Dead: The Game
              </Typography>
              <Typography sx={styles.GameFiDescriptionText}>
                Step into the role of Ash Williams or his friends from the
                iconic Evil Dead franchise and take action in the game with an
                amazing PVP co-op and multiplayer mode! Play as a team of four
                survivors infiltrating the world, loot, manage your fear and
                find key items to close between worlds in a game inspired by the
                senses of danger and the Evil Dead movies and STARZ's Ash vs
                Evil Dead TV series.
              </Typography>
              <Box>
                <Button onClick={() => setOpen(true)} sx={globalStyles.btnSecondary} color="secondary">
                  <Box
                    sx={globalStyles.btnTextSecondary}
                  >
                    Read More
                  </Box>
                  <img
                    src={readMoreIcon}
                    alt="read-more"
                    className="btn-icon right"
                  />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Slider {...settings} ref={sliderRef}>
          {gameFiDescriptionRules?.map((item, index) => {
            return (
              <Box sx={globalStyles.customSectionSpacing} key={index}>
                <Headings
                  title={"GameFi Description"}
                  counts={0}
                  lineColor={"blue"}
                />
                <Grid container direction="row" alignItems="center">
                  <Grid item md={6} sx={styles.gameFiDetailImg}>
                    <img src={item.ruleImage} alt="detail-thumb" />
                  </Grid>
                  <Grid item md={6}>
                    <Typography
                      variant="h2"
                      component="h2"
                      sx={styles.gameFiTitle}
                    >
                      {item.ruleTitle}
                    </Typography>
                    <List component="ul" sx={styles.gameFiDetailList}>
                      {item.gameFiDetailList?.map((el, index) => {
                        return <ListItem key={index}>{el.detailList}</ListItem>;
                      })}
                    </List>
                    <Box sx={styles.gameFiSlideIcons}>
                      <Button
                        sx={globalStyles.customControlButton}
                        onClick={() => {
                          index === 0 
                            ? setOpen(false)
                            : sliderRef.current.slickPrev();
                        }}
                      >
                        <img src={icSlidePrev} alt="prev-icon" />
                      </Button>
                      <Button
                        sx={globalStyles.customControlButton}
                        onClick={() => {
                          index === gameFiDescriptionRules.length-1
                            ? setOpen(false)
                            : sliderRef.current.slickNext();
                        }}
                      >
                        <img src={icSlideNext} alt="prev-icon" />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </Slider>
      )}

      <Box sx={styles.communityCardWrapper}>
        <Grid container alignItems="center">
          <Grid item md={6}>
            <Headings
              title={"Join Our Community"}
              counts={0}
              lineColor={"none"}
            />
            <List component="ul" sx={styles.socialListCommon}>
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
          <Grid item md={6}>
            <img src={gamenautCommunityLogo} alt="logo" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
