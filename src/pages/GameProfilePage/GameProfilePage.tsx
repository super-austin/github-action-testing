// External dependencies
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

// Internal dependencies
import { styles as globalStyles } from "../../components/Common/Global.style";
import PageHeader from "../../components/PageHeader";

// JSON data
import GameProfileNotification from "./GameProfileNotification/GameProfileNotification";
import GameProfileAccountSettings from "./GameProfileAccountSettings/GameProfileAccountSettings";
import GameProfileAccountLinking from "./GameProfileAccountLinking/GameProfileAccountLinking";
import GameProfileLaunch from "./GameProfileLaunch/GameProfileLaunch";

// Redux Selectors
import { selectUserInfo } from "../../store/selectors/UserSelector";
import { initialProfile } from "../../store/slices/GameProfile/thunks/initializeProfile";
import { useAppDispatch } from "../../store/store";

export default function GameProfilePage() {
  const [accountLink] = useState(true);
  const [profileLaunch] = useState(false);

  const { userId, email, userName } = useSelector(selectUserInfo());

  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email]);

  const dispatch = useAppDispatch();

  dispatch(initialProfile());

  return (
    <Box sx={globalStyles.dashboardWrapper}>
      <Box sx={[globalStyles.mainWrapper, globalStyles.mainWrapperPadding]}>
        <PageHeader userName={userName} pageTitle={"Profile"} />
        <Box sx={globalStyles.marginTop60}>
          {/* Notifications & Security */}
          <GameProfileNotification />

          {/* Account Settings */}
          <GameProfileAccountSettings />

          {/* Account Linking */}
          {accountLink && <GameProfileAccountLinking />}

          {/* Profile Launch Version */}
          {profileLaunch && <GameProfileLaunch />}
        </Box>
      </Box>
    </Box>
  );
}
