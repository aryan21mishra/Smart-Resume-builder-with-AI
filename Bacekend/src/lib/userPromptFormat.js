export const analyzeUserResumePrompt = (resumeText, jobDescription) => {
  return `TASK: Full resume analysis
Analyze the resume below and return this exact JSON:{
  "ats_score": <0-100>,
  "content_score": <0-100>,
  "keyword_score": <0-100>,
  "format_score": <0-100>,
  "impact_score": <0-100>,
  "overall_feedback": "<2-3 sentence summary>",
  "section_feedback": {
    "summary": "<feedback>",
    "experience": "<feedback>",
    "education": "<feedback>",
    "skills": "<feedback>",
    "projects": "<feedback>"
  },
  "improvements": [
    {
      "priority": "high|medium|low",
      "section": "<section>",
      "issue": "<what is wrong>",
      "suggestion": "<how to fix>"
    }
  ],
  "missing_keywords": ["keyword1"],
  "present_keywords": ["keyword1"],
  "strengths": ["strength1"],
  "job_match_score": <0-100 or null>
}
RESUME:"${resumeText}"
${
  jobDescription
    ? `\nJOB DESCRIPTION:\n"\n${jobDescription}\n"`
    : "\nNo job description — set job_match_score to null."
}`;
};
