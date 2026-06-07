import React from "react";
import { Star } from "lucide-react";

const ReviewCard = ({ 
  name = "Raj Mehta", 
  role = "Software Engineer", 
  review = "As a career switcher, I wasn’t sure how to tailor my resume. This platform highlighted what to fix, suggested exactly how to rewrite it, and helped me get a real interview call.", 
  image = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  stars = 5
}) => {
  return (
    <div className="rounded-2xl border border-zinc-900/80 bg-[#09090c]/60 backdrop-blur-md p-6 text-zinc-300 transition-all duration-300 hover:border-violet-500/20 hover:bg-[#0c0c11]/85 shadow-lg relative group">
      
      {/* Small star rating row */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Review quote */}
      <p className="font-montserratRegular text-xs sm:text-sm leading-relaxed text-zinc-400 italic">
        "{review}"
      </p>

      {/* Profile summary line */}
      <div className="flex gap-3 items-center mt-5">
        <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-800 shadow-inner">
          <img
            src={image}
            loading="lazy"
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <p className="font-montserratMedium text-xs sm:text-sm text-white flex items-center gap-1.5">
            {name}
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" title="Verified User"></span>
          </p>
          <p className="font-montserratRegular text-[10px] sm:text-xs text-zinc-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
