import { ApiError } from "../lib/apiError.js";
import { asyncHandler } from "../lib/asyncHandler.js";
import { findUserById } from "../service/user.service.js";
import jwt from "jsonwebtoken";
export const verifyUser = asyncHandler(async (req, _, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    throw new ApiError(401, "Unauthorized request!");
  }
  const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
  const user = await findUserById(decodeToken?._id);
  if (!user) {
    throw new ApiError(401, "Invalid Access Token!");
  }
  req.user = user;
  next();
});
