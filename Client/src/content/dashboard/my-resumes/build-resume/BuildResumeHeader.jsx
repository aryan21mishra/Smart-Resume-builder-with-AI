import { Button } from "@/components/ui";
import {
  RiArrowLeftLongLine,
  RiCheckboxCircleLine,
  RiDownloadLine,
  RiEyeLine,
  RiPencilLine,
} from "@remixicon/react";
import React from "react";

const BuildResumeHeader = () => {
  return (
    <div className="w-full px-4 py-5  flex justify-between items-center gap-3 border-b border-white/10">
      <div className="flex gap-3">
        <div className="flex items-center gap-3 ">
          <RiArrowLeftLongLine size={14} />
          <p className="text-sm font-montserratRegular max-md:hidden">
            All Resumes
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          <div className="flex gap-2 items-center">
            <p className="font-montserratRegular text-sm max-md:text-xs whitespace-nowrap">
              Software Engineer Resume
            </p>
            <RiPencilLine size={14} />
          </div>
          <div className="flex gap-2 max-md:gap-1 items-center">
            <RiCheckboxCircleLine size={14} color={"#e8b86d"} />
            <p className="font-montserratRegular text-sm max-md:text-xs">
              Saved a few seconds ago
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 max-md:gap-1 flex-wrap">
        <Button size="lg">
          <RiEyeLine size={12} />
          <p className="max-md:hidden text-sm">Preview</p>
        </Button>
        <Button size="lg">
          <RiDownloadLine size={12} />
          <p className="max-md:hidden text-sm">Download</p>
        </Button>
        <Button size="lg">
          Save <span className="max-md:hidden">& Continue</span>
        </Button>
      </div>
    </div>
  );
};

export default BuildResumeHeader;
