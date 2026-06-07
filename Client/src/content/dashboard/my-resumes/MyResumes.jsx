import React, { useEffect, useState } from "react";
import {
  RiAddLine,
  RiEdit2Line,
  RiDownloadLine,
  RiFilePaperLine,
  RiMore2Fill,
  RiFolderOpenLine,
  RiLoader4Line,
} from "@remixicon/react";
import { Button } from "../../../components/ui/index";
import { useNavigate } from "react-router-dom";
import { useGetAllResumeQuery } from "@/hooks/queries/useResumeQueries";
import ResumeCard from "@/components/cards/ResumeCard";
import EmptyResumes from "@/components/empty/EmptyResumes";
import { AllResumeSkeleton } from "@/components/skeletons";

const MyResumes = () => {
  const navigate = useNavigate();

  const resumeCreateHandler = () => {
    navigate("/dashboard/templates");
  };

  const { data: allResumes, isLoading } = useGetAllResumeQuery();
  console.log(allResumes);

  return (
    <div className="p-6 lg:p-12 w-full min-h-screen bg-zinc-950 text-zinc-50 antialiased selection:bg-white selection:text-black">
      {/* ====== HEADER SEGMENT ====== */}
      <div className="mb-12 max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-zinc-900 pb-8">
        <div className="max-w-xl">
          <h1 className="font-montserratBold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 text-3xl lg:text-4xl tracking-tight mb-2">
            Engineered Resumes
          </h1>
          <p className="text-sm font-montserratRegular text-zinc-400 leading-relaxed">
            Deploy, iterate, and monitor your personalized resume pipelines.
            Optimize your profile presentation for high-impact applications.
          </p>
        </div>

        {/* Top-Right Action Button */}
        <Button
          variant="default"
          size="lg"
          disabled={isLoading}
          onClick={resumeCreateHandler}
          className="group flex items-center justify-center gap-2 px-5 h-11 rounded-xl bg-white text-black font-montserratBold text-sm hover:bg-zinc-200 active:scale-95 transition-all shadow-lg self-start sm:self-center whitespace-nowrap">
          <RiAddLine
            size={18}
            className="stroke-[1.5] group-hover:rotate-90 transition-transform duration-300"
          />
          Create From Scratch
        </Button>
      </div>

      {/* ====== MAIN CONTENT SECTION ====== */}
      <div className="max-w-6xl mx-auto">
        {isLoading ? (
          <AllResumeSkeleton />
        ) : allResumes && allResumes.length > 0 ? (
          /* Grid Container for Existing Resumes */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allResumes.map((resume) => (
              <ResumeCard
                key={resume._id}
                id={resume._id}
                title={resume.title}
                lastUpdated={resume.lastUpdated}
              />
            ))}
          </div>
        ) : (
          <EmptyResumes resumeCreateHandler={resumeCreateHandler} />
        )}
      </div>
    </div>
  );
};

export default MyResumes;
