import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, select: false, default: null },
    avatar: { type: String, default: null },
    avatarPublicId: { type: String, trim: true, default: null },
    provider: { type: String, enum: ["google", "email"], default: "email" },
    googleId: { type: String, select: false, default: null },
    refreshToken: {
      type: String,
      select: false,
    },
    accessToken: {
      type: String,
      select: false,
    },
  },
  { timestamps: true },
);

// Virtual: full name
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Hash password before save
userSchema.pre("save", async function () {
  if (!this.isModified("passwordHash") || !this.passwordHash) {
    return;
  }
  if (!this.passwordHash) {
    return;
  }
  this.passwordHash = await bcrypt.hash(this.passwordHash, 12);
});

userSchema.methods.comparePassword = function (plainPassword) {
  return bcrypt.compare(plainPassword, this.passwordHash);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY },
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET_KEY,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
  );
};
export const User = mongoose.model("User", userSchema);
