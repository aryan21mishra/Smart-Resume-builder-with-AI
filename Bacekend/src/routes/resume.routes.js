import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import {
  createResume,
  deleteResume,
  duplicateResume,
  getResume,
  updateResume,
} from "../controllers/resume.controller.js";

const resumeRoutes = Router();

//create a resume route
resumeRoutes.route("/").post(verifyUser, createResume);

//get specific resume route
resumeRoutes.route("/:id").post(verifyUser, getResume);

//update overall resume route
resumeRoutes.route("/:id").post(verifyUser, updateResume);

// delete the resume
resumeRoutes.route("/:id").post(verifyUser, deleteResume);

//duplicate resume generate route
resumeRoutes.route("/:id/duplicate").get(verifyUser, duplicateResume);

export default resumeRoutes;
