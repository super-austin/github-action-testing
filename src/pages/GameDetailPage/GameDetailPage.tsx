// External dependencies
import * as React from 'react';
import {
    Box, 
    Button, 
    Grid,
    List,
    ListItem,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";

// Internal dependencies
import { styles } from "../../pages/GameDetailPage/GameDetailPage.style";
import { styles as globalStyles } from "../../components/Common/Global.style";
import Sidebar from "../../components/Sidebar";
import GameHardwareTab from "./GameDetailHardware/GameHardwareTab";
import GameInformationTab from "./GameDetailInformation/GameInformationTab";
import GameCollectiblesTab from "./GameDetailCollectibles/GameCollectiblesTab";
import GameNewsTab from "./GameDetailNews/GameNewsTab";

// JSON data
import { gameCoverInfo } from './GameDetailPage.const';

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
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
}

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}  

export default function GameDetailPage() {
    const [ value, setValue ] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
            <Box sx={globalStyles.mainWrapper}>
                <Box sx={styles.gameCoverCard}>
                    {
                        gameCoverInfo?.map((item, index) => {
                            return (
                                <Grid 
                                    container 
                                    direction="row" 
                                    justifyContent="space-between"
                                    alignItems="flex-end"
                                    key={index}
                                >
                                    <Grid item xs={4}>
                                        <Box sx={styles.gameInfoCard}>
                                            <Box sx={styles.gamePic}>
                                                <img src={item.thumb} alt="game-pic" />
                                            </Box>
                                            <Box>
                                                <Typography sx={styles.category}>{item.tagline}</Typography>
                                                <Typography variant="h1" sx={styles.gameTitle}>{item.gameTitle}</Typography>
                                                <List component="ul" sx={styles.gameTags}>
                                                    {
                                                        item.gameTags?.map((ele, index) => {
                                                            return (
                                                                <ListItem key={index}>
                                                                    {ele.tag}
                                                                </ListItem>
                                                            )
                                                        })
                                                    }
                                                </List>
                                                <Typography variant="h5" sx={styles.gameBy}>
                                                    by
                                                    <span>{item.gameBy}</span>
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography sx={styles.gameInfo}>
                                            {item.gameDetail}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Box>
                                            <Button sx={globalStyles.btnPrimary} color="primary">
                                                <Box sx={globalStyles.btnTextPrimary}>Download Game</Box>
                                            </Button>
                                        </Box>
                                        <Typography sx={styles.gameRequired}>
                                            Available on Windows
                                            <span>/Mac/Mobile icons</span>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                </Box>

                <Box sx={globalStyles.gameTabsWrapper}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={globalStyles.primaryTabsUi}>
                        <Tab sx={globalStyles.primaryTabsItem} label="Game Information" {...a11yProps(0)} />
                        <Tab sx={globalStyles.primaryTabsItem} label="Collectibles" {...a11yProps(1)} />
                        <Tab sx={globalStyles.primaryTabsItem} label="Hardware Requirements" {...a11yProps(2)} />
                        <Tab sx={globalStyles.primaryTabsItem} label="Events/News/Announcements" {...a11yProps(3)} />
                    </Tabs>
                    
                    <Box>
                        <TabPanel value={value} index={0}>
                            <GameInformationTab />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <GameCollectiblesTab />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <GameHardwareTab />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <GameNewsTab />
                        </TabPanel>
                    </Box>
                </Box>
            </Box> 
    )
}