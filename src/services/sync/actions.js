import * as actionTypes from './actionTypes';

export const start = () => ({
  type: actionTypes.SYNCSTART,
});

export const end = () => ({
  type: actionTypes.SYNCEND,
});

export const reset = () => ({
  type: actionTypes.SYNCRESET,
});
