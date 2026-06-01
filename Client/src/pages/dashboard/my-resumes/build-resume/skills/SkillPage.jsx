import SkillsForm from "@/content/dashboard/my-resumes/build-resume/skills/SkillsForm";
import SkillsHeader from "@/content/dashboard/my-resumes/build-resume/skills/SkillsHeader";
import React from "react";

const SkillPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <SkillsHeader />
      <SkillsForm />
    </div>
  );
};

export default SkillPage;
