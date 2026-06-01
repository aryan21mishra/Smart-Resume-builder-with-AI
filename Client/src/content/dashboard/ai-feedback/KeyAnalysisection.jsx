import React from "react";

const KeyAnalysisection = () => {
  return (
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
      <h2 class="text-xs font-bold uppercase tracking-widest text-zinc-400">
        Keywords Analysis
      </h2>

      <div>
        <span class="text-[11px] block font-medium text-zinc-500 mb-2">
          Missing Keywords
        </span>
        <div class="flex flex-wrap gap-1.5">
          <span class="text-xs bg-zinc-950 text-white border border-dashed border-zinc-700 px-2 py-1 rounded">
            Kubernetes
          </span>
          <span class="text-xs bg-zinc-950 text-white border border-dashed border-zinc-700 px-2 py-1 rounded">
            GraphQL
          </span>
          <span class="text-xs bg-zinc-950 text-white border border-dashed border-zinc-700 px-2 py-1 rounded">
            Redis
          </span>
        </div>
      </div>

      <div class="pt-2">
        <span class="text-[11px] block font-medium text-zinc-500 mb-2">
          Identified Core Keywords
        </span>
        <div class="flex flex-wrap gap-1.5">
          <span class="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
            React
          </span>
          <span class="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
            Node.js
          </span>
          <span class="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
            REST API
          </span>
        </div>
      </div>
    </div>
  );
};

export default KeyAnalysisection;
