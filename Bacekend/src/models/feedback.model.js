import mongoose, { Schema } from "mongoose";

const sectionFeedbackSchema = new Schema(
  {
    summary: { type: String },
    experience: { type: String },
    education: { type: String },
    skills: { type: String },
    projects: { type: String },
  },
  { _id: false },
);
const improvementsSchema = new Schema(
  {
    priority: { type: String },
    section: { type: String },
    issue: { type: String },
    suggestion: { type: String },
  },
  { _id: true, timestamps: false },
);

const feedbackSchema = new Schema(
  {
    resumeId: { type: Schema.Types.ObjectId, ref: "Resume", default: null },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    resumeUploadId: {
      type: Schema.Types.ObjectId,
      ref: "ResumeUpload",
      default: null,
    },
    atsScore: { type: Number, min: 0, max: 100 },
    contentScore: { type: Number, min: 0, max: 100 },
    keywordScore: { type: Number, min: 0, max: 100 },
    formatScore: { type: Number, min: 0, max: 100 },
    overallFeedback: { type: String },
    impactScore: { type: Number, min: 0, max: 100 },
    sectionFeedback: sectionFeedbackSchema,
    improvements: [improvementsSchema],
    missingKeywords: {
      type: [String],
      default: [],
    },
    presentKeywords: {
      type: [String],
      default: [],
    },
    strength: {
      type: [String],
      default: [],
    },
    jobDescription: {
      type: String,
    },
    jobMatchScore: {
      type: Number,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true },
);

export const FeedBack = mongoose.model("Feedback", feedbackSchema);
