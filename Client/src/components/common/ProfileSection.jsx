import React from "react";

const ProfileSection = ({ title, children, para }) => {
  return (
    <div className="border border-white/10 rounded-xl">
      <div className="py-4.5 px-6 border-b border-white/10 flex items-start flex-col gap-1">
        <div className="text-sm font-montserratRegular text-white">{title}</div>
        <div className="text-xs font-montserratRegular text-[#fffff633]">
          {para}
        </div>
      </div>
      <div className="py-5 px-6">{children}</div>
    </div>
  );
};

export default ProfileSection;
