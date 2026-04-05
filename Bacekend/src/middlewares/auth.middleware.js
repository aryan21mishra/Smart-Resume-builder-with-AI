import { ApiError } from "../lib/apiError";
import { asyncHandler } from "../lib/asyncHandler";
import { findUserById } from "../service/user.service";

export const verifyUser = asyncHandler(async (req, _, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request!");
  }

  const decodeToken = await jwt.verify(token, process.env.ACCESS_TOKEN_KEY);

  const user = await findUserById(decodeToken?._id);

  if (!user) {
    throw new ApiError(401, "Invalid Access Token!");
  }

  req.user = user;
  next();
});
