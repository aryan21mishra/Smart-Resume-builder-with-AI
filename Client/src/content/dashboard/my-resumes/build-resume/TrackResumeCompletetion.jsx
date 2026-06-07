import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  RiAwardLine,
  RiBriefcaseLine,
  RiCheckLine,
  RiCodeSSlashLine,
  RiGlobalLine,
  RiGraduationCapLine,
  RiStarLine,
  RiUser3Line,
} from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TrackResumeCompletion = () => {
  const [resumeTracker, setResumeTracker] = useState([
    {
      id: 1,
      value: "personal information",
      title: "Personal Information",
      path: "/dashboard/my-resumes/build-resume/personal-information",
      completed: true,
      icon: RiUser3Line,
    },
    {
      id: 2,
      value: "work experience",
      title: "Work Experience",
      path: "/dashboard/my-resumes/build-resume/experience",
      completed: true,
      icon: RiBriefcaseLine,
    },
    {
      id: 3,
      value: "education",
      title: "Education",
      path: "/dashboard/my-resumes/build-resume/education",
      completed: false,
      icon: RiGraduationCapLine,
    },
    {
      id: 4,
      value: "projects",
      title: "Projects",
      path: "/dashboard/my-resumes/build-resume/projects",
      completed: false,
      icon: RiCodeSSlashLine,
    },
    {
      id: 5,
      value: "skills",
      title: "Skills",
      path: "/dashboard/my-resumes/build-resume/skills",
      completed: false,
      icon: RiStarLine,
    },
    {
      id: 6,
      value: "certifications",
      title: "Certifications",
      path: "/dashboard/my-resumes/build-resume/certifications",
      completed: false,
      icon: RiAwardLine,
    },
  ]);
  const { pathname } = useLocation();

  // Find active step matching path to synchronize active highlight
  const currentActiveStep =
    resumeTracker.find((item) => item.path === pathname)?.value ||
    "personal information";

  useEffect(() => {
    setResumeTracker((prev) =>
      prev.map((item) =>
        item.path === pathname ? { ...item, completed: true } : item,
      ),
    );
  }, [pathname]);

  return (
    <div className="w-full max-w-[280px] h-full bg-zinc-950 border-r border-zinc-800 p-4 flex flex-col justify-between antialiased select-none">
      {/* Title Segment */}
      <div class="mb-6 px-2">
        <h3 class="text-xs font-bold uppercase tracking-widest text-zinc-400">
          Builder Pipeline
        </h3>
      </div>

      <Tabs value={currentActiveStep} className="w-full flex-1 bg-transparent">
        <TabsList className="bg-transparent h-auto p-0 flex flex-col items-start justify-start w-full relative space-y-1">
          {/* Timeline Connector Line Background */}
          <div className="absolute left-[23px] top-4 bottom-12 w-[1px] bg-zinc-800 pointer-events-none z-0" />

          {resumeTracker.map((item) => {
            const isActive = item.path === pathname;

            return (
              <TabsTrigger
                key={item.id}
                value={item.value}
                className={`
                  w-full z-10 flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg border text-left transition-all duration-200 group data-[state=active]:bg-zinc-900/50
                  ${
                    isActive
                      ? "border-zinc-700 bg-zinc-900"
                      : "border-transparent hover:bg-zinc-900/30"
                  }
                `}>
                <div className="flex items-center gap-3">
                  {/* Outer Step Indicator Ring */}
                  <div
                    className={`
                    w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 border text-[10px] font-mono
                    ${
                      item.completed
                        ? "bg-white border-white text-black font-bold"
                        : isActive
                          ? "border-white bg-transparent text-white"
                          : "border-zinc-700 bg-zinc-950 text-zinc-500 group-hover:border-zinc-500"
                    }
                  `}>
                    {item.completed ? (
                      <RiCheckLine
                        size={12}
                        strokeWidth={3}
                        className="text-black"
                      />
                    ) : (
                      <span>{item.id}</span>
                    )}
                  </div>

                  {/* Text labels */}
                  <div className="flex flex-col">
                    <span
                      className={`
                      text-xs font-medium tracking-wide transition-colors
                      ${isActive ? "text-white" : item.completed ? "text-zinc-300" : "text-zinc-500 group-hover:text-zinc-300"}
                    `}>
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Inline Structural Icon Indicator */}
                <item.icon
                  size={14}
                  className={`transition-colors ${isActive ? "text-white" : "text-zinc-600 group-hover:text-zinc-400"}`}
                />
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>

      {/* Modern Black & White Tip Block Element */}
      <div className="mt-6 border border-zinc-800 bg-zinc-900/20 p-3.5 rounded-xl space-y-2">
        <div className="flex items-center gap-1.5 text-white">
          <RiStarLine size={12} className="fill-white" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Optimization Pro-Tip
          </span>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Inject key active criteria patterns straight from target job listings
          inside sections to significantly maximize processing matching ratings.
        </p>
      </div>
    </div>
  );
};

export default TrackResumeCompletion;
