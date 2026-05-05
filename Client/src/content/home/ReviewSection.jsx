import React from "react";
import ReviewCard from "../../components/common/ReviewCard";

const ReviewSection = () => {
  return (
    <section className="w-full py-10 ">
      <h1 className="font-montserratBold text-5xl text-center text-[#fafafa]">
        What our users say
      </h1>
      <p className="text-base text-center font-montserratRegular text-[#fafafa]">
        See what our customers have to say about us.
      </p>
      <div className="relative w-full px-52">
        {/* Clean fade mask — no blur */}
        <div
          className="absolute top-0 w-full left-0 z-10 pointer-events-none
                  bg-[linear-gradient(180deg,#000_0%,transparent_20%,transparent_80%,#000_100%)]
                  h-[700px]"
        />

        <div className="grid grid-cols-3 gap-6 mt-10 h-full">
          {/* Column 1 — forward */}
          <div className="relative h-[700px] overflow-hidden">
            <div className="flex flex-col gap-5 animate-vertical-loop will-change-transform">
              {[...Array(2)].flatMap((_, gi) =>
                Array.from({ length: 7 }).map((_, i) => (
                  <ReviewCard key={`${gi}-${i}`} />
                )),
              )}
            </div>
          </div>

          {/* Column 2 — reverse, offset -2s */}
          <div className="relative h-[700px] overflow-hidden">
            <div className="flex flex-col gap-5 animate-vertical-loop-reverse will-change-transform [animation-delay:'-2s']">
              {[...Array(2)].flatMap((_, gi) =>
                Array.from({ length: 7 }).map((_, i) => (
                  <ReviewCard key={`${gi}-${i}`} />
                )),
              )}
            </div>
          </div>

          {/* Column 3 — forward, offset -4s */}
          <div className="relative h-[700px] overflow-hidden">
            <div className="flex flex-col gap-5 animate-vertical-loop will-change-transform [animation-delay:'-4s']">
              {[...Array(2)].flatMap((_, gi) =>
                Array.from({ length: 7 }).map((_, i) => (
                  <ReviewCard key={`${gi}-${i}`} />
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
