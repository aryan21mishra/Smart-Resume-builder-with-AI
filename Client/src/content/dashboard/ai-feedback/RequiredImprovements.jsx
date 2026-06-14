import React from "react";
import { useSelector } from "react-redux";
import { selectFeedback } from "@/redux/resumes/feedbackSlice";

const RequiredImprovementsSection = () => {
  const feedback = useSelector(selectFeedback);
  const improvements = feedback.improvements || [];
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
          Required Improvements
        </h2>
        {improvements.length > 0 && (
          <span className="text-[10px] font-mono font-bold uppercase text-zinc-500 bg-zinc-950 px-2 py-0.5 border border-zinc-850 rounded">
            COUNT: {improvements.length}
          </span>
        )}
      </div>
      <div className="divide-y divide-zinc-850 bg-zinc-950/40">
        {improvements.length > 0 ? (
          improvements.map((item, idx) => {
            let priorityBadge = "text-zinc-400 bg-zinc-800 border-zinc-700";
            if (item.priority?.toLowerCase() === "high") {
              priorityBadge = "text-red-400 bg-red-500/10 border-red-500/20";
            } else if (item.priority?.toLowerCase() === "medium") {
              priorityBadge = "text-amber-400 bg-amber-500/10 border-amber-500/20";
            }
            return (
              <div key={item._id || idx} className="p-5 flex items-start gap-4 hover:bg-zinc-900/20 transition-colors">
                <span className="font-mono text-xs text-zinc-550 pt-1 shrink-0">
                  {String(idx + 1).padStart(2, "0")}/
                </span>
                <div className="flex-1 space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-semibold text-white truncate">
                      {item.issue || "Improvement Item"}
                    </h4>
                    {item.section && (
                      <span className="text-[9px] uppercase font-mono px-2 py-0.5 bg-zinc-900 text-zinc-450 border border-zinc-800 rounded">
                        {item.section}
                      </span>
                    )}
                    {item.priority && (
                      <span className={`text-[9px] uppercase font-mono px-2 py-0.5 border rounded ${priorityBadge}`}>
                        {item.priority}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.suggestion}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center text-xs text-zinc-500 font-mono">
            {feedback.hasAnalyzed 
              ? "No critical improvement suggestions generated for this profile." 
              : "Initiate resume feedback analyzer to view required updates."}
          </div>
        )}
      </div>
    </div>
  );
};

export default RequiredImprovementsSection;
