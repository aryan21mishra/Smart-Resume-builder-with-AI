import React from "react";
import NavigationBar from "../layouts/NavigationBar";
import HeroSection from "../content/home/HeroSection";
import FeaturesSection from "../content/home/FeaturesSection";
import HowItWorksSection from "../content/home/HowItWorksSection";
import ReviewSection from "../content/home/ReviewSection";
import TemplateSection from "../content/home/TemplateSection";
import Image from "../components/common/Image";
import { Image8 } from "../assets/home/index";
import BackgroundGradientDesign from "../components/common/BackgroundGradientDesign";
const HomePage = () => {
  return (
    <div className="relative bg-[#000000] overflow-hidden w-full h-full">
      {/* Blob background — anchored inside the dark container */}
      <div className="absolute -top-10 left-[225px] w-full pointer-events-none blur-xl ">
        <BackgroundGradientDesign />
      </div>

      {/* Page content sits above blobs */}
      <div className="relative z-10">
        <NavigationBar />
        <HeroSection />
        <TemplateSection />
        <ReviewSection />
        <FeaturesSection />
      </div>
    </div>
  );
};

export default HomePage;
