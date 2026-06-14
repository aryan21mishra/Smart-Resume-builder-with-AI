import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
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
