import { Conservation } from "../models/conservation.model.js";

export const createConservation = (resumeId,userId) => {
  return Conservation.create({
    resumeId,
    userId,
  });
};
