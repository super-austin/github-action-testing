// External dependencies
import { useEffect, useState } from "react";
import { Card, Grid, Tab, Tabs } from "@mui/material";

// SVG icons

// Internal dependencies
import { styles } from "../GameDropsPage.style";
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import DropsTabHolders from "./DropsTabHolders";
import DropsTabWhitelist from "./DropsTabWhitelist";
import DropsTabPublic from "./DropsTabPublic";
import { TabPanel, a11yProps } from "../../../components/TabPanel/TabPanel";
import { store } from "../../../store/store";
import IDrop from "../../../interfaces/IDrop";

export default function GameDropsCounter() {
  // States for tab panel
  const [value, setValue] = useState(0);
  const [drop, setDrop] = useState<IDrop>();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    store.subscribe(() => {
      let stateDrop = store.getState().drop;
      setDrop(stateDrop.currentDrop);
    });
  }, []);

  return (
    <Grid container justifyContent="center" sx={styles.dropsCountWrapper}>
      <Grid item sm={12} md={12} lg={9}>
        <Card sx={[cardStyles.customCardUi, styles.dropCountCard]}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={globalStyles.primaryTabsUi}
          >
            {drop && drop.private && drop.private.ts_start && (
              <Tab
                sx={globalStyles.primaryTabsItem}
                label="Holders"
                {...a11yProps(0)}
              />
            )}
            {drop && drop.community && drop.community.ts_start && (
              <Tab
                sx={globalStyles.primaryTabsItem}
                label="Whitelist"
                {...a11yProps(1)}
              />
            )}
            {drop && drop.public && drop.public.ts_start && (
              <Tab
                sx={globalStyles.primaryTabsItem}
                label="Public Sale"
                {...a11yProps(2)}
              />
            )}
          </Tabs>

          <TabPanel value={value} index={0}>
            <DropsTabHolders />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DropsTabWhitelist />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <DropsTabPublic />
          </TabPanel>
        </Card>
      </Grid>
    </Grid>
  );
}
