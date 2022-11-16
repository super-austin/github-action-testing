// External dependencies
import { useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CircularProgress,
  Fade,
  FormControl,
  Grid,
  Input,
  LinearProgress,
  List,
  ListItem,
  Modal,
  Typography,
} from "@mui/material";

// SVG icons
import readMoreIcon from "../../../assets/svg/gameDetail/read-more.svg";
import icEthCoin from "../../../assets/svg/gameDrops/ic-eth-coin.svg";
import modalClose from "../../../assets/svg/gameFi/modals-icon/modal-close.svg";
import assetDetailsCover from "../../../assets/svg/gameFi/asset-details-cover.svg";
import collectIconDiscord from "../../../assets/svg/gameDetail/collectibles/Icon_Discord.svg";
import icNear from "../../../assets/svg/gameDrops/ic-near.svg";
import convertPointSorry from "../../../assets/svg/gameFi/modals-icon/sorry-icon.svg";
import convertPointSorryAlert from "../../../assets/svg/gameFi/modals-icon/sorry-alert.svg";
import convertPointDone from "../../../assets/svg/gameFi/modals-icon/done-icon.svg";
import assetMintThumbSmall from "../../../assets/img/drops/mint-card-cover-1.png";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as modalStyles } from "../../../components/Common/GameDetailModal.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import Headings from "../../../components/Headings";
import { NearContext } from "../../../providers/NearProvider";

// JSON data
import { assetMintCard } from "../GameDrops.const";
import { gameAssetsAttributesList } from "../../GameFiPage/GameFi.const";
import { store } from "../../../store/store";
import IDrop, { TokenDrop } from "../../../interfaces/IDrop";
import { Phase } from "../../../store/types/Drop.types";
import INFT from "../../../interfaces/INFT";
import { stringify } from "querystring";

export default function GameDropsAssetsMint() {
  // Progress states
  const [progress, setProgress] = useState(50);

  // Count states
  const [count, setCount] = useState(0);

  const [selectedToken, setSelectedToken] = useState<TokenDrop>();
  // Modal states
  const [open, setOpen] = useState(false);
  const handleOpen = (token: TokenDrop) => {
    setSelectedToken(token);
    console.log({ selectedToken });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [transferModalOpen, setOpenTransferModal] = useState(false);
  const handleTransferOpen = (id: any) => {
    setOpenTransferModal(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  const handleTransferClose = () => setOpenTransferModal(false);

  const handleChange = (e: any) => {
    setCount(e.target.value);
  };

  const [drop, setDrop] = useState<IDrop>();
  const [tokens, setTokens] = useState<TokenDrop[]>([]);
  const [phase, setPhase] = useState<Phase>();

  useEffect(() => {
    let stateDrop = store.getState().drop;
    setDrop(stateDrop.currentDrop);
    updateTokens(stateDrop.selectedPhase, stateDrop.currentDrop);
    setPhase(stateDrop.selectedPhase);

    console.log(phase);

    store.subscribe(() => {
      let stateDrop = store.getState().drop;
      setDrop(stateDrop.currentDrop);
      updateTokens(stateDrop.selectedPhase, stateDrop.currentDrop);

      console.log(phase);

      setPhase(stateDrop.selectedPhase);
    });
  }, []);

  const updateTokens = (phase: Phase, drop: IDrop) => {
    switch (phase) {
      case Phase.PRIVATE:
        setTokens(drop.private.tokens);
        break;
      case Phase.COMMUNITY:
        setTokens(drop.community.tokens);
        break;
      case Phase.PUBLIC:
        setTokens(drop.public.tokens);
        break;
    }
  };

  //Inner modal states
  const [sufficientFunds, setSufficientFunds] = useState(true);
  const [assetMintedSuccess, setAssetMintedSuccess] = useState(false);

  // Loading states
  const [isLoading, setIsLoading] = useState(true);

  const { loginNear, isWalletSignedIn, mintNFT } = useContext(NearContext)!;

  const handleConnectWallet = async () => {
    await loginNear();
  };

  // Mint
  const handleMint = async () => {
    // check if wallet connected
    // -> if not display connect wallet modal
    if (!isWalletSignedIn) {
      handleTransferOpen(true);
    }
    // -> if connected execute mint
    if (drop && phase && selectedToken) {
      await mintNFT(drop.name, phase.toString(), selectedToken.title, count, 1);
    }
  };

  return (
    <Box sx={globalStyles.customSectionSpacing}>
      <Grid container alignItems="center">
        <Grid item sm={6}>
          <Headings
            title={"Assets and Mint "}
            counts={0}
            lineColor={"purple"}
          />
        </Grid>
        <Grid item sm={6} sx={globalStyles.textAlignRight}>
          <Button color="secondary" sx={globalStyles.btnSecondary}>
            <Box component="span" sx={globalStyles.btnTextSecondary}>
              View All
            </Box>
            <img
              src={readMoreIcon}
              alt="read-more"
              className="btn-icon right"
            />
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={globalStyles.marginTop20}>
        {tokens.map((token, index) => {
          return (
            <Grid key={index} item md={4}>
              <Card sx={[cardStyles.assetMintCardBox]}>
                <Box sx={cardStyles.assetMintCardThmb}>
                  <img src={token.asset_data?.media} alt="asset-card-thumb" />
                </Box>
                {/* <Box sx={cardStyles.assetMintStats}>
                                        <img src={item.statsIcon} alt="asset-card-status" />
                                    </Box> */}
                <Box sx={cardStyles.assetMintLegend}>
                  {token.asset_data?.rarity}
                </Box>
                <Card sx={cardStyles.assetMintCard}>
                  <Typography sx={cardStyles.assetMintCoinText}>
                    <img src={icEthCoin} alt="ETH" />
                    {token.price} Near
                    {/* <span>{item.price}</span> */}
                  </Typography>
                  <Typography variant="h2" sx={cardStyles.assetMintTitle}>
                    {token.asset_data?.title}
                  </Typography>
                  <Box>
                    <Box sx={cardStyles.progressLabel}>
                      {/* <Typography sx={cardStyles.progressText}>
                                                    {item.holderSupply}
                                                </Typography>
                                                <Typography sx={[cardStyles.progressTextRight, cardStyles.progressText]}>
                                                    {item.holderSupplyData}
                                                </Typography> */}
                    </Box>
                    <LinearProgress
                      sx={[globalStyles.customProgressUi]}
                      variant="determinate"
                      value={progress}
                    />
                  </Box>
                  <Box sx={cardStyles.assetProgressPlain}>
                    <Box sx={cardStyles.progressLabel}>
                      {/* <Typography sx={cardStyles.progressText}>
                                                    {item.totalSupply}
                                                </Typography>
                                                <Typography sx={[cardStyles.progressTextRight, cardStyles.progressText]}>
                                                    {item.totalSupplyData}
                                                </Typography> */}
                    </Box>
                    <LinearProgress
                      sx={[
                        globalStyles.customProgressUi,
                        globalStyles.progressPlainUi,
                      ]}
                      variant="determinate"
                      value={progress}
                    />
                  </Box>
                  <Grid
                    container
                    spacing={3}
                    sx={cardStyles.assetCardCounterRow}
                  >
                    <Grid item sm={6}>
                      <ButtonGroup
                        variant="text"
                        sx={cardStyles.assetCardCountGroup}
                      >
                        <Button
                          sx={[
                            globalStyles.btnSecondary,
                            globalStyles.btnSecondaryRounded,
                          ]}
                          color="secondary"
                          onClick={() => setCount(Math.max(count - 1, 0))}
                        >
                          <Box sx={globalStyles.btnTextSecondary}>-</Box>
                        </Button>
                        <Box sx={[globalStyles.customFormUi]}>
                          <FormControl variant="standard">
                            <Input
                              sx={cardStyles.customCardUi}
                              placeholder="5"
                              value={count}
                              onChange={handleChange}
                            />
                          </FormControl>
                        </Box>
                        <Button
                          sx={[
                            globalStyles.btnSecondary,
                            globalStyles.btnSecondaryRounded,
                          ]}
                          color="secondary"
                          onClick={() => setCount(count + 1)}
                        >
                          <Box sx={globalStyles.btnTextSecondary}>+</Box>
                        </Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid item sm={6} sx={globalStyles.textAlignRight}>
                      <Button
                        sx={[
                          globalStyles.btnPrimary,
                          cardStyles.assetCardBodyBtn,
                        ]}
                        color="primary"
                        onClick={() => handleOpen(token)}
                      >
                        <Box sx={globalStyles.btnTextPrimary}>Mint</Box>
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Drops minted asset modal */}
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
                  <img
                    src={
                      selectedToken &&
                      selectedToken.asset_data &&
                      selectedToken.asset_data.media
                    }
                    alt="collectible-thumb"
                  />
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
                    <Typography>
                      {selectedToken && selectedToken.title}
                    </Typography>
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
                    <Grid container justifyContent="space-between">
                      <Grid item md={4}>
                        <Typography sx={cardStyles.gameAssetsModalLabel}>
                          Select numbers of mints
                        </Typography>
                      </Grid>
                      <Grid item md={6}>
                        <ButtonGroup
                          variant="text"
                          sx={cardStyles.assetCardCountGroup}
                        >
                          <Button
                            sx={[
                              globalStyles.btnSecondary,
                              globalStyles.btnSecondaryRounded,
                            ]}
                            color="secondary"
                            onClick={() => setCount(Math.max(count - 1, 0))}
                          >
                            <Box sx={globalStyles.btnTextSecondary}>-</Box>
                          </Button>
                          <Box sx={[globalStyles.customFormUi]}>
                            <FormControl variant="standard">
                              <Input
                                sx={cardStyles.customCardUi}
                                placeholder="5"
                                value={count}
                                onChange={handleChange}
                              />
                            </FormControl>
                          </Box>
                          <Button
                            sx={[
                              globalStyles.btnSecondary,
                              globalStyles.btnSecondaryRounded,
                            ]}
                            color="secondary"
                            onClick={() => setCount(count + 1)}
                          >
                            <Box sx={globalStyles.btnTextSecondary}>+</Box>
                          </Button>
                        </ButtonGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Box
                    component="form"
                    sx={[globalStyles.customFormUi, globalStyles.marginTop30]}
                  >
                    <Box sx={[globalStyles.dBlock, globalStyles.marginTop30]}>
                      <Button
                        fullWidth
                        sx={[globalStyles.btnPrimary, globalStyles.dBlock]}
                        color="primary"
                        onClick={handleMint}
                      >
                        <Box sx={globalStyles.btnTextPrimary}>Mint</Box>
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
            <Grid container sx={globalStyles.marginTop20} spacing={4}>
              <Grid item md={6}>
                <Box sx={globalStyles.marginTop30}>
                  <Typography component="h3">
                    {selectedToken &&
                      selectedToken.asset_data &&
                      selectedToken.asset_data.title}
                  </Typography>
                  <Typography
                    sx={[
                      cardStyles.gameAssetsTabsText,
                      globalStyles.marginTop20,
                    ]}
                  >
                    {selectedToken &&
                      selectedToken.asset_data &&
                      selectedToken.asset_data.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
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
        {isWalletSignedIn === true ? (
          sufficientFunds === true ? (
            assetMintedSuccess === true ? (
              <Fade in={transferModalOpen}>
                {isLoading ? (
                  <Box
                    sx={[
                      cardStyles.customCardUi,
                      modalStyles.gamenautModalUi,
                      modalStyles.customStatsModal,
                    ]}
                  >
                    <CircularProgress
                      sx={[
                        globalStyles.customModalLoader,
                        globalStyles.customModalTransaction,
                      ]}
                    />
                    <Typography
                      component="h4"
                      sx={modalStyles.customStatsModalTitle}
                    >
                      Please wait while your Asset is minted
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
                        <img src={convertPointDone} alt="modal-icon" />
                      </Box>
                      <Typography
                        component="h4"
                        sx={modalStyles.customStatsModalTitle}
                      >
                        Congratulations!
                      </Typography>
                      <Typography sx={modalStyles.customStatsModalInfo}>
                        Your NFT has been minted successfully
                      </Typography>
                    </Box>
                    <Box sx={modalStyles.statsModalDropData}>
                      <Box sx={modalStyles.statsDropName}>
                        <img src={assetMintThumbSmall} />
                        <Typography>Anubis</Typography>
                      </Box>
                      <List>
                        <ListItem>
                          <Box
                            component="span"
                            sx={modalStyles.statsDropListLabel}
                          >
                            Price
                          </Box>
                          <Box sx={modalStyles.statsDropListRight}>
                            <Typography sx={modalStyles.statsDropListTitle}>
                              1,990 ETH
                            </Typography>
                            <Typography>$25.36</Typography>
                          </Box>
                        </ListItem>
                        <ListItem>
                          <Box
                            component="span"
                            sx={modalStyles.statsDropListLabel}
                          >
                            Quantity
                          </Box>
                          <Box sx={modalStyles.statsDropListRight}>
                            <Typography sx={modalStyles.statsDropListTitle}>
                              240
                            </Typography>
                          </Box>
                        </ListItem>
                      </List>
                    </Box>
                    <Box sx={modalStyles.statsModalButton}>
                      <Button
                        sx={globalStyles.btnPrimary}
                        color="primary"
                        onClick={handleTransferClose}
                      >
                        <Box sx={globalStyles.btnTextPrimary}>
                          View in GameFi
                        </Box>
                      </Button>
                    </Box>
                  </Box>
                )}
              </Fade>
            ) : (
              // Asset minted failed
              <Fade in={transferModalOpen}>
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
                      <img src={convertPointSorry} alt="modal-icon" />
                    </Box>
                    <Typography
                      component="h4"
                      sx={modalStyles.customStatsModalTitle}
                    >
                      Sorry...
                    </Typography>
                    <Typography sx={modalStyles.customStatsModalInfo}>
                      Please, try again
                    </Typography>
                  </Box>
                  <Box sx={modalStyles.statsModalButton}>
                    <Button
                      sx={globalStyles.btnPrimary}
                      color="primary"
                      onClick={handleTransferClose}
                    >
                      <Box sx={globalStyles.btnTextPrimary}>Try again</Box>
                    </Button>
                  </Box>
                </Box>
              </Fade>
            )
          ) : (
            // No sufficient funds
            <Fade in={transferModalOpen}>
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
                    <img src={convertPointSorryAlert} alt="modal-icon" />
                  </Box>
                  <Typography
                    component="h4"
                    sx={modalStyles.customStatsModalTitle}
                  >
                    Sorry...
                  </Typography>
                  <Typography sx={modalStyles.customStatsModalInfo}>
                    You don't have sufficient funds to mint.
                  </Typography>
                </Box>
                <Box sx={modalStyles.statsModalButton}>
                  <Button
                    sx={globalStyles.btnSecondary}
                    color="secondary"
                    onClick={handleTransferClose}
                  >
                    <Box sx={globalStyles.btnTextSecondary}>Close</Box>
                  </Button>
                </Box>
              </Box>
            </Fade>
          )
        ) : (
          // No wallet present
          <Fade in={transferModalOpen}>
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
                  <img src={convertPointSorry} alt="modal-icon" />
                </Box>
                <Typography
                  component="h4"
                  sx={modalStyles.customStatsModalTitle}
                >
                  Sorry...
                </Typography>
                <Typography sx={modalStyles.customStatsModalInfo}>
                  You don't have a wallet yet, you can select a provider and
                  create one now.
                </Typography>
              </Box>
              <Box sx={modalStyles.statsModalButton}>
                <Button
                  sx={[globalStyles.btnSecondary, globalStyles.btnFlex]}
                  color="secondary"
                  onClick={handleConnectWallet}
                >
                  <Box sx={modalStyles.statsModalBtnIcon}>
                    <img src={icNear} alt="near" />
                    Near
                  </Box>
                  <Box sx={globalStyles.btnTextSecondary}>Connect and mint</Box>
                </Button>
              </Box>
            </Box>
          </Fade>
        )}
      </Modal>
    </Box>
  );
}
