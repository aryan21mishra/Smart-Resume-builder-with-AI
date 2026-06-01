import React from "react";

const ScoreMetricSection = () => {
  return (
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6">
      <h2 class="text-xs font-bold uppercase tracking-widest text-zinc-400">
        Score Metrics
      </h2>

      <div class="grid grid-cols-2 gap-4 border-b border-zinc-800 pb-6">
        <div class="text-center">
          <span class="block text-4xl font-extrabold text-white tracking-tight">
            87<span class="text-xs font-normal text-zinc-500">/100</span>
          </span>
          <span class="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
            ATS Score
          </span>
        </div>
        <div class="text-center border-l border-zinc-800">
          <span class="block text-4xl font-extrabold text-white tracking-tight">
            74<span class="text-xs font-normal text-zinc-500">/100</span>
          </span>
          <span class="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
            Job Match
          </span>
        </div>
      </div>

      <div class="space-y-4">
        <div>
          <div class="flex justify-between text-xs mb-1.5">
            <span class="text-zinc-400">Content Quality</span>
            <span class="font-mono text-white">92%</span>
          </div>
          <div class="w-full bg-zinc-800 h-1 rounded-full">
            <div class="bg-white h-1 rounded-full  w-[92%]"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs mb-1.5">
            <span class="text-zinc-400">Keyword Density</span>
            <span class="font-mono text-white">64%</span>
          </div>
          <div class="w-full bg-zinc-800 h-1 rounded-full">
            <div class="bg-white h-1 rounded-full  w-[64%]"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs mb-1.5">
            <span class="text-zinc-400">Formatting & Structure</span>
            <span class="font-mono text-white">80%</span>
          </div>
          <div class="w-full bg-zinc-800 h-1 rounded-full">
            <div class="bg-white h-1 rounded-full  w-[80%]"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs mb-1.5">
            <span class="text-zinc-400">Impact Metrics</span>
            <span class="font-mono text-white">70%</span>
          </div>
          <div class="w-full bg-zinc-800 h-1 rounded-full">
            <div class="bg-white h-1 rounded-full  w-[70%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreMetricSection;
