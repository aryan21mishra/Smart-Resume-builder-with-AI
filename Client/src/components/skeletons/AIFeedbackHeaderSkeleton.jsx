import React from "react";
import { Skeleton } from "../ui/skeleton";

const AIFeedbackHeaderSkeleton = () => {
  return (
    <>
      <div className="w-full md:w-2/3 space-y-4">
        <h1 className="text-xl font-bold tracking-tight text-white">
          AI Resume Analyzer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <Skeleton className={"h-10"} key={index} />
          ))}
        </div>
      </div>
      <button className="w-full md:w-auto px-6 py-3 bg-zinc-800 text-zinc-500 font-semibold text-sm rounded-lg flex items-center justify-center gap-2 tracking-wide">
        <svg
          className="animate-spin h-4 w-4 text-zinc-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Analyzing...</span>
      </button>
    </>
  );
};

export default AIFeedbackHeaderSkeleton;
