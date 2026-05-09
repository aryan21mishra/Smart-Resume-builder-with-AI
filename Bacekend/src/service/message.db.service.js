import { Message } from "../models/message.model.js";

export const createMessage = (conservationId, role, content, taskType) => {
  return Message.create({
    conservationId,
    role,
    content,
    taskType,
  });
};

export const findMessages = (conservationId) => {
  return Message.find(
    { conservationId },
    { role: 1, content: 1, _id: 0, taskType: 0, conservationId: 0 },
  ).sort({
    createdAt: 1,
  });
};
