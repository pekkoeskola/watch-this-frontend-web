import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createPost(state, action) {},
  },
});

const { actions, reducer } = authSlice;

export default reducer;
