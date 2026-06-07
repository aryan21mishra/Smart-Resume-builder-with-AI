import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "Aryan",
    lastName: "Mishra",
    email: "aryan@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};
const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addUserInfo: (state, actions) => {
      state.user = actions.payload;
    },
    removeUserInfo: (state) => {
      state.user = null;
    },
    updateProfile: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
    updateAvatar: (state, action) => {
      state.user.avatar = action.payload;
    },
  },
});

export const selectUser = (state) => state.userInfo.user;

export const { addUserInfo, removeUserInfo, updateProfile, updateAvatar } =
  userSlice.actions;

export default userSlice.reducer;
