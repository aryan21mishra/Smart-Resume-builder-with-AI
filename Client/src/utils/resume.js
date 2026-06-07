export const mapFrontendToBackend = (resume) => {
  return {
    title: resume.title || "My Resume",
    template: resume.template || "modern",
    personalInfo: {
      firstName: resume.personalInformation?.firstName || "",
      lastName: resume.personalInformation?.lastName || "",
      title: resume.personalInformation?.headline || "",
      email: resume.personalInformation?.email || "",
      phone: resume.personalInformation?.phone || "",
      location:
        [resume.personalInformation?.city, resume.personalInformation?.country]
          .filter(Boolean)
          .join(", ") || "",
      linkedin: resume.personalInformation?.linkedinUrl || "",
      github: resume.personalInformation?.portfolioUrl || "",
      portfolio: resume.personalInformation?.portfolioUrl || "",
      summary: resume.personalInformation?.summary || "",
    },
    experience: (resume.experiences || []).map((exp) => ({
      company: exp.company || "",
      title: exp.jobTitle || "",
      location: exp.location || "",
      startDate: exp.startDate ? new Date(exp.startDate) : new Date(),
      endDate:
        exp.endDate && !exp.currentlyWorkHere ? new Date(exp.endDate) : null,
      isCurrent: !!exp.currentlyWorkHere,
      bullets: exp.description
        ? exp.description
            .split("\n")
            .map((b) => b.replace(/^[•-\s]+/, "").trim())
            .filter(Boolean)
        : [],
      description: exp.description || "",
    })),
    education: resume.education
      ? [
          ...(resume.education.graduation?.institution
            ? [
                {
                  institution: resume.education.graduation.institution,
                  degree: resume.education.graduation.degree || "",
                  field: resume.education.graduation.field || "",
                  startDate: resume.education.graduation.startDate
                    ? new Date(resume.education.graduation.startDate)
                    : null,
                  endDate: resume.education.graduation.endDate
                    ? new Date(resume.education.graduation.endDate)
                    : null,
                  isCurrent: !!resume.education.graduation.isCurrent,
                  cgpa: resume.education.graduation.cgpa
                    ? parseFloat(resume.education.graduation.cgpa)
                    : null,
                },
              ]
            : []),
          ...(resume.education.intermediate?.institution
            ? [
                {
                  institution: resume.education.intermediate.institution,
                  degree: resume.education.intermediate.degree || "",
                  field: resume.education.intermediate.field || "",
                  startDate: resume.education.intermediate.startDate
                    ? new Date(resume.education.intermediate.startDate)
                    : null,
                  endDate: resume.education.intermediate.endDate
                    ? new Date(resume.education.intermediate.endDate)
                    : null,
                  isCurrent: false,
                  cgpa: resume.education.intermediate.cgpa
                    ? parseFloat(resume.education.intermediate.cgpa)
                    : null,
                },
              ]
            : []),
          ...(resume.education.higher?.institution
            ? [
                {
                  institution: resume.education.higher.institution,
                  degree: resume.education.higher.degree || "",
                  field: resume.education.higher.field || "",
                  startDate: resume.education.higher.startDate
                    ? new Date(resume.education.higher.startDate)
                    : null,
                  endDate: resume.education.higher.endDate
                    ? new Date(resume.education.higher.endDate)
                    : null,
                  isCurrent: false,
                  cgpa: resume.education.higher.cgpa
                    ? parseFloat(resume.education.higher.cgpa)
                    : null,
                },
              ]
            : []),
        ]
      : [],
    skills:
      resume.skills && resume.skills.length > 0
        ? [
            {
              technical: resume.skills[0]?.technical
                ? resume.skills[0].technical
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean)
                : [],
              soft: resume.skills[0]?.soft
                ? resume.skills[0].soft
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean)
                : [],
              languages: resume.skills[0]?.languages
                ? resume.skills[0].languages
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean)
                : [],
              tools: resume.skills[0]?.tools
                ? resume.skills[0].tools
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean)
                : [],
            },
          ]
        : [],
    projects: (resume.projects || []).map((p) => ({
      name: p.name || "",
      description: p.description || "",
      url: p.url || "",
      repoUrl: p.repoUrl || "",
      tech: p.tech
        ? p.tech
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : [],
      startDate: p.startDate ? new Date(p.startDate) : null,
      endDate: p.endDate && !p.currentlyWorking ? new Date(p.endDate) : null,
    })),
    certifications: (resume.certifications || []).map((c) => ({
      name: c.name || "",
      issuer: c.issuer || "",
      issueDate: c.issueDate ? new Date(c.issueDate) : null,
      expiryDate: c.expiryDate && !c.noExpiry ? new Date(c.expiryDate) : null,
      credentialId: c.credentialId || "",
      url: c.url || "",
    })),
  };
};
