import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

const { reducer } = authSlice;

export default reducer;
