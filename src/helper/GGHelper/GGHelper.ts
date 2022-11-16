// External dependencies
import axios from "axios";

// Internal dependencies
import { BACKEND_URL } from "../../constants/api";
import IDrop from "../../interfaces/IDrop";
import { IGameAssetStack } from "../../interfaces/IGameAssetStack";
import IGameToken from "../../interfaces/IGameToken";
import INFT from "../../interfaces/INFT";
import { IRedeemableToken } from "../../interfaces/IRedeemableToken";
import {
  GetLatestDropResponse,
  GetNonMintedGameAssetsForUserRequest,
  GetNonMintedGameAssetsForUserResponse,
  GetNonMintedGameAssetStacksForUserRequest,
  GetNonMintedGameAssetStacksForUserResponse,
  GetTokenMetadataByIdReqest,
  GetTokenMetadataByIdResponse,
  MakeRedeemableTokenRequest,
  MakeRedeemableTokenResponse,
} from "./GGHelper.types";

const POST_HEADERS = {
  headers: {
    "Content-type": "application/json",
  },
};

async function postRequest<RequestType, ResponseType>(
  payload: RequestType,
  endpoint: string
): Promise<ResponseType> {
  console.log(payload);
  let response = await axios.post(
    `${BACKEND_URL}${endpoint}`,
    payload,
    POST_HEADERS
  );

  return <ResponseType>response.data;
}

async function getRequest<ResponseType>(
  endpoint: string
): Promise<ResponseType> {
  let response = await axios.get(`${BACKEND_URL}${endpoint}`);

  return <ResponseType>response.data;
}

/* ----------------------
	GAME_ASSETS
   ----------------------
*/

export async function getNonMintedGameAssetsForUser(
  userId: string
): Promise<IGameToken[]> {
  let payload: GetNonMintedGameAssetsForUserRequest = {
    user_id: userId,
  };
  let tokens: GetNonMintedGameAssetsForUserResponse = await postRequest(
    payload,
    "getNonMintedGameAssetsForUser"
  );
  let assets: IGameToken[] = tokens.game_assets;

  console.log({ assets });

  return assets;
}

export async function getNonMintedGameAssetStacksForUser(
  userId: string
): Promise<IGameAssetStack[]> {
  let payload: GetNonMintedGameAssetStacksForUserRequest = {
    user_id: userId,
  };
  let tokens: GetNonMintedGameAssetStacksForUserResponse = await postRequest(
    payload,
    "getNonMintedGameAssetStacksForUser"
  );
  let assets: IGameAssetStack[] = tokens.game_assets;

  console.log({ assets });

  return assets;
}

/* ----------------------
	TOKENS
   ----------------------
*/

export async function makeRedeemableToken(
  userId: string,
  walletId: string,
  tokenId: string,
  gameId: string
): Promise<IRedeemableToken> {
  let payload: MakeRedeemableTokenRequest = {
    user_id: userId,
    near_wallet_id: walletId,
    token_id: tokenId,
    game_id: gameId,
  };
  let response: MakeRedeemableTokenResponse = await postRequest(
    payload,
    "makeRedeemableToken"
  );
  let redeemable_token: IRedeemableToken = response.redeemable_token;

  console.log({ redeemable_token });

  return redeemable_token;
}

/* ----------------------
	DROPS
   ----------------------
*/

export async function getLastestDropData(): Promise<IDrop> {
  let dropData: GetLatestDropResponse = await getRequest("getLatestDropData");

  return <IDrop>{
    drop_id: dropData.drop._id,
    name: dropData.drop.name,
    description: dropData.drop.description,
    game_id: dropData.drop.game_id,
    private: dropData.drop.private,
    community: dropData.drop.community,
    public: dropData.drop.public,
  };
}

export async function getTokenMetadataById(tokenId: string): Promise<INFT> {
  let payload: GetTokenMetadataByIdReqest = {
    token_id: tokenId,
  };

  let tokenData: GetTokenMetadataByIdResponse = await postRequest(
    payload,
    "getTokenMetadataById"
  );

  return <INFT>tokenData.token;
}
