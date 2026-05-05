import {
  RiArrowRightLongLine,
  RiBardFill,
  RiCheckLine,
} from "@remixicon/react";
import React from "react";
import { Button } from "../../components/ui";

const HeroSection = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center h-full">
        <div
          className="w-fit px-7 py-3 rounded-4xl
        bg-white/5
        text-white flex items-center gap-2 mb-5">
          <RiBardFill />
          <p className="font-montserratRegular text-sm">
            ATS - Friendly Resumes That Get You Hired
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-white max-md:text-4xl md:text-7xl font-montserratBold text-center">
            Build Better Resumes.
          </h1>
          <h1 className="text-white max-md:text-4xl md:text-7xl font-montserratBold text-center">
            Get More Interviews.
          </h1>
        </div>

        <p className="text-white/60 mt-2  font-montserratRegular text-lg max-w-[672px] text-center mt-5">
          Create professional resumes, check ATS score, and match your resume to
          job descriptions - all in one place.
        </p>

        <div className="mt-10 flex gap-4">
          <Button
            variant="ghost"
            className=" bg-linear-to-r from-[#6C63FF] to-[#8B5CF6] text-white hover:opacity-90 flex gap-2 text-sm font-montserratRegular">
            Build Your Resume <RiArrowRightLongLine />
          </Button>

          <Button
            variant="outline"
            className="text-white text-sm font-montserratRegular">
            Check ATS Score
          </Button>
        </div>

        <ul className="grid grid-cols-3 gap-5 mt-11">
          {["ATS Optimized", "AI-Powered Analysis", "100% Free to Start"].map(
            (item, index) => (
              <li
                key={index}
                className="flex gap-2 font-montserratLight text-sm text-white items-center">
                <div className="w-7 h-7 rounded-full bg-white/40 flex items-center justify-center">
                  <RiCheckLine color="#0A062F" />
                </div>
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
