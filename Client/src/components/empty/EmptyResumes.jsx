import { RiAddLine, RiFolderOpenLine } from "@remixicon/react";
import React from "react";
import { Button } from "../ui";

const EmptyResumes = ({ resumeCreateHandler }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/10 p-8 text-center max-w-2xl mx-auto mt-6 animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-500 shadow-xl group-hover:scale-105 transition-transform">
        <RiFolderOpenLine size={28} className="text-zinc-400" />
      </div>
      <h3 className="font-montserratBold text-white text-lg tracking-wide mb-2">
        No Pipelines Assembled Yet
      </h3>
      <p className="font-montserratRegular text-sm text-zinc-400 max-w-sm mb-8 leading-relaxed">
        Your resume index is empty. Initialize your master resume profile to
        unlock automated pipeline generations.
      </p>
      <Button
        variant="outline"
        onClick={resumeCreateHandler}
        className="flex items-center gap-2 px-6 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 font-montserratBold text-xs hover:bg-zinc-800 hover:text-white transition-all active:scale-98">
        <RiAddLine size={16} />
        Build Your First Pipeline
      </Button>
    </div>
  );
};

export default EmptyResumes;
