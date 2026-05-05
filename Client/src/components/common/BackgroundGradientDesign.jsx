import React from "react";

const BackgroundGradientDesign = () => {
  return (
    // Outer container clips the blobs and acts as the scene
    <div className="flex items-center justify-center flex-col w-full gap-2 ">
      {/* Blob 1 — purple to blue */}
      <div className="h-40 w-240 rounded-full bg-[linear-gradient(180deg,#9810FA_0%,#0084D1_100%)] blur-[96px]" />

      {/* Blob 2 — rose to gold — centered, slightly lower */}
      <div className="h-40 w-360 rounded-full bg-[linear-gradient(180deg,#861043_0%,#FDC700_100%)] blur-[96px]" />

      {/* Blob 3 — amber to sky — bottom right */}
      <div className="h-40 w-240 rounded-full bg-[linear-gradient(180deg,#D08700_0%,#00A6F4_100%)] blur-[96px]" />
    </div>
  );
};

export default BackgroundGradientDesign;
