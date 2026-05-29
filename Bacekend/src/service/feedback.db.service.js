import { FeedBack } from "../models/feedback.model.js";

export const createFeedBack = async ({
  resumeId,
  resumeUploadId,
  userId,
  atsScore,
  contentScore,
  keywordScore,
  formatScore,
  overallFeedback,
  impactScore,
  sectionFeedback,
  improvements,
  missingKeywords,
  strengths,
  jobDescription,
  jobMatchScore,
}) => {
  const feedback = await FeedBack.create({
    resumeId,
    userId,
    resumeUploadId,
    atsScore,
    contentScore,
    keywordScore,
    formatScore,
    overallFeedback,
    impactScore,
    sectionFeedback,
    improvements,
    missingKeywords,
    strengths,
    jobDescription,
    jobMatchScore,
  });

  return feedback;
};
