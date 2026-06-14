import React from "react";
import { useSelector } from "react-redux";
import { selectFeedback } from "@/redux/resumes/feedbackSlice";

const ScoreMetricSection = () => {
  const feedback = useSelector(selectFeedback);
  const atsScore = feedback.atsScore !== null && feedback.atsScore !== undefined ? feedback.atsScore : 0;
  const jobMatchScore = feedback.jobMatchScore !== null && feedback.jobMatchScore !== undefined ? feedback.jobMatchScore : 0;
  const contentScore = feedback.contentScore !== null && feedback.contentScore !== undefined ? feedback.contentScore : 0;
  const keywordScore = feedback.keywordScore !== null && feedback.keywordScore !== undefined ? feedback.keywordScore : 0;
  const formatScore = feedback.formatScore !== null && feedback.formatScore !== undefined ? feedback.formatScore : 0;
  const impactScore = feedback.impactScore !== null && feedback.impactScore !== undefined ? feedback.impactScore : 0;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
        Score Metrics
      </h2>

      <div className="grid grid-cols-2 gap-4 border-b border-zinc-800 pb-6">
        <div className="text-center">
          <span className="block text-4xl font-extrabold text-white tracking-tight">
            {atsScore}<span className="text-xs font-normal text-zinc-500">/100</span>
          </span>
          <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
            ATS Score
          </span>
        </div>
        <div className="text-center border-l border-zinc-800">
          <span className="block text-4xl font-extrabold text-white tracking-tight">
            {jobMatchScore}<span className="text-xs font-normal text-zinc-500">/100</span>
          </span>
          <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
            Job Match
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Content Quality */}
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-zinc-400">Content Quality</span>
            <span className="font-mono text-white">{contentScore}%</span>
          </div>
          <div className="w-full bg-zinc-800 h-1 rounded-full">
            <div 
              className="bg-white h-1 rounded-full transition-all duration-500" 
              style={{ width: `${contentScore}%` }}
            ></div>
          </div>
        </div>

        {/* Keyword Density */}
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-zinc-400">Keyword Density</span>
            <span className="font-mono text-white">{keywordScore}%</span>
          </div>
          <div className="w-full bg-zinc-800 h-1 rounded-full">
            <div 
              className="bg-white h-1 rounded-full transition-all duration-500" 
              style={{ width: `${keywordScore}%` }}
            ></div>
          </div>
        </div>

        {/* Formatting & Structure */}
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-zinc-400">Formatting & Structure</span>
            <span className="font-mono text-white">{formatScore}%</span>
          </div>
          <div className="w-full bg-zinc-800 h-1 rounded-full">
            <div 
              className="bg-white h-1 rounded-full transition-all duration-500" 
              style={{ width: `${formatScore}%` }}
            ></div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-zinc-400">Impact Metrics</span>
            <span className="font-mono text-white">{impactScore}%</span>
          </div>
          <div className="w-full bg-zinc-800 h-1 rounded-full">
            <div 
              className="bg-white h-1 rounded-full transition-all duration-500" 
              style={{ width: `${impactScore}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreMetricSection;
