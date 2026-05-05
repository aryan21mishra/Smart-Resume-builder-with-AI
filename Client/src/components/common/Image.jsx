import React from "react";

const Image = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  );
};

export default Image;
