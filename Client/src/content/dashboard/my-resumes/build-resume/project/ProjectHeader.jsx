import React from "react";

const ProjectHeader = () => {
  return (
    <div className="w-full px-5 py-6 border border-white/10 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-montserratBold tracking-wider ">
          Tell Us About Your Projects
        </h1>
        <p className="text-sm text-gray-400 font-montserratMedium">
          Showcase your best work and technical projects.
        </p>
      </div>
    </div>
  );
};

export default ProjectHeader;
