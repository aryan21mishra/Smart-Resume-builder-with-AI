import React from "react";
import { Skeleton } from "../ui/skeleton";

const OverallSumaryAndKeyStrengthSectionSkeleton = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
      <Skeleton className="h-3 w-28" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
        <Skeleton className="h-3 w-4/5" />
      </div>
    </div>
  );
};

export default OverallSumaryAndKeyStrengthSectionSkeleton;
