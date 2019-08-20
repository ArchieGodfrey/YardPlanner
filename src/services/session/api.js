import { fetchApi } from '../api';

const endPoints = {
  login: '/users/login',
  loadUser: '/users',
};

export const login = ({ email, password }) => fetchApi(`${endPoints.login}`, { email, password }, 'post');
export const loadUser = () => fetchApi(`${endPoints.loadUser}`, {}, 'get');
