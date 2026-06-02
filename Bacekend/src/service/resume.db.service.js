import { Resume } from "../models/resume.model.js";

export const createResumeForUser = (
  userId,
  title,
  template,
  personalInfo,
  experience,
  education,
  projects,
  certifications,
) => {
  return Resume.create({
    userId,
    title,
    template,
    personalInfo,
    experience,
    education,
    projects,
    certifications,
  });
};

export const findResumeById = (resumeId) => {
  return Resume.findOne(resumeId);
};

export const findByIdAndUpdate = (resumeId, updateField) => {
  return Resume.findByIdAndUpdate(
    resumeId,
    { $set: updateField },
    { returnDocument: "after" },
  );
};

export const findAllResumesByUserId = (userId) => {
  return Resume.find({ userId, isDeleted: false }).sort({ createdAt: -1 });
};
