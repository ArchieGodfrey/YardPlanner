import { store } from '../../store';
import { clearSession } from '.';

export const get = () => store.getState().services.session;

export const getNotifications = () => store.getState().services.session.notification;

export const getNotificationRequest = () => store.getState().services.session.notificationRequest;

export const isLoggedIn = () => get().token !== null;

export const isTeamleader = () => isLoggedIn() && getUser().role === "Teamleader";

export const getCode = () => get().code;

export const getUser = () => {
  if (isLoggedIn()) {
    return get().user;
  }
  if (getCode()){
    return false;
  }
  clearSession();

  return false;
};
