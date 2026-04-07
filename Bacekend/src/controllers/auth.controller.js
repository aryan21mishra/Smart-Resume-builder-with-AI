import { ApiError } from "../lib/apiError.js";
import { asyncHandler } from "../lib/asyncHandler.js";
import {
  createUser,
  findUserByEmail,
  findUserById,
  updateUser,
  updateUserTokens,
} from "../service/user.service.js";
import { ApiResponse } from "../lib/apiResponse.js";
import { generateOTP } from "../lib/gernerateOTP.js";
import { createOTP, deleteManyOTP, findOTP } from "../service/otp.service.js";

const generateToken = async (userId) => {
  //find user by id
  const user = await findUserById(userId);

  //generate user access token and refresh token
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  // save the tokens in the database
  user.refreshToken = refreshToken;
  user.accessToken = accessToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

export const registerUser = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  if (
    [email, password, firstName, lastName].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  //check if user with the same email already exist
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new ApiError(400, "Email already exist");
  }
  //create a new user
  const newUser = await createUser({
    email,
    passwordHash: password,
    firstName,
    lastName,
  });

  //getting access token and refresh token for the new user
  const { accessToken, refreshToken } = await generateToken(newUser._id);

  const options = {
    httpOnly: true,
    secure: "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  };
  // send the tokens as httpOnly cookies and also send user info in response
  res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        true,
        {
          user: {
            id: newUser._id,
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
          },
        },
        "User registered successfully",
      ),
    );
});

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((field) => field.trim() === "")) {
    throw new ApiError("All fields are required", 400);
  }
  // check if user with the email exist
  const existingUser = await findUserByEmail(email);
  if (!existingUser) {
    throw new ApiError("User not found ", 404);
  }
  // compare the password with the password hash in the database
  const isMatch = await existingUser.comparePassword(password);
  if (!isMatch) {
    throw new ApiError("Invalid credentials", 401);
  }
  // generate access token and refresh token for the user
  const { accessToken, refreshToken } = await generateToken(existingUser._id);

  const options = {
    httpOnly: true,
    secure: "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  };
  // send the tokens as httpOnly cookies and also send user info in response
  res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: {
            id: newUser._id,
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
          },
        },
        "Logged in successfully",
      ),
    );
});

export const userLogout = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  // invalidate the tokens in the database
  await updateUserTokens(userId, { refreshToken: null, accessToken: null });
  // clear the cookies and send response
  res
    .status(200)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json(new ApiResponse(200, {}, "Logged out successfully"));
});

export const getUserProfile = asyncHandler(async (req, res) => {
  // find the user by id from req.user._id
  const user = findUserById(req.user._id);
  // send the user info in response
  res.json(new ApiResponse(200, { user }, "User profile fetched successfully"));
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  // only allow updating firstName, lastName and avatar
  const { firstName, lastName, avatar } = req.body;
  // build an object with the fields to update
  const fieldsToUpdate = {};
  // only add the fields that are provided in the request body
  if (firstName) fieldsToUpdate.firstName = firstName;
  if (lastName) fieldsToUpdate.lastName = lastName;
  if (avatar) fieldsToUpdate.avatar = avatar;

  // update the user in the database and return the updated user
  const updatedUser = await updateUser(req.user._id, fieldsToUpdate);
  // send the updated user info in response
  res.json(
    new ApiResponse(
      200,
      { user: updatedUser },
      "User profile updated successfully",
    ),
  );
});

export const changeUserPassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if ([currentPassword, newPassword].some((field) => field.trim() === "")) {
    throw new ApiError("All fields are required", 400);
  }
  //find user
  const user = await findUserById(req.user._id);

  // match the currentPassword
  const isMatch = await user.comparePassword(currentPassword);

  if (!isMatch) {
    throw new ApiError("Current password is incorrect", 401);
  }
  //update new password
  user.passwordHash = newPassword;
  await user.save();

  //send the response
  res.json(new ApiResponse(200, {}, "Password changed successfully"));
});

export const sendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email || email.trim() === "") {
    throw new ApiError("Email is required", 400);
  }
  //find the user via email
  const user = await findUserByEmail(email);
  if (!user) {
    throw new ApiError("User not found", 404);
  }
  //find the otp schema is exit on corresponding email
  const existingOTP = await findOTP(email);

  // check if the otp exist how much attempt they have and if the attempt less than 5 then we generate the otp send send via mail other wise send error
  if (existingOTP) {
    if (existingOTP.attempts === 5) {
      throw new ApiError(
        "Maximum OTP attempts exceeded. Please try again later.",
        429,
      );
    }

    const otp = generateOTP();

    existingOTP.otp = otp;

    existingOTP.expiresAt = new Date(
      Date.now() + Number(process.env.OTP_EXPIRY_MINUTES) * 60 * 1000,
    );
    otpModel.incrementAttempts(email);
    existingOTP.save();

    // send otp via mail
  }

  const otp = generateOTP();
  const expiresAt = new Date(
    Date.now() + Number(process.env.OTP_EXPIRY_MINUTES) * 60 * 1000,
  );
  const otpModel = await createOTP({ otp, expiresAt, attempts: 1 });
  if (!otpModel) {
    throw new ApiError("Failed to create OTP", 500);
  }
  //send the mail

  res.json(
    new ApiResponse(200, {}, "Password reset instructions sent to email"),
  );
});

export const verifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  if ([email, newPassword].some((field) => field.trim() === "")) {
    throw new ApiError("Email and otp are required", 400);
  }

  const record = await findOTP(email);
  if (!record) {
    throw new ApiError("OTP not found or already used.", 400);
  }

  const OTPVerified = record.comparedOTP(otp);

  if (!OTPVerified) {
    throw new ApiError("Invalid OTP", 400);
  }

  record.verified = true;
  await record.save({ validateBeforeSave: false });

  res.status(200).json(new ApiResponse(200, {}, "OTP verified successfully!"));
});

export const forgetPassword = asyncHandler(async (req, res) => {
  const { email, newPassword } = req.body;

  if ([email, newPassword].some((field) => field.trim() === "")) {
    throw new ApiError("Email and new password are required", 400);
  }
  //find the user via email
  const user = await findUserByEmail(email);

  if (!user) {
    throw new ApiError("User does not exist!", 404);
  }
  // check the otp isVerified or not on a corresponding email
  const optIsVerified = await findOTP(email).verified;

  if (!optIsVerified) {
    throw new ApiError("Otp verification is required!", 400);
  }

  // set new password
  user.password = newPassword;
  await user.save();

  // delete otp to a corresponding email
  await deleteManyOTP(email);

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully!"));
});
