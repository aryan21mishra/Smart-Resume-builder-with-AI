import React from "react";
import {
  UploadCloud,
  FileSpreadsheet,
  TrendingUp,
  ChevronRight
} from "lucide-react";
import { RiBardFill } from "@remixicon/react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <UploadCloud size={24} className="text-violet-400 animate-bounce [animation-duration:3s]" />,
      heading: "Build or Upload",
      paragraph: "Input your career history in our responsive builder or upload your current PDF resume to parse instantly.",
      gradient: "from-violet-500/20 to-purple-500/5",
      borderGlow: "group-hover:border-violet-500/30"
    },
    {
      icon: <FileSpreadsheet size={24} className="text-fuchsia-400" />,
      heading: "Paste Target Job",
      paragraph: "Provide the job description or targeted position title to let the AI calibrate its analysis checklist.",
      gradient: "from-fuchsia-500/20 to-pink-500/5",
      borderGlow: "group-hover:border-fuchsia-500/30"
    },
    {
      icon: <TrendingUp size={24} className="text-amber-400" />,
      heading: "Audit & Optimize",
      paragraph: "Unlock an instant ATS rank audit, dynamic keyword suggestions, and precise AI rewrites to land the job.",
      gradient: "from-amber-500/20 to-orange-500/5",
      borderGlow: "group-hover:border-amber-500/30"
    },
  ];

  return (
    <section className="relative py-12 sm:py-20 overflow-hidden bg-[#050508]/40 w-full">
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1917_0.8px,transparent_0.8px)] bg-[size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="w-fit px-4 py-1.5 rounded-full bg-zinc-950/60 border border-zinc-900 text-zinc-300 flex items-center gap-2 backdrop-blur-md">
            <RiBardFill className="text-violet-400" size={14} />
            <p className="font-montserratRegular text-xs tracking-wider uppercase">
              The Workflow
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserratExtraBold text-white tracking-tight leading-tight">
            How It Works
          </h2>
          <p className="text-sm md:text-base font-montserratRegular text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Our AI-powered platform makes it easy to optimize your resume for any target job in just three simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          
          {/* Connector Line for Desktop */}
          <div className="absolute top-[4.5rem] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-amber-500/20 hidden md:block z-0"></div>

          {steps.map((item, index) => (
            <div
              key={index}
              className="group p-8 border rounded-2xl border-zinc-900 bg-[#09090c]/60 backdrop-blur-md relative flex flex-col items-start gap-6 hover:bg-[#0c0c10]/80 transition-all duration-350 z-10"
            >
              {/* Inner ambient background glow on card hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 rounded-2xl blur-md transition-opacity duration-500 -z-10`}></div>
              
              {/* Card border glow wrapper */}
              <div className={`absolute inset-0 border border-transparent ${item.borderGlow} rounded-2xl transition-colors duration-300 pointer-events-none -z-10`}></div>

              {/* Step number badge */}
              <div className="absolute top-6 right-6 font-mono text-xs font-bold text-zinc-700 group-hover:text-white transition-colors duration-300">
                STEP_0{index + 1}
              </div>

              {/* Icon Container */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Text content */}
              <div className="space-y-2.5">
                <h3 className="font-montserratBold text-lg text-white tracking-wide flex items-center gap-1.5">
                  {item.heading}
                </h3>
                <p className="text-xs sm:text-sm font-montserratRegular text-zinc-400 leading-relaxed">
                  {item.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
