import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    phone: { type: String, trim: true },
    location: { type: String, trim: true },
    linkedin: { type: String, trim: true },
    github: { type: String, trim: true },
    website: { type: String, trim: true },
    portfolio: { type: String, trim: true },
  },
  { _id: false },
);

const experienceSchema = new Schema(
  {
    company: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    location: { type: String, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date }, // null = present
    isCurrent: { type: Boolean, default: false },
    bullets: [{ type: String, trim: true }], // individual bullet points
    description: { type: String }, // raw text fallback
  },
  { _id: true, timestamps: false },
);

const educationSchema = new Schema(
  {
    institution: { type: String, required: true, trim: true },
    degree: { type: String, required: true, trim: true }, // "B.S. Computer Science"
    field: { type: String, trim: true },
    startDate: { type: Date },
    endDate: { type: Date },
    gpa: { type: Number, min: 0, max: 4 },
    honors: [{ type: String }],
    activities: [{ type: String }],
  },
  { _id: true, timestamps: false },
);

const projectSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    url: { type: String, trim: true },
    repoUrl: { type: String, trim: true },
    tech: [{ type: String, trim: true }],
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { _id: true, timestamps: false },
);

const certificationSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    issuer: { type: String, trim: true },
    issueDate: { type: Date },
    expiryDate: { type: Date },
    credentialId: { type: String, trim: true },
    url: { type: String, trim: true },
  },
  { _id: true, timestamps: false },
);

const skillsSchema = new Schema(
  {
    technical: [{ type: String }],
    soft: [{ type: String }],
    languages: [{ type: String }],
    tools: [{ type: String }],
  },
  { _id: false },
);

// ── Root Resume Schema ────────────────────────────────────────────────────────

const resumeSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },

    title: {
      type: String,
      required: true,
      trim: true,
      default: "Untitled Resume",
    },
    template: {
      type: String,
      enum: ["modern", "classic", "minimal", "executive", "creative"],
      default: "modern",
    },
    colorTheme: { type: String, default: "#e8b86d" },
    font: { type: String, default: "DM Sans" },

    targetJobTitle: { type: String, trim: true },
    targetIndustry: { type: String, trim: true },
    targetJobDescription: { type: String },

    fullName: { type: String, trim: true },
    email: { type: String, trim: true },
    summary: { type: String, maxlength: 1000 },
    contact: contactSchema,

    experience: [experienceSchema],
    education: [educationSchema],
    projects: [projectSchema],
    certifications: [certificationSchema],
    skills: skillsSchema,
    awards: [
      { title: String, issuer: String, date: Date, description: String },
    ],
    publications: [{ title: String, journal: String, date: Date, url: String }],
    volunteer: [
      {
        organization: String,
        role: String,
        startDate: Date,
        endDate: Date,
        description: String,
      },
    ],
    customSections: [
      {
        heading: { type: String },
        items: [{ label: String, description: String }],
      },
    ],

    // AI & ATS
    atsScore: { type: Number, min: 0, max: 100 },
    keywordsMatched: [{ type: String }],
    keywordsMissing: [{ type: String }],
    lastAiAnalysis: { type: Date },

    // Meta
    isPublic: { type: Boolean, default: false },
    publicSlug: { type: String, unique: true, sparse: true },
    isDraft: { type: Boolean, default: true },
    version: { type: Number, default: 1 },
    tags: [{ type: String, trim: true }],
    exportFormats: [{ type: String, enum: ["pdf", "docx", "txt", "json"] }],
  },
  { timestamps: true },
);

resumeSchema.index({ userId: 1, updatedAt: -1 });
resumeSchema.index({ publicSlug: 1 }, { sparse: true });
resumeSchema.index({ userId: 1, isDraft: 1 });
resumeSchema.index(
  { title: "text", summary: "text", targetJobTitle: "text" },
  { name: "resume_text_search" },
);

module.exports = mongoose.model("Resume", resumeSchema);
