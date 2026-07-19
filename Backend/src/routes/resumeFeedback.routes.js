import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import {
  analyzeResumeByText,
  jobMatch,
  rewriteSection,
} from "../controllers/resumeFeedback.controller.js";
import fileUpload from "../middlewares/multer.middleware.js";
const resumeFeedbackRouter = Router();

resumeFeedbackRouter
  .route("/analyze")
  .post(verifyUser, fileUpload.single("resume"), analyzeResumeByText);
resumeFeedbackRouter
  .route("/job-match")
  .post(verifyUser, fileUpload.single("resume"), jobMatch);


export default resumeFeedbackRouter;
