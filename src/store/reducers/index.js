import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import authUser from "./user.reducers";

const rootReducer = combineReducers({
  routing: routerReducer,
  authUser,
});
export default rootReducer;
