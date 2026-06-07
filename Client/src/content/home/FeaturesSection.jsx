import React from "react";
import { Link } from "react-router-dom";
import {
  RiFileList2Line,
  RiLineChartLine,
  RiTargetFill,
  RiArrowRightLongLine,
  RiCheckDoubleLine,
} from "@remixicon/react";
import {
  Sparkles,
  ChevronRight,
  BarChart3,
  Briefcase,
  FileText,
  Settings,
} from "lucide-react";

export default function FeaturesSection() {
  const primaryFeatures = [
    {
      icon: <RiFileList2Line size={28} className="text-violet-400" />,
      heading: "Resume Builder",
      paragraph:
        "Create professional, ATS-friendly resumes using our step-by-step assistant and optimized schemas.",
      buttonName: "Build Now",
      navigationTo: "/dashboard/my-resumes/build-resume/personal-information",
      glow: "group-hover:border-violet-500/30 group-hover:shadow-violet-950/10",
    },
    {
      icon: <RiLineChartLine size={28} className="text-emerald-400" />,
      heading: "ATS Score Checker",
      paragraph:
        "Analyze keyword usage, layout constraints, and bullet impact to bypass automated tracking system blocks.",
      buttonName: "Check Score",
      navigationTo: "/dashboard/ai-feedback",
      glow: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-950/10",
    },
    {
      icon: <RiTargetFill size={28} className="text-amber-400" />,
      heading: "Job Match Analyzer",
      paragraph:
        "Paste target job descriptions to identify structural keyword gaps and see compatibility ranks.",
      buttonName: "Match Now",
      navigationTo: "/dashboard/keywords",
      glow: "group-hover:border-amber-500/30 group-hover:shadow-amber-950/10",
    },
  ];

  return (
    <section className="relative py-12 sm:py-20 bg-[#050508]/20 w-full overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="px-6 mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="w-fit px-4 py-1.5 rounded-full bg-zinc-950/60 border border-zinc-900 text-zinc-300 flex items-center gap-2 backdrop-blur-md">
            <Sparkles size={14} className="text-violet-400" />
            <p className="font-montserratRegular text-xs tracking-wider uppercase">
              Endless Power
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserratExtraBold text-white tracking-tight leading-tight">
            One Platform. Endless Power.
          </h2>
          <p className="text-sm md:text-base font-montserratRegular text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Every feature is engineered to close the distance between your
            experience and the hiring manager's checklist.
          </p>
        </div>

        {/* Primary Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {primaryFeatures.map((item, index) => (
            <div
              key={index}
              className={`group p-8 border border-zinc-900 rounded-2xl bg-[#09090c]/60 backdrop-blur-md hover:bg-[#0c0c11]/85 transition-all duration-300 flex flex-col justify-between text-white shadow-xl ${item.glow}`}>
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="space-y-2.5">
                  <h3 className="text-lg font-montserratBold tracking-wide">
                    {item.heading}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-montserratRegular leading-relaxed">
                    {item.paragraph}
                  </p>
                </div>
              </div>
              <Link
                to={item.navigationTo}
                className="text-violet-400 hover:text-violet-300 flex gap-2 font-montserratMedium items-center text-xs mt-6 transition-colors group/link">
                {item.buttonName}{" "}
                <RiArrowRightLongLine
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Breakdown Dashboard Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 text-white">
          {/* Feature 01: Live Resume Builder (Full Width Banner) */}
          <div className="lg:col-span-2 p-8 border border-zinc-900 rounded-3xl bg-gradient-to-br from-violet-650/10 via-[#09090c]/90 to-[#09090c]/50 backdrop-blur-md flex flex-col lg:flex-row gap-8 items-center hover:border-violet-500/20 transition-colors duration-300">
            <div className="flex-1 space-y-5">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center">
                <FileText className="text-violet-400" size={20} />
              </div>
              <div className="space-y-2.5">
                <h3 className="text-2xl font-montserratBold tracking-wide text-white">
                  Live Resume Builder
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-montserratRegular leading-relaxed">
                  A high-productivity workspace: forms on the left, live resume
                  compilation in the center, and AI recommendations loading on
                  the right. Modify any detail and watch your resume compile
                  instantaneously with sub-300ms latency.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-montserratMedium border border-violet-500/20">
                <RiCheckDoubleLine size={14} />
                Live Preview · Custom Templates · Auto-save Checkpoints
              </div>
            </div>

            {/* Interactive Builder Mockup Graphic */}
            <div className="w-full lg:w-96 bg-[#040406] rounded-xl border border-zinc-800 p-4 shadow-2xl shrink-0">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="grid grid-cols-12 gap-3 text-[10px]">
                <div className="col-span-4 border-r border-zinc-900 pr-2 space-y-1.5 text-zinc-500 select-none">
                  <div className="font-bold text-zinc-400 mb-1 select-none">
                    Sections
                  </div>
                  <div className="bg-zinc-900 text-white rounded px-1.5 py-0.5">
                    Personal Info
                  </div>
                  <div className="px-1.5 py-0.5">Experience</div>
                  <div className="px-1.5 py-0.5">Projects</div>
                  <div className="h-2 bg-zinc-900 rounded mt-4 w-full"></div>
                  <div className="h-2 bg-zinc-900 rounded w-2/3"></div>
                </div>
                <div className="col-span-5 bg-zinc-950 rounded p-2 text-center border border-zinc-900 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-white text-[9px]">
                      Arjun Sharma
                    </div>
                    <div className="text-[6px] text-violet-400 font-bold uppercase tracking-wider mt-0.5">
                      Software Architect
                    </div>
                  </div>
                  <div className="h-[1px] bg-zinc-900 my-1"></div>
                  <div className="space-y-1">
                    <div className="h-1 bg-zinc-850 rounded w-full"></div>
                    <div className="h-1 bg-zinc-900 rounded w-5/6"></div>
                    <div className="h-1 bg-zinc-900 rounded w-4/5"></div>
                  </div>
                </div>
                <div className="col-span-3 pl-1 flex flex-col justify-center items-center">
                  <div className="text-[7px] text-zinc-500 mb-1">
                    Rank Score
                  </div>
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg
                      className="absolute w-full h-full transform -rotate-90"
                      viewBox="0 0 30 30">
                      <circle
                        cx="15"
                        cy="15"
                        r="12"
                        fill="none"
                        stroke="rgba(255,255,255,.02)"
                        strokeWidth="2"
                      />
                      <circle
                        cx="15"
                        cy="15"
                        r="12"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="75"
                        strokeDashoffset="18"
                      />
                    </svg>
                    <span className="text-[8px] font-bold text-white">76</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 02: ATS Score Checker */}
          <div className="p-8 border border-zinc-900 rounded-3xl bg-[#09090c]/60 backdrop-blur-md flex flex-col justify-between gap-6 hover:border-emerald-500/20 transition-colors duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                <BarChart3 className="text-emerald-400" size={20} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-montserratBold tracking-wide">
                  ATS Score Checker
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-montserratRegular leading-relaxed">
                  Powered by advanced AI analysis. Examine your document
                  parameters across 4 critical pillars: density match, text
                  formatting structure, grammatical readability, and metric
                  highlights.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-montserratMedium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                Structured Feedback · Circular Dial Indicators · Sub-scores
              </div>
            </div>

            {/* ATS Visual Mockup */}
            <div className="bg-[#040406] rounded-xl border border-zinc-800 p-4 space-y-4 shadow-xl">
              <div className="flex gap-4 items-center">
                <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                  <svg
                    className="absolute w-full h-full transform -rotate-90"
                    viewBox="0 0 70 70">
                    <circle
                      cx="35"
                      cy="35"
                      r="28"
                      fill="none"
                      stroke="rgba(255,255,255,.02)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="35"
                      cy="35"
                      r="28"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="4"
                      strokeDasharray="176"
                      strokeDashoffset="35"
                    />
                  </svg>
                  <span className="text-xs font-montserratBold">80%</span>
                </div>
                <div className="text-[11px] text-zinc-400 leading-normal">
                  <strong className="text-white block font-montserratMedium">
                    Optimal Alignment
                  </strong>
                  The resume is ready to pass major enterprise filters easily.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-[10px]">
                {[
                  ["Core Skills", "85%", "bg-emerald-500"],
                  ["Keywords", "70%", "bg-yellow-500"],
                  ["ATS Layout", "92%", "bg-emerald-500"],
                  ["Action Verbs", "65%", "bg-orange-500"],
                ].map(([label, val, color]) => (
                  <div
                    key={label}
                    className="bg-[#09090c] p-2 rounded-lg border border-zinc-900">
                    <div className="flex justify-between text-zinc-500 mb-1">
                      <span>{label}</span>
                      <span className="font-bold text-white">{val}</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-850 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${color}`}
                        style={{ width: val }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 03: Job Description Match */}
          <div className="p-8 border border-zinc-900 rounded-3xl bg-[#09090c]/60 backdrop-blur-md flex flex-col justify-between gap-6 hover:border-amber-500/20 transition-colors duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center">
                <Briefcase className="text-amber-400" size={20} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-montserratBold tracking-wide">
                  Job Description Match
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-montserratRegular leading-relaxed">
                  Evaluate your compatibility directly against live role
                  configurations. Instantly locate missing qualifications and
                  receive step-by-step pointers on reframing experience to
                  match.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-montserratMedium text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                Compatibility Rating · Parameter Auditing
              </div>
            </div>

            {/* Job Match Analysis Display */}
            <div className="bg-[#040406] rounded-xl border border-zinc-800 p-4 space-y-3 shadow-xl">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="font-semibold text-xs text-zinc-300">
                  DevOps Lead — Match Check
                </span>
                <span className="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded text-[9px] font-bold border border-amber-500/20">
                  82% Match
                </span>
              </div>
              <div className="space-y-2 text-[10px]">
                <div className="flex justify-between items-center bg-red-950/20 p-2 rounded border border-red-500/10">
                  <span className="text-zinc-400">
                    Kubernetes Container Orchestration
                  </span>
                  <span className="text-[8px] uppercase bg-red-500/20 text-red-400 px-1.5 rounded font-bold">
                    Critical Gap
                  </span>
                </div>
                <div className="flex justify-between items-center bg-emerald-950/20 p-2 rounded border border-emerald-500/10">
                  <span className="text-zinc-400">
                    AWS Infrastructure (EC2 / S3)
                  </span>
                  <span className="text-[8px] text-emerald-400 font-bold">
                    ✓ Found
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 04: Keyword Suggestions */}
          <div className="lg:col-span-2 p-8 border border-zinc-900 rounded-3xl bg-gradient-to-br from-indigo-650/10 via-[#09090c]/90 to-[#09090c]/50 backdrop-blur-md flex flex-col lg:flex-row gap-8 items-center hover:border-indigo-500/20 transition-colors duration-300">
            <div className="flex-1 space-y-5">
              <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/25 flex items-center justify-center">
                <Settings className="text-[#818cf8]" size={20} />
              </div>
              <div className="space-y-2.5">
                <h3 className="text-2xl font-montserratBold tracking-wide text-white">
                  Keyword Suggestions
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-montserratRegular leading-relaxed">
                  Our algorithm processes industry listings to extract a list of
                  keywords. It maps present keywords against missing
                  qualifications and outputs targeted densities for maximum
                  resume relevance.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-montserratMedium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                Density Mapping · Gap Resolution
              </div>
            </div>

            {/* Keyword Chips Dashboard Display */}
            <div className="w-full lg:w-80 bg-[#040406] rounded-xl border border-zinc-800 p-4 space-y-3.5 shrink-0 shadow-2xl">
              <div className="text-[10px] font-semibold text-zinc-500">
                Keyword Breakdown
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Docker", "Terraform", "CI/CD", "AWS"].map((kw) => (
                  <span
                    key={kw}
                    className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-md font-medium">
                    {kw}
                  </span>
                ))}
                {["Kubernetes", "Prometheus"].map((kw) => (
                  <span
                    key={kw}
                    className="text-[9px] bg-red-500/10 text-red-400 border border-red-500/20 line-through px-2 py-0.5 rounded-md font-medium opacity-80">
                    {kw}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-zinc-900">
                <div className="flex justify-between text-[10px] text-zinc-500 mb-1">
                  <span>Target Density Rating</span>
                  <span className="text-indigo-400 font-bold">78/100</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full w-[78%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
