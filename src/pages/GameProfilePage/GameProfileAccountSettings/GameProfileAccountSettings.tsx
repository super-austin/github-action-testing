// External dependencies
import { useState } from "react";
import {
  Box,
  Typography,
  Link,
  Grid,
  Card,
  List,
  ListItem,
  Button,
  Modal,
  Fade,
  FormControl,
  TextField,
  InputAdornment,
  FormLabel,
} from "@mui/material";

// SVG icons
import icGamenautIcon from "../../../assets/svg/profile/ic-gamenaut-icon.svg";
import icEdit from "../../../assets/svg/profile/ic-edit.svg";
import lockIcon from "../../../assets/svg/profile/ic-lock.svg";
import userDefault from "../../../assets/svg/sidebar/user-default.svg";
import icDownload from "../../../assets/svg/gameDetail/stats-ic-download.svg";
import icSuccess from "../../../assets/svg/profile/ic-tick-success.svg";
import icEmail from "../../../assets/svg/profile/ic-email.svg";
import modalClose from "../../../assets/svg/gameFi/modals-icon/modal-close.svg";
import icEye from "../../../assets/svg/profile/ic-eye-bold.svg";
import icTick from "../../../assets/svg/profile/ic-tick-success.svg";
import icSuccessChange from "../../../assets/svg/gameFi/modals-icon/done-icon.svg";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles as modalStyles } from "../../../components/Common/GameDetailModal.style";
import { styles } from "../GameProfile.style";
import Headings from "../../../components/Headings";

import { requestResetPassword } from "../../../helper/ProfileHelper/ProfileHelper";

export default function GameProfileAccountSettings() {
  // Edit inputs states
  const [editName, setEditName] = useState(true);
  const [editEmail, setEditEmail] = useState(true);

  // Change password modal states
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    // setOpen(true);
    requestResetPassword();
  };
  const handleClose = () => setOpen(false);

  // Confirm password modal states
  const [confirmPassword, setConfirmPassword] = useState(false);
  const handleOpenConfirm = () => setConfirmPassword(true);
  const handleConfirmClose = () => {
    setConfirmPassword(false);
    setOpen(false);
  };

  // Password change success modal states
  const [successPassword, setSuccessPassword] = useState(false);
  const handleSuccessPassword = () => setSuccessPassword(true);
  const handleSuccessClose = () => {
    setSuccessPassword(false);
    setConfirmPassword(false);
    setOpen(false);
  };

  return (
    <Box sx={[globalStyles.marginTop30, styles.settingAccountWrapper]}>
      <Headings title={"Account Setting"} counts={0} lineColor={"blue"} />
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Card sx={[cardStyles.customCardUi, cardStyles.settingCard]}>
            <Box sx={[cardStyles.customCardInner, cardStyles.settingCardInner]}>
              <Box sx={cardStyles.settingCardHeader}>
                <Box sx={cardStyles.cardNotificationThumb}>
                  <img src={lockIcon} alt="notify" />
                </Box>
                <Box sx={cardStyles.cardNotificationActions}>
                  <Button
                    sx={globalStyles.btnSecondary}
                    color="secondary"
                    onClick={handleOpen}
                  >
                    <Box sx={globalStyles.btnTextSecondary}>Change</Box>
                  </Button>
                </Box>
              </Box>
              <Typography sx={cardStyles.settingCardSubTitle}>
                Password
              </Typography>
              <Typography sx={cardStyles.settingCardContent}>
                Last change 19 March, 2021
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item md={2}>
          <Card sx={[cardStyles.customCardUi, cardStyles.settingCard]}>
            <Box
              sx={[
                cardStyles.customCardInner,
                cardStyles.settingCardInner,
                cardStyles.settingUserCard,
              ]}
            >
              <Box sx={cardStyles.settingUserThumb}>
                <Box sx={cardStyles.settingUserBorder}>
                  <img src={userDefault} alt="user" />
                </Box>
              </Box>
              <Link
                href="/"
                target="_blank"
                sx={cardStyles.settingUserDownload}
              >
                <img src={icDownload} alt="donwload" />
              </Link>
            </Box>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card sx={[cardStyles.customCardUi, cardStyles.settingCard]}>
            <Box
              sx={[
                cardStyles.customCardInner,
                cardStyles.settingCardInner,
                cardStyles.settingUserCard,
              ]}
            >
              <List
                sx={[
                  cardStyles.cardNotificationList,
                  cardStyles.settingCardUserList,
                ]}
              >
                <ListItem>
                  <Box sx={cardStyles.cardNotificationThumb}>
                    <img src={icGamenautIcon} alt="logo" />
                  </Box>
                  <Box sx={cardStyles.cardNotificationUserInfo}>
                    <Typography sx={cardStyles.cardFormLabel}>
                      Username
                    </Typography>
                    <Box
                      sx={
                        editName
                          ? cardStyles.settingCardFormValue
                          : cardStyles.settingCardFormValueDisabled
                      }
                    >
                      <TextField
                        type="text"
                        disabled={editName}
                        defaultValue="Michael Grey"
                      />
                    </Box>
                  </Box>
                  <Box sx={cardStyles.cardNotificationActions}>
                    <Button
                      sx={globalStyles.btnPrimaryLink}
                      onClick={() => setEditName((prevState) => !prevState)}
                    >
                      {editName ? (
                        <img src={icEdit} alt="edit" />
                      ) : (
                        <Typography>Save</Typography>
                      )}
                    </Button>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box sx={cardStyles.cardNotificationThumb}>
                    <img src={icEmail} alt="logo" />
                  </Box>
                  <Box sx={cardStyles.cardNotificationUserInfo}>
                    <Typography sx={cardStyles.cardFormLabel}>Email</Typography>
                    <Box
                      sx={
                        editEmail
                          ? cardStyles.settingCardFormValue
                          : cardStyles.settingCardFormValueDisabled
                      }
                    >
                      <TextField
                        type="text"
                        disabled={editEmail}
                        defaultValue="Michael Grey@gmail.com"
                      />
                      <Typography sx={cardStyles.cardFormVerified}>
                        <img src={icSuccess} alt="edit" />
                        Email Verified
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={cardStyles.cardNotificationActions}>
                    <Button
                      sx={globalStyles.btnPrimaryLink}
                      onClick={() => setEditEmail((prevState) => !prevState)}
                    >
                      {editEmail ? (
                        <img src={icEdit} alt="edit" />
                      ) : (
                        <Typography>Save</Typography>
                      )}
                    </Button>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Change password modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={[
              cardStyles.customCardUi,
              modalStyles.gamenautModalUi,
              modalStyles.gameAuthModal,
            ]}
          >
            <Box sx={modalStyles.gameAuthModalHeader}>
              <Typography component="h4" sx={modalStyles.gameAuthModalTitle}>
                Change Password
              </Typography>
              <Button onClick={handleClose}>
                <img src={modalClose} alt="close" />
              </Button>
            </Box>
            <Box component="form" sx={globalStyles.customFormUi}>
              <Box sx={modalStyles.gameAuthModalBody}>
                <FormControl variant="standard">
                  <FormLabel>Current Password</FormLabel>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder="******"
                    variant="filled"
                    sx={[cardStyles.customCardUi, globalStyles.padding0]}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={icEye} alt="icon" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Box>
              <Box sx={modalStyles.gameAuthModalFooter}>
                <Button
                  sx={globalStyles.btnPrimary}
                  color="primary"
                  onClick={handleOpenConfirm}
                >
                  <Box sx={globalStyles.btnTextPrimary}>Change Password</Box>
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Confirm password modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={confirmPassword}
        onClose={handleConfirmClose}
        closeAfterTransition
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={confirmPassword}>
          <Box
            sx={[
              cardStyles.customCardUi,
              modalStyles.gamenautModalUi,
              modalStyles.gameAuthModal,
            ]}
          >
            <Box sx={modalStyles.gameAuthModalHeader}>
              <Typography component="h4" sx={modalStyles.gameAuthModalTitle}>
                Change Password
              </Typography>
              <Button onClick={handleConfirmClose}>
                <img src={modalClose} alt="close" />
              </Button>
            </Box>
            <Box component="form" sx={globalStyles.customFormUi}>
              <Box sx={modalStyles.gameAuthModalBody}>
                <FormControl variant="standard">
                  <FormLabel>New Password</FormLabel>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder="******"
                    variant="filled"
                    sx={[cardStyles.customCardUi, globalStyles.padding0]}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={icEye} alt="icon" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl variant="standard">
                  <FormLabel>Confirm</FormLabel>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder="******"
                    variant="filled"
                    sx={[cardStyles.customCardUi, globalStyles.padding0]}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={icTick} alt="icon" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Box>
              <Box sx={modalStyles.gameAuthModalFooter}>
                <Button
                  sx={globalStyles.btnPrimary}
                  color="primary"
                  onClick={handleSuccessPassword}
                >
                  <Box sx={globalStyles.btnTextPrimary}>Save</Box>
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Password success change modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={successPassword}
        onClose={handleSuccessPassword}
        closeAfterTransition
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={successPassword}>
          <Box
            sx={[
              cardStyles.customCardUi,
              modalStyles.gamenautModalUi,
              modalStyles.gameAuthModal,
              modalStyles.customStatsModal,
            ]}
          >
            <Box sx={modalStyles.customStatsModalBox}>
              <Box sx={modalStyles.statsModalIcon}>
                <img src={icSuccessChange} alt="modal-icon" />
              </Box>
              <Typography component="h4" sx={modalStyles.customStatsModalTitle}>
                Done
              </Typography>
              <Typography sx={modalStyles.customStatsModalInfo}>
                Your password has been changed
              </Typography>
            </Box>
            <Box sx={modalStyles.gameAuthModalFooter}>
              <Button
                sx={globalStyles.btnPrimary}
                color="primary"
                onClick={handleSuccessClose}
              >
                <Box sx={globalStyles.btnTextPrimary}>Ok</Box>
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
