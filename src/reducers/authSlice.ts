import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { baseApi } from "../endpoint"
import { AuthState } from "../../types";

const initialState: AuthState = {
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    }
  },
  extraReducers: (build) => {
    build.addMatcher(
      baseApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<AuthState>) => {
        state.username = action.payload.username
      }
    )
  }
});

const { reducer } = authSlice;

export default reducer;
