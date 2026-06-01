import React from "react";
import { RiFocus3Line, RiListCheck, RiDashboard3Line } from "@remixicon/react";

const ResumeKeywords = () => {
  return (
    <div className="w-full min-h-[80vh] bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6 antialiased select-none selection:bg-white selection:text-black">
      {/* Central Visual Stage */}
      <div className="max-w-md w-full text-center space-y-8 relative">
        {/* Animated Target Radar Concept Indicator */}
        <div className="relative flex items-center justify-center mx-auto w-16 h-16 rounded-xl border border-zinc-800 bg-zinc-900/20">
          <div className="absolute inset-0 rounded-xl border border-white/20 animate-ping opacity-25" />
          <RiFocus3Line size={24} className="text-white tracking-widest" />
        </div>

        {/* Core Status Header */}
        <div className="space-y-3">
          <div className="inline-block px-2.5 py-0.5 rounded-full border border-zinc-800 bg-zinc-900/50 font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
            Module Pipeline
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-montserratBold">
            AI Keyword Optimizer
          </h1>
          <p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
            Scan and reverse-engineer employer job descriptions to match
            automatic Applicant Tracking System (ATS) criteria pattern
            sequences.
          </p>
        </div>

        {/* "Coming Soon" Badge Frame */}
        <div className="py-2 border-y border-zinc-900/80">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
            [ Coming Soon ]
          </span>
        </div>

        {/* Feature Preview Blueprint */}
        <div className="border border-dashed border-zinc-800 bg-zinc-900/10 rounded-xl p-4 text-left space-y-3">
          <div className="flex items-center gap-2 border-b border-zinc-900 pb-2">
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
              Roadmap Features
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-start gap-3 opacity-60">
              <RiListCheck size={14} className="text-zinc-400 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-zinc-300">
                  Density Scanner
                </p>
                <p className="text-[10px] text-zinc-500">
                  Live missing density weight parameters checking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 opacity-60">
              <RiDashboard3Line size={14} className="text-zinc-400 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-zinc-300">
                  Contextual Ingestion
                </p>
                <p className="text-[10px] text-zinc-500">
                  One-click AI bullet phrasing keyword injection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeKeywords;
