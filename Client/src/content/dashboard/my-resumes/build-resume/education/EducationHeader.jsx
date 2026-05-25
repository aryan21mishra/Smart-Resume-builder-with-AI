import { Button } from "@/components/ui";
import React from "react";

const EducationHeader = () => {
  return (
    <div className="w-full px-5 py-6 border border-white/10 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-montserratBold tracking-wider ">
          Tell Us About Your Education
        </h1>
        <p className="text-sm text-gray-400 font-montserratMedium">
          Include your higher education details, including degree, courses, and
          institution.
        </p>
      </div>
    </div>
  );
};

export default EducationHeader;
