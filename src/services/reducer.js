import { combineReducers } from 'redux';
import { reducer as sessionReducer } from './session/reducer';
import { reducer as syncReducer } from './sync/reducer';

// eslint-disable-next-line import/prefer-default-export
export const reducer = combineReducers({
  session: sessionReducer,
  sync: syncReducer,
});
