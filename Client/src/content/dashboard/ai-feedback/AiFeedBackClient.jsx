import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import {
  AIFeedbackHeaderSkeleton,
  KeyWordAnalysisSectionSkeleton,
  OverallSumaryAndKeyStrengthSectionSkeleton,
  RequiredImprovementsSectionSkeleton,
  ScoreMetricSkeleton,
} from "../../../components/skeletons/index";
import AiFeedbackHeader from "./AiFeedbackHeader";
import ScoreMetricSection from "./ScoreMetricSection";
import KeyAnalysisection from "./KeyAnalysisection";
import OverallSummaryAndKeyStrengthSection from "./OverallSummaryAndKeyStrengths";
import RequiredImprovementsSection from "./RequiredImprovements";
import { useFeedbackMutation } from "@/hooks/mutations/useFeedbackMutations";
import { selectFeedback } from "@/redux/resumes/feedbackSlice";

const serializeResumeToText = (resume) => {
  if (!resume) return "";
  let text = "";
  if (resume.title) text += `Resume Title: ${resume.title}\n\n`;
  
  if (resume.personalInformation) {
    const p = resume.personalInformation;
    text += `PERSONAL INFO:\nName: ${p.name || ""}\nEmail: ${p.email || ""}\nPhone: ${p.phone || ""}\nAddress: ${p.address || ""}\nGithub: ${p.github || ""}\nLinkedIn: ${p.linkedin || ""}\n\n`;
  }
  
  if (resume.experiences && resume.experiences.length > 0) {
    text += `WORK EXPERIENCE:\n`;
    resume.experiences.forEach((exp) => {
      text += `- Role: ${exp.role || ""}\n  Company: ${exp.company || ""}\n  Duration: ${exp.duration || ""}\n  Details: ${exp.description || ""}\n`;
    });
    text += `\n`;
  }
  
  if (resume.educations && resume.educations.length > 0) {
    text += `EDUCATION:\n`;
    resume.educations.forEach((edu) => {
      text += `- Degree: ${edu.degree || ""}\n  Field: ${edu.field || ""}\n  School: ${edu.institution || ""}\n  Duration: ${edu.duration || ""}\n`;
    });
    text += `\n`;
  }
  
  if (resume.skills && resume.skills.length > 0) {
    text += `SKILLS:\n${resume.skills.join(", ")}\n\n`;
  }
  
  if (resume.projects && resume.projects.length > 0) {
    text += `PROJECTS:\n`;
    resume.projects.forEach((proj) => {
      text += `- Title: ${proj.title || ""}\n  Details: ${proj.description || ""}\n`;
    });
    text += `\n`;
  }
  
  if (resume.certifications && resume.certifications.length > 0) {
    text += `CERTIFICATIONS:\n${resume.certifications.join(", ")}\n\n`;
  }
  
  return text;
};

const AiFeedBackClient = () => {
  const [selectedResume, setSelectedResume] = useState(null);
  const [jobDescription, setJobDescription] = useState(
    "React & Node Backend Engineer Role",
  );
  const feedbackState = useSelector(selectFeedback);
  const { mutate, isPending } = useFeedbackMutation();

  const handleGetFeedback = () => {
    if (!selectedResume) {
      toast.error("Please select or upload a resume first.");
      return;
    }
    const payload = {
      jobDescription,
    };
    if (selectedResume.type === "file") {
      payload.file = selectedResume.rawFile;
    } else if (selectedResume.type === "website") {
      payload.resumeId = selectedResume.id;
      payload.resumeText = serializeResumeToText(selectedResume.rawResume);
    }
    mutate(payload);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-6 font-sans antialiased">
      <header className="max-w-6xl mx-auto mb-10 border border-zinc-800 bg-zinc-900/50 p-6 rounded-xl flex flex-col md:flex-row items-end justify-between gap-6">
        {isPending ? (
          <AIFeedbackHeaderSkeleton />
        ) : (
          <AiFeedbackHeader 
            selectedResume={selectedResume}
            setSelectedResume={setSelectedResume}
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            onGetFeedback={handleGetFeedback}
            isPending={isPending}
          />
        )}
      </header>
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-4 space-y-6">
          {isPending ? <ScoreMetricSkeleton /> : <ScoreMetricSection />}
          {isPending ? (
            <KeyWordAnalysisSectionSkeleton />
          ) : (
            <KeyAnalysisection />
          )}
        </section>

        <section className="lg:col-span-8 space-y-6">
          {isPending ? (
            <OverallSumaryAndKeyStrengthSectionSkeleton />
          ) : (
            <OverallSummaryAndKeyStrengthSection />
          )}
          {isPending ? (
            <RequiredImprovementsSectionSkeleton />
          ) : (
            <RequiredImprovementsSection />
          )}
        </section>
      </main>
    </div>
  );
};
export default AiFeedBackClient;
