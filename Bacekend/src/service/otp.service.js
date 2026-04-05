import { OTP } from "../models/otp.model";

export const createOTP = async (credencial) => {
  return await OTP.cerate(credencial);
};

export const findOTP = async (email) => {
  return await OTP.findOne({ email });
};
export const deleteManyOTP = async (email) => {
  return await OTP.deleteMany({ email });
};
