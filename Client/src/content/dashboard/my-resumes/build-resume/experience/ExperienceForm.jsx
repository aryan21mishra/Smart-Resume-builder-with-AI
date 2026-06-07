import React from "react";
import FormField from "@/components/common/FormField";
import { RiSparkling2Line, RiCheckLine } from "@remixicon/react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui";
import { useDispatch, useSelector } from "react-redux";
import { addExperience, updateExperience, selectResumes } from "@/redux/resumes/resumeSlice";
const ExperienceForm = ({ setActiveTab, editIndex, setEditIndex }) => {
  const dispatch = useDispatch();
  const experiences = useSelector(selectResumes)?.experiences || [];
  const experienceData = editIndex !== null && editIndex !== undefined ? (experiences[editIndex] || {}) : {};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    values: experienceData
  });

  // Fix #4 — watch isCurrent to conditionally disable/require End Date
  const currentlyWorkHere = watch("currentlyWorkHere");
  const onSubmit = (data) => {
    if (editIndex !== null && editIndex !== undefined) {
      dispatch(updateExperience({ index: editIndex, data }));
    } else {
      dispatch(addExperience(data));
    }
    setEditIndex?.(null);
    setActiveTab("list");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 px-5 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Job Title"
          placeholder="e.g. Senior Software Engineer"
          {...register("jobTitle", { required: "Job title is required." })}
          errors={errors}
          name="jobTitle"
        />

        <FormField
          label="Company / Employer"
          placeholder="e.g. Google"
          {...register("company", {
            required: "Company/employer is required.",
          })}
          errors={errors}
          name="company"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Location"
          placeholder="e.g. New York, NY"
          {...register("location", { required: "Location is required." })}
          errors={errors}
          name="location"
        />

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-500 font-montserratSemiBold">
            Employment Type
          </label>
          <select
            {...register("jobType")}
            className="w-full bg-[#121212] border border-white/10 text-white rounded-xl p-3 focus:border-white focus:ring-0 focus:outline-none text-sm transition h-11">
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Start Date"
          type="month"
          {...register("startDate", { required: "Start date is required." })}
          errors={errors}
          name="startDate"
        />

        {!currentlyWorkHere && (
          <FormField
            label="End Date"
            type="month"
            {...register("endDate", { required: "End date is required." })}
            errors={errors}
            name="endDate"
          />
        )}
      </div>

      <div className="flex items-center gap-2 py-1">
        <input
          type="checkbox"
          id="currentlyWorkHere"
          {...register("currentlyWorkHere")}
          className="w-4 h-4 rounded border-white/10 bg-[#121212] text-[#e8b86d] focus:ring-[#e8b86d]/50 focus:ring-1 focus:ring-offset-0 focus:outline-none"
        />
        <label
          htmlFor="currentlyWorkHere"
          className="text-xs text-white/80 font-montserratMedium cursor-pointer select-none">
          I currently work here
        </label>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between items-center">
          <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-500 font-montserratSemiBold">
            Responsibilities & Achievements
          </label>
        </div>
        <textarea
          rows={6}
          placeholder="• Led a team of developers to build the core engine...\n• Decreased loading speed of main landing pages by 20%..."
          className="w-full bg-[#121212] border border-white/10 text-white placeholder-white/20 rounded-xl p-4 focus:border-white focus:ring-0 focus:outline-none text-sm transition font-montserratRegular"
          {...register("description")}
        />
        <p className="text-[10px] text-white/40 font-montserratRegular mt-0.5 leading-relaxed">
          💡 Tip: Use bullet points and action words (e.g. Led, Designed,
          Improved) for maximum impact.
        </p>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end w-full gap-4">
        <Button
          variant="default"
          size="lg"
          type="submit"
          className="flex justify-center items-center gap-2 py-3! px-6! rounded-xl font-montserratBold text-sm tracking-wide transition cursor-pointer">
          <RiCheckLine size={16} />
          Save Role
        </Button>
        <Button
          type="button"
          variant="default"
          size="lg"
          onClick={() => {
            setEditIndex?.(null);
            setActiveTab("list");
          }}
          className=" border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3! px-6! rounded-xl font-montserratMedium text-sm tracking-wide transition cursor-pointer">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ExperienceForm;
