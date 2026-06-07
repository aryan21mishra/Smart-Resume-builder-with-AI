import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import FormField from "@/components/common/FormField";
import { Button } from "@/components/ui";
import { updateForm, selectResumes } from "@/redux/resumes/resumeSlice";
import { useNavigate } from "react-router-dom";

const SkillsForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resume = useSelector(selectResumes);
  const skillsData = Array.isArray(resume?.skills) ? (resume?.skills[0] || {}) : (resume?.skills || {});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: skillsData
  });

  const onSubmit = (data) => {
    dispatch(updateForm({ field: "skills", data }));
    navigate("/dashboard/my-resumes/build-resume/certifications");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
      <FormField
        label="Technical Skills"
        placeholder="React, Node.js, MongoDB"
        {...register("technical")}
        errors={errors}
        name="technical"
      />

      <FormField
        label="Soft Skills"
        placeholder="Leadership, Communication, Teamwork"
        {...register("soft")}
        errors={errors}
        name="soft"
      />

      <FormField
        label="Languages"
        placeholder="English, Hindi"
        {...register("languages")}
        errors={errors}
        name="languages"
      />

      <FormField
        label="Tools"
        placeholder="Git, Docker, Postman"
        {...register("tools")}
        errors={errors}
        name="tools"
      />
      <div className="col-start-2 flex justify-end">
        <Button
          type="submit"
          className="bg-[#e8b86d] hover:bg-[#e8b86d]/90 text-black rounded-xl py-3 font-semibold">
          Save Skills
        </Button>
      </div>
    </form>
  );
};

export default SkillsForm;
