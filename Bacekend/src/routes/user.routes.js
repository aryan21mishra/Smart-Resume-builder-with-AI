import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import {
  changeUserPassword,
  forgetPassword,
  getUserProfile,
  registerUser,
  sendOTP,
  updateUserProfile,
  userLogin,
  userLogout,
  verifyOTP,
} from "../controllers/auth.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(userLogin);
router.route("/logout").post(verifyUser, userLogout);
router.route("/me").get(verifyUser, getUserProfile);
router.route("/update-profile").put(verifyUser, updateUserProfile);
router.route("/change-password").put(verifyUser, changeUserPassword);
router.route("/send-otp").post(sendOTP);
router.route("/verify-otp").post(verifyOTP);
router.route("/forget-password").put(forgetPassword);


export default router