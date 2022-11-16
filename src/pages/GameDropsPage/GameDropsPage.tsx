// External dependencies
import React, { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// SVG icons
import icRedirect from "../../assets/svg/gameDetail/ic-redirect.svg";
import icWatch from "../../assets/svg/gameDrops/ic-clock.svg";
import icEye from "../../assets/svg/gameDrops/ic-eye.svg";

// Internal dependencies
import PageHeader from "../../components/PageHeader";
import { NearContext } from "../../providers/NearProvider";
import { styles } from "./GameDropsPage.style";
import { styles as globalStyles } from "../../components/Common/Global.style";
import { styles as cardStyles } from "../../components/Common/GameDetailCard.style";

// JSON data
import GameDropsHero from "./GameDropsBanner/GameDropsBanner";
import GameDropsCounter from "./GameDropsCounter/GameDropsCounter";
import GameDropsAssetsMint from "./GameDropsAssetsMint/GameDropsAssetsMint";
import { store, useAppDispatch } from "../../store/store";
import { getLatestDrop } from "../../store/slices/Drop/thunks/currentDrop";
import { selectUserInfo } from "../../store/selectors/UserSelector";

export default function GameDropsPage() {
  const dispatch = useAppDispatch();
  // Drops notification state
  const [dropNotification, setDropNotification] = useState(false);

  useEffect(() => {
    getDrop();
  }, []);

  const getDrop = async () => {
    // Check if user data already stored
    let stateDrop = store.getState().drop;

    if (
      !stateDrop ||
      !stateDrop.currentDrop ||
      !stateDrop.currentDrop.drop_id
    ) {
      await dispatch(getLatestDrop());
    }
  };

  return (
    <Box sx={globalStyles.dashboardWrapper}>
      <Box sx={[globalStyles.mainWrapper, globalStyles.mainWrapperPadding]}>
        <PageHeader userName={"Michael"} pageTitle="Drop Page" />
        <Box sx={globalStyles.marginTop30}>
          {dropNotification && (
            <Box sx={[cardStyles.customCardUi, styles.dropNotificationBar]}>
              <Link href="/" sx={styles.dropNotificationLink}>
                Rosario dawson walks back punisher confirmation comments
                <img src={icRedirect} alt="redirect" />
              </Link>
              <Box sx={styles.dropNotificationTimes}>
                <Typography>
                  <img src={icEye} alt="icon" />4 min
                </Typography>
                <Typography>
                  <img src={icWatch} alt="icon" />
                  3255
                </Typography>
                <Typography>03 Sep,2022</Typography>
              </Box>
            </Box>
          )}
          <GameDropsHero />
        </Box>

        {/* Drops counter section */}
        <GameDropsCounter />

        {/* Drops assets and mint section */}
        <GameDropsAssetsMint />
      </Box>
    </Box>
  );
}
