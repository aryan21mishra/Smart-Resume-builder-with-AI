import React from "react";
import { Skeleton } from "../ui/skeleton";
const RequiredImprovementsSectionSkeleton = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-zinc-800">
        <Skeleton className="h-3 w-36" />
      </div>
      <div className="divide-y divide-zinc-800 bg-zinc-950/40 p-6 space-y-6">
        <div className="flex items-start gap-4 pt-2">
          <Skeleton className="h-4 w-6" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
        <div className="flex items-start gap-4 pt-6">
          <Skeleton className="h-4 w-6" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiredImprovementsSectionSkeleton;
