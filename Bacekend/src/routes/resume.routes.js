import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import {
  createResume,
  deleteResume,
  duplicateResume,
  getResume,
  updateResume,
} from "../controllers/resume.controller.js";

const router = Router();

//create a resume route
router.route("/").post(verifyUser, createResume);

//get specific resume route
router.route("/:id").post(verifyUser, getResume);

//update overall resume route
router.route("/:id").post(verifyUser, updateResume);

// delete the resume
router.route("/:id").post(verifyUser, deleteResume);

//duplicate resume generate route
router.route("/:id/duplicate").get(verifyUser, duplicateResume);

export default router;
