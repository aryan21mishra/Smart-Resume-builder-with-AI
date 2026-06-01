import React from "react";
import NavigationBar from "../../layouts/NavigationBar";
import HeroSection from "../../content/home/HeroSection";
import FeaturesSection from "../../content/home/FeaturesSection";
import HowItWorksSection from "../../content/home/HowItWorksSection";
import ReviewSection from "../../content/home/ReviewSection";
import TemplateSection from "../../content/home/TemplateSection";
import Image from "../../components/common/Image";
import { Image8 } from "../../assets/home/index";
import BackgroundGradientDesign from "../../components/common/BackgroundGradientDesign";
const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#060606] text-zinc-100 overflow-x-hidden antialiased selection:bg-amber-400 selection:text-neutral-900">
      {/* 
        Ambient Background Zone 
        Using responsive percentage-based placement and higher blur radius to avoid layout breaks
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-[-10%] left-[10%] md:left-[20%] w-full h-full blur-[140px] animate-pulse [animation-duration:8s]">
          <BackgroundGradientDesign />
        </div>
      </div>

      {/* Main Page Content Stack */}
      <div className="relative z-10 flex flex-col w-full">
        {/* Sticky Header Wrapper */}
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#060606]/70 border-b border-zinc-900/50">
          <NavigationBar />
        </header>

        {/* Semantic Content Layout Sections */}
        <main className="w-full">
          <HeroSection />

          {/* Section Divider subtle accents to anchor your premium dark mode aesthetic */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <TemplateSection />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <ReviewSection />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <FeaturesSection />
        </main>

        {/* Optional Footer Container entry point can safely go here */}
      </div>
    </div>
  );
};

export default HomePage;
