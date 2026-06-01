import React from "react";
import {
  RiAddLine,
  RiEdit2Line,
  RiDownloadLine,
  RiFilePaperLine,
  RiMore2Fill,
} from "@remixicon/react";
import { Button } from "../../../components/ui/index";
import { useNavigate } from "react-router-dom";

// Mock Data
const mockResumes = [
  { id: 1, title: "Software Engineer Resume", lastUpdated: "2 days ago" },
  { id: 2, title: "Product Manager CV", lastUpdated: "1 week ago" },
];

const MyResumes = () => {
  const navigate = useNavigate();

  const resumeCreateHandler = () => {
    navigate("/dashboard/templates");
  };

  return (
    <div className="p-6 lg:p-12 w-full min-h-screen bg-zinc-950 text-zinc-50 antialiased selection:bg-white selection:text-black">
      {/* Header Segment */}
      <div className="mb-10 max-w-6xl mx-auto">
        <h1 className="font-montserratBold text-white text-2xl lg:text-3xl tracking-tight mb-2">
          My Resumes
        </h1>
        <p className="text-xs lg:text-sm font-montserratRegular text-zinc-400 tracking-wide">
          Create, modify, and monitor your resume pipelines.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* ====== CREATE NEW RESUME CARD ====== */}
        <div className="group relative flex flex-col items-center justify-center h-[360px] border border-dashed border-zinc-800 rounded-xl bg-zinc-900/10 hover:bg-zinc-900/30 hover:border-white transition-all duration-300 cursor-pointer overflow-hidden">
          <button
            onClick={resumeCreateHandler}
            className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-zinc-600 transition-all duration-300">
            <RiAddLine
              size={20}
              className="text-zinc-400 group-hover:text-white transition-colors"
            />
          </button>
          <p className="font-montserratBold text-white text-sm tracking-wide">
            Create From Scratch
          </p>
          <p className="font-montserratRegular text-[11px] text-zinc-500 mt-1 text-center px-6 leading-relaxed">
            Start empty or select a baseline template
          </p>
        </div>

        {/* ====== EXISTING RESUME CARDS LOOP ====== */}
        {mockResumes.map((resume) => (
          <div
            key={resume.id}
            className="group relative flex flex-col h-[360px] border border-zinc-900 rounded-xl bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 overflow-hidden shadow-2xl">
            {/* Thumbnail Canvas Viewport */}
            <div className="flex-1 bg-zinc-950 flex items-center justify-center relative overflow-hidden">
              {/* Ghost icon indicator background */}
              <RiFilePaperLine
                size={56}
                className="text-zinc-800/60 group-hover:text-zinc-700/50 group-hover:scale-105 transition-all duration-500"
              />

              {/* Premium B&W Hover Actions Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-6 backdrop-blur-[1px]">
                <Button
                  variant="default"
                  className="w-full rounded-lg bg-white text-black hover:bg-zinc-200 border-none font-montserratBold text-xs h-10 tracking-wide transition-colors">
                  <RiEdit2Line size={14} className="mr-2 stroke-[2.5]" /> Edit
                  Template
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-lg bg-transparent border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-600 font-montserratRegular text-xs h-10 tracking-wide transition-all">
                  <RiDownloadLine size={14} className="mr-2" /> Download
                  Document
                </Button>
              </div>
            </div>

            {/* Bottom Info Row Card Details */}
            <div className="p-4 border-t border-zinc-900 bg-zinc-900/80 backdrop-blur-md">
              <div class="flex justify-between items-start mb-1.5">
                <h3
                  className="font-montserratBold text-zinc-100 truncate pr-4 text-sm tracking-wide"
                  title={resume.title}>
                  {resume.title}
                </h3>
                <button className="text-zinc-500 hover:text-white transition-colors p-0.5 rounded hover:bg-zinc-800">
                  <RiMore2Fill size={16} />
                </button>
              </div>

              {/* Formatted Date Metadata */}
              <div class="flex items-center gap-1.5 text-zinc-500 font-mono text-[10px]">
                <span>MODIFIED</span>
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                <span className="text-zinc-400">{resume.lastUpdated}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyResumes;
