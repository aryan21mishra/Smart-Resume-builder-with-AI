import React from "react";
import AuthImage from "../../assets/auth/kamran-abdullayev-nGYTbtuDjAI-unsplash.jpg";
import Image from "../../components/common/Image";
import Logo from "../../components/common/logo";
import { Typewriter } from "react-simple-typewriter";
import BackgroundGradientDesign from "../../components/common/BackgroundGradientDesign";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen bg-[#060606] overflow-hidden font-montserrat flex items-center justify-center">
      {/* Container Wrapper to isolate flex zones */}
      <div className="w-full h-full flex">
        {/* Left Side: Branding & Visuals (Hidden on mobile) */}
        <div className="hidden md:flex md:w-3/5 h-full relative flex-col justify-between p-8 lg:p-12 border-r border-neutral-900">
          {/* Ambient Glowing Background */}
          <div className="absolute -top-40 -left-20 w-[140%] h-[140%] pointer-events-none  blur-[120px] z-0">
            <BackgroundGradientDesign />
          </div>

          {/* Logo (Stays pinned top left) */}
          <div className="z-10 w-full">
            <Logo />
          </div>

          {/* Hero Context Panel (Glassmorphic Container) */}
          <div className="my-auto z-10 max-w-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md rounded-2xl p-8 lg:p-10 shadow-2xl">
            {/* Tagline Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1 w-6 rounded-full bg-amber-400" />
              <span className="text-xs lg:text-sm font-semibold uppercase tracking-widest text-neutral-400">
                AI-Powered Career Hub
              </span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="text-white text-3xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-4">
              Build resumes that{" "}
              <span className="text-amber-400 inline-block min-w-[140px]">
                <Typewriter
                  words={["actually", "instantly", "precisely"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={2500}
                />
              </span>
              <br />
              get you hired.
            </h1>

            {/* Static Body Paragraph (Prevents frustrating text jump-jitter) */}
            <p className="text-neutral-400 text-sm lg:text-base leading-relaxed font-medium">
              Craft compelling, ATS-optimized resumes with real-time AI
              feedback. Get personalized suggestions, keyword analysis, and
              industry insights in seconds.
            </p>
          </div>

          {/* Subtle Subtle Footer Credit */}
          <div className="z-10 text-neutral-600 text-xs font-medium">
            © {new Date().getFullYear()} Smart Resume Builder. Powered by AI.
          </div>
        </div>

        {/* Right Side: Authentication Forms (Form Canvas) */}
        <div className="w-full md:w-2/5 h-full bg-neutral-950 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-16 relative">
          {/* Tiny structural logo adjustment for mobile viewports only */}
          <div className="absolute top-6 left-6 md:hidden">
            <Logo />
          </div>

          <div className="w-full max-w-md mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
