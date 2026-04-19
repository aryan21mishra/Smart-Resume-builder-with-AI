import { ApiError } from "../lib/apiError";
import { ApiResponse } from "../lib/apiResponse";
import { asyncHandler } from "../lib/asyncHandler";
import { callAI } from "../lib/GroqAI";
import { analyzeUserResumePrompt, jobMatchPrompt } from "../lib/promptFormat";
import { createConservation } from "../service/conservation.service";
import { createMessage, findMessages } from "../service/message.db.service";

export const analyzeResume = asyncHandler(async (req, res) => {
  const { resumeId, resumeText, jobDescription } = req.body;
  const userId = req.user;

  if (
    [resumeId, resumeId, jobDescription].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(
      404,
      "resumeId, resumeText and jobDescription are required",
    );
  }

  const conservation = await createConservation(resumeId, userId);

  if (!conservation) {
    throw new ApiError(
      500,
      "Something went wrong during the creating conservation!",
    );
  }

  const userPrompt = analyzeUserResumePrompt(resumeText, jobDescription);

  const { rawText, parsedText } = await callAI([
    {
      role: "user",
      content: userPrompt,
    },
  ]);

  if (!rawText || !parsedText) {
    throw new ApiError(500, "AI service unavailable!");
  }

  const saveUserMessage = await createMessage(
    conservation._id,
    "user",
    userPrompt,
    "analyze",
  );
  if (!saveUserMessage) {
    throw new ApiError(500, "Internal sever error while saving user message");
  }
  const saveAssistantMessage = await createMessage(
    conservation._id,
    "assistant",
    rawText,
    "analyze",
  );

  if (!saveAssistantMessage) {
    throw new ApiError(
      500,
      "Internal sever error while saving assistant message",
    );
  }

  const feedback = await createFeedback({
    resumeId,
    userId,
    atsScore: parsedText.atsScore,
    contentScore: parsedText.contentScore,
    keywordScore: parsedText.keywordScore,
    formatScore: parsedText.formatScore,
    overallFeedback: parsedText.overallFeedback,
    impactScore: parsedText.impactScore,
    sectionFeedback: parsedText.sectionFeedback,
    improvements: parsedText.improvements,
    missingKeywords: parsedText.missing_keywords,
    strengths: parsedText.strengths,
    jobDescription: jobDescription || null,
    jobMatchScore: parsedText.jobMatchScore || null,
  });
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { feedback, conservationId: conservation_id },
        "Resume analysis completed successfully",
      ),
    );
});

export const jobMatch = asyncHandler(async (req, res) => {
  const { resumeId, resumeText, jobDescription, conservationId } = req.body;

  if (
    [resumeId, resumeId, jobDescription].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(
      404,
      "resumeId, resumeText and jobDescription are required",
    );
  }
  if (conservationId === null) {
    conservationId = await createConservation(resumeId, userId)._id;
  }

  const pastMessages = await findMessages(conservationId);
  const jobMatchPrompt = jobMatchPrompt(resumeText, jobDescription);
  const fullMessages = [
    ...pastMessages,
    { role: "user", content: jobMatchPrompt },
  ];

  const { rawText, parsedText } = callAI(fullMessages);
  if (!rawText || !parsedText) {
    throw new ApiError(500, "AI service unavailable!");
  }
  const saveUserMessage = await createMessage(
    conservation._id,
    "user",
    jobMatchPrompt,
    "job-match",
  );
  if (!saveUserMessage) {
    throw new ApiError(500, "Internal sever error while saving user message");
  }
  const saveAssistantMessage = await createMessage(
    conservation._id,
    "assistant",
    rawText,
    "job-match",
  );

  if (!saveAssistantMessage) {
    throw new ApiError(
      500,
      "Internal sever error while saving assistant message",
    );
  }

  const feedback = await createFeedBack({
    resumeId,
    userId,
    atsScore: result.job_match_score,
    contentScore: 0,
    keywordScore: 0,
    formatScore: 0,
    impactScore: 0,
    sectionFeedback: { match_summary: result.match_summary },
    improvements: result.reframe_suggestions || [],
    missingKeywords: result.missing_keywords || [],
    strengths: result.matched_requirements || [],
    jobDescription,
    jobMatchScore: result.job_match_score,
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { feedback, conservationId },
        "Job match analysis completed successfully",
      ),
    );
});
