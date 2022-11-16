// External dependencies
import { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";

// SVG icons
import welcomeHand from "../../assets/svg/welcomeHandIcon.svg";
import searchBarIcon from "../../assets/svg/gameFi/search-bar-icon.svg";
import notificationIcon from "../../assets/svg/headerNotificationIcon.svg";
import logoutIcon from "../../assets/svg/ic-header-logout.svg";
import loginIcon from "../../assets/svg/ic-header-login.svg";
import icBack from "../../assets/svg/ic-page-back.svg";

// Internal dependencies
import { styles } from "./PageHeader.style";
import { styles as globalStyles } from "../../components/Common/Global.style";
import { Box } from "@mui/system";

// User Login & Logout
import { IUser } from "../../helper/GGAuthHelper/GGAuthHelper.types";
import { getUserData, logoutUser } from "../../store/slices/User/thunks/user";
import { store, useAppDispatch } from "../../store/store";
import { AUTH_SERVER_URL } from "../../constants/api";
import {
  CLIENT_ID,
  CODE_CHALLENGE,
  CODE_CHALLENGE_METHOD,
  STATE,
} from "../../constants/auth";
import { resetCollectibles } from "../../store/slices/GameInfo/thunks/collectibles";

const GG_SERVER_URL = `${AUTH_SERVER_URL}/sign-in/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${window.location.href}&code_challenge=${CODE_CHALLENGE}&code_challenge_method=${CODE_CHALLENGE_METHOD}&state=${STATE}`;

export default function PageHeader({
  userName,
  pageTitle,
}: {
  userName: string;
  pageTitle: string;
}) {
  const [user, setUser] = useState<IUser>();
  const dispatch = useAppDispatch();

  // Login function
  const onLogin = async () => {
    await getUser();
    if (!user || !user.userId) {
      window.location.href = GG_SERVER_URL;
    }
  };

  // Logout function
  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(resetCollectibles());
  };

  const getUser = async () => {
    // Check if user data already stored
    let stateUser = store.getState().user;
    setUser(stateUser.user);

    if (!user || !user.userId) {
      let accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        await dispatch(getUserData(accessToken));
      }
    }
  };

  return (
    <>
      {/* Mobile Responsive Header */}
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <Grid
          container
          justifyContent="space-between"
          sx={globalStyles.marginBottom30}
        >
          <Grid item sm={4}>
            <Button
              sx={[globalStyles.btnSecondary, styles.headerMobileBtn]}
              color="secondary"
            >
              <img src={icBack} alt="read-more" />
            </Button>
          </Grid>
          <Grid item sm={8}>
            <Typography sx={styles.headerMobileTitle}>
              {pageTitle && <>{pageTitle}</>}
            </Typography>
          </Grid>
          <Grid item sm={4} sx={styles.headerRightMobile}>
            {user?.userName ? (
              <>
                <Button
                  sx={[globalStyles.btnSecondary, styles.headerMobileBtn]}
                  color="secondary"
                >
                  <img src={notificationIcon} alt="read-more" />
                </Button>
                <Button
                  sx={[globalStyles.btnSecondary, styles.headerMobileBtn]}
                  color="secondary"
                  onClick={onLogout}
                >
                  <img src={logoutIcon} alt="read-more" />
                </Button>
              </>
            ) : (
              <Button
                sx={[globalStyles.btnSecondary, styles.headerMobileBtn]}
                color="secondary"
                onClick={onLogin}
              >
                <img src={loginIcon} alt="read-more" />
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>

      {/* Desktop Header */}
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={8} md={4}>
          <Typography sx={styles.headerTitle}>
            Hi, <span>{userName}</span>
            <img src={welcomeHand} alt="welcome" />
          </Typography>
        </Grid>
        <Grid item xs={4} md={8} sx={styles.headerRightItems}>
          <FormControl
            variant="standard"
            sx={[globalStyles.customSearchFormUi, styles.headerSearch]}
          >
            <Input
              id="input-with-icon-adornment"
              placeholder="Search..."
              startAdornment={
                <InputAdornment position="start">
                  <img src={searchBarIcon} alt="control" />
                </InputAdornment>
              }
            />
          </FormControl>
          {user?.userName ? (
            <>
              <Button
                sx={[
                  globalStyles.btnSecondary,
                  globalStyles.btnSecondaryRounded,
                  styles.notifyBtn,
                ]}
                color="secondary"
              >
                <Box component="span" sx={styles.headerNotifyBtn}>
                  <img src={notificationIcon} alt="read-more" />
                </Box>
              </Button>
              <Button
                sx={[
                  globalStyles.btnSecondary,
                  globalStyles.btnSecondaryRounded,
                ]}
                color="secondary"
                onClick={onLogout}
              >
                <img
                  src={logoutIcon}
                  alt="read-more"
                  className="btn-icon left-icon"
                />
                <Box sx={globalStyles.btnTextSecondaryWhite}>Logout</Box>
              </Button>
            </>
          ) : (
            <Button
              sx={[globalStyles.btnSecondary, globalStyles.btnSecondaryRounded]}
              color="secondary"
              onClick={onLogin}
            >
              <img
                src={loginIcon}
                alt="read-more"
                className="btn-icon left-icon"
              />
              <Box sx={globalStyles.btnTextSecondaryWhite}>Login</Box>
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
}
