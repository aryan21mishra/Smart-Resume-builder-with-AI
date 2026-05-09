import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import {
  analyzeResume,
  jobMatch,
  rewriteSection,
} from "../controllers/resumeFeedback.controller.js";
const resumeFeedbackRouter = Router();

resumeFeedbackRouter.route("/analyze").post(verifyUser, analyzeResume);
resumeFeedbackRouter.route("/job-match").post(verifyUser, jobMatch);
resumeFeedbackRouter.route("/rewrite").post(verifyUser, rewriteSection);

export default resumeFeedbackRouter;