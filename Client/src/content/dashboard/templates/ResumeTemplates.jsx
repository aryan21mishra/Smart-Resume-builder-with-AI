import React, { useState } from "react";
import {
  RiLayoutGridLine,
  RiFilePaperLine,
  RiCheckLine,
  RiArrowRightLine,
  RiSparklingLine,
} from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui";
import { useDispatch } from "react-redux";
import { updateForm } from "@/redux/resumes/resumeSlice";

const ResumeTemplates = () => {
  // Local state tracking which template layout structure is actively selected
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateHandler = () => {
    dispatch(updateForm({ field: "template", data: selectedTemplate }));
    navigate("/dashboard/my-resumes/build-resume/personal-information");
  };

  const templatesList = [
    {
      id: "classic",
      title: "Classic Template",
      description:
        "Traditional, elegant serif typography tailored for banking, legal, corporate positions, and rigorous academic tracks.",
      tags: ["Serif Font", "High Density", "Academic / Corporate"],
      difficulty: "ATS Safe",
    },
    {
      id: "modern",
      title: "Modern Template",
      description:
        "Clean sans-serif system with explicit structural balance, designed to excel in engineering, product management, and high-tech corporate roles.",
      tags: ["Sans-Serif", "Balanced Spacing", "SDE / Tech Product"],
      difficulty: "Highly Recommended",
    },
    {
      id: "minimal",
      title: "Minimal Template",
      description:
        "Stark, spacious layout format focusing purely on whitespace and bold typographic weight hierarchy for design and data science paths.",
      tags: ["Monochrome", "High Whitespace", "Creative / Analytics"],
      difficulty: "ATS Optimized",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 p-6 lg:p-12 antialiased selection:bg-white selection:text-black">
      {/* ====== HEADER CONTROL PANEL ====== */}
      <header className="max-w-6xl mx-auto mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-900 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <RiLayoutGridLine size={12} className="text-zinc-500" />
            <span className="font-montserratRegular text-[10px] tracking-widest uppercase text-zinc-500">
              Design Pipeline
            </span>
          </div>
          <h1 className="text-xl tracking-tight text-white font-montserratBold">
            Select Layout Skeleton
          </h1>
        </div>
        <div className="font-montserratRegular text-[10px] text-zinc-400 bg-zinc-900/40 border border-zinc-800 px-3 py-1.5 rounded-md flex items-center gap-2">
          <span>ACTIVE TEMPLATES: 03</span>
        </div>
      </header>

      {/* ====== TEMPLATE OPTIONS MATRIX GRID ====== */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {templatesList.map((tpl) => {
          const isSelected = selectedTemplate === tpl.id;

          return (
            <div
              key={tpl.id}
              onClick={() => setSelectedTemplate(tpl.id)}
              className={`
                group relative flex flex-col justify-between h-[380px] border rounded-xl p-6 transition-all duration-300 cursor-pointer text-left
                ${
                  isSelected
                    ? "border-white bg-zinc-900/40 shadow-[0_0_30px_rgba(255,255,255,0.02)]"
                    : "border-zinc-900 bg-zinc-900/10 hover:border-zinc-700 hover:bg-zinc-900/20"
                }
              `}>
              {/* Top Meta Area */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Miniature Blueprint Page Visual Concept */}
                  <div
                    className={`
                    w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300
                    ${isSelected ? "border-white bg-white text-black" : "border-zinc-800 bg-zinc-950 text-zinc-500 group-hover:border-zinc-600"}
                  `}>
                    <RiFilePaperLine size={18} />
                  </div>

                  {/* Active Radio Status Pin */}
                  <div
                    className={`
                    w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300
                    ${isSelected ? "border-white bg-white" : "border-zinc-800 bg-transparent"}
                  `}>
                    {isSelected && (
                      <RiCheckLine
                        size={12}
                        className="text-black stroke-[3]"
                      />
                    )}
                  </div>
                </div>

                {/* Typography Descriptive Stack */}
                <div className="space-y-1.5">
                  <h3 className="text-sm font-montserratBold text-white tracking-wide">
                    {tpl.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-montserratRegular leading-relaxed line-clamp-4">
                    {tpl.description}
                  </p>
                </div>
              </div>

              {/* Bottom Metadata & Badges Container */}
              <div className="space-y-4 pt-4 border-t border-zinc-900/80">
                <div className="flex flex-wrap gap-1">
                  {tpl.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-montserratRegular tracking-wide px-2 py-0.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] font-montserratRegular">
                  <span className="text-zinc-500 uppercase tracking-wider flex items-center gap-1">
                    <RiSparklingLine size={10} />
                    {tpl.difficulty}
                  </span>
                  <span
                    className={`
                    font-montserratBold uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${isSelected ? "text-white opacity-100" : "text-zinc-400"}
                  `}>
                    <span>Deploy</span>
                    <RiArrowRightLine size={10} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* ====== BOTTOM CONTROL STATE NOTICE ====== */}
      <footer className="max-w-6xl mx-auto mt-8 flex justify-end">
        <Button
          onClick={navigateHandler}
          variant="primary"
          className="px-6 py-2.5 bg-white text-black font-montserratSemiBold text-xs rounded-lg hover:bg-zinc-200 transition-colors tracking-wide flex items-center gap-2">
          <span>Proceed with Selected Layout</span>
          <RiArrowRightLine size={12} className="stroke-[2.5]" />
        </Button>
      </footer>
    </div>
  );
};

export default ResumeTemplates;
