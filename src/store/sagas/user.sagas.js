/* eslint-disable import/no-anonymous-default-export */
import { takeLatest, all, call, put } from "redux-saga/effects";
import { SIGN_UP, SIGN_IN, LOG_OUT, CHANGE_NAME } from "../types/user.type";
import {
  doSignIn,
  doSignUp,
  doLogOut,
  doUpdate,
} from "../services/users.service";
import {
  defaultActionSuccess,
  defaultActionFailure,
  defaultLoadingAction,
} from "../app.actions";
import { notification } from "antd";

function* doSignInSaga({ params, navigate }) {
  try {
    yield put(defaultLoadingAction(SIGN_IN));
    let response = yield call(doSignIn, params);

    if (!response.token) {
      notification.error({
        placement: "topRight",
        message: response.msg,
        duration: 2,
      });

      yield put(defaultActionFailure(SIGN_IN, response));
    } else {
      const updatedUser = {
        ...response.payload,
      };
      response = { ...response, user: updatedUser };
      console.log(response);
      yield put(defaultActionSuccess(SIGN_IN, response));
      navigate("/profile");
      notification.success({
        placement: "topRight",
        message: response.msg,
        duration: 2,
      });
    }
  } catch (err) {
    yield put(defaultActionFailure(SIGN_IN, err));
  }
}
function* doLogOutSaga({ params, navigate }) {
  const param = { email: params };
  try {
    yield put(defaultLoadingAction(LOG_OUT));
    const res = yield call(doLogOut, param);
    yield put(defaultActionSuccess(LOG_OUT, res));
    navigate("/");
    notification.success({
      placement: "topRight",
      message: "Logout successfully",
      duration: 2,
    });
  } catch (err) {
    yield put(defaultActionFailure(LOG_OUT, err));
  }
}

function* doSignUpSaga({ params, navigate }) {
  try {
    yield put(defaultLoadingAction(SIGN_UP));
    const response = yield call(doSignUp, params);
    yield put(defaultActionSuccess(SIGN_UP, response));
    navigate("/login");
    notification.success({
      placement: "topRight",
      message: "User Registered Successfully",
      duration: 2,
    });
  } catch (err) {
    yield put(defaultActionFailure(SIGN_UP, err));
  }
}
// Update
function* doUpdateSaga({ params }) {
  const param = { email: params.email, name: params.name };
  try {
    yield put(defaultLoadingAction(CHANGE_NAME));
    let response = yield call(doUpdate, param);
    yield put(defaultActionFailure(CHANGE_NAME, response));
    const updatedUser = {
      ...response.payload,
    };
    response = { ...response, user: updatedUser };
    console.log(response);
    yield put(defaultActionSuccess(CHANGE_NAME, response));
    notification.success({
      placement: "topRight",
      message: response.message,
      duration: 2,
    });
  } catch (err) {
    yield put(defaultActionFailure(CHANGE_NAME, err));
  }
}

export default function* () {
  yield all([
    takeLatest(SIGN_IN.SIMPLE, doSignInSaga),
    takeLatest(SIGN_UP.SIMPLE, doSignUpSaga),
    takeLatest(LOG_OUT.SIMPLE, doLogOutSaga),
    takeLatest(CHANGE_NAME.SIMPLE, doUpdateSaga),
  ]);
}
