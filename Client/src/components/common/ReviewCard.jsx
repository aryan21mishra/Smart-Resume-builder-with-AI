import React from "react";

const ReviewCard = () => {
  return (
    <div className=" rounded-3xl border border-white/10 px-10.25 py-9.25 text-[#fafafa]">
      <p className="font-montserratRegular text-base ">
        As a career switcher, I wasn’t sure how to tailor my resume. Skillyst
        got me not only highlighted what to fix but suggested changes that made
        my resume stand out and get a real impact.
      </p>
      <div className="flex gap-3 items-center mt-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy"
            alt="user"
            srcset=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-montserratMedium text-base">Raj Metha</p>
          <p className="font-montserratRegular text-base">Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
