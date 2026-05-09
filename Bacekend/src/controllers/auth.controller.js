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
import {
  createOTP,
  deleteManyOTP,
  findAndUpdateOtp,
  findOTP,
} from "../service/otp.service.js";
import { sendEmail } from "../lib/Resend.js";


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
  console.log(req.body);
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

  // send the welcome email to the user
  await sendEmail(
    email,
    "Welcome to Smart Resume Builder",
    firstName + " " + lastName,
  );

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

  console.log(req.body);

  if ([email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  // check if user with the email exist
  const existingUser = await findUserByEmail(email);
  if (!existingUser) {
    throw new ApiError(404, "User not found ");
  }
  // compare the password with the password hash in the database
  const isMatch = await existingUser.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials");
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
            id: existingUser._id,
            email: existingUser.email,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
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
  console.log(req.user._id);
  const user = await findUserById(req.user._id);
  if (!user) {
    throw new ApiError(404, "User not found!");
  }
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
    throw new ApiError(400, "All fields are required");
  }
  //find user
  const user = await findUserById(req.user._id, true);

  // match the currentPassword
  const isMatch = await user.comparePassword(currentPassword);

  if (!isMatch) {
    throw new ApiError(401, "Current password is incorrect");
  }
  //update new password
  user.passwordHash = newPassword;
  await user.save();

  //send the response
  res.json(new ApiResponse(200, {}, "Password changed successfully"));
});

export const sendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email || email?.trim() === "") {
    throw new ApiError(400, "Email is required");
  }
  console.log(email);
  //find the user via email
  const user = await findUserByEmail(email);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  //find the otp schema is exit on corresponding email
  const existingOTP = await findOTP(email);

  // check if the otp exist how much attempt they have and if the attempt less than 5 then we generate the otp send send via mail other wise send error
  if (existingOTP) {
    if (existingOTP.attempts === 5) {
      throw new ApiError(
        429,
        "Maximum OTP attempts exceeded. Please try again later.",
      );
    }

    const otp = generateOTP();
    await findAndUpdateOtp(email, otp, expiresAt);

    // send otp via mail
  }

  const otp = generateOTP();
  const expiresAt = new Date(
    Date.now() + Number(process.env.OTP_EXPIRY_MINUTES) * 60 * 1000,
  );
  const otpModel = await createOTP({ email, otp, expiresAt, attempts: 1 });
  console.log("model created");
  if (!otpModel) {
    throw new ApiError(500, "Failed to create OTP");
  }

  //send the mail

  res.json(
    new ApiResponse(200, {}, "Password reset instructions sent to email"),
  );
});

export const verifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  if ([email, otp].some((field) => field.trim() === "")) {
    throw new ApiError(400, "Email and otp are required");
  }

  const record = await findOTP(email);
  if (!record) {
    throw new ApiError(400, "OTP not found or already used.");
  }

  const OTPVerified = record.comparedOTP(otp);

  if (!OTPVerified) {
    throw new ApiError(400, "Invalid OTP");
  }

  record.verified = true;
  await record.save({ validateBeforeSave: false });

  res.status(200).json(new ApiResponse(200, {}, "OTP verified successfully!"));
});

export const forgetPassword = asyncHandler(async (req, res) => {
  const { email, newPassword } = req.body;

  if ([email, newPassword].some((field) => field.trim() === "")) {
    throw new ApiError(400, "Email and new password are required");
  }
  //find the user via email
  const user = await findUserByEmail(email);

  if (!user) {
    throw new ApiError(404, "User does not exist!");
  }
  // check the otp isVerified or not on a corresponding email
  const optIsVerified = await findOTP(email);
  console.log(optIsVerified);

  if (!optIsVerified.verified) {
    throw new ApiError(400, "Otp verification is required!");
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
