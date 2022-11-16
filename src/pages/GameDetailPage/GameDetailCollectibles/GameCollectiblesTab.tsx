// External dependencies
import React, { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Grid,
  Card,
  List,
  ListItem,
  Modal,
  Fade,
  Button,
  FormControl,
  TextField,
  InputAdornment,
} from "@mui/material";

// SVG icons
import slideLeftIcon from "../../../assets/svg/gameDetail/collectibles/slide-arrow-left.svg";
import slideRightIcon from "../../../assets/svg/gameDetail/collectibles/slide-arrow-right.svg";

import assetDetailsCover from "../../../assets/svg/gameFi/asset-details-cover.svg";
import collectIconDiscord from "../../../assets/svg/gameDetail/collectibles/Icon_Discord.svg";
import metaIcon from "../../../assets/svg/gameFi/meta-icon.svg";
import nftIcon1 from "../../../assets/img/game-detail/collectibles/collectible-1.png";
import nftIcon2 from "../../../assets/img/game-detail/collectibles/collectible-2.png";
import nftIcon3 from "../../../assets/img/game-detail/collectibles/collectible-3.png";
import verifiedBadge from "../../../assets/svg/gameFi/verify-badge.svg";
import modalClose from "../../../assets/svg/gameFi/modals-icon/modal-close.svg";
import convertPointLoading from "../../../assets/svg/gameFi/modals-icon/convert-loading.svg";
import convertPointDone from "../../../assets/svg/gameFi/modals-icon/done-icon.svg";

import { gameAssetsAttributesList } from "../../GameFiPage/GameFi.const";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles as modalStyles } from "../../../components/Common/GameDetailModal.style";

import { collectibleCards } from "../GameDetailPage.const";
import { useAppDispatch } from "../../../store/store";
import { getCollectibleData } from "../../../store/slices/GameInfo/thunks";
import { useSelector } from "react-redux";
import { selectCollectibleData } from "../../../store/selectors/GameInfoSelector";

const MAX_HEIGHT = 900;
const ITEMS_IN_ROW = 6;
const ROW_NUMBERS_IN_PAGE = 4;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getInitialData = async () => {
      await dispatch(getCollectibleData());
    };

    getInitialData();
  }, []);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function GameCollectiblesTab() {
  const { collectible } = useSelector(selectCollectibleData());
  const [value, setValue] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(1);
  const [pageIndex, setPageIndex] = React.useState(1);
  const [rowCount, setRowCount] = React.useState(0);

  // Custom modal open
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    initNavigator(value);
  }, [collectible]);

  const initNavigator = (tabIndex: Number) => {
    setPageIndex(1);
    switch (tabIndex) {
      case 0:
        setPageCount(
          Math.max(
            Math.ceil(
              [...collectible.minted, ...collectible.notMinted].length / 24
            ),
            1
          )
        );
        setRowCount(
          Math.ceil(
            [...collectible.minted, ...collectible.notMinted].length / 6
          )
        );
        break;
      case 1:
        setPageCount(
          Math.max(Math.ceil([...collectible.minted].length / 24), 1)
        );
        setRowCount(Math.ceil([...collectible.minted].length / 6));
        break;
      case 2:
        setPageCount(
          Math.max(Math.ceil([...collectible.notMinted].length / 24), 1)
        );
        setRowCount(Math.ceil([...collectible.notMinted].length / 6));
        break;
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    initNavigator(newValue);
  };

  const onPrevNavigation = () => {
    setPageIndex(Math.max(1, pageIndex - 1));

    const element = document.getElementById(`tab-content-${value}`);
    if (element) {
      const maxRange = element.scrollHeight;
      const rowHeight = maxRange / rowCount;

      element.scrollTop =
        rowHeight * ROW_NUMBERS_IN_PAGE * (Math.max(1, pageIndex - 1) - 1);
    }
  };

  const onNextNavigation = () => {
    setPageIndex(Math.min(pageCount, pageIndex + 1));

    const element = document.getElementById(`tab-content-${value}`);
    if (element) {
      const maxRange = element.scrollHeight;
      const rowHeight = maxRange / rowCount;

      element.scrollTop =
        rowHeight *
        ROW_NUMBERS_IN_PAGE *
        (Math.min(pageCount, pageIndex + 1) - 1);
    }
  };

  const onScroll = (event: React.UIEvent<HTMLElement>) => {
    const maxRange = event.currentTarget.scrollHeight;
    const current = event.currentTarget.scrollTop;

    const rowHeight = maxRange / rowCount;
    setPageIndex(Math.floor(current / rowHeight / ROW_NUMBERS_IN_PAGE) + 1);
  };

  return (
    <>
      <Box sx={[globalStyles.gameTabsWrapper, globalStyles.gameTabsTop0]}>
        <Grid container>
          <Grid item sm={6}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={globalStyles.primaryTabsUi}
            >
              <Tab
                sx={globalStyles.primaryTabsItem}
                label={`All Assets(${
                  [...collectible.minted, ...collectible.notMinted].length
                })`}
                {...a11yProps(0)}
              />
              <Tab
                sx={globalStyles.primaryTabsItem}
                label={`Minted(${collectible.minted.length})`}
                {...a11yProps(1)}
              />
              <Tab
                sx={globalStyles.primaryTabsItem}
                label={`Not-minted(${collectible.notMinted.length})`}
                {...a11yProps(2)}
              />
            </Tabs>
          </Grid>
          <Grid item sm={6}>
            <Box sx={globalStyles.customSlideControls}>
              <Box
                sx={[globalStyles.customControlButton, cardStyles.customCardUi]}
                onClick={onPrevNavigation}
              >
                <img src={slideLeftIcon} alt="control" />
              </Box>
              <Typography sx={globalStyles.customControlText}>
                {pageIndex} of {pageCount}
              </Typography>
              <Box
                sx={[globalStyles.customControlButton, cardStyles.customCardUi]}
                onClick={onNextNavigation}
              >
                <img src={slideRightIcon} alt="control" />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box>
          {/* All Assets */}
          <TabPanel value={value} index={0}>
            <Grid
              container
              spacing={2.5}
              sx={cardStyles.collectibleCardsWrapper}
              id="tab-content-0"
              onScroll={(e) => onScroll(e)}
            >
              {[...collectible.minted, ...collectible.notMinted].map(
                (item, index) => {
                  return (
                    <Grid item sm={2} key={index}>
                      <Card
                        onClick={handleOpen}
                        sx={[
                          globalStyles.customDarkBox,
                          cardStyles.collectibleCardUi,
                        ]}
                      >
                        <Box sx={cardStyles.collectibleCardInner}>
                          <img
                            src={item.imageURL}
                            alt="collectible-thumb"
                            loading="lazy"
                          />
                          {item.icon && (
                            <Box
                              component="span"
                              sx={cardStyles.collectibleCardStatus}
                            >
                              <img
                                src={item.icon}
                                alt="collectible-thumb"
                                loading="lazy"
                              />
                            </Box>
                          )}
                        </Box>
                      </Card>
                    </Grid>
                  );
                }
              )}
            </Grid>
          </TabPanel>
          {/* Minted */}
          <TabPanel value={value} index={1}>
            <Grid
              container
              spacing={2.5}
              sx={cardStyles.collectibleCardsWrapper}
              id="tab-content-1"
              onScroll={(e) => onScroll(e)}
            >
              {collectible.minted.map((item, index) => {
                return (
                  <Grid item sm={2} key={index}>
                    <Card
                      onClick={handleOpen}
                      sx={[
                        cardStyles.customCardUi,
                        cardStyles.collectibleCardUi,
                      ]}
                    >
                      <Box sx={cardStyles.collectibleCardInner}>
                        <img
                          src={item.imageURL}
                          alt="collectible-thumb"
                          loading="lazy"
                        />
                        {item.icon && (
                          <Box
                            component="span"
                            sx={cardStyles.collectibleCardStatus}
                          >
                            <img
                              src={item.icon}
                              alt="collectible-thumb"
                              loading="lazy"
                            />
                          </Box>
                        )}
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>
          {/* Not-minted */}
          <TabPanel value={value} index={2}>
            <Grid
              container
              spacing={2.5}
              sx={cardStyles.collectibleCardsWrapper}
              id="tab-content-2"
              onScroll={(e) => onScroll(e)}
            >
              {collectible.notMinted.map((item, index) => {
                return (
                  <Grid item sm={2} key={index}>
                    <Card
                      onClick={handleOpen}
                      sx={[
                        cardStyles.customCardUi,
                        cardStyles.collectibleCardUi,
                      ]}
                    >
                      <Box sx={cardStyles.collectibleCardInner}>
                        <img
                          src={item.imageURL}
                          alt="collectible-thumb"
                          loading="lazy"
                        />
                        {item.icon && (
                          <Box
                            component="span"
                            sx={cardStyles.collectibleCardStatus}
                          >
                            <img
                              src={item.icon}
                              alt="collectible-thumb"
                              loading="lazy"
                            />
                          </Box>
                        )}
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>
          {/* Asset details modal */}
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
              <Box
                sx={[
                  cardStyles.customCardUi,
                  modalStyles.gamenautModalUi,
                  modalStyles.gamenautModalBigUi,
                ]}
              >
                <Box sx={modalStyles.gamenautModalHeader}>
                  <Typography
                    component="h4"
                    sx={modalStyles.gamenautModalTitle}
                  >
                    Asset Details
                  </Typography>
                  <Button onClick={handleClose}>
                    <img src={modalClose} alt="close" />
                  </Button>
                </Box>
                <Grid container spacing={4}>
                  <Grid item md={6}>
                    <Card
                      sx={[cardStyles.gameAssetsCardUi, globalStyles.height100]}
                    >
                      <img src={assetDetailsCover} alt="collectible-thumb" />
                      <Box
                        component="span"
                        sx={cardStyles.gameAssetsCardStatus}
                      >
                        <img src={collectIconDiscord} alt="collectible-thumb" />
                      </Box>
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card sx={cardStyles.gameAssetsModalDetailCard}>
                      <Box
                        component="label"
                        sx={cardStyles.gameAssetsLabelFlex}
                      >
                        <Typography sx={cardStyles.gameAssetsLabelLight}>
                          Mint
                        </Typography>
                        <Typography>№458</Typography>
                      </Box>
                      <Grid container sx={cardStyles.gameAssetsModalScrollList}>
                        <Grid item md={6}>
                          <Box
                            component="label"
                            sx={[
                              cardStyles.gameAssetsLabelFlex,
                              cardStyles.gameAssetsLabelFlexColumn,
                            ]}
                          >
                            <Typography sx={cardStyles.gameAssetsLabelLight}>
                              Rarity
                            </Typography>
                            <Typography>Unusual</Typography>
                          </Box>
                        </Grid>
                        <Grid item md={6}>
                          <Box
                            component="label"
                            sx={[
                              cardStyles.gameAssetsLabelFlex,
                              cardStyles.gameAssetsLabelFlexColumn,
                            ]}
                          >
                            <Typography sx={cardStyles.gameAssetsLabelLight}>
                              Collection
                            </Typography>
                            <Typography>Utility on the game</Typography>
                          </Box>
                        </Grid>
                        <Grid item md={12} sx={globalStyles.marginTop20}>
                          <Typography sx={cardStyles.gameAssetsModalLabel}>
                            Attributes
                          </Typography>
                          <List>
                            {gameAssetsAttributesList?.map((item, index) => {
                              return (
                                <ListItem key={index}>
                                  <Typography
                                    sx={cardStyles.gameAssetsModalLabel}
                                  >
                                    {item.assetLabel}
                                  </Typography>
                                  <Typography
                                    sx={cardStyles.gameAssetsLabelFlex}
                                  >
                                    {item.assetTitle}
                                  </Typography>
                                </ListItem>
                              );
                            })}
                          </List>
                        </Grid>
                      </Grid>
                      <Box
                        component="form"
                        sx={[
                          globalStyles.customFormUi,
                          globalStyles.marginTop30,
                        ]}
                      >
                        <Typography
                          component="span"
                          sx={cardStyles.gameAssetsModalLabel}
                        >
                          Owners{" "}
                        </Typography>
                        <Typography
                          component="span"
                          sx={cardStyles.gameAssetsNFTListStatsGreen}
                        >
                          3
                        </Typography>
                        <List sx={cardStyles.gameAssetsNFTList}>
                          <ListItem>
                            <img src={nftIcon1} alt="nft" />
                            <Typography>VangsKings (7q7 ... hDP)</Typography>
                          </ListItem>
                          <ListItem>
                            <img src={nftIcon1} alt="nft" />
                            <Typography>VangsKings (7q7 ... hDP)</Typography>
                          </ListItem>
                        </List>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container sx={globalStyles.marginTop20} spacing={4}>
                  <Grid item md={12}>
                    <Typography component="h3">Lilo NFT V1</Typography>
                    <Typography
                      sx={[
                        cardStyles.gameAssetsTabsText,
                        globalStyles.marginTop20,
                      ]}
                    >
                      The expensive G3SG1 sniper rifle significantly slows down
                      movement, which, however, is offset by a higher rate of
                      fire than other sniper rifles. The desert camouflage
                      texture was applied with waterproof paint.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </Modal>
        </Box>
      </Box>
    </>
  );
}
