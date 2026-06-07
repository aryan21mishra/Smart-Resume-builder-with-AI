import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogTrigger,
  Button,
} from "../ui";
import {
  AlertCircle,
  FileText,
  Settings,
  Sparkles,
  UploadCloud,
} from "lucide-react";

import { useGetAllResumeQuery } from "@/hooks/queries/useResumeQueries";

const SelectResumeModal = ({
  children,
  selectedResume,
  setSelectedResume,
  showWebsiteResumes: propShowWebsiteResumes,
  setShowWebsiteResumes: propSetShowWebsiteResumes,
  jobDescription,
  setJobDescription,
  fileInputRef: propFileInputRef,
  handleSelectWebsiteResume,
}) => {
  const localFileInputRef = useRef(null);
  const fileInputRef = propFileInputRef || localFileInputRef;

  const [localShowWebsiteResumes, localSetShowWebsiteResumes] = useState(false);
  const showWebsiteResumes = propShowWebsiteResumes !== undefined ? propShowWebsiteResumes : localShowWebsiteResumes;
  const setShowWebsiteResumes = propSetShowWebsiteResumes !== undefined ? propSetShowWebsiteResumes : localSetShowWebsiteResumes;

  // Query website resumes list
  const { data: resumesList, isLoading: resumesLoading } = useGetAllResumeQuery();
  const resumes = resumesList || [];

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedResume({
        type: "file",
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
        rawFile: file,
      });
    }
  };

  const onSelectWebsiteResume = (resume) => {
    if (handleSelectWebsiteResume) {
      handleSelectWebsiteResume(resume);
    } else {
      setSelectedResume({
        type: "website",
        name: resume.title,
        id: resume._id,
        rawResume: resume,
        lastUpdated: new Date(resume.updatedAt).toLocaleDateString(),
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md bg-zinc-950 border border-zinc-900 p-6 rounded-2xl">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-sm font-semibold tracking-tight text-white flex items-center gap-1.5">
            <Settings className="h-4 w-4 text-purple-400 animate-spin-slow" />
            Configure Analyzer Parameters
          </DialogTitle>
          <DialogDescription className="text-xs text-zinc-400">
            Upload or select a resume and paste the target job description to
            build the audit reports.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-5">
          {/* Resume Selector Area */}
          <div className="space-y-2">
            <label className="block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
              Your Resume
            </label>

            <div className="min-h-[72px] bg-zinc-900/40 border border-zinc-800 rounded-xl p-3 flex flex-col justify-between transition-all">
              {selectedResume ? (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <div className="truncate">
                      <h4 className="text-xs font-semibold text-zinc-200 truncate">
                        {selectedResume.name}
                      </h4>
                      <p className="text-[10px] text-zinc-500 font-mono mt-0.5">
                        {selectedResume.type === "file"
                          ? `Local File • ${selectedResume.size}`
                          : `Site Resume • Mod. ${selectedResume.lastUpdated || "Recently"}`}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 ml-2 px-2 py-0.5 rounded text-[9px] font-mono font-medium tracking-wide bg-white/10 text-white uppercase">
                    Selected
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2.5 text-zinc-500 py-1">
                  <AlertCircle className="h-4 w-4 text-zinc-600 animate-pulse" />
                  <span className="text-xs font-medium">
                    No resume selected. Choose an option below.
                  </span>
                </div>
              )}

              {/* Actions Bar */}
              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-zinc-800/80">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.txt"
                  className="hidden"
                />
                <Button
                  variant="outline"
                  size="xs"
                  onClick={triggerFileSelect}
                  className="w-1/2 justify-center text-[10px] font-medium bg-zinc-950 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 h-7">
                  <UploadCloud className="h-3.5 w-3.5 mr-1" />
                  Upload Local
                </Button>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => setShowWebsiteResumes(!showWebsiteResumes)}
                  className={`w-1/2 justify-center text-[10px] font-medium bg-zinc-950 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 h-7 ${showWebsiteResumes ? "border-purple-500/55 text-purple-300" : ""}`}>
                  <Sparkles className="h-3.5 w-3.5 mr-1 text-purple-400" />
                  Select Built
                </Button>
              </div>
            </div>

            {/* Inline Expandable Website Resumes List */}
            {showWebsiteResumes && (
              <div className="mt-2.5 p-3 bg-zinc-900/25 border border-zinc-800/60 rounded-xl space-y-2">
                <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  Website Resumes
                </span>
                <div className="space-y-1.5 max-h-[150px] overflow-y-auto pr-1">
                  {resumesLoading ? (
                    <div className="text-xs text-zinc-500 p-2">Loading resumes...</div>
                  ) : resumes.length === 0 ? (
                    <div className="text-xs text-zinc-500 p-2">No resumes found. Create one first!</div>
                  ) : (
                    resumes.map((resume) => {
                      const isSelected =
                        selectedResume &&
                        selectedResume.type === "website" &&
                        selectedResume.id === resume._id;
                      return (
                        <div
                          key={resume._id}
                          onClick={() => {
                            onSelectWebsiteResume(resume);
                            setShowWebsiteResumes(false);
                          }}
                          className={`group relative flex items-center justify-between p-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "bg-white/5 border-white"
                              : "bg-zinc-900 border-zinc-800/80 hover:bg-zinc-850 hover:border-zinc-700"
                          }`}>
                          <div className="flex items-center gap-2 truncate">
                            <FileText className="h-3.5 w-3.5 text-zinc-400 group-hover:text-white shrink-0" />
                            <span className="text-xs text-zinc-300 group-hover:text-white truncate font-medium">
                              {resume.title}
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-zinc-500 uppercase">
                            {resume.updatedAt ? new Date(resume.updatedAt).toLocaleDateString() : ""}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Target Job Description Textarea */}
          <div className="space-y-2">
            <label className="block text-[11px] font-medium uppercase tracking-wider text-zinc-400">
              Target Job Description
            </label>
            <textarea
              placeholder="Paste target job description or role details..."
              rows={4}
              className="w-full bg-zinc-900 border border-zinc-800 text-xs rounded-xl p-3 text-zinc-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 resize-none font-sans"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
        </div>

        {/* Footer buttons */}
        <DialogFooter>
          <DialogClose asChild>
            <div className="flex items-center justify-end gap-2 mt-5 pt-3 border-t border-zinc-900">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-zinc-400 hover:text-white hover:bg-transparent">
                Close
              </Button>
              <Button className="bg-white text-black hover:bg-zinc-200 text-xs font-semibold rounded-lg px-4 h-8 transition-all">
                Confirm
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SelectResumeModal;
