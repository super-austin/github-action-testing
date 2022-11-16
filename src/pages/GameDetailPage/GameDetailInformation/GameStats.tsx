// External dependencies
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Card, Typography } from "@mui/material";

// SVG icons
import statsRewards from "../../../assets/svg/gameDetail/stats-ic-rewards.svg";
import statsPlayers from "../../../assets/svg/gameDetail/stats-ic-players.svg";
import statsServer from "../../../assets/svg/gameDetail/stats-ic-server.svg";
import statsLivePlayers from "../../../assets/svg/gameDetail/stats-ic-live-players.svg";
import statsAssets from "../../../assets/svg/gameDetail/stats-ic-assets.svg";
import statsRewardGiven from "../../../assets/svg/gameDetail/stats-ic-reward-given.svg";
import statsNFT from "../../../assets/svg/gameDetail/stats-ic-NFT.svg";
// import statsIconBlank from "../../../assets/svg/gameDetail/stats-icon-blank.svg";
import cardGraphBlank from "../../../assets/svg/gameDetail/graph-blank.svg";
import cardGraphGreen from "../../../assets/svg/gameDetail/graph-green.svg";
import statsArrowUpPink from "../../../assets/svg/gameDetail/arrow-up-pink.svg";
import statsArrowUpGreen from "../../../assets/svg/gameDetail/arrow-up-green.svg";
import emptyStatsIcon from "../../../assets/svg/empty-states/empty-stats-icon.svg";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyle } from "../../../components/Common/GameDetailCard.style";
import Headings from "../../../components/Headings";

import { selectGameStatsData } from "../../../store/selectors/GameInfoSelector";
import { useAppDispatch } from "../../../store/store";
import { getGameStatsData } from "../../../store/slices/GameInfo/thunks";
import EmptyStates from "../../../components/EmptyStates";

// JSON data
// import { statsCard } from "../GameDetail.const";

export default function GameStats() {
  // Empty states
  const [ emptyGameStats, setEmptyGameStats ] = useState(true);
  const [ dataRelease,setDataRelease ] = useState(false);

  const dispatch = useAppDispatch();
  const gameStats = useSelector(selectGameStatsData());

  useEffect(() => {
    const getInitialData = async () => {
      await dispatch(getGameStatsData());
    };

    getInitialData();
  }, []);

  const modifyResult = (data: number) => {
    if (data > 1000) {
      return `${Math.floor(data / 1000)}K`;
    } else return data;
  };

  // const stringfyResult = (data: number) => {

  // }

  return (
    <Box sx={[globalStyles.customSectionSpacing, cardStyle.gameStatsWrapper]}>
      <Headings title={"Game Stats"} counts={0} lineColor={"blue"} />
      {emptyGameStats === false ?
      <EmptyStates 
          icon={emptyStatsIcon} 
          title={"Game statistics not collected yet"} 
          content={"Your game statistics will become available after the first game"} 
          graphic={""}
          titleCapital={""}
      />
      :
      <Grid container direction="row" spacing={3}>
        <Grid item sm={6} md={3}>
          {/* Total no of Live Players */}
          <Card sx={[cardStyle.customCardUi, cardStyle.statsCardUi]}>
          <Box sx={[cardStyle.customCardInner, cardStyle.statsCardInner]}>
            <Box component="span" sx={cardStyle.statsCardIconTop}>
              <img src={statsLivePlayers} alt="stats-ic" />
            </Box>
            <Box>
              <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                Total no of Live Players
              </Typography>
              <Box sx={cardStyle.statsCardFlexItem}>
                <Typography variant="h2" sx={cardStyle.statsCardTitleBig}>
                  {modifyResult(gameStats.gameStats.numberOfLivePlayers.value)}
                </Typography>
                { dataRelease &&
                  <Typography
                  variant="h3"
                  sx={[cardStyle.statsCardTitleSmall, cardStyle.statsTextPink]}
                >
                  <img src={statsArrowUpPink} alt="icon" />
                  {gameStats.gameStats.numberOfLivePlayers.percentage}%
                </Typography>}
              </Box>
              {/* <Box sx={[cardStyle.statsCardRight, cardStyle.statsCardGraph]}>
                <img src={cardGraphBlank} alt="graph" />
              </Box> */}
            </Box>
            </Box>
          </Card>

          {/* Total Rewards */}
          <Card sx={[cardStyle.customCardUi, cardStyle.statsCardUi]}>
            <Box sx={[cardStyle.customCardInner, cardStyle.statsCardInner]}>
              <Box component="span" sx={cardStyle.statsCardIconTop}>
                <img src={statsRewards} alt="stats-ic" />
              </Box>
              <Box>
                <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                  Total Rewards
                </Typography>
                <Box sx={cardStyle.statsCardFlexItem}>
                  <Typography variant="h2" sx={cardStyle.statsCardTitleBig}>
                    {modifyResult(gameStats.gameStats.totalRewards.near)} ETH
                  </Typography>
                </Box>
                <Typography variant="h3" sx={cardStyle.statsCardTitle}>
                  ${gameStats.gameStats.totalRewards.dollar}
                </Typography>
              </Box>
              {/* <Box sx={[cardStyle.statsCardRight, cardStyle.statsCardGraph]}>
                <img src={cardGraphBlank} alt="graph" />
              </Box> */}
            </Box>
          </Card>
        </Grid>
        <Grid item sm={6} md={3}>
          {/* Total no of Players */}
          <Card sx={[cardStyle.customCardUi, cardStyle.statsCardUi]}>
          <Box sx={[cardStyle.customCardInner, cardStyle.statsCardInner]}>
            <Box component="span" sx={cardStyle.statsCardIconTop}>
              <img src={statsPlayers} alt="stats-ic" />
            </Box>
            <Box>
              <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                Total no of Players
              </Typography>
              <Box sx={cardStyle.statsCardFlexItem}>
                <Typography variant="h2" sx={cardStyle.statsCardTitleBig}>
                  588K
                </Typography>
                {dataRelease &&
                  <Typography
                  variant="h3"
                  sx={[cardStyle.statsCardTitleSmall, cardStyle.statsTextGreen]}
                >
                  <img src={statsArrowUpGreen} alt="icon" />
                  15%
                </Typography>}
              </Box>
              {/* <Box sx={[cardStyle.statsCardRight, cardStyle.statsCardGraph]}>
                <img src={cardGraphBlank} alt="graph" />
              </Box> */}
            </Box>
            </Box>
          </Card>

          {/* Game Assets */}
          <Card sx={[cardStyle.customCardUi, cardStyle.statsCardUi]}>
            <Box sx={[cardStyle.customCardInner, cardStyle.statsCardInner]}>
              <Box component="span" sx={cardStyle.statsCardIconTop}>
                <img src={statsAssets} alt="stats-ic" />
              </Box>
              <Box>
                <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                  Game Assets
                </Typography>
                <Box sx={cardStyle.statsCardFlexItem}>
                  <Typography variant="h2" sx={cardStyle.statsCardTitleBig}>
                    {modifyResult(gameStats.gameStats.gameAssets)}
                  </Typography>
                </Box>
              </Box>
              {/* <Box sx={[cardStyle.statsCardRight, cardStyle.statsCardGraph]}>
                <img src={cardGraphBlank} alt="graph" />
              </Box> */}
            </Box>
          </Card>
        </Grid>

        <Grid item sm={6} md={3} sx={cardStyle.singleStatsCard}>
          {/* NFT Stats */}
          <Card sx={[cardStyle.customCardUi, cardStyle.statsCardUi]}>
          <Box sx={[cardStyle.customCardInner, cardStyle.statsCardInner]}>
            <Box component="span" sx={cardStyle.statsCardIconTop}>
              <img src={statsNFT} alt="stats-ic" />
            </Box>
            <Box>
              <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                NFT Stats
              </Typography>
              <Box sx={cardStyle.statsCardFlexItem}>
                <Typography variant="h2" sx={cardStyle.statsCardTitleBig}>
                  {modifyResult(gameStats.gameStats.NFTStats.value)}
                </Typography>
                {dataRelease &&
                  <Typography
                  variant="h3"
                  sx={[cardStyle.statsCardTitleSmall, cardStyle.statsTextGreen]}
                >
                  <img src={statsArrowUpGreen} alt="icon" />
                  {gameStats.gameStats.NFTStats.percentage}%
                </Typography>}
              </Box>
            </Box>
            </Box>
          </Card>
        </Grid>

        <Grid item sm={6} md={3}>
          {/* Server Status */}
          <Card sx={[cardStyle.customCardUi, cardStyle.statsCardUi]}>
          <Box sx={[cardStyle.customCardInner, cardStyle.statsCardInner]}>
            <Box component="span" sx={cardStyle.statsCardIconTop}>
              <img src={statsServer} alt="stats-ic" />
            </Box>
            <Box>
              <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                Server Status
              </Typography>
              <Box sx={cardStyle.statsCardFlexItem}>
                <Typography
                  variant="h3"
                  sx={[
                    cardStyle.statsCardTitleSmall,
                    cardStyle.statsTextPurple,
                  ]}
                >
                  {gameStats.gameStats.serverStatus}
                </Typography>
              </Box>
              {/* <Box sx={[cardStyle.statsCardRight, cardStyle.statsCardGraph]}>
                <img src={cardGraphBlank} alt="graph" />
              </Box> */}
            </Box>
            </Box>
          </Card>

          {/* Total rewards given out */}
          <Card sx={[cardStyle.customCardUi, cardStyle.statsCardUi]}>
          <Box sx={[cardStyle.customCardInner, cardStyle.statsCardInner]}>
            <Box component="span" sx={cardStyle.statsCardIconTop}>
              <img src={statsRewardGiven} alt="stats-ic" />
            </Box>
            <Box>
              <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                Total rewards given out
              </Typography>
              <Box sx={cardStyle.statsCardFlexItem}>
                <Typography variant="h2" sx={cardStyle.statsCardTitleBig}>
                  {gameStats.gameStats.totalRewardsGivenOut.value}K
                </Typography>
                {dataRelease &&
                  <Typography
                  variant="h3"
                  sx={[cardStyle.statsCardTitleSmall, cardStyle.statsTextPink]}
                >
                  <img src={statsArrowUpGreen} alt="icon" />
                  {gameStats.gameStats.totalRewardsGivenOut.percentage}%
                </Typography>}
              </Box>
              {/* <Box sx={[cardStyle.statsCardRight, cardStyle.statsCardGraph]}>
                <img src={cardGraphBlank} alt="graph" />
              </Box> */}
            </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
      }
    </Box>
  );
}
