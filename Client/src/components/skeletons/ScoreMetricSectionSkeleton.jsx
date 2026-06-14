import React from "react";
import { Skeleton } from "../ui/skeleton";

const ScoreMetricSkeleton = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6">
      <Skeleton className="h-3 w-24" />
      <div className="grid grid-cols-2 gap-4 border-b border-zinc-800 pb-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <Skeleton className="h-10 w-16" />
            <Skeleton className="h-2 w-12" />
          </div>
        ))}
      </div>
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Skeleton className="h-2 w-24" />
            <Skeleton className="h-2 w-6" />
          </div>
          <div className="w-full bg-zinc-800 h-1 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Skeleton className="h-2 w-28" />
            <Skeleton className="h-2 w-6" />
          </div>
          <div className="w-full bg-zinc-800 h-1 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Skeleton className="h-2 w-32" />
            <Skeleton className="h-2 w-6" />
          </div>
          <div className="w-full bg-zinc-800 h-1 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ScoreMetricSkeleton;
