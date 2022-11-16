// External dependencies
import { useEffect, useState } from "react";
import { Box, Button, MenuItem, MenuList, Typography } from "@mui/material";
import {
  Link,
  NavigateFunction,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";

// SVG icons
import sideLogo from "../../assets/svg/gameDetail/gamenaut-logo-white.svg";
import sideLogoSmall from "../../assets/svg/sidebar/gamenaut-logo-small.svg";
import userDefault from "../../assets/svg/sidebar/user-default.svg";
import gameIc from "../../assets/svg/sidebar/ic_game.svg";
import gameIcActive from "../../assets/svg/sidebar/ic_game_active.svg";
import dropIc from "../../assets/svg/sidebar/ic_drops.svg";
import dropIcActive from "../../assets/svg/sidebar/ic_drops_active.svg";
import gamefiIc from "../../assets/svg/sidebar/ic_gamefi.svg";
import gamefiIcActive from "../../assets/svg/sidebar/ic_gamefi_active.svg";
import profileIc from "../../assets/svg/sidebar/ic_profile.svg";
import profileIcActive from "../../assets/svg/sidebar/ic_profile_active.svg";
import logoutIcon from "../../assets/svg/sidebar/ic_logout.svg";

// Internal dependencies
import { styles } from "./Sidebar.style";
import { styles as globalStyles } from "../Common/Global.style";
import { IUser } from "../../helper/GGAuthHelper/GGAuthHelper.types";
import { AUTH_SERVER_URL } from "../../constants/api";
import { getUserData, logoutUser } from "../../store/slices/User/thunks/user";
import { store, useAppDispatch } from "../../store/store";
import { grantAccessToken } from "../../helper/GGAuthHelper/GGAuthHelper";
import {
  CLIENT_ID,
  CODE_CHALLENGE,
  CODE_CHALLENGE_METHOD,
  STATE,
} from "../../constants/auth";
import { resetCollectibles } from "../../store/slices/GameInfo/thunks/collectibles";

const GG_SERVER_URL = `${AUTH_SERVER_URL}/sign-in/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${window.location.href}&code_challenge=${CODE_CHALLENGE}&code_challenge_method=${CODE_CHALLENGE_METHOD}&state=${STATE}`;

const GAME_DETAIL = "/game-details";
const DROPS = "/drops";
const GAME_FI = "/game-fi";
const PROFILE = "/profile";

export default function Sidebar() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<IUser>();
  const navigate: NavigateFunction = useNavigate();
  const [active, setActive] = useState(location.pathname);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    store.subscribe(() => {
      let stateUser = store.getState().user;
      setUser(stateUser.user);
    });
  }, []);

  const onGame = () => {
    setActive(GAME_DETAIL);
    navigate(GAME_DETAIL);
  };

  const onDrops = () => {
    setActive(DROPS);
    navigate(DROPS);
  };

  const onGameFi = () => {
    setActive(GAME_FI);
    navigate(GAME_FI);
  };

  const onProfile = () => {
    setActive(PROFILE);
    navigate(PROFILE);
  };

  const onLogin = async () => {
    await getUser();
    if (!user || !user.userId) {
      window.location.href = GG_SERVER_URL;
    }
  };

  useEffect(() => {
    const grantToken = async (authCode: string) => {
      let accessToken = await grantAccessToken(authCode);
      console.log({ accessToken });
      getUser();
    };

    const authCode = searchParams.get("code");
    if (authCode) {
      grantToken(authCode);
    }

    getUser();
  }, []);

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

  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(resetCollectibles());
  };

  const getClassName = (tabName: string) =>
    tabName === active ? "active" : "";

  return (
    <Box sx={styles.sidebarWrapper}>
      <Box sx={styles.sidebarBody}>
        <Box sx={styles.sideLogoBox}>
          <img src={sideLogo} alt="logo" className="primary-logo" />
          {/* <img src={sideLogoSmall} alt="logo" className="small-logo" /> */}
        </Box>
        {user?.userName ? (
          <Box sx={styles.userBox}>
            <Box sx={styles.userThumb}>
              <Box sx={styles.userThumbBorder}>
                <img src={userDefault} alt="user" />
              </Box>
            </Box>
            {user.firstName && (
              <Typography variant="h2" sx={styles.userName}>
                {user.firstName}
              </Typography>
            )}
            <Typography sx={styles.userId}>{user.userName}</Typography>
          </Box>
        ) : (
          <></>
        )}
        <Box sx={styles.sideNav}>
          <MenuList>
            <MenuItem className={getClassName(GAME_DETAIL)} onClick={onGame}>
              <img src={gameIcActive} className="active-icon" alt="icon" />
              <img src={gameIc} className="inactive-icon" alt="icon" />
              Game
            </MenuItem>
            <MenuItem className={getClassName(DROPS)} onClick={onDrops}>
              <img src={dropIcActive} className="active-icon" alt="icon" />
              <img src={dropIc} className="inactive-icon" alt="icon" />
              Drops
            </MenuItem>
            <MenuItem className={getClassName(GAME_FI)} onClick={onGameFi}>
              <img src={gamefiIcActive} className="active-icon" alt="icon" />
              <img src={gamefiIc} className="inactive-icon" alt="icon" />
              Game-Fi
            </MenuItem>
            <MenuItem className={getClassName(PROFILE)} onClick={onProfile}>
              <img src={profileIcActive} className="active-icon" alt="icon" />
              <img src={profileIc} className="inactive-icon" alt="icon" />
              Profile
            </MenuItem>
          </MenuList>
        </Box>
        {user ? (
          <Box sx={[styles.sideNav, styles.bottomNav]}>
            <Button onClick={onLogout}>
              <img src={logoutIcon} alt="logout" className="icon" />
              <span className="text">Logout</span>
            </Button>
          </Box>
        ) : (
          <Box sx={[styles.sideNav, styles.bottomNav]}>
            <Box sx={styles.bottomLoginBox}>
              <Button sx={globalStyles.btnPrimary} onClick={onLogin}>
                <Box sx={globalStyles.btnTextPrimary}>Login</Box>
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
