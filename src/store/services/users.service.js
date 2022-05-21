import axios from "axios";
import { SIGN_IN_API, SIGN_UP_API, LOG_OUT_API, UPDATE_API } from "../api";

export const doSignIn = (parameters) => {
  return axios.post(SIGN_IN_API, parameters).then((response) => response.data);
};
export const doLogOut = (parameters) => {
  return axios.post(LOG_OUT_API, parameters).then((response) => response.data);
};
export const doSignUp = async (parameters) => {
  // return axios.post(SIGN_UP_API, parameters);
  const response = await axios.post(SIGN_UP_API, parameters);
  return response.data;
};
export const doUpdate = async (parameters) => {
  return axios.put(UPDATE_API, parameters).then((response) => response.data);
};
