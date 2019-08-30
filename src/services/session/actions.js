import * as actionTypes from './actionTypes';

import data from '../../data';

export const update = session => ({
  type: actionTypes.UPDATE,
  session,
});

export const clear = () => ({
  type: actionTypes.CLEAR,
});

export const getYard = () => ({
  type: actionTypes.GETYARD,
  payload: data,
});
