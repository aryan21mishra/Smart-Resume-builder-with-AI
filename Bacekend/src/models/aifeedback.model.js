import mongoose, { Schema } from "mongoose";

const aiFeedbackSchema = new Schema(
  {
    resumeId: { type: Schema.Types.ObjectId, ref: "Resume", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },

    // What triggered this analysis
    trigger: {
      type: {
        type: String,
        enum: ["manual", "auto_save", "export", "job_match"],
        default: "manual",
      },
      jobDescriptionSnapshot: { type: String }, // copy of JD at time of analysis
    },

    // Overall scores (0–100)
    scores: {
      overall: { type: Number, min: 0, max: 100 },
      ats: { type: Number, min: 0, max: 100 }, // Applicant Tracking System friendliness
      clarity: { type: Number, min: 0, max: 100 },
      impact: { type: Number, min: 0, max: 100 }, // quantified achievements
      formatting: { type: Number, min: 0, max: 100 },
      keywordMatch: { type: Number, min: 0, max: 100 }, // vs. target JD
      brevity: { type: Number, min: 0, max: 100 },
    },

    // Section-level feedback
    sectionFeedback: [
      {
        section: { type: String }, // "summary" | "experience[0]" | "skills" …
        score: { type: Number, min: 0, max: 100 },
        issues: [{ type: String }],
        suggestions: [{ type: String }],
        improved: { type: String }, // AI-rewritten version of that section
      },
    ],

    // Bullet-level rewrites
    bulletSuggestions: [
      {
        experienceId: { type: Schema.Types.ObjectId },
        original: { type: String },
        rewritten: { type: String },
        reasoning: { type: String },
      },
    ],

    // Keyword analysis
    keywords: {
      matched: [{ type: String }],
      missing: [{ type: String }],
      extra: [{ type: String }], // present but irrelevant
    },

    // Top-level summary
    summary: { type: String }, // 2-3 sentence executive summary by AI
    topStrengths: [{ type: String }], // e.g. "Strong quantified achievements"
    criticalIssues: [{ type: String }], // blockers
    quickWins: [{ type: String }], // easy fixes

    // Raw AI response (for debugging / re-parsing)
    rawResponse: { type: String },
    model: { type: String, default: "claude-sonnet-4-20250514" },
    promptTokens: { type: Number },
    outputTokens: { type: Number },
    latencyMs: { type: Number },

    status: {
      type: String,
      enum: ["pending", "complete", "failed"],
      default: "pending",
    },
    error: { type: String },
  },
  { timestamps: true },
);

aiFeedbackSchema.index({ resumeId: 1, createdAt: -1 });
aiFeedbackSchema.index({ userId: 1, createdAt: -1 });
aiFeedbackSchema.index({ status: 1 });

module.exports = mongoose.model("AiFeedback", aiFeedbackSchema);
