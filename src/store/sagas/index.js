import { all, spawn } from "redux-saga/effects";

import usersSagas from "./user.sagas";
export default function* rootSaga() {
  yield all([spawn(usersSagas)]);
}
