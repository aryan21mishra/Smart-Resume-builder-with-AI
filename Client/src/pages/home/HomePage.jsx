import React from "react";
import NavigationBar from "../../layouts/NavigationBar";
import HeroSection from "../../content/home/HeroSection";
import FeaturesSection from "../../content/home/FeaturesSection";
import ReviewSection from "../../content/home/ReviewSection";
import TemplateSection from "../../content/home/TemplateSection";
import HowItWorksSection from "../../content/home/HowItWorksSection";
import Footer from "../../layouts/Footer";
import BackgroundGradientDesign from "../../components/common/BackgroundGradientDesign";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#040406] text-zinc-100 overflow-x-hidden antialiased selection:bg-amber-400 selection:text-neutral-900 font-sans">
      
      {/* Premium Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f13_1px,transparent_1px),linear-gradient(to_bottom,#0f0f13_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0"></div>

      {/* 
        Ambient Background Zone 
        Using responsive percentage-based placement and higher blur radius to avoid layout breaks
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] pointer-events-none overflow-hidden z-0 opacity-30">
        <div className="absolute top-[-10%] left-[10%] md:left-[20%] w-full h-full blur-[160px] animate-pulse [animation-duration:10s]">
          <BackgroundGradientDesign />
        </div>
      </div>

      {/* Main Page Content Stack */}
      <div className="relative z-10 flex flex-col w-full">
        {/* Sticky Header Wrapper */}
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#040406]/75 border-b border-zinc-900/50">
          <NavigationBar />
        </header>

        {/* Semantic Content Layout Sections */}
        <main className="w-full">
          
          <HeroSection />

          {/* Section Divider subtle accents to anchor your premium dark mode aesthetic */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900/80 to-transparent" />
          
          <HowItWorksSection />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900/80 to-transparent" />
          
          <TemplateSection />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900/80 to-transparent" />
          
          <FeaturesSection />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900/80 to-transparent" />
          
          <ReviewSection />
          
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
