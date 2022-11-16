// External dependencies
import axios from "axios";

// Internal dependencies
import { AUTH_BACKEND_URL } from "../../constants/api";
import { CLIENT_ID, CLIENT_SECRET, CODE_VERIFIER } from "../../constants/auth";
import { GetUserByAccessTokenRequest, GetUserByAccessTokenResponse, IUser } from "./GGAuthHelper.types";

const POST_HEADERS = {
  headers: {
    "Content-type": "text/plain",
  },
};

async function postRequest<RequestType, ResponseType>(
  payload: RequestType,
  endpoint: string
): Promise<ResponseType> {
  let response = await axios.post(
    `${AUTH_BACKEND_URL}-${endpoint}`,
    payload,
    POST_HEADERS
  );

  return <ResponseType>response.data;
}

async function getRequest<ResponseType>(
  endpoint: string
): Promise<ResponseType> {
  let response = await axios.get(`${AUTH_BACKEND_URL}-${endpoint}`);

  return <ResponseType>response.data;
}


export async function grantAccessToken(
  authCode: string
): Promise<string> {
  let response = await axios.post(`${AUTH_BACKEND_URL}-oauth2GrantToken?code=${authCode}&client_secret=${CLIENT_SECRET}&client_id=${CLIENT_ID}&grant_type=authorization_code&code_verifier=${CODE_VERIFIER}`,
    {},
    {
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  localStorage.setItem("refresh_token", response.data.refresh_token);
  localStorage.setItem("access_token", response.data.access_token);

  return response.data.access_token;
}

export async function refreshAccessToken(
  refreshToken: string
): Promise<string> {
  let response = await axios.post(`${AUTH_BACKEND_URL}-oauth2GrantToken?client_secret=${CLIENT_SECRET}&client_id=${CLIENT_ID}&grant_type=refresh_token&refresh_token=${refreshToken}`,
    {},
    {
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  localStorage.setItem("refresh_token", response.data.refresh_token);
  localStorage.setItem("access_token", response.data.access_token);
  
  return response.data.access_token;
}


/* ----------------------
	  USER
   ----------------------
*/

export async function getUserByAccessToken(
  accessToken: string
): Promise<IUser> {
  let payload: GetUserByAccessTokenRequest = {
    access_token: accessToken,
  };
  let response: GetUserByAccessTokenResponse = await postRequest(
    payload,
    "getUserByAccessToken"
  );
  let user: IUser = response.user;

  console.log({ user });

  return user;
}