import React from "react";
import TrackResumeCompletetion from "../../../../content/dashboard/my-resumes/build-resume/TrackResumeCompletetion";
import { Outlet } from "react-router-dom";
import BuildResumeHeader from "@/content/dashboard/my-resumes/build-resume/BuildResumeHeader";

const BuildResumePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-black text-white">
      <BuildResumeHeader />
      <div className="flex-1 flex flex-row w-full min-h-0">
        {/* <TrackResumeCompletetion /> */}
        <div className="flex-1 overflow-y-auto min-h-0 flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BuildResumePage;
