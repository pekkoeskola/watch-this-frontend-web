import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice";
import { AuthState } from "../../types";

const initialState: AuthState = {
  username: undefined,
  id: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addMatcher(
      apiSlice.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<AuthState>) => {
        state.username = action.payload.username;
        state.id = action.payload.id;
      },
    );
    build.addMatcher(
      apiSlice.endpoints.checkExistingLogin.matchFulfilled,
      (state, action: PayloadAction<AuthState>) => {
        state.username = action.payload.username;
        state.id = action.payload.id;
      },
    );
  },
});

const { reducer } = authSlice;

export default reducer;
