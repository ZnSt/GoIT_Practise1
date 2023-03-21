import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
