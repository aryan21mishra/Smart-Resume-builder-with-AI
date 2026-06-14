import React from "react";
import { useForm } from "react-hook-form";
import { RiCheckLine } from "@remixicon/react";
import FormField from "@/components/common/FormField";
import { Button } from "@/components/ui";
import { useDispatch, useSelector } from "react-redux";
import { addProject, updateProject, selectResumes } from "@/redux/resumes/resumeSlice";
const ProjectForm = ({ setActiveTab, editIndex, setEditIndex }) => {
  const dispatch = useDispatch();
  const projects = useSelector(selectResumes)?.projects || [];
  const projectData = editIndex !== null && editIndex !== undefined ? (projects[editIndex] || {}) : {};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    values: projectData
  });

  const currentlyWorking = watch("currentlyWorking");
  const onSubmit = (data) => {
    if (editIndex !== null && editIndex !== undefined) {
      dispatch(updateProject({ index: editIndex, data }));
    } else {
      dispatch(addProject(data));
    }
    setEditIndex?.(null);
    setActiveTab?.("list");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 px-5 py-4">
      {/* Project Name */}
      <FormField
        label="Project Name"
        placeholder="e.g. AI Resume Builder"
        {...register("name", {
          required: "Project name is required.",
        })}
        errors={errors}
        name="name"
      />
      {/* Description */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-500 font-montserratSemiBold">
          Description
        </label>
        <textarea
          rows={5}
          placeholder="Describe your project, achievements, features, impact..."
          className="w-full bg-[#121212] border border-white/10 text-white placeholder-white/20 rounded-xl p-4 focus:border-white focus:ring-0 focus:outline-none text-sm transition font-montserratRegular"
          {...register("description")}
        />
        <p className="text-[10px] text-white/40 leading-relaxed">
          💡 Highlight impact, technologies used, and what problem it solves.
        </p>
      </div>
      {/* URLs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <FormField
            label="Live Project URL"
            placeholder="https://yourproject.com"
            {...register("url")}
            errors={errors}
            name="url"
          />
        </div>

        <div className="relative">
          <FormField
            label="Repository URL"
            placeholder="https://github.com/username/project"
            {...register("repoUrl")}
            errors={errors}
            name="repoUrl"
          />
        </div>
      </div>
      {/* Tech Stack */}
      <FormField
        label="Tech Stack"
        placeholder="React, Node.js, MongoDB, Tailwind CSS"
        {...register("tech")}
        errors={errors}
        name="tech"
      />
      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Start Date"
          type="month"
          {...register("startDate")}
          errors={errors}
          name="startDate"
        />
        {!currentlyWorking && (
          <FormField
            label="End Date"
            type="month"
            {...register("endDate")}
            errors={errors}
            name="endDate"
          />
        )}
      </div>

      {/* Current Project */}
      <div className="flex items-center gap-2 py-1">
        <input
          type="checkbox"
          id="currentlyWorking"
          {...register("currentlyWorking")}
          className="w-4 h-4 rounded border-white/10 bg-[#121212] text-[#e8b86d] focus:ring-[#e8b86d]/50 focus:ring-1 focus:ring-offset-0 focus:outline-none"
        />

        <label
          htmlFor="currentlyWorking"
          className="text-xs text-white/80 font-montserratMedium cursor-pointer select-none">
          Currently working on this project
        </label>
      </div>

      {/* Actions */}
      <div className="flex justify-end w-full gap-4 pt-2">
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="flex justify-center items-center gap-2 py-3! px-6! rounded-xl font-montserratBold text-sm tracking-wide transition cursor-pointer">
          <RiCheckLine size={16} />
          Save Project
        </Button>

        <Button
          type="button"
          variant="default"
          size="lg"
          className="border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3! px-6! rounded-xl font-montserratMedium text-sm tracking-wide transition cursor-pointer"
          onClick={() => {
            setEditIndex?.(null);
            setActiveTab?.("list");
          }}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;
