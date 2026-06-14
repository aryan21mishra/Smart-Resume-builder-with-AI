import React from "react";
import { useSelector } from "react-redux";
import { selectFeedback } from "@/redux/resumes/feedbackSlice";

const OverallSummaryAndKeyStrengthSection = () => {
  const feedback = useSelector(selectFeedback);
  const overallFeedback = feedback.overallFeedback || "Initiate an AI evaluation request to extract your resume overall summary.";
  const strengths = feedback.strengths || [];
  const hasStrengths = Array.isArray(strengths) ? strengths.length > 0 : !!strengths;
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6">
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
          Overall Summary
        </h2>
        <p className="text-sm text-zinc-300 leading-relaxed">
          {overallFeedback}
        </p>
      </div>
      <div className="pt-4 border-t border-zinc-800">
        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
          Key Strengths
        </h3>
        {hasStrengths ? (
          Array.isArray(strengths) ? (
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300">
              {strengths.map((str, i) => (
                <li key={i} className="leading-relaxed">{str}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-zinc-300 leading-relaxed">
              {strengths}
            </p>
          )
        ) : (
          <p className="text-sm text-zinc-500 italic">
            Run resume analysis to identify candidate strengths.
          </p>
        )}
      </div>
    </div>
  );
};

export default OverallSummaryAndKeyStrengthSection;
