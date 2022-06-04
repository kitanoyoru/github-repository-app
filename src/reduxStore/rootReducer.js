import { combineReducers } from "redux";

import readmeReducer from "./slices/readmeSlice";
import repsReducer from "./slices/repsSlice";
import userReducer from "./slices/userDataSlice";

const rootReducer = combineReducers({
  readme: readmeReducer,
  reps: repsReducer,
  userData: userReducer
});

export default rootReducer;
