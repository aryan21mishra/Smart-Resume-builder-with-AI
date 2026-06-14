import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authenticate: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuth: (state) => {
      state.authenticate = true;
    },
    removeAuth: (state) => {
      state.authenticate = false;
    },
  },
});
export const selectAuth = (state) => state.auth.authenticate;
export const { addAuth, removeAuth } = authSlice.actions;
export default authSlice.reducer;
