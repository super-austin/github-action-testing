

export interface IUser {
  userId: string,
  email: string;
  firstName?: string;
  lastName?: string;
  userName: string;
  walletIds?: string[];
}

export interface GetUserByAccessTokenRequest {
  access_token: string;
}

export interface GetUserByAccessTokenResponse {
  user: IUser;
}