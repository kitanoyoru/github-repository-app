import { client } from "./githubAPI";
import { GITHUB_USERDATA } from "./githubAPIUrls";

import {
  getUserData,
  getUserDataFailure,
  getUserDataSuccess
} from "../reduxStore/slices/userDataSlice";

export const fetchUserData = () => {
  return async (dispatch) => {
    dispatch(getUserData());

    try {
      const data = await client.request(GITHUB_USERDATA, {
        login: "kitanoyoru"
      });
      dispatch(getUserDataSuccess(data));
    } catch (error) {
      dispatch(getUserDataFailure());
    }
  };
};
