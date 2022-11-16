// External dependencies
import React, { useState, useEffect } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Internal dependencies
import PageHeader from "../../components/PageHeader";
import Sidebar from "../../components/Sidebar";
import { styles } from "./GameFiPage.style";
import { styles as globalStyles } from "../../components/Common/Global.style";
import { styles as cardStyles } from "../../components/Common/GameDetailCard.style";
import GameFiAssets from "./GameFiAssets/GameFiAssets";
import GameFiPoints from "./GameFiPoints/GameFiPoints";
import GameFiChallenges from "./GameFiChallenges/GameFiChallenges";
import GameFiStatistics from "./GameFiStatistics/GameFiStatistics";

// JSON data
import { gameFiThumbCards } from "./GameFi.const";
import EmptyStates from "../../components/EmptyStates";
import { selectUserInfo } from "../../store/selectors/UserSelector";

export default function GameFiPage() {
  // Empty states
  const [gamePoints, setGamePoints] = useState(true);

  const gameFiCardSetting = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const { userId, email, userName } = useSelector(selectUserInfo());

  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email]);

  return (
    <Box sx={[globalStyles.mainWrapper, globalStyles.mainWrapperPadding]}>
      <PageHeader userName={userName} pageTitle={"Game-Fi"} />
      <Grid container spacing={3} sx={globalStyles.customSectionSpacing}>
        <Grid item sm={12} sx={styles.gameFiSliderWrapper}>
          {gamePoints === false ? (
            <EmptyStates
              icon={""}
              title={""}
              content={""}
              graphic={""}
              titleCapital={"This panel will display the games you are playing"}
            />
          ) : (
            <Slider {...gameFiCardSetting}>
              {gameFiThumbCards?.map((game, index) => {
                return (
                  <Card
                    key={index}
                    sx={[
                      cardStyles.customCardUi,
                      cardStyles.cardBorder15,
                      styles.gameFiCardBox,
                      styles.gameFiCardActive,
                    ]}
                  >
                    <img src={game.thumb} alt="game" />
                    <Typography component="h4" sx={styles.gameFiCardTitle}>
                      {game.gameName}
                    </Typography>
                  </Card>
                );
              })}
            </Slider>
          )}
        </Grid>
      </Grid>

      <GameFiPoints />
      <GameFiAssets />
      <GameFiChallenges />
      <GameFiStatistics />
    </Box>
  );
}
