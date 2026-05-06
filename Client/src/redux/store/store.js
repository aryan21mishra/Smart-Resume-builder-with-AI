import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../user/userSlice.js";
export const store = configureStore({
  reducer: { userInfo: userSlice },
});
