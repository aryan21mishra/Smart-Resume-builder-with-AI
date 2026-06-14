import { ApiError } from "../lib/apiError.js";
import { ApiResponse } from "../lib/apiResponse.js";
import { asyncHandler } from "../lib/asyncHandler.js";
import {
  createResumeForUser,
  findAllResumesByUserId,
  findByIdAndUpdate,
  findResumeById,
} from "../service/resume.db.service.js";

export const createResume = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const {
    title = "My Resume",
    template = "modern",
    personalInfo = {},
    experience = [],
    education = [],
    projects = [],
    certifications = [],
  } = req.body;

  const newResume = await createResumeForUser(
    userId,
    title,
    template,
    personalInfo,
    experience,
    education,
    projects,
    certifications,
  );

  if (!newResume) {
    throw new ApiError(500, "Failed to create resume!");
  }

  res.json(
    new ApiResponse(201, { resume: newResume }, "Resume created successfully"),
  );
});

export const updateResume = asyncHandler(async (req, res) => {
  const resumeId = req.params.id;

  const existingResume = await findResumeById(resumeId);
  if (!existingResume) {
    throw new ApiError(404, "Resume not found!");
  }
  const allowedFields = [
    "title",
    "template",
    "personalInfo",
    "experience",
    "education",
    "skills",
    "projects",
    "certifications",
    "isPublic",
  ];
  let updatedField = {};
  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      updatedField[field] = req.body[field];
    }
  });
  const updatedResume = await findByIdAndUpdate(resumeId, updatedField);

  res
    .status(200)
    .json(
      new ApiResponse(200, { updatedResume }, "Resume updated successfully"),
    );
});

export const deleteResume = asyncHandler(async (req, res) => {
  const resumeId = req.params.id;
  const existingResume = await findResumeById(resumeId);
  if (!existingResume) {
    throw new ApiError(404, "Resume not found!");
  }
  const isDeleted = await findByIdAndUpdate(resumeId, { isDeleted: true });

  if (!isDeleted) {
    throw new ApiError("Failed to delete resume!");
  }

  res.status(200).json(new ApiResponse(200, {}, "Resume deleted successfully"));
});

export const getResume = asyncHandler(async (req, res) => {
  const resumeId = req.params.id;

  const existingResume = await findResumeById(resumeId);
  if (!existingResume) {
    throw new ApiError(404, "Resume not found!");
  }

  res
    .status(200)
    .json(new ApiResponse(200, { existingResume }, "Resume fetched"));
});

export const duplicateResume = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const resumeId = req.params.id;

  const existingResume = await findResumeById(resumeId);
  if (!existingResume) {
    throw new ApiError(404, "Resume not found!");
  }

  const newResume = await createResumeForUser(
    userId,
    existingResume.title,
    existingResume.template,
    existingResume.personalInfo,
    existingResume.experience,
    existingResume.education,
    existingResume.projects,
    existingResume.certifications,
  );

  if (!newResume) {
    throw new ApiError(500, "Failed to create resume!");
  }

  res.json(
    new ApiResponse(201, { resume: newResume }, "Resume created successfully"),
  );
});

export const getAllResumes = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  console.log(userId);
  const allResumes = await findAllResumesByUserId(userId);
  console.log(allResumes)
  if (!allResumes) {
    throw new ApiError(404, "Resumes not found!");
  }
  res.status(200).json(new ApiResponse(200, { allResumes }, "Resumes fetched"));
});
