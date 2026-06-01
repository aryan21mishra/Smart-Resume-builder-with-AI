import React from "react";
import { Skeleton } from "../ui/skeleton";

const KeyWordAnalysisSectionSkeleton = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
      <Skeleton className="h-3 w-32" />
      <div className="space-y-2 pt-2">
        <Skeleton className="h-2 w-20" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-14" />
        </div>
      </div>
    </div>
  );
};

export default KeyWordAnalysisSectionSkeleton;
