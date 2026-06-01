import React from "react";
import {
  RiRadarLine,
  RiShieldCheckLine,
  RiAiGenerate,
  RiArrowRightUpLine,
  RiSparklingLine,
  RiErrorWarningLine,
} from "@remixicon/react";

const ResumeDashboard = ({ resumeData }) => {
  // Fallback structural initialization assuming mock/empty state matching pipeline payload structure
  const resume = resumeData || {
    title: "Software_Engineer_2026.pdf",
    updatedAt: "May 2026",
    feedback: [
      {
        atsScore: 82,
        jobMatchScore: 71,
        impactScore: 68,
        keywordScore: 60,
        strengths:
          "Excellent technical breakdown structure and strong project action-verb distribution indicators.",
        missingKeywords: ["CI/CD", "Kubernetes", "GraphQL", "TypeScript"],
      },
    ],
    rewriteSection: [
      {
        id: 1,
        sectionName: "Experience - Bullet #2",
        originalText: "Worked on backend routes.",
        rewrittenText:
          "Architected 14 scalable REST API endpoints maximizing ingestion capacity by 34%.",
      },
      {
        id: 2,
        sectionName: "Professional Summary",
        originalText: "Looking for a full stack engineer job.",
        rewrittenText:
          "Performance-driven Software Engineer specializing in low-latency runtime optimization frameworks.",
      },
    ],
  };

  const feedback = resume.feedback?.[0] || {};
  const rewrites = resume.rewriteSection || [];

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 p-6 lg:p-12 antialiased selection:bg-white selection:text-black">
      {/* ================= PAGE CONTROL HEADER ================= */}
      <header className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">
              Live Active Tracking Profile
            </span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white font-montserratBold">
            {resume.title}
          </h1>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-white text-black font-semibold text-xs rounded-lg hover:bg-zinc-200 transition-colors tracking-wide">
          <span>Launch Code Editor</span>
          <RiArrowRightUpLine size={14} className="stroke-[2.5]" />
        </button>
      </header>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* ================= TOP PRIMARY METRIC GRID ================= */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "ATS Score",
              val: feedback.atsScore,
              icon: RiShieldCheckLine,
            },
            {
              label: "Job Match Index",
              val: feedback.jobMatchScore,
              icon: RiRadarLine,
            },
            {
              label: "Impact Metric Score",
              val: feedback.impactScore,
              icon: RiSparklingLine,
            },
            {
              label: "Keyword Density",
              val: feedback.keywordScore,
              icon: RiErrorWarningLine,
            },
          ].map((metric, i) => (
            <div
              key={i}
              className="border border-zinc-900 bg-zinc-900/20 rounded-xl p-5 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-wider font-medium text-zinc-500 uppercase block">
                  {metric.label}
                </span>
                <span className="text-3xl font-extrabold tracking-tight text-white font-mono">
                  {metric.val || "—"}
                </span>
              </div>
              <metric.icon size={22} className="text-zinc-700" />
            </div>
          ))}
        </section>

        {/* ================= TWO-COLUMN LOWER METRIC VIEW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT PANEL: Audit Breakdown (Schema: strengths, missingKeywords) */}
          <section className="lg:col-span-5 space-y-6">
            {/* Core Architectural Strengths */}
            <div className="border border-zinc-900 bg-zinc-900/30 rounded-xl p-6 space-y-3">
              <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-zinc-400 block">
                Identified Core Strengths
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {feedback.strengths ||
                  "Initiate an AI evaluation request sequence to extract overall formatting optimization parameters."}
              </p>
            </div>

            {/* Target Missing System Keywords */}
            <div className="border border-zinc-900 bg-zinc-900/30 rounded-xl p-6 space-y-4">
              <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-zinc-400 block">
                Critical Missing Scanner Keywords
              </span>
              <div className="flex flex-wrap gap-1.5">
                {feedback.missingKeywords?.map((kw, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono bg-zinc-950 border border-dashed border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md">
                    {kw}
                  </span>
                )) || (
                  <span className="text-xs text-zinc-600">
                    No missing critical target vectors recorded.
                  </span>
                )}
              </div>
            </div>
          </section>

          {/* RIGHT PANEL: Optimization Activity Log (Schema: rewriteSection Pipeline lookup limit:3) */}
          <section className="lg:col-span-7 border border-zinc-900 bg-zinc-900/10 rounded-xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-zinc-900 bg-zinc-900/40 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-zinc-400">
                Recent Phrasing Optimization Log
              </span>
              <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded">
                <RiAiGenerate size={11} />
                <span>LIMIT_COUNT: 3</span>
              </div>
            </div>

            <div className="divide-y divide-zinc-900 flex-1 bg-zinc-950/40">
              {rewrites.length > 0 ? (
                rewrites.map((rewrite, i) => (
                  <div
                    key={rewrite.id || i}
                    className="p-5 space-y-3 hover:bg-zinc-900/20 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white tracking-wide">
                        {rewrite.sectionName}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-600">
                        MOD_0{i + 1}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] leading-relaxed">
                      <div className="p-3 rounded-lg border border-zinc-900/50 bg-zinc-950 text-zinc-500">
                        <span className="font-mono text-[9px] block text-zinc-600 mb-1 uppercase tracking-wider">
                          [ Original Text Input ]
                        </span>
                        "{rewrite.originalText}"
                      </div>
                      <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-200">
                        <span className="font-mono text-[9px] block text-white font-bold mb-1 uppercase tracking-wider">
                          ✨ [ Synthesized AI Alternative ]
                        </span>
                        "{rewrite.rewrittenText}"
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-xs text-zinc-600 font-mono">
                  No automated syntax optimization transactions recorded for
                  this session profile.
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeDashboard;
