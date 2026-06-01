import React from "react";
import { Link } from "react-router-dom";
import {
  RiFileList2Line,
  RiLineChartLine,
  RiTargetFill,
  RiArrowRightLongLine,
} from "@remixicon/react";

export default function FeaturesSection() {
  const primaryFeatures = [
    {
      icon: <RiFileList2Line size={40} />,
      heading: "Resume Builder",
      paragraph:
        "Create professional, ATS-Friendly resumes with our easy builder and modern templates.",
      buttonName: "Build Now",
      navigationTo: "/builder/new",
    },
    {
      icon: <RiLineChartLine size={40} />,
      heading: "ATS Score Checker",
      paragraph:
        "Upload your resume and get an instant ATS score with detailed feedback and suggestions.",
      buttonName: "Check Score",
      navigationTo: "/dashboard",
    },
    {
      icon: <RiTargetFill size={40} />,
      heading: "Job Description Match",
      paragraph:
        "Match your resume with any job description and get a compatibility score instantly.",
      buttonName: "Match Now",
      navigationTo: "/dashboard",
    },
  ];

  return (
    <section className="py-10 bg-slate-9v00">
      <div className="px-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center font-bold tracking-tight text-white">
            One Platform. Endless Power.
          </h1>
          <p className="text-base text-white/80 text-center mt-3 max-w-xl">
            Every feature is built to close the gap between your resume and the
            job offer — faster than any tool you've used before.
          </p>
        </div>

        {/* Primary Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {primaryFeatures.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-white/10 rounded-xl hover:shadow-2xl transition-all flex items-start gap-5 text-white bg-white/5 backdrop-blur-sm">
              <div className="p-4 rounded-2xl bg-white/10 shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{item.heading}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.paragraph}
                </p>
                <Link
                  to={item.navigationTo}
                  className="text-indigo-400 hover:text-indigo-300 flex gap-2 font-medium items-center text-sm mt-2 transition-colors">
                  {item.buttonName} <RiArrowRightLongLine />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Breakdown Dashboard Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 text-white">
          {/* Feature 01: Live Resume Builder (Full Width Banner) */}
          <div className="lg:col-span-2 p-8 border border-white/10 rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <div className="w-12 h-12">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <rect
                    x="4"
                    y="3"
                    width="16"
                    height="18"
                    rx="2"
                    stroke="#c85a2a"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 8h8M8 12h5M8 16h6"
                    stroke="#c85a2a"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Live Resume Builder</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                A three-panel editor — form on the left, live resume preview in
                the center, AI feedback on the right. Every keystroke updates
                your resume in real time with a 300ms debounce. Switch between 6
                beautiful templates instantly. Autosaves every 30 seconds so you
                never lose progress.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium border border-orange-500/20">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M4 6l1.5 1.5 3-3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Live Preview · 6 Templates · Autosave
              </div>
            </div>

            {/* Interactive Builder Mockup Graphic */}
            <div className="w-full md:w-80 bg-slate-950 rounded-2xl border border-white/10 p-4 shadow-xl shrink-0">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
              </div>
              <div className="grid grid-cols-12 gap-3 text-[10px]">
                <div className="col-span-4 border-r border-white/5 pr-2 space-y-1 text-white/40">
                  <div className="font-bold text-white/60 mb-2">Sections</div>
                  <div className="bg-white/10 text-white rounded px-1.5 py-0.5">
                    Personal
                  </div>
                  <div className="px-1.5 py-0.5">Experience</div>
                  <div className="px-1.5 py-0.5">Skills</div>
                  <div className="h-3 bg-white/5 rounded mt-4 w-full"></div>
                  <div className="h-3 bg-white/5 rounded w-2/3"></div>
                </div>
                <div className="col-span-5 bg-white/5 rounded p-2 text-center border border-white/10">
                  <div className="font-bold text-white mb-1">Arjun Sharma</div>
                  <div className="text-[6px] text-orange-400 font-bold uppercase tracking-wider">
                    Full Stack Dev
                  </div>
                  <div className="h-[1px] bg-white/20 my-1.5"></div>
                  <div className="space-y-1">
                    <div className="h-1 bg-white/40 rounded w-full"></div>
                    <div className="h-1 bg-white/20 rounded w-5/6"></div>
                    <div className="h-1 bg-white/20 rounded w-4/5"></div>
                  </div>
                </div>
                <div className="col-span-3 pl-1 flex flex-col justify-center items-center">
                  <div className="text-[8px] text-white/50 mb-1">AI Score</div>
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg
                      className="absolute w-full h-full transform -rotate-90"
                      viewBox="0 0 30 30">
                      <circle
                        cx="15"
                        cy="15"
                        r="12"
                        fill="none"
                        stroke="rgba(255,255,255,.1)"
                        strokeWidth="2"
                      />
                      <circle
                        cx="15"
                        cy="15"
                        r="12"
                        fill="none"
                        stroke="#e8794a"
                        strokeWidth="2"
                        strokeDasharray="75"
                        strokeDashoffset="20"
                      />
                    </svg>
                    <span className="text-[9px] font-bold">73</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 02: ATS Score Checker */}
          <div className="p-6 border border-white/10 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                02 — AI Powered
              </div>
              <h3 className="text-xl font-bold">ATS Score Checker</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Get an instant compatibility score powered by Claude AI. See
                exactly how well your resume performs across 4 dimensions —
                content quality, keyword density, format readability, and impact
                of your bullet points.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                Claude AI · Real-time · 4 Sub-scores
              </div>
            </div>

            {/* ATS Visual Mockup */}
            <div className="bg-slate-950 rounded-2xl border border-white/10 p-4 space-y-4">
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
                      stroke="rgba(255,255,255,.05)"
                      strokeWidth="5"
                    />
                    <circle
                      cx="35"
                      cy="35"
                      r="28"
                      fill="none"
                      stroke="#5db87a"
                      strokeWidth="5"
                      strokeDasharray="176"
                      strokeDashoffset="44"
                    />
                  </svg>
                  <span className="text-sm font-bold">75</span>
                </div>
                <div className="text-xs text-white/70">
                  <strong className="text-white block text-sm">
                    Good Score
                  </strong>
                  Your resume passes most ATS filters easily.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  ["Content", "82%", "bg-emerald-500"],
                  ["Keywords", "64%", "bg-yellow-500"],
                  ["Format", "91%", "bg-emerald-500"],
                  ["Impact", "58%", "bg-orange-500"],
                ].map(([label, val, color]) => (
                  <div
                    key={label}
                    className="bg-white/5 p-2 rounded-lg border border-white/5">
                    <div className="flex justify-between text-[10px] text-white/50 mb-1">
                      <span>{label}</span>
                      <span className="font-bold text-white">{val}</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
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
          <div className="p-6 border border-white/10 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                03 — Pro Feature
              </div>
              <h3 className="text-xl font-bold">Job Description Match</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Paste any job description and Claude compares it against your
                resume. See which requirements you meet, which skills you're
                missing, and exactly how to reframe your experience for that
                specific role.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                Role-Specific · Skill Gap Analysis
              </div>
            </div>

            {/* Job Match Analysis Display */}
            <div className="bg-slate-950 rounded-2xl border border-white/10 p-4 space-y-3 text-xs">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="font-semibold text-white/80">
                  Google SDE II — Match
                </span>
                <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-bold border border-blue-500/30">
                  76% Match
                </span>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between items-center bg-red-500/5 p-1.5 rounded border border-red-500/10">
                  <span className="text-white/70">
                    Agile / Scrum Methodology
                  </span>
                  <span className="text-[9px] uppercase bg-red-500/20 text-red-400 px-1.5 rounded font-bold">
                    Critical
                  </span>
                </div>
                <div className="flex justify-between items-center bg-yellow-500/5 p-1.5 rounded border border-yellow-500/10">
                  <span className="text-white/70">
                    Kubernetes Container Orchestration
                  </span>
                  <span className="text-[9px] uppercase bg-yellow-500/20 text-yellow-400 px-1.5 rounded font-bold">
                    Important
                  </span>
                </div>
                <div className="flex justify-between items-center bg-emerald-500/5 p-1.5 rounded border border-emerald-500/10">
                  <span className="text-white/70">React.js + TypeScript</span>
                  <span className="text-[9px] text-emerald-400 font-bold">
                    ✓ Present
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 04: Keyword Suggestions */}
          <div className="lg:col-span-2 p-6 border border-white/10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-400">
                04 — Smart Analysis
              </div>
              <h3 className="text-xl font-bold">Keyword Suggestions</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Claude scans your resume and identifies every keyword present vs
                missing. See your keyword density score, which categories you're
                weak in, and get a prioritized list of the most impactful
                keywords to add.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                Present vs Missing · Density Score
              </div>
            </div>

            {/* Keyword Chips Dashboard Display */}
            <div className="w-full md:w-80 bg-slate-950 rounded-2xl border border-white/10 p-4 space-y-3 shrink-0">
              <div className="text-[11px] font-semibold text-white/50 mb-1">
                Keyword Breakdown
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["React.js", "Node.js", "AWS", "TypeScript"].map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-md font-medium">
                    {kw}
                  </span>
                ))}
                {["Agile", "Kubernetes", "Microservices"].map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 line-through px-2 py-0.5 rounded-md font-medium">
                    {kw}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-white/5">
                <div className="flex justify-between text-[11px] text-white/60 mb-1">
                  <span>Density Target Score</span>
                  <span className="text-purple-400 font-bold">72/100</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full w-[72%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
