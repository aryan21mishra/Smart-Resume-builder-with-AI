import { Conservation } from "../models/conservation.model.js";

export const createConservation = (userId) => {
  return Conservation.create({
    userId,
  });
};
