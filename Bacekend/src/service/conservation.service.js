import { Conservation } from "../models/conservation.model";

export const createConservation = () => {
  return Conservation.create({
    resumeId,
    userId,
  });
};
