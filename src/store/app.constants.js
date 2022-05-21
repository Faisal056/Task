import { asyncActionType } from "../utils/reduxActions";

export const ACTIONS = {
  TEST: asyncActionType("[ACELANCE]TEST"),
  TEST_BEGIN: "[ACELANCE]TEST_BEGIN",
};

// Status types
export const FETCH_STATUS = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export default {
  ...ACTIONS,
};
