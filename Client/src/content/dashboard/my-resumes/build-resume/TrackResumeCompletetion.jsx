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

const TrackResumeCompletetion = () => {
  const [resumeTracker, setResumeTracker] = useState([
    {
      id: 1,
      value: "personal information",
      title: "Presonal Information",
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
    {
      id: 7,
      value: "language",
      title: "Language",
      path: "/dashboard/my-resumes/build-resume/languages",
      completed: false,
      icon: RiGlobalLine,
    },
  ]);
  const { pathname } = useLocation();

  useEffect(() => {
    setResumeTracker((prev) =>
      prev.map((item) =>
        item.path === pathname ? { ...item, completed: true } : item,
      ),
    );
  }, [pathname]);

  console.log(resumeTracker);

  return (
    <div className="border-r border-white/10 py-3 px-3 w-full h-full">
      <Tabs
        defaultValue="personal information"
        className="max-w-fit! w-full! h-full bg-black! max-lg:mt-2 border-r border-white/10">
        <TabsList className="max-lg:max-w-20 h-full gap-4 max-lg:gap-1 flex-col justify-start items-start w-full!">
          {resumeTracker.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.value}
              disabled={item.completed}
              className="flex gap-2 max-lg:gap-1 max-lg:flex-col">
              <item.icon
                size={20}
                className={`${item.completed ? "text-[#e8b86d]" : "text-white"}`}
              />
              <p
                className={`text-sm font-montserratMedium text-white max-lg:text-[8px] max-lg:whitespace-break-spaces`}>
                {item.title}
              </p>
              {item.completed && (
                <RiCheckLine size={20} className="text-[#e8b86d]" />
              )}
            </TabsTrigger>
          ))}
          <div className="bg-white/10 p-2 rounded-xs max-w-[230px]">
            <p className="text-sm font-montserratRegular">
              <span className="font-montserratBold">Tip: </span>
              Add keywords from the job description to make your resume stand
              out.
            </p>
          </div>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TrackResumeCompletetion;
