import { IUser } from "../../helper/GGAuthHelper/GGAuthHelper.types";

export interface UserState {
  user: IUser,
  isLoading: boolean,
  isError: boolean,
}