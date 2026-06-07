import React from "react";
import FormField from "../../../components/common/FormField";
import { Label } from "@radix-ui/react-label";

const BasicInfoSection = ({ register, errors }) => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="mb-6">
        <h2 className="text-lg font-montserratBold text-zinc-100 flex items-center gap-2">
          <i className="ri-user-3-line text-blue-400"></i> Basic Information
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          This information appears on your public profile
        </p>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            {...register("firstName", {
              required: "First name is required.",
            })}
            errors={errors}
          />
          <FormField
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            {...register("lastName")}
            errors={errors}
          />
        </div>

        <div>
          <FormField
            label="Profession"
            name="professtion"
            type="text"
            placeholder="e.g. Senior Frontend Developer"
            {...register("professtion")}
            errors={errors}
          />
          <p className="text-[11px] mt-1.5 text-zinc-500 font-montserratRegular flex items-center gap-1.5">
            <i className="ri-briefcase-line"></i> Shown below your name on shared
            resumes
          </p>
        </div>

        {/* Enhanced Textarea for Bio */}
        <div>
          <label className="block text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2">
            Bio
          </label>
          <div className="relative focus-within:ring-2 focus-within:ring-blue-500/40 rounded-xl transition-all">
            <textarea
              placeholder="Tell us a little about yourself..."
              {...register("bio", {
                maxLength: { value: 200, message: "Max 200 characters" },
              })}
              className="border border-zinc-800 focus:border-zinc-700 rounded-xl p-3 w-full h-32 bg-zinc-950/60 text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all text-sm resize-none"
            />
          </div>
          <div className="flex justify-between items-center mt-1.5">
            {errors.bio ? (
              <p className="text-xs text-rose-400 font-medium">
                {errors.bio.message}
              </p>
            ) : (
              <p className="text-xs text-zinc-500 ml-auto">Max 200 characters</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            label="Location"
            name="location"
            type="text"
            placeholder="City, Country"
            {...register("location")}
            errors={errors}
          />
          <FormField
            label="Website"
            name="website"
            type="url"
            placeholder="https://yourportfolio.com"
            {...register("website")}
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoSection;
