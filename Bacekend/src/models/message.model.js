import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  role: {
    type: String,
    enum: ["user", "assistant"],
  },
  content: { type: String },
  taskType: {
    type: String,
    enum: ["analyze", "job-match", "rewrite", "keyword", "chat"],
  },
  conservationId: {
    type: Schema.Types.ObjectId,
    ref: "Conservation",
  },
});

export const Message = mongoose.model("Message", messageSchema);
