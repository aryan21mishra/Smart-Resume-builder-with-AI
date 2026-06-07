import React from "react";
import { useNavigate } from "react-router-dom";
import {
  RiArrowRightLongLine,
  RiBardFill,
  RiCheckLine,
} from "@remixicon/react";
import { Button } from "../../components/ui";
import HeroDashboardMockup from "../../components/home/HeroDashboardMockup";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      {/* Background soft light beams */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center h-full relative z-10">
        
        {/* Glowing Badge Pill */}
        <div className="group relative rounded-full p-[1px] transition-all bg-zinc-800 hover:bg-zinc-700 focus-within:ring-2 focus-within:ring-violet-500/50 mb-8 cursor-pointer shadow-lg shadow-black/40">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
          <div className="relative rounded-full px-6 py-2 bg-[#09090b]/90 text-zinc-300 flex items-center gap-2.5 text-xs sm:text-sm font-montserratRegular">
            <RiBardFill className="text-violet-400 animate-pulse" size={16} />
            <span>ATS-Friendly Resumes That Get You Hired</span>
            <RiArrowRightLongLine className="text-zinc-500 group-hover:translate-x-1 transition-transform" size={14} />
          </div>
        </div>

        {/* Catchy Headline */}
        <div className="space-y-4 text-center max-w-4xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-montserratExtraBold leading-none tracking-tight">
            Build Better Resumes.
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-montserratExtraBold leading-none tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              Get More Interviews.
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-zinc-400 mt-6 font-montserratRegular text-base sm:text-lg max-w-[640px] text-center leading-relaxed">
          Create professional resumes, review real-time ATS scoring, and match your profile to job descriptions — all in one AI-powered hub.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 justify-center">
          <Button
            onClick={() => navigate("/dashboard")}
            className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-950/20 px-6 py-5 rounded-xl flex items-center justify-center gap-2 text-sm font-montserratMedium border-0! transition active:scale-98"
          >
            Build Your Resume <RiArrowRightLongLine size={16} />
          </Button>

          <Button
            onClick={() => navigate("/dashboard/ai-feedback")}
            variant="outline"
            className="w-full sm:w-auto text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 px-6 py-5 rounded-xl text-sm font-montserratMedium transition active:scale-98"
          >
            Check ATS Score
          </Button>
        </div>

        {/* Features Checklist */}
        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 text-zinc-400 text-xs sm:text-sm font-montserratLight">
          {["ATS Optimized Structure", "Real-Time AI Advice", "No Credit Card Required"].map(
            (item, index) => (
              <li
                key={index}
                className="flex gap-2.5 items-center bg-zinc-950/40 border border-zinc-900/80 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm"
              >
                <div className="w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <RiCheckLine size={12} className="text-violet-400" />
                </div>
                <span>{item}</span>
              </li>
            ),
          )}
        </ul>

        {/* Embedded Interactive Live Dashboard Simulator */}
        <HeroDashboardMockup />

      </div>
    </section>
  );
};

export default HeroSection;
