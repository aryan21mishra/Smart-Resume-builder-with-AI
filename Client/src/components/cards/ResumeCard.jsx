import {
  RiDownloadLine,
  RiEdit2Line,
  RiFilePaperLine,
  RiMore2Fill,
} from "@remixicon/react";
import React from "react";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";

const ResumeCard = ({ id, title, lastUpdated }) => {
  const navigate = useNavigate();
  const getResume = () => {
    navigate(`/dashboard/my-resumes/single-resume/${id}`);
  };
  return (
    <div className="group relative flex flex-col h-[360px] border border-zinc-900 rounded-xl bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 overflow-hidden shadow-2xl">
      {/* Thumbnail Canvas Viewport */}
      <div
        onClick={getResume}
        className="cursor-pointer flex-1 bg-zinc-950 flex items-center justify-center relative overflow-hidden">
        {/* Ghost icon indicator background */}
        {/* Ghost icon indicator background */}
        <RiFilePaperLine
          size={56}
          className="text-zinc-800/60 group-hover:text-zinc-700/50 group-hover:scale-105 transition-all duration-500"
        />

        {/* Premium B&W Hover Actions Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-6 backdrop-blur-[1px]">
          <Button
            variant="default"
            className="w-full rounded-lg bg-white text-black hover:bg-zinc-200 border-none font-montserratBold text-xs h-10 tracking-wide">
            <RiEdit2Line size={14} className="mr-2 stroke-[2.5]" /> Edit
            Template
          </Button>
          <Button
            variant="outline"
            className="w-full rounded-lg bg-transparent border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-600 font-montserratRegular text-xs h-10 tracking-wide">
            <RiDownloadLine size={14} className="mr-2" /> Download Document
          </Button>
        </div>
      </div>

      {/* Bottom Info Row Card Details */}
      <div className="p-4 border-t border-zinc-900 bg-zinc-900/80 backdrop-blur-md">
        <div className="flex justify-between items-start mb-1.5">
          <h3
            className="font-montserratBold text-zinc-100 truncate pr-4 text-sm tracking-wide"
            title={title}>
            {title}
          </h3>
          <button className="text-zinc-500 hover:text-white transition-colors p-0.5 rounded hover:bg-zinc-800">
            <RiMore2Fill size={16} />
          </button>
        </div>

        {/* Formatted Date Metadata */}
        <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[10px]">
          <span>MODIFIED</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
          <span className="text-zinc-400">{lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
