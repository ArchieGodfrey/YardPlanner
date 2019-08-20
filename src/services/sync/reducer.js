import * as actionTypes from './actionTypes';

export const initialState = {
  requestCount: 0,
};

export function reducer(state = initialState, action) {
  let newCount = state.requestCount - 1;

  switch (action.type) {
    case actionTypes.SYNCSTART:
      return Object.assign({}, state, {
        requestCount: state.requestCount + 1,
      });
    case actionTypes.SYNCEND:
      if (newCount < 0) newCount = 0;

      return Object.assign({}, state, {
        requestCount: newCount,
      });
    case actionTypes.SYNCRESET:
      return Object.assign({}, state, {
        requestCount: 0,
      });
    default:
      return state;
  }
}
