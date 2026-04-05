import { User } from "../models/user.model.js";

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const findUserById = async (id) => {
  return await User.findById(id);
};

export const createUser = async (userData) => {
  return await User.create(userData);
};

export const updateUserTokens = async (
  userId,
  { refreshToken, accessToken },
) => {
  return await User.findByIdAndUpdate(
    userId,
    { $set: { refreshToken, accessToken } },
    { new: true },
  );
};
export const updateUser = async (userId, fieldsToUpdate) => {
  return await User.findByIdAndUpdate(
    userId,
    { $set: fieldsToUpdate },
    { new: true },
  );
};
