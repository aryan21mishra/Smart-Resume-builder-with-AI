import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import {
  createResume,
  deleteResume,
  duplicateResume,
  getAllResumes,
  getResume,
  updateResume,
} from "../controllers/resume.controller.js";

const resumeRoutes = Router();

//create a resume route
resumeRoutes.route("/").post(verifyUser, createResume);

//get specific resume route
resumeRoutes.route("/:id").get(verifyUser, getResume);

//update overall resume route
resumeRoutes.route("/:id").post(verifyUser, updateResume);

// delete the resume
resumeRoutes.route("/:id/delete").post(verifyUser, deleteResume);

//duplicate resume generate route
resumeRoutes.route("/:id/duplicate").get(verifyUser, duplicateResume);

//get all resumes route for particular user
resumeRoutes.route("/all-resumes").get(verifyUser, getAllResumes);

export default resumeRoutes;
