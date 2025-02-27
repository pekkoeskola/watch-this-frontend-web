import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { baseApi } from "../endpoint";
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
      baseApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<AuthState>) => {
        state.username = action.payload.username;
        state.id = action.payload.id;
      },
    );
    build.addMatcher(
      baseApi.endpoints.checkExistingLogin.matchFulfilled,
      (state, action: PayloadAction<AuthState>) => {
        state.username = action.payload.username;
        state.id = action.payload.id;
      },
    );
  },
});

const { reducer } = authSlice;

export default reducer;
