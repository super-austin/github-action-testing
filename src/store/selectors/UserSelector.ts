//  Internal Dependencies
import { RootState } from "../store";

//  Select User Information
export const selectUserInfo = () => (state: RootState) => {
  return state.user.user;
};
