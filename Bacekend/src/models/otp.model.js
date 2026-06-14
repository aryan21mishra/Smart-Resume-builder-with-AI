import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
const otpSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
      index: { expires: 0 },
    },
    attempts: {
      type: Number,
      default: 0,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
otpSchema.pre("save", async function () {
  if (!this.isModified("otp")) return;
  this.otp = await bcrypt.hash(this.otp, 10);
});
otpSchema.methods.comparedOTP = async function (otp) {
  return await bcrypt.compare(otp, this.otp);
};
export const OTP = mongoose.model("OTP", otpSchema);
