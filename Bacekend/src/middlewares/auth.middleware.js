import { ApiError } from "../lib/apiError";
import { asyncHandler } from "../lib/asyncHandler";

export const verifyUser = asyncHandler(async (req, _, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request!");
  }

  const decodeToken=await jwt.verify(token,process.env.A)
});
