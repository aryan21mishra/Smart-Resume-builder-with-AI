import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowRightLongLine, RiBardFill } from "@remixicon/react";
import { Sparkles, Eye, Check } from "lucide-react";
import { Button } from "../../components/ui";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../../assets/home/index";

export default function TemplateSection() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", name: "All Designs" },
    { id: "ats", name: "ATS Optimized" },
    { id: "creative", name: "Creative & Design" },
    { id: "minimal", name: "Minimalist Slate" },
  ];

  // Group images to represent visual sets
  const getImagesByTab = () => {
    switch (activeTab) {
      case "ats":
        return [Image2, Image3, Image7];
      case "creative":
        return [Image4, Image5, Image1];
      case "minimal":
        return [Image6, Image2, Image7];
      default:
        return [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
    }
  };

  const currentImages = getImagesByTab();
  // Ensure enough items for horizontal strip looping
  const doubledImages = [...currentImages, ...currentImages, ...currentImages];

  return (
    <section className="relative py-12 sm:py-20 overflow-hidden flex flex-col items-center justify-center w-full bg-[#050508]/10">
      {/* Background glow beams */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
        {/* Badge Indicator */}
        <div className="w-fit px-4 py-1.5 rounded-full bg-zinc-950/60 border border-zinc-900 text-zinc-300 flex items-center gap-2 mb-6 backdrop-blur-md">
          <RiBardFill className="text-violet-400" size={14} />
          <p className="font-montserratRegular text-xs tracking-wider uppercase">
            Professional Layouts
          </p>
        </div>

        {/* Header Text */}
        <div className="text-center space-y-4 max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-montserratExtraBold text-white tracking-tight leading-tight">
            Choose From Our Curated Collection
          </h2>
          <p className="text-sm md:text-base font-montserratRegular text-zinc-400 leading-relaxed">
            Crafted in collaboration with elite recruiters. Every template is
            engineered to balance visual hierarchy, margins, and section orders
            for maximum parsing accuracy.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex bg-[#09090c] p-1 rounded-xl border border-zinc-800 mb-12 max-w-md w-full sm:w-auto overflow-x-auto">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-montserratMedium rounded-lg transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-zinc-850 text-white shadow-sm border border-zinc-800/60"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}>
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Rotating Marquee Gallery */}
      <div className="-rotate-2 sm:-rotate-3 py-6 overflow-hidden w-full bg-[#07070a]/40 border-y border-zinc-900/40 relative group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#040406] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#040406] to-transparent z-20 pointer-events-none"></div>

        {/* Forward loop strip */}
        <div className="flex gap-4 w-max animate-horizontal-loop hover:[animation-play-state:paused] will-change-transform">
          {doubledImages.map((image, index) => (
            <div
              key={index}
              className="relative shrink-0 rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 w-36 sm:w-48 md:w-56 lg:w-64 h-[220px] sm:h-[300px] md:h-[340px] shadow-2xl transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1 group/card">
              <img
                src={image}
                alt={`template-${index}`}
                className="w-full h-full object-cover object-top opacity-80 group-hover/card:opacity-100 transition-opacity"
                loading="lazy"
              />
              {/* Overlay with CTA details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex flex-col justify-end p-4 text-left">
                <span className="text-[10px] text-violet-400 font-mono tracking-widest uppercase mb-1">
                  RECRUITER READY
                </span>
                <h4 className="text-white text-xs sm:text-sm font-montserratBold mb-3">
                  Professional Slate
                </h4>
                <Button
                  onClick={() => navigate("/dashboard/templates")}
                  className="h-7 text-[10px] font-montserratMedium bg-violet-600 hover:bg-violet-500 text-white rounded-md border-0! w-full">
                  <Eye size={12} className="mr-1" /> Use Template
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Primary Action Callout */}
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center mt-12 relative z-10">
        <Button
          onClick={() => navigate("/dashboard/templates")}
          variant="outline"
          className="text-zinc-350 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 px-6 py-5 rounded-xl text-sm font-montserratMedium transition active:scale-98 flex items-center gap-2">
          Browse All Templates
          <RiArrowRightLongLine size={16} />
        </Button>
      </div>
    </section>
  );
}
