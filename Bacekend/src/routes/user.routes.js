import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware";
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
} from "../controllers/auth.controller";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(userLogin);
router.route("/logout").post(verifyUser, userLogout);
router.route("/me").post(verifyUser, getUserProfile);
router.route("/update-profile").post(verifyUser, updateUserProfile);
router.route("/change-password").post(verifyUser, changeUserPassword);
router.route("/send-otp").post(sendOTP);
router.route("/verify-otp").post(verifyOTP);
router.route("/forget-password").post(forgetPassword);
