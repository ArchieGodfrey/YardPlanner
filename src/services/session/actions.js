import * as actionTypes from './actionTypes';

export const update = session => ({
  type: actionTypes.UPDATE,
  session,
});

export const clear = () => ({
  type: actionTypes.CLEAR,
});

export const updateNotification = n => ({
  type: actionTypes.UPDATE_NOTIFICATION,
  n,
});

export const updateNotificationRequest = n => ({
  type: actionTypes.UPDATE_NOTIFICATION_REQUEST,
  n,
});
