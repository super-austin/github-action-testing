// External dependencies
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  Fade,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  List,
  ListItem,
  Modal,
  Pagination,
  Tab,
  TablePagination,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

// SVG icons
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
import slideLeftIcon from "../../../assets/svg/gameDetail/collectibles/slide-arrow-left.svg";
import slideRightIcon from "../../../assets/svg/gameDetail/collectibles/slide-arrow-right.svg";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles as modalStyles } from "../../../components/Common/GameDetailModal.style";
import { styles } from "../GameFiPage.style";

// JSON data
import { collectibleCards } from "../../GameDetailPage/GameDetailPage.const";
import { gameAssetsAttributesList } from "../GameFi.const";
import { AssetsItem, AssetsPadProps } from "./GameFiAssets.types";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
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

export default function GameFiAllAssets({
  number,
  filter,
  keyword,
}: AssetsPadProps) {
  console.log(keyword);
  const [evolutionRequired, setEvolutionRequired] = useState(false);
  const [cardMinted, setCardMinted] = useState(false);

  const [value, setValue] = useState(0);
  // Loading states
  const [isLoading, setIsLoading] = useState(true);

  const [selectedItem, selectItem] = useState<AssetsItem>();

  // Custom modal open
  const [open, setOpen] = useState(false);
  const handleOpen = (item: any) => {
    setOpen(true);
    selectItem(item);
    if (item.evolutionRequired == true) {
      setEvolutionRequired(true);
    } else {
      setEvolutionRequired(false);
    }
  };
  const handleClose = () => setOpen(false);

  // Evolve modal open
  const [evolveModalOpen, setOpenEvolveModal] = useState(false);
  const handleEvolveOpen = () => setOpenEvolveModal(true);
  const handleEvolveClose = () => setOpenEvolveModal(false);

  // Transfer assets modal open
  const [gameAssetsTransfer] = useState(true);
  const [transferModalOpen, setOpenTransferModal] = useState(false);
  const handleTransferOpen = () => {
    setOpenTransferModal(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  const handleTransferClose = () => setOpenTransferModal(false);

  // Transfer modal states
  const [content, setContent] = useState({
    title: "Done",
    subTitle: "Your assets have been converted",
    iconType: convertPointDone,
    clickCount: 0,
  });

  // Pagination
  const itemsPerPage = 24;

  const checkFilter = (item: AssetsItem) => {
    if (filter.length === 0) return true;
    for (let i = 0; i < filter.length; i++) {
      if (filter[i].category === "Rarity") {
        if (item.rarity !== filter[i].keyword) return false;
      }
      if (filter[i].category === "Utility") {
        if (item.collection !== filter[i].keyword) return false;
      }
    }
    return true;
  };

  const checkKeyword = (item: AssetsItem) => {
    if (!item.name) return false;
    if (keyword) return item.name?.includes(keyword);
    return true;
  };

  const collects = collectibleCards.filter((item) => {
    return checkFilter(item) && checkKeyword(item);
  });
  const totalCount = collects.length;
  const pageCount = Math.max(1, Math.floor(totalCount / itemsPerPage));
  const [page, setPage] = React.useState(1);

  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const dataChange = () => {
    setContent({
      title: "Done",
      subTitle: "Your assets have been converted",
      iconType: convertPointDone,
      clickCount: 1,
    });
    if (content.clickCount === 1) {
      handleClose();
      handleTransferClose();
      setContent({
        title: "Transfer Asset",
        subTitle: "",
        iconType: convertPointLoading,
        clickCount: 0,
      });
    }
  };

  const onPrevNavigation = () => {
    setPage(Math.max(1, page - 1));

    const element = document.getElementById(`tab-content-0`);
    if (element) {
      const maxRange = element.scrollHeight;
      const rowHeight = maxRange / rowsPerPage;

      element.scrollTop = rowHeight * rowsPerPage * (Math.max(1, page - 1) - 1);
    }
  };

  const onNextNavigation = () => {
    setPage(Math.min(pageCount, page + 1));

    const element = document.getElementById(`tab-content-0`);
    if (element) {
      const maxRange = element.scrollHeight;
      const rowHeight = maxRange / rowsPerPage;

      element.scrollTop =
        rowHeight * rowsPerPage * (Math.min(pageCount, page + 1) - 1);
    }
  };

  const onScroll = (event: React.UIEvent<HTMLElement>) => {
    const maxRange = event.currentTarget.scrollHeight;
    const current = event.currentTarget.scrollTop;

    const rowHeight = maxRange / Math.max(1, Math.ceil(totalCount / 6));
    setPage(Math.floor(current / rowHeight / rowsPerPage) + 1);
  };

  return (
    <>
      <Box sx={styles.gameAssetsPagination}>
        <Box sx={globalStyles.customSlideControls}>
          <Box
            sx={[globalStyles.customControlButton, cardStyles.customCardUi]}
            onClick={onPrevNavigation}
          >
            <img src={slideLeftIcon} alt="control" />
          </Box>
          <Typography sx={globalStyles.customControlText}>
            {page} of {pageCount}
          </Typography>
          <Box
            sx={[globalStyles.customControlButton, cardStyles.customCardUi]}
            onClick={onNextNavigation}
          >
            <img src={slideRightIcon} alt="control" />
          </Box>
        </Box>
      </Box>

      <Grid
        container
        spacing={2.5}
        sx={cardStyles.collectibleCardsWrapper}
        onScroll={onScroll}
        id="tab-content-0"
      >
        {collects.map((item, index) => {
          return (
            <Grid item xs={12} sm={4} md={3} lg={number} key={index}>
              <Card
                onClick={() => handleOpen(item)}
                sx={[globalStyles.customDarkBox, cardStyles.collectibleCardUi]}
              >
                <Box sx={cardStyles.collectibleCardInner}>
                  <img
                    src={item.thumb}
                    alt="collectible-thumb"
                    loading="lazy"
                  />
                  {item.assetMinted == true ? (
                    <Box component="span" sx={cardStyles.collectibleCardStatus}>
                      <img
                        src={item.icon}
                        alt="collectible-thumb"
                        loading="lazy"
                      />
                    </Box>
                  ) : null}
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>

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
              <Typography component="h4" sx={modalStyles.gamenautModalTitle}>
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
                  <img src={selectedItem?.thumb} alt="collectible-thumb" />
                  <Box component="span" sx={cardStyles.gameAssetsCardStatus}>
                    <img src={collectIconDiscord} alt="collectible-thumb" />
                  </Box>
                </Card>
              </Grid>
              <Grid item md={6}>
                <Card sx={cardStyles.gameAssetsModalDetailCard}>
                  <Box component="label" sx={cardStyles.gameAssetsLabelFlex}>
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
                        <Typography>{selectedItem?.rarity}</Typography>
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
                        <Typography>{selectedItem?.collection}</Typography>
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
                              <Typography sx={cardStyles.gameAssetsModalLabel}>
                                {item.assetLabel}
                              </Typography>
                              <Typography sx={cardStyles.gameAssetsLabelFlex}>
                                {item.assetTitle}
                              </Typography>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Grid>
                  </Grid>

                  {/* Enter address input and button */}
                  <Box
                    component="form"
                    sx={[globalStyles.customFormUi, globalStyles.marginTop30]}
                  >
                    <FormControl>
                      <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        placeholder="Enter your address"
                        variant="filled"
                        sx={[cardStyles.customCardUi, globalStyles.padding0]}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={metaIcon} alt="icon" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </FormControl>
                    <Box sx={[globalStyles.dBlock, globalStyles.marginTop30]}>
                      <Button
                        fullWidth
                        sx={[globalStyles.btnPrimary, globalStyles.dBlock]}
                        color="primary"
                        onClick={handleTransferOpen}
                      >
                        <Box sx={globalStyles.btnTextPrimary}>
                          Transfer Asset
                        </Box>
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
            <Grid container sx={globalStyles.marginTop20} spacing={4}>
              {/* About and ownership history tabs */}
              <Grid item md={6}>
                <Tabs
                  value={value}
                  onChange={(event: React.SyntheticEvent, newValue: number) =>
                    setValue(newValue)
                  }
                  aria-label="basic tabs example"
                  sx={[globalStyles.primaryTabsUi, globalStyles.marginBottom0]}
                >
                  <Tab
                    sx={globalStyles.primaryTabsItem}
                    label="About"
                    {...a11yProps(1)}
                  />
                  <Tab
                    sx={globalStyles.primaryTabsItem}
                    label="Ownership History"
                    {...a11yProps(2)}
                  />
                </Tabs>
                <Box sx={globalStyles.marginTop30}>
                  <TabPanel value={value} index={0}>
                    <Typography component="h3">{selectedItem?.name}</Typography>
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
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <List
                      sx={[
                        cardStyles.gameAssetsModalScrollList,
                        cardStyles.gameAssetsTabList,
                      ]}
                    >
                      <ListItem>
                        <Box>
                          <Typography sx={cardStyles.gameAssetsLabelFlex}>
                            Bid placed by @CryrtoJack2
                          </Typography>
                          <Typography sx={cardStyles.gameAssetsModalLabel}>
                            April 3, 2021 at 6:17 pm
                          </Typography>
                        </Box>
                        <Box sx={cardStyles.gameAssetsTabDataRight}>
                          <Typography sx={cardStyles.gameAssetsLabelFlex}>
                            1.70 ETH
                          </Typography>
                          <Typography sx={cardStyles.gameAssetsModalLabel}>
                            $3,481.26
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Box>
                          <Typography sx={cardStyles.gameAssetsLabelFlex}>
                            Bid placed by @CryrtoJack2
                          </Typography>
                          <Typography sx={cardStyles.gameAssetsModalLabel}>
                            April 3, 2021 at 6:17 pm
                          </Typography>
                        </Box>
                        <Box sx={cardStyles.gameAssetsTabDataRight}>
                          <Typography sx={cardStyles.gameAssetsLabelFlex}>
                            1.70 ETH
                          </Typography>
                          <Typography sx={cardStyles.gameAssetsModalLabel}>
                            $3,481.26
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Box>
                          <Typography sx={cardStyles.gameAssetsLabelFlex}>
                            Bid placed by @CryrtoJack2
                          </Typography>
                          <Typography sx={cardStyles.gameAssetsModalLabel}>
                            April 3, 2021 at 6:17 pm
                          </Typography>
                        </Box>
                        <Box sx={cardStyles.gameAssetsTabDataRight}>
                          <Typography sx={cardStyles.gameAssetsLabelFlex}>
                            1.70 ETH
                          </Typography>
                          <Typography sx={cardStyles.gameAssetsModalLabel}>
                            $3,481.26
                          </Typography>
                        </Box>
                      </ListItem>
                    </List>
                  </TabPanel>
                </Box>
              </Grid>

              {/* Evolution modal card */}
              {evolutionRequired == true ? (
                <Grid item md={6}>
                  <Card sx={cardStyles.gameAssetsModalDetailCard}>
                    <Box component="label" sx={cardStyles.gameAssetsLabelFlex}>
                      <Typography sx={cardStyles.gameAssetsLabelLight}>
                        Evolution Requirements
                      </Typography>
                    </Box>
                    <Grid container sx={globalStyles.marginTop20}>
                      <Grid item md={6}>
                        <Box
                          component="label"
                          sx={[
                            cardStyles.gameAssetsLabelFlex,
                            cardStyles.gameAssetsLabelFlexColumn,
                          ]}
                        >
                          <Typography sx={cardStyles.gameAssetsLabelLight}>
                            From
                          </Typography>
                          <Typography>{selectedItem?.name}</Typography>
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
                            To
                          </Typography>
                          <Typography>Lilo NFT V2</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item md={12} sx={globalStyles.marginTop20}>
                        <List sx={cardStyles.gameAssetsNFTList}>
                          <ListItem>
                            <img src={nftIcon1} alt="nft" />
                            <Typography>Lilo NFT V2</Typography>
                            <Typography
                              sx={[
                                cardStyles.gameAssetsNFTListStats,
                                cardStyles.gameAssetsNFTListStatsGreen,
                              ]}
                            >
                              <img src={verifiedBadge} alt="verified" />3 of 3
                            </Typography>
                          </ListItem>
                          <ListItem>
                            <img src={nftIcon2} alt="nft" />
                            <Typography>Lilo NFT V2</Typography>
                            <Typography sx={cardStyles.gameAssetsNFTListStats}>
                              1 of 2
                            </Typography>
                          </ListItem>
                          <ListItem>
                            <img src={nftIcon3} alt="nft" />
                            <Typography>Sword1</Typography>
                            <Typography sx={cardStyles.gameAssetsNFTListStats}>
                              0 of 2
                            </Typography>
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                    <Box sx={[globalStyles.dBlock, globalStyles.marginTop20]}>
                      <Button
                        onClick={handleEvolveOpen}
                        fullWidth
                        sx={[globalStyles.btnSecondary, globalStyles.dBlock]}
                        color="primary"
                      >
                        <Box sx={globalStyles.btnTextSecondary}>Evolve</Box>
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ) : null}
            </Grid>
          </Box>
        </Fade>
      </Modal>

      {/* Evolve modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={evolveModalOpen}
        onClose={handleEvolveClose}
        closeAfterTransition
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={evolveModalOpen}>
          <Box
            sx={[
              cardStyles.customCardUi,
              modalStyles.gamenautModalUi,
              modalStyles.customStatsModal,
            ]}
          >
            <Box sx={modalStyles.customStatsModalBox}>
              <Box sx={modalStyles.statsModalIcon}>
                {/* <img src={convertPointLoading} alt="modal-icon" />
                                <img src={convertPointSorry} alt="modal-icon" />
                                <img src={convertPointDone} alt="modal-icon" /> */}
              </Box>
              <Typography component="h4" sx={modalStyles.customStatsModalTitle}>
                Evolve
              </Typography>
              <Typography sx={modalStyles.customStatsModalInfo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Typography>
            </Box>
            <Box sx={modalStyles.statsModalButton}>
              <Button sx={globalStyles.btnPrimary} color="primary">
                <Box sx={globalStyles.btnTextPrimary}>Try again</Box>
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Transfer assets stats modals */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={transferModalOpen}
        onClose={handleTransferClose}
        closeAfterTransition
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={transferModalOpen}>
          {isLoading ? (
            <Box
              sx={[
                cardStyles.customCardUi,
                modalStyles.gamenautModalUi,
                modalStyles.customStatsModal,
              ]}
            >
              <CircularProgress sx={globalStyles.customModalLoader} />
              <Typography component="h4" sx={modalStyles.customStatsModalTitle}>
                Transfer Asset
              </Typography>
            </Box>
          ) : (
            <Box
              sx={[
                cardStyles.customCardUi,
                modalStyles.gamenautModalUi,
                modalStyles.customStatsModal,
              ]}
            >
              <Box sx={modalStyles.gamenautModalHeader}>
                <Button onClick={handleTransferClose}>
                  <img src={modalClose} alt="close" />
                </Button>
              </Box>
              <Box sx={modalStyles.customStatsModalBox}>
                <Box sx={modalStyles.statsModalIcon}>
                  <img src={content.iconType} alt="modal-icon" />
                </Box>
                <Typography
                  onClick={dataChange}
                  component="h4"
                  sx={modalStyles.customStatsModalTitle}
                >
                  {content.title}
                </Typography>
                <Typography sx={modalStyles.customStatsModalInfo}>
                  {content.subTitle}
                </Typography>
              </Box>
            </Box>
          )}
        </Fade>
      </Modal>
    </>
  );
}
