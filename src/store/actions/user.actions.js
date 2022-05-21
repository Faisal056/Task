import { LOG_OUT, SIGN_IN, SIGN_UP, CHANGE_NAME } from "../types/user.type";

export const doSignIn = (params, navigate) => ({
  type: SIGN_IN.SIMPLE,
  params,
  navigate,
});

export const doLogOut = (params, navigate) => ({
  type: LOG_OUT.SIMPLE,
  params,
  navigate,
});
export const doSignUp = (params, navigate) => ({
  type: SIGN_UP.SIMPLE,
  params,
  navigate,
});
export const doUpdate = (params) => ({
  type: CHANGE_NAME.SIMPLE,
  params,
});
