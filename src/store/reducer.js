import { LOGIN, LOGOUT } from './types';

const initialState = {
  authToken: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        authToken: action.payload,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        authToken: action.payload,
      };
    }

    default:
      return state;
  }
};
