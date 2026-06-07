export function SingleResumeSkeleton() {
  return (
    <div className="flex-1 flex overflow-hidden h-full">
      {/* Left Sidebar Skeleton */}
      <div className="w-80 border-r border-zinc-900 bg-zinc-950 p-6 flex flex-col gap-6 hidden md:flex">
        <div>
          <div className="h-3 w-24 bg-zinc-900 animate-pulse rounded mb-4" />
          <div className="h-14 w-full bg-zinc-900/60 animate-pulse rounded-xl mb-2" />
          <div className="h-14 w-full bg-zinc-900/60 animate-pulse rounded-xl" />
        </div>
        <hr className="border-zinc-900" />
        <div>
          <div className="h-3 w-20 bg-zinc-900 animate-pulse rounded mb-3" />
          <div className="h-16 w-full bg-zinc-900/40 animate-pulse rounded-xl" />
        </div>
      </div>

      {/* Right Canvas Page Sheet Mock Skeleton */}
      <div className="flex-1 bg-zinc-900/30 p-4 md:p-8 overflow-y-auto flex justify-center items-start">
        <div className="w-full max-w-[816px] aspect-[1/1.4142] bg-zinc-900/40 border border-zinc-900/60 p-12 rounded-sm animate-pulse flex flex-col gap-6">
          <div className="h-8 w-48 bg-zinc-800 rounded" />
          <div className="h-3 w-72 bg-zinc-800/60 rounded mb-4" />

          <div className="space-y-2">
            <div className="h-4 w-full bg-zinc-800/80 rounded" />
            <div className="h-4 w-full bg-zinc-800/80 rounded" />
            <div className="h-4 w-3/4 bg-zinc-800/80 rounded" />
          </div>

          <div className="h-px bg-zinc-900 w-full my-4" />
          <div className="h-5 w-32 bg-zinc-800 rounded" />

          <div className="space-y-2">
            <div className="h-4 w-full bg-zinc-800/60 rounded" />
            <div className="h-4 w-5/6 bg-zinc-800/60 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
