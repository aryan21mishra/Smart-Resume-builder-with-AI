import mongoose, { Schema } from "mongoose";
const rewriteSectionSchema = new Schema(
  {
    resumeId: { type: Schema.Types.ObjectId, ref: "Resume", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    sectionName: { type: String, required: true },
    originalContent: { type: String, required: true },
    rewrittenContent: { type: String, required: true },
    changesMade: [{ type: String, required: true }],
    keywordScore: [{ type: String, required: true }],
    improvementReason: { type: String, required: true },
    beforeScore: { type: Number, min: 0, max: 100 },
    afterScore: { type: Number, min: 0, max: 100 },
  },
  { timestamps: true },
);

export const RewriteSection = mongoose.model("RewriteSection", rewriteSectionSchema);
