import Image from "./common/Image";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../assets/home/index";
const IMAGES = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
const DOUBLED = [...IMAGES, ...IMAGES];

function ImageStrip({ reverse }) {
  return (
    <div
      className={`flex gap-3 w-max ${
        reverse ? "animate-horizontal-loop-reverse" : "animate-horizontal-loop"
      } hover:[animation-play-state:paused] will-change-transform`}>
      {DOUBLED.map((image, index) => (
        <div
          key={index}
          className="shrink-0 rounded-xl overflow-hidden
                     max-sm:w-36 sm:w-44 md:w-52 lg:w-60
                     ">
          <Image
            src={image}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeGallery() {
  return (
    <div className="-rotate-2 sm:-rotate-3 py-4 overflow-hidden w-full">
      <div className="mb-3">
        <ImageStrip reverse={false} />
      </div>
      <ImageStrip reverse={true} />
    </div>
  );
}
