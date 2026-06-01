import React, { useState, useRef } from "react";
import {
  FileText,
  UploadCloud,
  Sparkles,
  AlertCircle,
  Settings,
} from "lucide-react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui";
import SelectResumeModal from "@/components/modals/SelectResumeModal";

const mockCreatedResumes = [
  { id: 1, title: "Software Engineer Resume", lastUpdated: "2 days ago" },
  { id: 2, title: "Product Manager CV", lastUpdated: "1 week ago" },
  { id: 3, title: "Full Stack Developer Resume", lastUpdated: "Yesterday" },
];

const AiFeedbackHeader = () => {
  const [selectedResume, setSelectedResume] = useState(null);
  const [isConfigDialogOpen, setIsConfigDialogOpen] = useState(false);
  const [showWebsiteResumes, setShowWebsiteResumes] = useState(false);
  const [jobDescription, setJobDescription] = useState(
    "React & Node Backend Engineer Role",
  );
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedResume({
        type: "file",
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
      });
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSelectWebsiteResume = (resume) => {
    setSelectedResume({
      type: "website",
      name: resume.title,
      lastUpdated: resume.lastUpdated,
    });
  };

  return (
    <>
      <div className="w-full md:w-2/3 space-y-4">
        <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span>AI Resume Analyzer</span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-[10px] text-zinc-400 font-mono tracking-wider">
            BETA
          </span>
        </h1>
        <p className="text-xs text-zinc-400">
          Configure your resume and target job description to audit your
          application package and review optimized improvements.
        </p>

        {/* Configuration Clickable Widget */}
        <SelectResumeModal>
          <div className="group relative flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 rounded-xl cursor-pointer transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 flex-1 min-w-0">
              {/* Resume configuration preview */}
              <div className="space-y-1 min-w-0 md:w-1/2">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                  Your Resume
                </span>
                {selectedResume ? (
                  <div className="flex items-center gap-2 text-zinc-200">
                    <FileText className="h-4 w-4 text-purple-400 shrink-0" />
                    <span className="text-xs font-semibold truncate">
                      {selectedResume.name}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-zinc-500">
                    <AlertCircle className="h-4 w-4 shrink-0 animate-pulse" />
                    <span className="text-xs">
                      No resume selected (Click to configure)
                    </span>
                  </div>
                )}
              </div>

              {/* Job description preview */}
              <div className="space-y-1 min-w-0 md:w-1/2">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                  Job Description / Role
                </span>
                <div className="flex items-center gap-2 text-zinc-200">
                  <span className="text-xs truncate font-medium text-zinc-300">
                    {jobDescription || "No target job specified"}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action tag */}
            <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
              <Settings className="h-3 w-3 text-zinc-400 group-hover:text-white" />
              <span className="text-[10px] font-bold tracking-wide text-zinc-300 group-hover:text-white uppercase">
                Configure
              </span>
            </div>
          </div>
        </SelectResumeModal>

        {/* Configuration Dialog Popup */}
      </div>

      <button className="w-full md:w-auto px-6 py-3.5 bg-white text-black font-bold text-xs rounded-xl hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 tracking-wider uppercase shrink-0">
        <span>Get Feedback</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-[3]">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </>
  );
};

export default AiFeedbackHeader;
