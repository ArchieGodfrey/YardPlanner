import * as actionTypes from './actionTypes';

export const initialState = {
  token: null,
  code: null,
  user: {},
  light: 'light',
  notifications: false,
  notificationRequest: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE:
      return Object.assign({}, state, action.session);
    case actionTypes.CLEAR:
      return Object.assign({}, initialState);
    case actionTypes.UPDATE_NOTIFICATION:
      return Object.assign({}, state, { notifications: action.n });
    case actionTypes.UPDATE_NOTIFICATION_REQUEST:
      return Object.assign({}, state, { notificationRequest: action.n });
    default:
      return state;
  }
};
