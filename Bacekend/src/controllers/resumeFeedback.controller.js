import { ApiError } from "../lib/apiError";
import { asyncHandler } from "../lib/asyncHandler";
import { callAI } from "../lib/GroqAI";
import { analyzeUserResumePrompt } from "../lib/userPromptFormat";
import { createConservation } from "../service/conservation.service";
import { createMessage } from "../service/message.db.service";

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

  const { rawText, parsedText } = await callAI({
    role: "user",
    content: userPrompt,
  });

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

  const feedback = await createFeedback();
});
