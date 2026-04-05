import { ApiResponse } from "../lib/apiResponse";
import { asyncHandler } from "../lib/asyncHandler";

export const createResume = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const resumeData = req.body;
  if (!userId) {
    return res
      .status(401)
      .json(new ApiResponse(401, {}, "Unauthorized: User not authenticated"));
  }
  if (!resumeData) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Resume data is required"));
  }
  const newResume = await createResumeForUser(userId, resumeData);

  if (!newResume) {
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "Failed to create resume"));
  }

  res.json(
    new ApiResponse(201, { resume: newResume }, "Resume created successfully"),
  );
});
