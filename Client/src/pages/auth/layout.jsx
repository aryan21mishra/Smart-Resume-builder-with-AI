import React from "react";
import Logo from "../../components/common/Logo";
import { Typewriter } from "react-simple-typewriter";
import BackgroundGradientDesign from "../../components/common/BackgroundGradientDesign";
import { Outlet } from "react-router-dom";
import { Sparkles, Check } from "lucide-react";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen bg-[#040406] overflow-hidden font-sans flex items-center justify-center relative select-none">
      <div className="w-full h-full flex relative z-10">
        <div className="hidden md:flex md:w-3/5 h-full relative flex-col justify-between p-8 lg:p-12 border-r border-zinc-900 bg-[#050508]/40">
          
          {/* Premium Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f13_1px,transparent_1px),linear-gradient(to_bottom,#0f0f13_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0"></div>

          {/* Ambient Glowing Background */}
          <div className="absolute -top-40 -left-20 w-[140%] h-[140%] pointer-events-none opacity-20 blur-[140px] z-0">
            <BackgroundGradientDesign />
          </div>

          {/* Logo (Stays pinned top left) */}
          <div className="z-10 w-full">
            <Logo />
          </div>
          <div className="my-auto my-10 lg:my-16 z-10 max-w-xl bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl p-8 lg:p-10 shadow-2xl shadow-violet-950/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-violet-600/5 blur-[50px] rounded-full pointer-events-none"></div>

            {/* Tagline Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-montserratMedium tracking-wide uppercase mb-6 w-fit">
              <Sparkles size={12} className="animate-pulse" />
              <span>AI-Powered Career Hub</span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="text-white text-3xl lg:text-5xl font-montserratBold tracking-tight leading-[1.15] mb-4">
              Build resumes that{" "}
              <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent inline-block min-w-[150px]">
                <Typewriter
                  words={["actually", "instantly", "precisely", "expertly"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={2200}
                />
              </span>
              <br />
              get you hired.
            </h1>

            {/* Static Body Paragraph (Prevents frustrating text jump-jitter) */}
            <p className="text-zinc-400 text-xs sm:text-sm lg:text-base leading-relaxed font-montserratRegular">
              Craft compelling, ATS-optimized resumes with real-time AI feedback. Get personalized suggestions, keyword density analysis, and industry recruiter insights in seconds.
            </p>

            {/* Dynamic Resume Keyword Audit Display */}
            <div className="mt-8 p-4 bg-[#09090c]/80 border border-zinc-850 rounded-xl space-y-3 backdrop-blur-sm">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-mono">RESUME_KEYWORD_AUDIT</span>
                <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                  96% Match Rank
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "React.js", status: "found" },
                  { name: "Node.js", status: "found" },
                  { name: "Kubernetes", status: "fixed" },
                  { name: "AWS Cloud", status: "found" },
                  { name: "TypeScript", status: "found" }
                ].map((kw, i) => (
                  <span 
                    key={i} 
                    className={`text-[10px] px-2.5 py-0.5 rounded-md border flex items-center gap-1.5 font-montserratMedium transition-all duration-300 ${
                      kw.status === "found" 
                        ? "bg-emerald-500/5 text-white border-emerald-500/10" 
                        : "bg-violet-500/10 text-violet-400 border-violet-500/25 animate-pulse"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${kw.status === "found" ? "bg-emerald-500" : "bg-violet-400"}`}></span>
                    {kw.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Subtle Footer Credit */}
          <div className="z-10 text-zinc-600 text-xs font-montserratRegular">
            &copy; {new Date().getFullYear()} ResumeAI. Structured for recruiters.
          </div>
        </div>
        <div className="w-full md:w-2/5 h-full bg-[#050507] flex flex-col justify-center items-center px-6 sm:px-12 lg:px-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-600/5 blur-[90px] rounded-full pointer-events-none z-0"></div>
          <div className="absolute top-6 left-6 md:hidden z-20">
            <Logo />
          </div>

          <div className="w-full max-w-md mx-auto relative z-10">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;
