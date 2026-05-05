import React from "react";
import Image from "../../components/common/Image";
import { RiArrowRightLongLine, RiBardFill } from "@remixicon/react";
import { Button } from "../../components/ui";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../../assets/home/index";
import MarqueeGallery from "../../components/MarQueeGallery";
const TemplateSection = () => {
  const IMAGES = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  const DOUBLED = [...IMAGES, ...IMAGES];
  return (
    <section className=" flex flex-col items-center justify-center overflow-hidden">
      <div
        className="w-fit px-7 py-3 rounded-4xl
        bg-white/5
        text-white flex items-center gap-2 mb-5">
        <RiBardFill />
        <p className="font-montserratRegular text-sm">Professional Templates</p>
      </div>
      <div className=" ">
        <div className="flex flex-col items-center justify-center transform-none">
          <div className="text-5xl font-montserratExtraBold text-center text-white flex items-center justify-center gap-2 ">
            Choose from our diverse collection
          </div>
          <p className="text-base font-montserratExtraLight text-white text-center mt-2 max-w-212">
            Our AI-powered platform makes it easy to optimize your resume for
            any job in just three simple steps.Professional templates designed
            to highlight your strengths and catch the recruiter's eye. Each
            template is optimized for ATS systems and crafted with care.
          </p>
        </div>
      </div>{" "}
      <div className="-rotate-2 sm:-rotate-3 py-12 overflow-hidden w-full">
        <MarqueeGallery />
      </div>
      <Button
        variant="outline"
        className="text-white text-sm font-montserratRegular mt-5">
        Browse all templates
        <RiArrowRightLongLine />{" "}
      </Button>
    </section>
  );
};

export default TemplateSection;
