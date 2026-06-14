import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import {
  changeUserPassword,
  forgetPassword,
  getUserProfile,
  googleLogin,
  registerUser,
  sendOTP,
  updateUserProfile,
  userLogin,
  userLogout,
  verifyOTP,
  updateAvatar,
} from "../controllers/auth.controller.js";
import fileUpload from "../middlewares/multer.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(userLogin);
userRouter.route("/google-login").post(googleLogin);
userRouter.route("/logout").post(verifyUser, userLogout);
userRouter.route("/me").get(verifyUser, getUserProfile);
userRouter.route("/update-profile").put(verifyUser, updateUserProfile);
userRouter.route("/change-password").put(verifyUser, changeUserPassword);
userRouter.route("/send-otp").post(sendOTP);
userRouter.route("/verify-otp").post(verifyOTP);
userRouter.route("/forget-password").put(forgetPassword);
userRouter
  .route("/update-avatar")
  .patch(verifyUser, fileUpload.single("avatar"), updateAvatar);
export default userRouter;
