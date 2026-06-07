import React from "react";
import { FileText, AlertCircle, Settings } from "lucide-react";
import SelectResumeModal from "@/components/modals/SelectResumeModal";

const AiFeedbackHeader = ({
  selectedResume,
  setSelectedResume,
  jobDescription,
  setJobDescription,
  onGetFeedback,
  isPending,
}) => {
  return (
    <>
      <div className="w-full md:w-2/3 space-y-4">
        <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 animate-fade-in">
          <span>AI Resume Analyzer</span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-[10px] text-zinc-400 font-mono tracking-wider">
            BETA
          </span>
        </h1>
        <p className="text-xs text-zinc-455">
          Configure your resume and target job description to audit your
          application package and review optimized improvements.
        </p>

        {/* Configuration Clickable Widget */}
        <SelectResumeModal
          selectedResume={selectedResume}
          setSelectedResume={setSelectedResume}
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
        >
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
                    <AlertCircle className="h-4 w-4 shrink-0 animate-pulse text-zinc-500" />
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
            <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-650 transition-colors">
              <Settings className="h-3 w-3 text-zinc-400 group-hover:text-white" />
              <span className="text-[10px] font-bold tracking-wide text-zinc-300 group-hover:text-white uppercase">
                Configure
              </span>
            </div>
          </div>
        </SelectResumeModal>
      </div>

      <button
        onClick={onGetFeedback}
        disabled={isPending || !selectedResume}
        className="w-full md:w-auto px-6 py-3.5 bg-white text-black font-bold text-xs rounded-xl hover:bg-zinc-200 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 tracking-wider uppercase shrink-0 active:scale-98"
      >
        <span>{isPending ? "Analyzing..." : "Get Feedback"}</span>
        {isPending ? (
          <svg className="animate-spin h-3.5 w-3.5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
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
            className="stroke-[3]"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        )}
      </button>
    </>
  );
};

export default AiFeedbackHeader;
