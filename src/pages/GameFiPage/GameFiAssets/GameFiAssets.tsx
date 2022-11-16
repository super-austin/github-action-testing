// External dependencies
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Fade,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputAdornment,
  List,
  ListItem,
  Menu,
  MenuItem,
  Modal,
  Popper,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";

// SVG icons
import icFilter from "../../../assets/svg/gameFi/ic-filter.svg";
import searchBarIcon from "../../../assets/svg/gameFi/search-bar-icon.svg";
import readMoreIcon from "../../../assets/svg/gameDetail/read-more.svg";
import largeBadgeIcon from "../../../assets/svg/gameFi/large-badge-icon.svg";
import smallBadgeIcon from "../../../assets/svg/gameFi/small-badge-icon.svg";
import closeIcon from "../../../assets/svg/gameFi/modals-icon/modal-close.svg";
import infoCircleIcon from "../../../assets/svg/gameFi/info-circle-purple.svg";
import stateIconAssets from "../../../assets/svg/empty-states/empty-assets-icon.svg";
import emptyAssetsGraphic from "../../../assets/svg/empty-states/empty-assets-graphic.svg";
import modalClose from "../../../assets/svg/gameFi/modals-icon/modal-close.svg";
import protocolIcon from "../../../assets/svg/gameFi/protocol-icon.svg";

// Internal dependencies
import { styles } from "../GameFiPage.style";
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles as modalStyles } from "../../../components/Common/GameDetailModal.style";
import Headings from "../../../components/Headings";
import GameFiAllAssets from "./GameFiAllAssets.tsx";
import GameFiMintedAssets from "./GameFiMintedAssets";
import GameFiNonMintedAssets from "./GameFiNonMintedAssets";
import EmptyStates from "../../../components/EmptyStates";
import { collectibleCards } from "../../GameDetailPage/GameDetailPage.const";

// JSON data
import { transferAssetsList } from "../GameFi.const";
import { FilterStatus } from "./GameFiAssets.types";

// Gamefi assets tabs
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

export default function GameFiAssets() {
  // Empty states
  const [gameAssets] = useState(true);

  const [value, setValue] = useState(0);
  const [number, setNumber] = useState<number>(2);

  // Dropdown open
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (id: number) => {
    setAnchorEl(null);
    setNumber(id);
  };

  // Filter open
  const [openFilter, setOpenFilter] = useState(false);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [filterKeys, setFilterKeys] = useState<Array<FilterStatus>>([]);

  const filterHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
    setOpenFilter((previousOpen) => !previousOpen);
  };
  const closeFilter = () => {
    setOpenFilter(false);
    setFilterAnchorEl(null);
  };

  // Transfer assets modal open
  const [gameAssetsTransfer] = useState(true);
  const [transferModalOpen, setOpenTransferModal] = useState(false);
  const handleTransferOpen = () => setOpenTransferModal(true);
  const handleTransferClose = () => setOpenTransferModal(false);

  const handleFilterCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    category: string,
    keyword: string
  ) => {
    let tmpAry = [];
    console.log(event.target.checked);
    if (event.target.checked) {
      tmpAry = [...filterKeys, { category, keyword }];
    } else {
      tmpAry = filterKeys.filter((item) => {
        if (item.category === category) return item.keyword !== keyword;
        else return true;
      });
    }
    console.log(tmpAry);
    setFilterKeys(tmpAry);
  };

  const [searchKeyword, setSearchKeyword] = useState<string>();

  const onChangeKeyword = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(event.target.value);
    setSearchKeyword(event.target.value);
  };

  return (
    <>
      <Box
        sx={[
          globalStyles.gameTabsWrapper,
          globalStyles.customSectionSpacing,
          globalStyles.marginTop0,
        ]}
      >
        <Grid container direction="row" justifyContent="space-between">
          <Grid item sm={6}>
            <Headings title="Game Assets" counts={0} lineColor={""} />
          </Grid>
          <Grid item sm={6} sx={globalStyles.textAlignRight}>
            <Box sx={[styles.gameFiTooltipGroup, globalStyles.marginLeftAuto]}>
              <Tooltip
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                placement="top-start"
              >
                <Typography
                  sx={[styles.gameFiConvertTooltip, globalStyles.marginBottom0]}
                >
                  <img src={infoCircleIcon} alt="info" />
                  Concurrent mint of assets
                </Typography>
              </Tooltip>
              <Button
                color="secondary"
                sx={globalStyles.btnSecondary}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Box component="span" sx={globalStyles.btnTextSecondary}>
                  View
                </Box>
                <img src={readMoreIcon} alt="read-more" className="btn-icon" />
              </Button>
            </Box>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={[globalStyles.gamenautCustomDropdown]}
            >
              <MenuItem
                onClick={() => handleClose(3)}
                sx={globalStyles.dropdownItemActive}
              >
                <img src={largeBadgeIcon} alt="badge-icon" />
                Large Icons
              </MenuItem>
              <MenuItem onClick={() => handleClose(2)}>
                <img src={smallBadgeIcon} alt="badge-icon" />
                Small Icons
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <Grid container alignItems="center" sx={globalStyles.marginBottom36}>
          <Grid item md={4}>
            <Tabs
              value={value}
              onChange={(event: React.SyntheticEvent, newValue: number) =>
                setValue(newValue)
              }
              aria-label="basic tabs example"
              sx={[
                globalStyles.primaryTabsUi,
                globalStyles.marginBottom0,
                styles.gameAssetsTabsUi,
              ]}
            >
              <Tab
                sx={globalStyles.primaryTabsItem}
                label={`All Assets (${collectibleCards.length})`}
                {...a11yProps(1)}
              />
              <Tab
                sx={globalStyles.primaryTabsItem}
                label={`Minted (${
                  collectibleCards.filter((item) => item.assetMinted === true)
                    .length
                })`}
                {...a11yProps(2)}
              />
              <Tab
                sx={globalStyles.primaryTabsItem}
                label={`Not Minted(${
                  collectibleCards.filter((item) => item.assetMinted === false)
                    .length
                })`}
                {...a11yProps(3)}
              />
            </Tabs>
          </Grid>
          <Grid item md={5}>
            <Box sx={styles.gameFiFilterRow}>
              <FormControl
                variant="standard"
                sx={globalStyles.customSearchFormUi}
              >
                <Input
                  id="input-with-icon-adornment"
                  placeholder="Enter a name to filter"
                  onChange={(e) => onChangeKeyword(e)}
                  startAdornment={
                    <InputAdornment position="start">
                      <img src={searchBarIcon} alt="control" />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                sx={globalStyles.btnPrimaryLink}
                color="primary"
                type="button"
                onClick={filterHandleClick}
              >
                <img
                  src={icFilter}
                  alt="read-more"
                  className="btn-icon left-icon"
                />
                <Box sx={globalStyles.btnTextSecondary}>Filter</Box>
              </Button>
            </Box>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>

        {gameAssets === false ? (
          <Box>
            <EmptyStates
              icon={stateIconAssets}
              title={"Game Assets"}
              content={
                "This section will show all the assets owned by you for a game. Game assets will appear here as soon as you receive them in the game"
              }
              graphic={emptyAssetsGraphic}
              titleCapital={""}
            />
          </Box>
        ) : (
          <Box sx={styles.gameAssetsTabsPanel}>
            <TabPanel value={value} index={0}>
              <GameFiAllAssets
                number={number}
                filter={filterKeys}
                keyword={searchKeyword}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <GameFiMintedAssets
                number={number}
                filter={filterKeys}
                keyword={searchKeyword}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <GameFiNonMintedAssets
                number={number}
                filter={filterKeys}
                keyword={searchKeyword}
              />
            </TabPanel>
          </Box>
        )}
      </Box>

      {/* Asset details modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={transferModalOpen}
        onClose={handleTransferClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={transferModalOpen}>
          <Box sx={[cardStyles.customCardUi, modalStyles.gamenautModalUi]}>
            <Box sx={modalStyles.gamenautModalHeader}>
              <Typography component="h4" sx={modalStyles.gamenautModalTitle}>
                Transfer Assets
              </Typography>
              <Button onClick={handleTransferClose}>
                <img src={modalClose} alt="close" />
              </Button>
            </Box>
            {transferAssetsList?.map((item, index) => {
              return (
                <Grid sx={globalStyles.marginBottom30} container key={index}>
                  <Grid item sm={4}>
                    <Box sx={styles.transferAssetThumb}>
                      <img src={item.thumb} alt="transfer-icon" />
                    </Box>
                  </Grid>
                  <Grid item sm={8}>
                    <Card sx={[styles.transferAssetModalCard]}>
                      <Box sx={styles.transferAssetCheckbox}>
                        <Checkbox
                          sx={[
                            globalStyles.cardCheckboxUi,
                            globalStyles.cardCheckboxUiGreen,
                          ]}
                        />
                      </Box>
                      <List>
                        {item.list?.map((ele, index) => {
                          return (
                            <ListItem key={index}>
                              <Typography sx={styles.transferLabelText}>
                                {ele.label}
                              </Typography>
                              <Typography sx={styles.transferModalListText}>
                                {ele.value}
                              </Typography>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Card>
                  </Grid>
                </Grid>
              );
            })}
            <Box
              sx={[
                globalStyles.customFormUi,
                globalStyles.marginTop30,
                styles.transferModalForm,
              ]}
            >
              <FormControl variant="standard">
                <Input
                  id="input-with-icon-adornment"
                  placeholder="Enter your address"
                  startAdornment={
                    <InputAdornment position="start">
                      <img src={protocolIcon} alt="control" />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button sx={globalStyles.btnPrimary} color="primary">
                <Box sx={globalStyles.btnTextPrimary}>Confirm</Box>
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Filter Bar */}
      <Popper
        sx={globalStyles.customFilterModal}
        open={openFilter}
        anchorEl={filterAnchorEl}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={[globalStyles.customFilterBoxUi, cardStyles.customCardUi]}>
              <Box sx={globalStyles.customFilterHeader}>
                <Typography sx={globalStyles.filterTitle}>Filter</Typography>
                <Button onClick={closeFilter}>
                  <img src={closeIcon} alt="close" />
                </Button>
              </Box>
              <List sx={globalStyles.customFilterList}>
                <Typography sx={globalStyles.customFilterTitle}>
                  Type of Asset
                </Typography>
                <ListItem>
                  <FormControlLabel
                    control={<Checkbox sx={globalStyles.cardCheckboxUi} />}
                    label="Collectible card"
                  />
                </ListItem>
                <ListItem>
                  <FormControlLabel
                    control={<Checkbox sx={globalStyles.cardCheckboxUi} />}
                    label="Avatar frame"
                  />
                </ListItem>
                <ListItem>
                  <FormControlLabel
                    control={<Checkbox sx={globalStyles.cardCheckboxUi} />}
                    label="Profile background"
                  />
                </ListItem>
              </List>
              <List
                sx={[
                  globalStyles.customFilterList,
                  globalStyles.marginBottom20,
                ]}
              >
                <Typography sx={globalStyles.customFilterTitle}>
                  Collection
                </Typography>
                <Typography sx={globalStyles.customFilterSubTitle}>
                  Rarity
                </Typography>
                <ListItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={globalStyles.cardCheckboxUi}
                        onChange={(e) =>
                          handleFilterCheck(e, "Rarity", "Unusual")
                        }
                      />
                    }
                    label="Unusual"
                  />
                </ListItem>
                <ListItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={globalStyles.cardCheckboxUi}
                        onChange={(e) =>
                          handleFilterCheck(e, "Rarity", "Ordinary")
                        }
                      />
                    }
                    label="Ordinary"
                  />
                </ListItem>
                <ListItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={globalStyles.cardCheckboxUi}
                        onChange={(e) => handleFilterCheck(e, "Rarity", "Rare")}
                      />
                    }
                    label="Rare"
                  />
                </ListItem>
              </List>
              <List sx={globalStyles.customFilterList}>
                <Typography sx={globalStyles.customFilterSubTitle}>
                  Utility
                </Typography>
                <ListItem>
                  <FormControlLabel
                    control={<Checkbox sx={globalStyles.cardCheckboxUi} />}
                    label="Unusual"
                  />
                </ListItem>
                <ListItem>
                  <FormControlLabel
                    control={<Checkbox sx={globalStyles.cardCheckboxUi} />}
                    label="Ordinary"
                  />
                </ListItem>
                <ListItem>
                  <FormControlLabel
                    control={<Checkbox sx={globalStyles.cardCheckboxUi} />}
                    label="Rare"
                  />
                </ListItem>
              </List>
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
}
