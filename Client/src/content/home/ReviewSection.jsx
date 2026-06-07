import React from "react";
import ReviewCard from "../../components/common/ReviewCard";
import { Sparkles } from "lucide-react";

export default function ReviewSection() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Product Manager @ Stripe",
      review:
        "I uploaded my resume and got a compatibility score of 48%. After making the suggested keyword updates, I applied to Stripe and got an interview call within 4 days!",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "David Chen",
      role: "Frontend Architect",
      review:
        "The live builder is lightning-fast. The autosave checkpoints saved me during a local browser crash. Easily the best resume suite on the market.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Amira Patel",
      role: "Data Scientist @ Amazon",
      review:
        "The AI recruiter audit helped me quantify my metrics. Changing passive descriptions to active ones boosted my ATS match rank from 62 to 94.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "James O'Connor",
      role: "DevOps Engineer",
      review:
        "The job matcher was a lifesaver. It pinpointed critical missing terms like Kubernetes and Terraform. Re-coded my profile and landed the interview.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Elena Rostova",
      role: "Product Designer",
      review:
        "Elegant, minimalist templates. The PDF print engine is outstanding — layout scales properly and margins stay perfectly calibrated.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&auto=format&fit=crop",
      stars: 5,
    },
    {
      name: "Marcus Aurelius",
      role: "Backend Engineer",
      review:
        "Clean user interface and powerful prompt engineering suggestions. Rephrased my AWS bullet points and immediately noticed better traction.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop",
      stars: 5,
    },
  ];

  // Double array for looping animation
  const col1 = [...testimonials, ...testimonials];
  const col2 = [...testimonials.reverse(), ...testimonials];
  const col3 = [...testimonials, ...testimonials];

  return (
    <section className="w-full py-12 sm:py-20 bg-[#050508]/15 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="w-fit px-4 py-1.5 rounded-full bg-zinc-950/60 border border-zinc-900 text-zinc-300 flex items-center gap-2 backdrop-blur-md">
            <Sparkles size={14} className="text-fuchsia-400" />
            <p className="font-montserratRegular text-xs tracking-wider uppercase">
              User Testimonials
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserratExtraBold text-white tracking-tight leading-tight">
            What Our Users Say
          </h2>
          <p className="text-sm md:text-base font-montserratRegular text-zinc-400 leading-relaxed">
            See how job-seekers worldwide are leveraging our AI workspace to
            revamp their profiles and capture interviews.
          </p>
        </div>

        {/* Testimonials Loop Showcase */}
        <div className="relative w-full max-w-5xl mx-auto mt-12 h-[520px] overflow-hidden rounded-2xl border border-zinc-900/60 bg-[#07070a]/20">
          {/* Top/Bottom Fade Gradients */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#040406] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#040406] to-transparent z-20 pointer-events-none"></div>

          {/* Testimonial Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6 h-full relative">
            {/* Column 1 - Forward animation */}
            <div className="relative h-full overflow-hidden">
              <div className="flex flex-col gap-6 animate-vertical-loop will-change-transform">
                {col1.map((item, idx) => (
                  <ReviewCard
                    key={`col1-${idx}`}
                    name={item.name}
                    role={item.role}
                    review={item.review}
                    image={item.image}
                    stars={item.stars}
                  />
                ))}
              </div>
            </div>

            {/* Column 2 - Reverse animation (Hidden on mobile) */}
            <div className="relative h-full overflow-hidden hidden md:block">
              <div className="flex flex-col gap-6 animate-vertical-loop-reverse will-change-transform">
                {col2.map((item, idx) => (
                  <ReviewCard
                    key={`col2-${idx}`}
                    name={item.name}
                    role={item.role}
                    review={item.review}
                    image={item.image}
                    stars={item.stars}
                  />
                ))}
              </div>
            </div>

            {/* Column 3 - Forward animation with offset (Hidden on mobile/tablet) */}
            <div className="relative h-full overflow-hidden hidden lg:block">
              <div className="flex flex-col gap-6 animate-vertical-loop will-change-transform [animation-delay:-4s]">
                {col3.map((item, idx) => (
                  <ReviewCard
                    key={`col3-${idx}`}
                    name={item.name}
                    role={item.role}
                    review={item.review}
                    image={item.image}
                    stars={item.stars}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
