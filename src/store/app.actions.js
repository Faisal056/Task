export const defaultLoadingAction = (action) => ({
  type: action.PENDING,
});

export const defaultActionSuccess = (action, payload) => ({
  type: action.SUCCESS,
  payload,
});

export const defaultActionFailure = (action, payload) => ({
  type: action.ERROR,
  payload,
});
