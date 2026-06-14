import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../user/userSlice.js";
import resumeSlice from "../resumes/resumeSlice.js";
import feedbackReducer from "../resumes/feedbackSlice.js";
import authReducer from "../auth/authSlice.js";
export const store = configureStore({
  reducer: {
    userInfo: userSlice,
    resume: resumeSlice,
    feedback: feedbackReducer,
    auth: authReducer,
  },
});
