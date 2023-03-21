import { createSlice } from "@reduxjs/toolkit";

// Slice name
const NAME = "auth";

const initialState = {
  authToken: null,
};
const authSlice = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    userLogin(state, action) {
      state.authToken = action.payload;
    },
    userLogout(state, action) {
      state.authToken = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { userLogin, userLogout } = authSlice.actions;
