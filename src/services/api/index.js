import fetchival from 'fetchival';
import _ from 'lodash';

import { revoke } from '../session';
import * as sessionSelectors from '../session/selectors';
import apiConfig from './config';

export const exceptionExtractError = (exception) => {
  if (!exception.Errors) return false;
  let error = false;
  const errorKeys = Object.keys(exception.Errors);
  if (errorKeys.length > 0) {
    error = exception.Errors[errorKeys[0]][0].message;
  }
  return error;
};

export const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}) => {
  const accessToken = sessionSelectors.get().token;
  return new Promise((resolve, reject) => {
    fetchival(`${apiConfig.url}${endPoint}`, {
      headers: _.pickBy({
        ...(accessToken ? {
          Authorization: `Bearer ${accessToken}`,
        } : {}),
        ...headers,
      }, item => !_.isEmpty(item)),
    })[method.toLowerCase()](payload)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        if (!e.response) {
          console.error(e);
          reject(new Error('no response'));
        }
        if (e.response.status === 401) {
          revoke();
        }

        e.response.json().then((content) => {
          reject(new Error(content));
        }).catch(err => reject(err));
      });
  });
};
