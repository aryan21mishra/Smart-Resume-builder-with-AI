import { Conservation } from "../models/conservation.model";

export const createConservation = (resumeId,userId) => {
  return Conservation.create({
    resumeId,
    userId,
  });
};
