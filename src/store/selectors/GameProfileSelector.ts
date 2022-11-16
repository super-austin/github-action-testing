//  Internal Dependencies
import { RootState } from "../store";

//  Get Notification Data
export const selectNotificationData = () => (state: RootState) => {
  return {
    drops: state.gameprofile.notifyDrops,
    offers: state.gameprofile.notifyOffers,
  };
};

//  Get 2FA Data
export const selectTFAData = () => (state: RootState) => {
  return state.gameprofile.isTFAEnabled;
};
