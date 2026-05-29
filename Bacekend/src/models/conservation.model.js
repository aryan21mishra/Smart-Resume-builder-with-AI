import mongoose, { Schema } from "mongoose";

const conservationSchema = new Schema(
  {
    resumeId: {
      type: Schema.Types.ObjectId,
      ref: "Resume",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      default: "Resume Analysis",
    },
  },

  { timestamps: true },
);

export const Conservation = mongoose.model("Conservation", conservationSchema);
