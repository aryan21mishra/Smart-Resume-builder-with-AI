import { Message } from "../models/message.model";

export const createMessage = (conservationId, role, content, taskType) => {
  return Message.create({
    conservationId,
    role,
    content,
    taskType,
  });
};
