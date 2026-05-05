import React from "react";

const TemplateSVG = () => {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-5">
      <rect
        x="2"
        y="2"
        width="5"
        height="7"
        rx="1"
        stroke="currentColor"
        stroke-width="1.3"></rect>
      <rect
        x="9"
        y="2"
        width="5"
        height="7"
        rx="1"
        stroke="currentColor"
        stroke-width="1.3"></rect>
      <path
        d="M2 13h12"
        stroke="currentColor"
        stroke-width="1.3"
        stroke-linecap="round"></path>
    </svg>
  );
};

export default TemplateSVG;
