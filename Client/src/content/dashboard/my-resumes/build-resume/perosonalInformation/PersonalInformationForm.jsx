import React from "react";
import FormField from "@/components/common/FormField";
import { Button } from "@/components/ui";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, selectResumes } from "@/redux/resumes/resumeSlice";
import { useNavigate } from "react-router-dom";
const PersonalInformationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resume = useSelector(selectResumes);
  const personalInformation = resume?.personalInformation || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: personalInformation
  });
  const onSubmit = (data) => {
    dispatch(updateForm({ field: "personalInformation", data }));
    navigate("/dashboard/my-resumes/build-resume/experience");
  };
  return (
    <div className="w-full px-5 py-5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="First Name"
            placeholder="e.g. John"
            name="firstName"
            {...register("firstName", { required: "First name is required." })}
            errors={errors}
          />
          <FormField
            label="Last Name"
            placeholder="e.g. Doe"
            name="lastName"
            {...register("lastName")}
            errors={errors}
          />
        </div>

        <FormField
          label="Headline"
          placeholder="e.g. Senior Frontend Developer"
          name="headline"
          {...register("headline")}
          errors={errors}
        />

        <FormField
          label="Phone"
          placeholder="+1 555 555 5555"
          name="phone"
          {...register("phone")}
          errors={errors}
        />

        <FormField
          label="Email"
          placeholder="[EMAIL_ADDRESS]"
          name="email"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address.",
            },
          })}
          errors={errors}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Country"
            placeholder="e.g. USA"
            name="country"
            {...register("country")}
            errors={errors}
          />
          <FormField
            label="City"
            placeholder="e.g. New York"
            name="city"
            {...register("city")}
            errors={errors}
          />
        </div>

        <FormField
          label="Portfolio URL (Optional)"
          placeholder="https://portfolio.com"
          name="portfolioUrl"
          {...register("portfolioUrl")}
          errors={errors}
        />

        <FormField
          label="LinkedIn URL (Optional)"
          placeholder="https://linkedin.com/in/..."
          name="linkedinUrl"
          {...register("linkedinUrl")}
          errors={errors}
        />

        {/* Actions */}
        <div className="flex justify-end w-full gap-4 pt-2">
          <Button
            type="submit"
            variant="default"
            size="lg"
            className="flex justify-center items-center gap-2 py-3! px-6! rounded-xl font-montserratBold text-sm tracking-wide transition cursor-pointer">
            Save Personal Information
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformationForm;
