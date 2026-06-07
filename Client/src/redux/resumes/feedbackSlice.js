import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  atsScore: null,
  jobMatchScore: null,
  contentScore: null,
  keywordScore: null,
  formatScore: null,
  impactScore: null,
  overallFeedback: "",
  sectionFeedback: {},
  improvements: [],
  missingKeywords: [],
  strengths: [],
  jobDescription: "",
  resumeId: null,
  resumeUploadId: null,
  hasAnalyzed: false
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setFeedback: (state, action) => {
      return {
        ...state,
        ...action.payload,
        hasAnalyzed: true
      };
    },
    clearFeedback: () => {
      return initialState;
    }
  }
});

export const { setFeedback, clearFeedback } = feedbackSlice.actions;

export const selectFeedback = (state) => state.feedback;

export default feedbackSlice.reducer;