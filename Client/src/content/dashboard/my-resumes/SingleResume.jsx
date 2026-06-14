import React, { useState, useEffect } from "react";
import {
  RiArrowLeftLine,
  RiDownloadCloud2Line,
  RiEdit2Line,
  RiSaveLine,
  RiLayoutGridLine,
  RiEyeLine,
  RiEyeOffLine,
  RiLoader4Line,
  RiCheckLine,
} from "@remixicon/react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectResumes, setResume } from "@/redux/resumes/resumeSlice";
import { useGetResumeByIdQuery } from "@/hooks/queries/useResumeQueries";
import { useCreateResumeMutation, useUpdateResumeByIdMutation } from "@/hooks/mutations/useResumeMutations";
import ClassicTemplate from "@/components/templates/Classic";
import ModernTemplate from "@/components/templates/Modern";
import MinimalTemplate from "@/components/templates/Minimal";
import { SingleResumeSkeleton } from "@/components/skeletons/SingleResumeSkeleton";
import { toast } from "sonner";
import { mapFrontendToBackend } from "@/utils/resume";


// Helper to translate backend schema layout structure to Redux wizard keys
const mapBackendToFrontend = (backendResume) => {
  if (!backendResume) return {};
  
  const personalInformation = {
    firstName: backendResume.personalInfo?.firstName || "",
    lastName: backendResume.personalInfo?.lastName || "",
    headline: backendResume.personalInfo?.title || "",
    email: backendResume.personalInfo?.email || "",
    phone: backendResume.personalInfo?.phone || "",
    city: backendResume.personalInfo?.location?.split(",")?.[0]?.trim() || "",
    country: backendResume.personalInfo?.location?.split(",")?.[1]?.trim() || "",
    linkedinUrl: backendResume.personalInfo?.linkedin || "",
    portfolioUrl: backendResume.personalInfo?.portfolio || "",
    summary: backendResume.personalInfo?.summary || "",
  };

  const experiences = (backendResume.experience || []).map(exp => ({
    company: exp.company || "",
    jobTitle: exp.title || "",
    location: exp.location || "",
    jobType: "Full-time",
    startDate: exp.startDate ? new Date(exp.startDate).toISOString().slice(0, 7) : "",
    endDate: exp.endDate ? new Date(exp.endDate).toISOString().slice(0, 7) : "",
    currentlyWorkHere: !!exp.isCurrent,
    description: exp.description || (exp.bullets || []).join("\n"),
  }));

  let education = { graduation: {}, intermediate: {}, higher: {} };
  const backendEdu = backendResume.education || [];
  backendEdu.forEach((edu, idx) => {
    const formatted = {
      institution: edu.institution || "",
      degree: edu.degree || "",
      field: edu.field || "",
      startDate: edu.startDate ? new Date(edu.startDate).toISOString().slice(0, 10) : "",
      endDate: edu.endDate ? new Date(edu.endDate).toISOString().slice(0, 10) : "",
      isCurrent: !!edu.isCurrent,
      cgpa: edu.cgpa || "",
    };
    if (idx === 0) education.graduation = formatted;
    else if (idx === 1) education.intermediate = formatted;
    else if (idx === 2) education.higher = formatted;
  });

  const skillsList = backendResume.skills || [];
  let skills = [];
  if (skillsList.length > 0) {
    const sk = skillsList[0];
    skills = [{
      technical: Array.isArray(sk.technical) ? sk.technical.join(", ") : sk.technical || "",
      soft: Array.isArray(sk.soft) ? sk.soft.join(", ") : sk.soft || "",
      languages: Array.isArray(sk.languages) ? sk.languages.join(", ") : sk.languages || "",
      tools: Array.isArray(sk.tools) ? sk.tools.join(", ") : sk.tools || "",
    }];
  }

  const projects = (backendResume.projects || []).map(p => ({
    name: p.name || "",
    description: p.description || "",
    url: p.url || "",
    repoUrl: p.repoUrl || "",
    tech: Array.isArray(p.tech) ? p.tech.join(", ") : p.tech || "",
    startDate: p.startDate ? new Date(p.startDate).toISOString().slice(0, 7) : "",
    endDate: p.endDate ? new Date(p.endDate).toISOString().slice(0, 7) : "",
    currentlyWorking: !p.endDate,
  }));

  const certifications = (backendResume.certifications || []).map(c => ({
    name: c.name || "",
    issuer: c.issuer || "",
    issueDate: c.issueDate ? new Date(c.issueDate).toISOString().slice(0, 7) : "",
    expiryDate: c.expiryDate ? new Date(c.expiryDate).toISOString().slice(0, 7) : "",
    noExpiry: !c.expiryDate,
    credentialId: c.credentialId || "",
    url: c.url || "",
  }));

  return {
    id: backendResume._id,
    title: backendResume.title || "Untitled Resume",
    template: backendResume.template || "modern",
    personalInformation,
    experiences,
    education,
    skills,
    projects,
    certifications,
    languages: backendResume.languages || [],
  };
};

// Normalize data structure for templates to consume uniformly
const normalizeResumeData = (rawData) => {
  if (!rawData) return null;

  const personalInfo = rawData.personalInfo || rawData.personalInformation || {};
  const experiences = rawData.experience || rawData.experiences || [];
  
  let educationList = [];
  if (Array.isArray(rawData.education)) {
    educationList = rawData.education;
  } else if (Array.isArray(rawData.educations)) {
    educationList = rawData.educations;
  } else {
    const eduObj = rawData.education || rawData.educations || {};
    if (eduObj.graduation?.institution) {
      educationList.push({
        institution: eduObj.graduation.institution,
        degree: eduObj.graduation.degree,
        field: eduObj.graduation.field,
        startDate: eduObj.graduation.startDate,
        endDate: eduObj.graduation.endDate,
        isCurrent: eduObj.graduation.isCurrent,
        cgpa: eduObj.graduation.cgpa,
      });
    }
    if (eduObj.intermediate?.institution) {
      educationList.push({
        institution: eduObj.intermediate.institution,
        degree: eduObj.intermediate.degree,
        field: eduObj.intermediate.field,
        startDate: eduObj.intermediate.startDate,
        endDate: eduObj.intermediate.endDate,
        cgpa: eduObj.intermediate.cgpa,
      });
    }
    if (eduObj.higher?.institution) {
      educationList.push({
        institution: eduObj.higher.institution,
        degree: eduObj.higher.degree,
        field: eduObj.higher.field,
        startDate: eduObj.higher.startDate,
        endDate: eduObj.higher.endDate,
        cgpa: eduObj.higher.cgpa,
      });
    }
  }

  let skillsObj = { technical: [], soft: [], languages: [], tools: [] };
  if (Array.isArray(rawData.skills)) {
    if (rawData.skills.length > 0) {
      const sk = rawData.skills[0];
      skillsObj = {
        technical: Array.isArray(sk.technical) ? sk.technical : (sk.technical ? sk.technical.split(",") : []),
        soft: Array.isArray(sk.soft) ? sk.soft : (sk.soft ? sk.soft.split(",") : []),
        languages: Array.isArray(sk.languages) ? sk.languages : (sk.languages ? sk.languages.split(",") : []),
        tools: Array.isArray(sk.tools) ? sk.tools : (sk.tools ? sk.tools.split(",") : []),
      };
    }
  } else if (rawData.skills && typeof rawData.skills === "object") {
    const sk = rawData.skills;
    skillsObj = {
      technical: Array.isArray(sk.technical) ? sk.technical : (sk.technical ? sk.technical.split(",") : []),
      soft: Array.isArray(sk.soft) ? sk.soft : (sk.soft ? sk.soft.split(",") : []),
      languages: Array.isArray(sk.languages) ? sk.languages : (sk.languages ? sk.languages.split(",") : []),
      tools: Array.isArray(sk.tools) ? sk.tools : (sk.tools ? sk.tools.split(",") : []),
    };
  }

  const normalizedExp = experiences.map(exp => {
    const title = exp.jobTitle || exp.title || "";
    let bullets = exp.bullets || [];
    if (bullets.length === 0 && exp.description) {
      bullets = exp.description.split("\n").map(b => b.replace(/^[•-\s]+/, "").trim()).filter(Boolean);
    }
    return {
      company: exp.company || "",
      title,
      location: exp.location || "",
      startDate: exp.startDate || "",
      endDate: exp.endDate || "",
      isCurrent: exp.currentlyWorkHere || exp.isCurrent || false,
      bullets,
      description: exp.description || "",
    };
  });

  const projects = rawData.projects || [];
  const normalizedProj = projects.map(p => {
    let tech = p.tech || [];
    if (typeof tech === "string") {
      tech = tech.split(",").map(t => t.trim()).filter(Boolean);
    }
    return {
      name: p.name || "",
      description: p.description || "",
      url: p.url || "",
      repoUrl: p.repoUrl || "",
      tech,
      startDate: p.startDate || "",
      endDate: p.endDate || "",
    };
  });

  const certifications = rawData.certifications || [];
  const normalizedCert = certifications.map(c => ({
    name: c.name || "",
    issuer: c.issuer || "",
    issueDate: c.issueDate || "",
    expiryDate: c.expiryDate || "",
    credentialId: c.credentialId || "",
    url: c.url || "",
  }));

  return {
    title: rawData.title || "Untitled Resume",
    template: rawData.template || "modern",
    personalInfo: {
      firstName: personalInfo.firstName || "",
      lastName: personalInfo.lastName || "",
      title: personalInfo.headline || personalInfo.title || "",
      email: personalInfo.email || "",
      phone: personalInfo.phone || "",
      location: personalInfo.location || [personalInfo.city, personalInfo.country].filter(Boolean).join(", ") || "",
      linkedin: personalInfo.linkedinUrl || personalInfo.linkedin || "",
      github: personalInfo.portfolioUrl || personalInfo.github || "",
      portfolio: personalInfo.portfolioUrl || personalInfo.portfolio || "",
      summary: personalInfo.summary || "",
    },
    experience: normalizedExp,
    education: educationList,
    skills: skillsObj,
    projects: normalizedProj,
    certifications: normalizedCert,
  };
};

export default function SingleResume() {
  const { id: resumeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxResume = useSelector(selectResumes);
  const [resumeData, setResumeData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const { data: apiResponse, isLoading: isApiLoading, error: apiError } = useGetResumeByIdQuery(
    resumeId !== "preview" ? resumeId : null,
    { enabled: resumeId !== "preview" }
  );
  const { mutate: createResume, isPending: isCreating } = useCreateResumeMutation();
  const { mutate: updateResume, isPending: isUpdating } = useUpdateResumeByIdMutation();
  const isSaving = isCreating || isUpdating;
  const getExtractedResume = () => {
    return apiResponse?.data?.data?.existingResume || apiResponse?.data?.existingResume || apiResponse;
  };

  useEffect(() => {
    if (resumeId === "preview") {
      const normalized = normalizeResumeData(reduxResume);
      setResumeData(normalized);
      if (normalized?.template) {
        setSelectedTemplate(normalized.template);
      }
    } else if (apiResponse) {
      const extracted = getExtractedResume();
      const normalized = normalizeResumeData(extracted);
      setResumeData(normalized);
      if (normalized?.template) {
        setSelectedTemplate(normalized.template);
      }
    }
  }, [resumeId, reduxResume, apiResponse]);

  const handleTemplateChange = (templateName) => {
    setSelectedTemplate(templateName);
    setResumeData(prev => prev ? { ...prev, template: templateName } : null);
  };

  const handleSave = () => {
    // Determine template state selection
    const payload = {
      ...(resumeId === "preview" ? mapFrontendToBackend(reduxResume) : getExtractedResume()),
      template: selectedTemplate,
    };

    if (resumeId === "preview") {
      createResume(payload, {
        onSuccess: (res) => {
          const createdId = res?.data?.data?.resume?._id || res?.data?.resume?._id || res?.resume?._id || res?._id;
          toast.success("Resume saved to cloud!");
          if (createdId) {
            navigate(`/dashboard/my-resumes/single-resume/${createdId}`);
          } else {
            navigate("/dashboard/my-resumes");
          }
        },
        onError: (err) => {
          toast.error(err.message || "Failed to save resume.");
        }
      });
    } else {
      updateResume(
        { id: resumeId, data: payload },
        {
          onSuccess: () => {
            toast.success("Resume template layout updated!");
          },
          onError: (err) => {
            toast.error(err.message || "Failed to update resume.");
          }
        }
      );
    }
  };

  const handleEdit = () => {
    let sourceData = null;
    if (resumeId === "preview") {
      sourceData = { ...reduxResume };
    } else {
      const extracted = getExtractedResume();
      sourceData = mapBackendToFrontend(extracted);
    }
    const getFirstIncompleteSectionPath = (resume) => {
      if (!resume) return "/dashboard/my-resumes/build-resume/personal-information";
      if (!resume.personalInformation?.firstName) {
        return "/dashboard/my-resumes/build-resume/personal-information";
      }
      if (!resume.experiences || resume.experiences.length === 0) {
        return "/dashboard/my-resumes/build-resume/experience";
      }
      if (!resume.education?.graduation?.institution) {
        return "/dashboard/my-resumes/build-resume/education";
      }
      if (!resume.projects || resume.projects.length === 0) {
        return "/dashboard/my-resumes/build-resume/projects";
      }
      let hasSkills = false;
      const sks = resume.skills;
      if (Array.isArray(sks) && sks.length > 0) {
        hasSkills = !!(sks[0]?.technical || sks[0]?.soft || sks[0]?.tools || sks[0]?.languages);
      } else if (sks && typeof sks === "object") {
        hasSkills = !!(sks.technical || sks.soft || sks.tools || sks.languages);
      }
      if (!hasSkills) {
        return "/dashboard/my-resumes/build-resume/skills";
      }
      if (!resume.certifications || resume.certifications.length === 0) {
        return "/dashboard/my-resumes/build-resume/certifications";
      }
      return "/dashboard/my-resumes/build-resume/personal-information";
    };
    const targetPath = getFirstIncompleteSectionPath(sourceData);
    dispatch(setResume(sourceData));
    navigate(targetPath);
  };

  const handleDownload = () => {
    window.print();
  };
  const handleBack = () => {
    if (resumeId === "preview") {
      navigate("/dashboard/my-resumes/build-resume/personal-information");
    } else {
      navigate("/dashboard/my-resumes");
    }
  };
  const templateComponents = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    minimal: MinimalTemplate,
  };
  const ActiveTemplate = templateComponents[selectedTemplate.toLowerCase()] || ModernTemplate;
  const isLoading = resumeId !== "preview" && isApiLoading;
  const error = resumeId !== "preview" ? apiError : null;

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 font-montserratRegular antialiased flex flex-col">
      {/* ====== TOP BAR CONTROLS ====== */}
      <header className="h-16 border-b border-zinc-900 px-6 flex items-center justify-between bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 no-print">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            title="Go Back"
            className="p-2 hover:bg-zinc-900 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer">
            <RiArrowLeftLine size={18} />
          </button>
          <div>
            {isLoading ? (
              <div className="h-4 w-40 bg-zinc-900 animate-pulse rounded" />
            ) : (
              <h1 className="font-montserratBold text-sm text-zinc-100 tracking-wide truncate max-w-[200px] sm:max-w-sm">
                {resumeData?.title || "Untitled Resume"}
              </h1>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className="flex items-center gap-2 px-3 h-9 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 text-xs transition-colors cursor-pointer">
            {isPreviewMode ? (
              <RiEyeOffLine size={14} />
            ) : (
              <RiEyeLine size={14} />
            )}
            <span className="hidden sm:inline">
              {isPreviewMode ? "Edit Mode" : "Preview"}
            </span>
          </button>
          
          <button 
            onClick={handleEdit}
            className="flex items-center gap-2 px-3 h-9 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 text-xs transition-colors cursor-pointer">
            <RiEdit2Line size={14} />
            <span className="hidden sm:inline">Edit Resume</span>
          </button>

          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-3 h-9 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 text-xs transition-colors cursor-pointer disabled:opacity-50">
            {isSaving ? (
              <RiLoader4Line size={14} className="animate-spin" />
            ) : (
              <RiSaveLine size={14} />
            )}
            <span className="hidden sm:inline">{isSaving ? "Saving..." : "Save Template"}</span>
          </button>

          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 h-9 rounded-lg bg-white text-black font-montserratBold text-xs hover:bg-zinc-200 transition-colors shadow-md cursor-pointer">
            <RiDownloadCloud2Line size={14} />
            Download
          </button>
        </div>
      </header>

      {/* ====== MAIN WORKSPACE ====== */}
      <main className="flex-1 flex overflow-hidden h-[calc(100vh-64px)]">
        {isLoading && <SingleResumeSkeleton />}
        {!isLoading && error && (
          <div className="flex-1 flex items-center justify-center p-6 no-print">
            <div className="text-center max-w-sm border border-zinc-900 bg-zinc-900/20 p-8 rounded-2xl">
              <p className="text-sm font-montserratBold text-zinc-200 mb-1">
                Failed to load Resume
              </p>
              <p className="text-xs text-zinc-500 mb-4 font-mono">{error.message || "Resume not found."}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-zinc-900 rounded-lg text-xs hover:bg-zinc-850 transition-colors">
                Retry Connection
              </button>
            </div>
          </div>
        )}
        {!isLoading && !error && resumeData && (
          <>
            <div
              className={`w-80 border-r border-zinc-900 bg-zinc-950 p-6 flex flex-col gap-6 overflow-y-auto no-print ${isPreviewMode ? "hidden lg:flex opacity-40 pointer-events-none" : "flex"}`}>
              <div>
                <h2 className="text-xs font-mono tracking-wider text-zinc-500 uppercase mb-3 flex items-center gap-2">
                  <RiLayoutGridLine size={12} />
                  Template Configurations
                </h2>
                <div className="flex flex-col gap-2">
                  {["classic", "modern", "minimal"].map((tpl) => {
                    const isSelected = selectedTemplate.toLowerCase() === tpl;
                    return (
                      <button
                        key={tpl}
                        onClick={() => handleTemplateChange(tpl)}
                        className={`flex items-center justify-between w-full p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                          isSelected
                            ? "border-white bg-zinc-900 text-white font-montserratBold"
                            : "border-zinc-900 bg-zinc-900/30 text-zinc-400 hover:border-zinc-700 hover:text-white"
                        }`}>
                        <div className="capitalize">{tpl} Layout</div>
                        {isSelected && <RiCheckLine size={14} className="text-[#e8b86d]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
              <hr className="border-zinc-900" />
              <div>
                <h3 className="text-xs font-mono tracking-wider text-zinc-500 uppercase mb-2">
                  Metadata Info
                </h3>
                <div className="p-3 bg-zinc-900/20 border border-zinc-900/60 rounded-xl font-mono text-[11px] text-zinc-400 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span>Source Mode</span>
                    <span className="text-zinc-500 uppercase font-semibold text-[10px]">
                      {resumeId === "preview" ? "Local Draft" : "Cloud Save"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Template</span>
                    <span className="text-zinc-500 capitalize">{selectedTemplate}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-zinc-900/30 p-4 md:p-8 overflow-y-auto flex justify-center items-start print:p-0 print:bg-white print:overflow-visible print:h-auto">
              <div className="w-full max-w-[816px] shadow-2xl rounded-sm transition-transform duration-300 transform origin-top hover:scale-[1.005] print:shadow-none print:transform-none print:max-w-none print:p-0">
                <ActiveTemplate data={resumeData} />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
