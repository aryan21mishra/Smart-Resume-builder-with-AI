import { OTP } from "../models/otp.model.js";

export const createOTP = async (credencial) => {
  return await OTP.create(credencial);
};

export const findOTP = async (email) => {
  return await OTP.findOne({ email });
};

export const findAndUpdateOtp = async (email, otp, expiresAt) => {
  return await OTP.findOneAndUpdate()(
    {
      email,
    },
    { $set: { otp, expiresAt } },
    {
      $inc: { attempts: 1 },
    },
  );
};

export const deleteManyOTP = async (email) => {
  return await OTP.deleteMany({ email });
};
