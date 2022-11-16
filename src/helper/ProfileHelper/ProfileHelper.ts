//  External Dependencies
import axios, { AxiosError } from "axios";

//  Internal Dependencies
import { ProfileData } from "./ProfileHelper.types";

import { AUTH_BACKEND_URL } from "../../constants/api";
import { store } from "../../store/store";

import {
  CLIENT_ID,
  CODE_CHALLENGE,
  CODE_CHALLENGE_METHOD,
  STATE,
} from "../../constants/auth";
import { AUTH_SERVER_URL } from "../../constants/api";

const QUERY_STRING = `response_type=code&client_id=${CLIENT_ID}&redirect_uri=${window.location.href}&code_challenge=${CODE_CHALLENGE}&code_challenge_method=${CODE_CHALLENGE_METHOD}&state=${STATE}`;
const PASSWORD_RESET_URL = `${AUTH_SERVER_URL}/sign-in/check-email?${QUERY_STRING}`;

/*
 *  Get Initial Profile data from userID
 */
export async function getInitialProfileData() {
  const { email } = store.getState().user.user;

  if (email) {
    //  Configuring Reqeusts
    const promises = [
      axios.post(`${AUTH_BACKEND_URL}getNotificationStatus`, { email }),
      axios.post(`${AUTH_BACKEND_URL}getTFAStatus`, { email }),
    ];

    try {
      const results = await Promise.allSettled(promises);

      const result: ProfileData = {
        notifyDrops: false,
        notifyOffers: false,
        isTFAEnabled: false,
      };

      //  Analyzing results
      //  index: 0 -> notification information
      if (results[0].status === "fulfilled") {
        result.notifyDrops = results[0].value.data.notifyDrops;
        result.notifyOffers = results[0].value.data.notifyOffers;
      } else {
        result.notifyDrops = false;
        result.notifyOffers = false;
      }

      //  index: 1 -> 2fa information
      if (results[1].status === "fulfilled") {
        result.isTFAEnabled = results[1].value.data.TFAstatus;
      } else {
        result.isTFAEnabled = false;
      }

      return result;
    } catch (err) {
      if (err instanceof AxiosError) return err.response?.data;
    }
  }
}

/*
 *  Set New States for Drops
 */
export async function setDropsNotification(newState: boolean) {
  const { email } = store.getState().user.user;

  if (email) {
    try {
      const result = await axios.post(
        `${AUTH_BACKEND_URL}setDropsNotification`,
        {
          email,
          newState,
        }
      );
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) return err.response?.data;
    }
  }
}

/*
 *  Set New States for Offers
 */
export async function setOffersNotification(newState: boolean) {
  const { email } = store.getState().user.user;

  if (email) {
    try {
      const result = await axios.post(
        `${AUTH_BACKEND_URL}setOffersNotification`,
        {
          email,
          newState,
        }
      );
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) return err.response?.data;
    }
  }
}

/*
 *  Request for password change
 */
export async function requestResetPassword() {
  const { email } = store.getState().user.user;
  if (email) {
    try {
      const result = await axios.post(
        `${AUTH_BACKEND_URL}sendPasswordResetEmail`,
        {
          email,
          source: QUERY_STRING,
        }
      );
      if (result.data.emailSent) {
        window.location.href = PASSWORD_RESET_URL;
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("error!");
      }
    }
  }
}
