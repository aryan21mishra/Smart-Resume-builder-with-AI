export const analyzeUserResumePrompt = (resumeText, jobDescription) => {
  return `TASK: Full resume analysis
Analyze the resume below and return this exact JSON:{
  "atsScore": <0-100>,
  "contentScore": <0-100>,
  "keywordScore": <0-100>,
  "formatScore": <0-100>,
  "impactScore": <0-100>,
  "overallFeedback": "<2-3 sentence summary>",
  "sectionFeedback": {
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
  "missingKeywords": ["keyword1"],
  "presentKeywords": ["keyword1"],
  "strengths": ["strength1"],
  "jobMatchScore": <0-100 or null>
}
RESUME:"${resumeText}"
${
  jobDescription
    ? `\nJOB DESCRIPTION:\n"\n${jobDescription}\n"`
    : "\nNo job description — set job_match_score to null."
}`;
};

export const jobMatchPrompt = (resumeText, jobDescription) => {
  return `TASK: Job description matching
Compare the resume against the job description.
Return this exact JSON:
{
  "job_match_score": <0-100>,
  "match_summary": "<2-3 sentences>",
  "matched_requirements": ["req1"],
  "missing_requirements": ["req1"],
  "missing_keywords": ["kw1"],
  "present_keywords": ["kw1"],
  "sections_to_emphasize": [
    { "section": "<name>", "reason": "<why>" }
  ],
  "reframe_suggestions": [
    { "current": "<text>", "suggested": "<reframe>", "impact": "<why>" }
  ],
  "skill_gaps": [
    { "skill": "<skill>", "importance": "critical|important|nice-to-have", "suggestion": "<fix>" }
  ],
  "overall_recommendation": "<final advice>"
}RESUME: "${resumeText}"
JOB DESCRIPTION: "${jobDescription}"`;
};

export const rewriteSectionPrompt = (section, currentContent, instruction) => {
  return `TASK: Rewrite resume section
Rewrite the ${section} section below to be more impactful and ATS-friendly.
Return this exact JSON:
{
  "rewrittenContent": "<fully rewritten section>",
  "changesMade": ["change1", "change2"],
  "keywordsAdded": ["keyword1", "keyword2"],
  "improvementReason": "<1-2 sentences why these changes help>",
  "beforeScore": <estimated impact score 0-100 before>,
  "afterScore": <estimated impact score 0-100 after>
}
SECTION: ${section.toUpperCase()}
CURRENT CONTENT: "${currentContent}"
INSTRUCTION: ${instruction || "Make it as impactful and ATS-friendly as possible."}`;
};
