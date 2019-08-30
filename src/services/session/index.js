import { store } from '../../store';
import { AsyncStorage } from 'react-native';
import * as api from './api';
import * as actionCreators from './actions';

export const clearSession = () => {
  store.dispatch(actionCreators.clear());
  AsyncStorage.clear();
};

export const revoke = () => clearSession();

const onRequestSuccess = (response) => {
  const session = {};

  if (response.token) {
    session.token = response.token;
  }

  if (response.user) {
    session.user = response.user;
  }

  store.dispatch(actionCreators.update(session));
};

const onRequestFailed = (exception) => {
  clearSession();
  throw exception;
};

export const login = ({
  email,
  password,
}) => new Promise((resolve, reject) => {
  api.login({ email, password })
    .then((response) => {
      onRequestSuccess(response);
      resolve(response);
    })
    .catch((e, response) => {
      reject(e, response);
    });
});

export const loadUser = () => new Promise((resolve, reject) => {
  api.loadUser()
    .then((e) => {
      onRequestSuccess({
        user: e,
      });
      resolve(e);
    })
    .catch((e) => {
      onRequestFailed(e);
      reject();
    });
});
