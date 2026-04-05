
import mongoose, { Schema } from "mongoose";

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
  this.otp = await bcrypt.hash(this.otp, 20);
  next();
});

otpSchema.methods.comparedOTP = async function (otp) {
  return await bcrypt.compare(otp, this.otp);
};

otpSchema.statics.incrementAttempts = function (email) {
  return this.updateOne(
    {
      email,
      attempts: { $lt: 5 },
    },
    { $inc: { attempts: 1 } },
  );
};

export const OTP = mongoose.model("OTP", otpSchema);
