import React from "react";
import { useSelector } from "react-redux";
import { selectFeedback } from "@/redux/resumes/feedbackSlice";

const KeyAnalysisection = () => {
  const feedback = useSelector(selectFeedback);
  
  const missingKeywords = feedback.missingKeywords || [];
  const presentKeywords = feedback.presentKeywords || [];
  const hasAnalyzed = feedback.hasAnalyzed;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
        Keywords Analysis
      </h2>

      {/* Missing Keywords */}
      <div>
        <span className="text-[11px] block font-medium text-zinc-500 mb-2">
          Missing Keywords
        </span>
        {missingKeywords.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {missingKeywords.map((kw, i) => (
              <span 
                key={i} 
                className="text-xs bg-red-950/20 text-red-400 border border-dashed border-red-900/50 px-2 py-1 rounded"
              >
                {kw}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-xs text-zinc-600">
            {hasAnalyzed ? "No critical keywords missing." : "Run analyzer to view."}
          </span>
        )}
      </div>

      {/* Present Keywords */}
      <div className="pt-2">
        <span className="text-[11px] block font-medium text-zinc-500 mb-2">
          Identified Core Keywords
        </span>
        {presentKeywords.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {presentKeywords.map((kw, i) => (
              <span 
                key={i} 
                className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded"
              >
                {kw}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-xs text-zinc-600">
            {hasAnalyzed ? "No keywords identified." : "Run analyzer to view."}
          </span>
        )}
      </div>
    </div>
  );
};

export default KeyAnalysisection;
