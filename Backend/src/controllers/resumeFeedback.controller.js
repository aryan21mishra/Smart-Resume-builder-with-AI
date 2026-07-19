import {
  pdfExtractor,
  asyncHandler,
  getStructureTextFromPdf,
  userPrompts,
  uploadCloud,
  ApiResponse,
  ApiError,
  getResumeAtsScoreFromAi,
} from "../lib/index.js";
import { createConservation } from "../service/conservation.service.js";
import { createMessage, findMessages } from "../service/message.db.service.js";
import { createRewriteSection } from "../service/rewrite-section.service.js";
import { createFeedBack } from "../service/feedback.db.service.js";
import { ResumeUpload } from "../models/resume-upload.model.js";

export const analyzeResumeByText = asyncHandler(async (req, res) => {
  const { resumeId, jobDescription } = req.body;
  const userId = req.user?._id;
  const file = req.file;

  //pdf text
  let structuredText;

  //save file in db
  let saveFile;
  if (file) {
    //extract pdf to text
    const resumePdfText = await pdfExtractor(file.path);
    //upload on cloudinary
    const uploadResult = await uploadCloud({ localFilePath: file.path });

    //structure the extracted text
    //Prompt for structure the extracted text
    const userPrompt = userPrompts.parseResumePrompt(resumePdfText);
    //call ai for structure the extracted text

    const { rawText, parsedText } = await getStructureTextFromPdf(userPrompt);
    structuredText = parsedText;

    //save the uploaded file
    saveFile = await ResumeUpload.create({
      title: uploadResult.original_filename,
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      rawText,
      userId,
    });

    if (!structuredText) {
      throw new ApiError(
        500,
        "Something went wrong during the structure text extraction!",
      );
    }
  }

  //create conservation
  const conservation = await createConservation(userId);
  if (!conservation) {
    throw new ApiError(
      500,
      "Something went wrong during the creating conservation!",
    );
  }

  //Prompt for check ats score of the resume
  const userPrompt = userPrompts.analyzeUserResumePrompt(
    structuredText,
    jobDescription,
  );

  //call ai for check ats score of the resume
  const { rawText, parsedText } = await getResumeAtsScoreFromAi([
    {
      role: "user",
      content: userPrompt,
    },
  ]);

  if (!rawText || !parsedText) {
    throw new ApiError(500, "AI service unavailable!");
  }
  //save user message
  const saveUserMessage = await createMessage(
    conservation._id,
    "user",
    userPrompt,
    "analyze",
  );
  if (!saveUserMessage) {
    throw new ApiError(500, "Internal sever error while saving user message");
  }

  //save assistant message
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
  //save feedback of the resume
  const feedback = await createFeedBack({
    resumeId: resumeId || null,
    resumeUploadId: saveFile?._id || null,
    userId,
    atsScore: parsedText.atsScore,
    contentScore: parsedText.contentScore,
    keywordScore: parsedText.keywordScore,
    formatScore: parsedText.formatScore,
    overallFeedback: parsedText.overallFeedback,
    impactScore: parsedText.impactScore,
    sectionFeedback: parsedText.sectionFeedback,
    improvements: parsedText.improvements,
    missingKeywords: parsedText.missingKeywords,
    strengths: parsedText.strengths,
    jobDescription: jobDescription || null,
    jobMatchScore: parsedText.jobMatchScore || null,
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { feedback, conservationId: conservation?._id },
        "Resume analysis completed successfully",
      ),
    );
});

export const jobMatch = asyncHandler(async (req, res) => {
  const { resumeId, resumeText, jobDescription, conservationId } = req.body;
  const userId = req.user;
  const file = req.file;
  //pdf structure text from ai
  let structuredText;

  //save file in db
  let saveFile;

  if (file) {
    //upload on cloudinary
    const uploadResult = await uploadCloud(file.path, "resumes");

    //extract pdf to text
    const resumePdfText = await pdfExtractor(file.path);

    //structure the extracted text
    //Prompt for structure the extracted text
    const userPrompt = userPrompts.parseResumePrompt(resumePdfText);
    //call ai for structure the extracted text
    const { rawText, parsedText } = await getStructureTextFromPdf(userPrompt);
    structuredText = parsedText;

    //save the uploaded file
    saveFile = await ResumeUpload.create({
      title: uploadResult.originalName,
      url: uploadResult.url,
      publicId: uploadResult.publicId,
      rawText,
      userId,
    });

    if (!structuredText) {
      throw new ApiError(
        500,
        "Something went wrong during the structure text extraction!",
      );
    }
  }

  if (conservationId === null) {
    conservationId = await createConservation(resumeId, userId)._id;
  }

  const pastMessages = await findMessages(conservationId);
  const jobMatchPrompt = userPrompts.jobMatchPrompt(
    resumeText || structuredText?.parsedText,
    jobDescription,
  );
  const fullMessages = [
    ...pastMessages,
    { role: "user", content: jobMatchPrompt },
  ];

  const { rawText, parsedText } = getResumeAtsScoreFromAi(fullMessages);
  if (!rawText || !parsedText) {
    throw new ApiError(500, "AI service unavailable!");
  }
  const saveUserMessage = await createMessage(
    conservationId,
    "user",
    jobMatchPrompt,
    "job-match",
  );
  if (!saveUserMessage) {
    throw new ApiError(500, "Internal sever error while saving user message");
  }
  const saveAssistantMessage = await createMessage(
    conservationId,
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
    resumeId: resumeId || null,
    resumeUploadId: saveFile?._id || null,
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

export const rewriteSection = asyncHandler(async (req, res) => {
  const { resumeId, section, currentContent, instruction, conservationId } =
    req.body;

  if (
    [resumeId, section, currentContent].some((field) => field.trim() === "")
  ) {
    throw new ApiError(400, "Resume id,section,current content are required");
  }
  if (conservationId === null) {
    conservationId = await createConservation(resumeId, userId)._id;
  }
  const pastMessages = await findMessages(conservationId);
  const rewriteSectionPrompt = userPrompts.rewriteSectionPrompt(
    section,
    currentContent,
    instruction,
  );

  const fullMessages = [
    ...pastMessages,
    { role: "user", content: rewriteSectionPrompt },
  ];

  const { rawText, parsedText } = getResumeAtsScoreFromAi(fullMessages);
  const saveUserMessage = await createMessage(
    conservationId,
    "user",
    rewriteSectionPrompt,
    "rewrite",
  );
  if (!saveUserMessage) {
    throw new ApiError(500, "Internal sever error while saving user message");
  }
  const saveAssistantMessage = await createMessage(
    conservationId,
    "assistant",
    rawText,
    "rewrite",
  );

  const rewriteSection = await createRewriteSection({
    resumeId: resumeId || null,
    userId,
    sectionName: section,
    originalContent: currentContent,
    rewrittenContent: parsedText.rewrittenContent,
    changesMade: parsedText.changesMade,
    keywordScore: parsedText.keywordScore,
    improvementReason: parsedText.improvementReason,
    beforeScore: parsedText.beforeScore,
    afterScore: parsedText.afterScore,
  });

  if (!saveAssistantMessage) {
    throw new ApiError(
      500,
      "Internal sever error while saving assistant message",
    );
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { rewriteSection },
        "Rewrite section analysis completed successfully",
      ),
    );
});
