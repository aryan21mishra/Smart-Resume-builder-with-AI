import React from "react";

const DashboardCard = ({ Icon, heading, para }) => {
  return (
    <div className="w-full px-5.5 py-5  rounded-3xl border border-white/10">
      <Icon />
    </div>
  );
};

export default DashboardCard;
