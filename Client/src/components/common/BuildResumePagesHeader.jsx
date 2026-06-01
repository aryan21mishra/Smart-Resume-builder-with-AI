import React from "react";

const BuildResumePagesHeader = ({ heading, para }) => {
  return (
    <div className="w-full px-5 py-6 border border-white/10 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-montserratBold tracking-wider ">
          {heading}
        </h1>
        <p className="text-sm text-gray-400 font-montserratMedium">{para}</p>
      </div>
    </div>
  );
};

export default BuildResumePagesHeader;
