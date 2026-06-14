import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const personalInfoSchema = new Schema(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    title: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    location: { type: String, trim: true },
    linkedin: { type: String, trim: true },
    github: { type: String, trim: true },
    portfolio: { type: String, trim: true },
    summary: { type: String },
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
    isCurrent: { type: Boolean, default: false },
    cgpa: { type: Number, min: 0, max: 4 },
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
  { _id: true },
);
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
    personalInfo: personalInfoSchema,
    experience: [experienceSchema],
    education: [educationSchema],
    skills: [skillsSchema],
    projects: [projectSchema],
    certifications: [certificationSchema],
    languages: [{ type: String, trim: true }],
    isPublic: { type: Boolean, default: false },
    isDraft: { type: Boolean, default: true },
    feedback: { type: Schema.Types.ObjectId, ref: "Feedback" },
    exportFormats: [{ type: String, enum: ["pdf", "docx", "txt", "json"] }],
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
resumeSchema.plugin(mongooseAggregatePaginate);
export const Resume = mongoose.model("Resume", resumeSchema);
