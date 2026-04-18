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
    resumeId: { type: Schema.Types.ObjectId, ref: "Resume", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    atsScore: { type: Number, min: 0, max: 100 },
    contentScore: { type: Number, min: 0, max: 100 },
    keywordScore: { type: Number, min: 0, max: 100 },
    formatScore: { type: Number, min: 0, max: 100 },
    impactScore: { type: Number, min: 0, max: 100 },
    overall_feedback: { type: String },
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
