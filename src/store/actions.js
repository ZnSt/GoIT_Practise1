import { createAction } from "@reduxjs/toolkit";
import * as types from "./types";

export const loginAc = createAction(types.LOGIN, (value) => ({
  payload: value,
}));
export const logoutAc = createAction(types.LOGOUT, () => ({ payload: null }));
