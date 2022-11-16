// External dependencies
import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  List,
  ListItem,
  FormControlLabel,
  Switch,
  Modal,
  Fade,
  Button,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useSelector } from "react-redux";

// SVG icons
import lockIcon from "../../../assets/svg/profile/ic-lock.svg";
import modalClose from "../../../assets/svg/gameFi/modals-icon/modal-close.svg";
import notificationIcon from "../../../assets/svg/profile/ic-notification.svg";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles as modalStyles } from "../../../components/Common/GameDetailModal.style";
import { styles } from "../GameProfile.style";
import Headings from "../../../components/Headings";

// JSON data
import {
  selectNotificationData,
  selectTFAData,
} from "../../../store/selectors/GameProfileSelector";
import { useAppDispatch } from "../../../store/store";
import {
  setDropsNotificationState,
  setOffersNotificationState,
} from "../../../store/slices/GameProfile/thunks/setNotificationData";

export default function GameProfileNotification() {
  const dispatch = useAppDispatch();

  const notifyData = useSelector(selectNotificationData());
  const TFAData = useSelector(selectTFAData());

  // 2 Step verification modal states
  const [stepVerifyModal, setStepVerifyModal] = useState(false);
  const handleOpenStep = () => setStepVerifyModal(true);
  const handleCloseStep = () => {
    setStepVerifyModal(false);
  };

  const handleDropChange = async () => {
    await dispatch(setDropsNotificationState(!notifyData.drops));
  };

  const handleOfferChange = async () => {
    await dispatch(setOffersNotificationState(!notifyData.offers));
  };

  return (
    <Grid container spacing={3} sx={styles.settingNotificationWrapper}>
      <Grid item md={9}>
        <Headings title={"Notifications"} counts={0} lineColor={"green"} />
        <Card
          sx={[
            cardStyles.customCardUi,
            cardStyles.settingCard,
            cardStyles.settingCardAuto,
          ]}
        >
          <Box sx={[cardStyles.customCardInner, cardStyles.settingCardInner]}>
            <List sx={cardStyles.cardNotificationList}>
              <ListItem key="Drops">
                <Box sx={cardStyles.cardNotificationThumb}>
                  <img src={notificationIcon} alt="notify" />
                </Box>
                <Box>
                  <Typography
                    component="h4"
                    sx={cardStyles.cardNotificationTitle}
                  >
                    Notify me about Drops
                  </Typography>
                  <Typography sx={cardStyles.cardNotificationDetail}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </Box>
                <Box sx={cardStyles.cardNotificationActions}>
                  <FormControlLabel
                    sx={globalStyles.customSwitcher}
                    label={notifyData.drops ? "On" : "Off"}
                    onChange={handleDropChange}
                    control={<Switch checked={notifyData.drops} />}
                  />
                </Box>
              </ListItem>
              <ListItem key="Offers">
                <Box sx={cardStyles.cardNotificationThumb}>
                  <img src={notificationIcon} alt="notify" />
                </Box>
                <Box>
                  <Typography
                    component="h4"
                    sx={cardStyles.cardNotificationTitle}
                  >
                    Notify me about Offers
                  </Typography>
                  <Typography sx={cardStyles.cardNotificationDetail}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </Box>
                <Box sx={cardStyles.cardNotificationActions}>
                  <FormControlLabel
                    sx={globalStyles.customSwitcher}
                    label={notifyData.offers ? "On" : "Off"}
                    onChange={handleOfferChange}
                    control={<Switch checked={notifyData.offers} />}
                  />
                </Box>
              </ListItem>
            </List>
          </Box>
        </Card>
      </Grid>
      <Grid item md={3}>
        <Headings title={"Security"} counts={0} lineColor={"purple"} />
        <Card
          sx={[
            cardStyles.customCardUi,
            cardStyles.settingCard,
            cardStyles.settingCardAuto,
          ]}
        >
          <Box sx={[cardStyles.customCardInner, cardStyles.settingCardInner]}>
            <Box sx={cardStyles.settingCardHeader}>
              <Box sx={cardStyles.cardNotificationThumb}>
                <img src={lockIcon} alt="notify" />
              </Box>
              <Box sx={cardStyles.cardNotificationActions}>
                <FormControlLabel
                  onClick={handleOpenStep}
                  sx={globalStyles.customSwitcher}
                  label="On"
                  control={<Switch />}
                />
              </Box>
            </Box>
            <Typography sx={cardStyles.settingCardSubTitle}>
              Two-step verification
            </Typography>
            <Typography sx={cardStyles.settingCardContent}>
              A second login step adds an extra layer of security to your
              account
            </Typography>
          </Box>
        </Card>
      </Grid>

      {/* Two step verification modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={stepVerifyModal}
        onClose={handleCloseStep}
        closeAfterTransition
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={stepVerifyModal}>
          <Box
            sx={[
              cardStyles.customCardUi,
              modalStyles.gamenautModalUi,
              modalStyles.gameAuthModal,
            ]}
          >
            <Box sx={modalStyles.gameAuthModalHeader}>
              <Typography component="h4" sx={modalStyles.gameAuthModalTitle}>
                Two-step verification
              </Typography>
              <Button onClick={handleCloseStep}>
                <img src={modalClose} alt="close" />
              </Button>
            </Box>
            <Typography sx={modalStyles.gameAuthModalSubTitle}>
              Choose an authentication method
            </Typography>
            <Box component="form" sx={globalStyles.customFormUi}>
              <Box sx={modalStyles.gameAuthModalBody}>
                <Card
                  sx={[
                    cardStyles.customCardUi,
                    modalStyles.gameAuthModalStepCard,
                  ]}
                >
                  <Box>
                    <FormControlLabel
                      sx={globalStyles.customRadioBtn}
                      value="sms"
                      control={<Radio />}
                      label=""
                    />
                  </Box>
                  <Box>
                    <Typography sx={modalStyles.authStepCardTitle}>
                      SMS
                    </Typography>
                    <Typography sx={modalStyles.authStepCardContent}>
                      Receive a unique cod via SMS
                    </Typography>
                  </Box>
                </Card>
                <Card
                  sx={[
                    cardStyles.customCardUi,
                    modalStyles.gameAuthModalStepCard,
                  ]}
                >
                  <Box>
                    <FormControlLabel
                      sx={globalStyles.customRadioBtn}
                      value="email"
                      control={<Radio />}
                      label=""
                    />
                  </Box>
                  <Box>
                    <Typography sx={modalStyles.authStepCardTitle}>
                      Email
                    </Typography>
                    <Typography sx={modalStyles.authStepCardContent}>
                      Receive a unique cod via Email
                    </Typography>
                  </Box>
                </Card>
              </Box>
              <Box sx={modalStyles.gameAuthModalFooter}>
                <Button
                  sx={globalStyles.btnPrimary}
                  color="primary"
                  onClick={handleCloseStep}
                >
                  <Box sx={globalStyles.btnTextPrimary}>Save</Box>
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Grid>
  );
}
