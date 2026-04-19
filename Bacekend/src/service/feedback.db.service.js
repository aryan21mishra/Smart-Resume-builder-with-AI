import { FeedBack } from "../models/feedback.model";

export const createFeedBack = async ({
  resumeId,
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
  return FeedBack.create({
    resumeId,
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
  });
};
