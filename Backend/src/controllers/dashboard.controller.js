import { asyncHandler } from "../lib/asyncHandler";
import { ApiResponse } from "../lib/apiResponse";
import { getDashboardAnalytic } from "../service/dashboard-analytics.service";

export const getDashboard = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const analytic = await getDashboardAnalytic(userId);
  if (!analytic) {
    throw new ApiError(404, "Dashboard not found!");
  }
  res.status(200).json(new ApiResponse(200, analytic, "Dashboard fetched"));
});
