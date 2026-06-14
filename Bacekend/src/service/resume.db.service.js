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
  return Resume.findById(resumeId);
};

export const findByIdAndUpdate = (resumeId, updateField) => {
  return Resume.findByIdAndUpdate(
    resumeId,
    { $set: updateField },
    { returnDocument: "after" },
  );
};

export const findAllResumesByUserId = async (userId) => {
  const rawCount = await Resume.countDocuments({ userId });
  console.log(`[findAllResumesByUserId] total raw resumes for userId ${userId}:`, rawCount);
  if (rawCount > 0) {
    const samples = await Resume.find({ userId }).limit(2).lean();
    console.log("[findAllResumesByUserId] sample resumes:", JSON.stringify(samples, null, 2));
  }
  return Resume.find({ userId, isDeleted: { $ne: true } }).sort({ createdAt: -1 });
};
