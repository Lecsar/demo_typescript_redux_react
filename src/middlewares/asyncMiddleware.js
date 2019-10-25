export const asyncMiddleware = ({
  phaseSeparator = '::',
  requestPhaseName = 'REQUEST',
  successPhaseName = 'SUCCESS',
  errorPhaseName = 'REQUEST'
}) => ({ dispatch, getState }) => next => action => {
  const {
    asyncType,
    callAPI,
    shouldCallAPI = () => true,
    payload = {},
    additionalActions = {}
  } = action;

  if (!asyncType) {
    return next(action);
  }

  if (typeof callAPI !== 'function') {
    throw new Error('Expected callAPI to be a function.');
  }

  if (!shouldCallAPI(getState())) {
    return;
  }

  const requestType = asyncType + phaseSeparator + requestPhaseName;
  const successType = asyncType + phaseSeparator + successPhaseName;
  const failureType = asyncType + phaseSeparator + errorPhaseName;

  dispatch({ ...payload, type: requestType });

  return callAPI(getState())
    .then(response => {
      dispatch({ ...payload, type: successType, response });

      if ('successAction' in additionalActions) {
        additionalActions.successAction(dispatch);
      }
    })
    .catch(error => {
      console.error(error);
      dispatch({ ...payload, type: failureType, error });

      if ('errorAction' in additionalActions) {
        additionalActions.errorAction(dispatch, error);
      }
    });
};
