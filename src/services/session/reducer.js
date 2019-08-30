import * as actionTypes from './actionTypes';

export const initialState = {
  token: null,
  user: {},
  light: 'light',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETYARD:
      return Object.assign({}, state, action.payload);
    case actionTypes.UPDATE:
      return Object.assign({}, state, action.session);
    case actionTypes.CLEAR:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};
