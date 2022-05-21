import { SIGN_IN, SIGN_UP, LOG_OUT } from "../types/user.type";
const initialState = {
  user: {},
  token: null,
  error: "",
  isLoading: false,
};

const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN.PENDING: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case SIGN_IN.SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
      };
    }
    case SIGN_IN.ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case SIGN_UP.PENDING: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case SIGN_UP.SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    }
    case SIGN_UP.ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case LOG_OUT.PENDING: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case LOG_OUT.SUCCESS: {
      return {
        ...state,
        user: {},
        token: null,
        isLoading: false,
      };
    }
    case LOG_OUT.ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default authUserReducer;
