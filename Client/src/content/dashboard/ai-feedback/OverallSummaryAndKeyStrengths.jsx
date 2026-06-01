import React from "react";

const OverallSummaryAndKeyStrengthSection = () => {
  return (
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
      <div>
        <h2 class="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
          Overall Summary
        </h2>
        <p class="text-sm text-zinc-300 leading-relaxed">
          Your resume possesses strong foundational formatting and highly
          relevant structural elements. However, it lacks specific keywords
          related to cloud deployment pipelines required for this specific job
          position.
        </p>
      </div>

      <div class="pt-4 border-t border-zinc-800">
        <h3 class="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
          Key Strengths
        </h3>
        <p class="text-sm text-zinc-300">
          Strong metric utilization in former employment bullet points with
          highly precise action-oriented wording throughout.
        </p>
      </div>
    </div>
  );
};

export default OverallSummaryAndKeyStrengthSection;
