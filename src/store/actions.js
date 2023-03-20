import * as types from './types';

export const loginAc = (value) => {
  return {
    type: types.LOGIN,
    payload: value,
  };
};

export const logoutAc = () => {
  return {
    type: types.LOGOUT,
    payload: null,
  };
};
