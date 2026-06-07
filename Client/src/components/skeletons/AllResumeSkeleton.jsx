import { RiLoader4Line } from "@remixicon/react";

export const AllResumeSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[350px]">
      {/* Replace RiLoader4Line with whatever spinner icon you use */}
      <RiLoader4Line size={50} className="text-zinc-500 animate-spin mb-3" />
      <p className="text-zinc-400  text-xl tracking-widest uppercase font-montserratBold animate-pulse">
        Loading Your Resumes...
      </p>
    </div>
  );
};

export default AllResumeSkeleton;
