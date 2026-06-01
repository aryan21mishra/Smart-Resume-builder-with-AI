import React from "react";

const RequiredImprovementsSection = () => {
  return (
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <div class="p-6 border-b border-zinc-800">
        <h2 class="text-xs font-bold uppercase tracking-widest text-zinc-400">
          Required Improvements
        </h2>
      </div>
      <div class="divide-y divide-zinc-800 bg-zinc-950/40">
        <div class="p-5 flex items-start gap-4">
          <span class="font-mono text-xs text-zinc-500 pt-0.5">01/</span>
          <div>
            <h4 class="text-sm font-semibold text-white">
              Enhance Technical Competencies Section
            </h4>
            <p class="text-xs text-zinc-400 mt-1">
              Integrate mandatory systems architecture metrics directly inside
              your skill blocks to catch scanner patterns.
            </p>
          </div>
        </div>
        <div class="p-5 flex items-start gap-4">
          <span class="font-mono text-xs text-zinc-500 pt-0.5">02/</span>
          <div>
            <h4 class="text-sm font-semibold text-white">
              Quantify Historical Business Outcomes
            </h4>
            <p class="text-xs text-zinc-400 mt-1">
              Replace passive descriptions under your secondary roles with
              verifiable metrics showing percentage speed or revenue
              improvements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiredImprovementsSection;
