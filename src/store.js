import * as types from "./types";

const state = {
  products: [],
  authToken: 11,
};

export const authReducer = function (state, action) {
  console.log("action ia ar", action);
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        authToken: action.payload,
      };

    case types.LOGOUT:
      return {
        ...state,
        authToken: null,
      };
    default:
      throw new Error(`unsupported action type: ${action.type}`);
  }
};

export default state;
