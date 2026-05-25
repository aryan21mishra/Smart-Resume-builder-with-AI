import React from "react";
import { useForm } from "react-hook-form";
import FormField from "@/components/common/FormField";
import { Button } from "@/components/ui";

const CertificationForm = ({ setActiveTab }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const noExpiry = watch("noExpiry");

  const onSubmit = (data) => {
    console.log(data);

    setActiveTab?.("list");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 px-5 py-4">
      {/* Certification Name */}
      <div className="relative">
        <FormField
          label="Certification Name"
          placeholder="e.g. AWS Certified Developer Associate"
          {...register("name", {
            required: "Certification name is required.",
          })}
          errors={errors}
          name="name"
        />
      </div>

      {/* Issuer */}
      <div className="relative">
        <FormField
          label="Issuing Organization"
          placeholder="e.g. Amazon Web Services"
          {...register("issuer")}
          errors={errors}
          name="issuer"
        />
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Issue Date"
          type="month"
          {...register("issueDate")}
          errors={errors}
          name="issueDate"
        />

        {!noExpiry && (
          <FormField
            label="Expiry Date"
            type="month"
            {...register("expiryDate")}
            errors={errors}
            name="expiryDate"
          />
        )}
      </div>

      {/* No Expiry */}
      <div className="flex items-center gap-2 py-1">
        <input
          type="checkbox"
          id="noExpiry"
          {...register("noExpiry")}
          className="w-4 h-4 rounded border-white/10 bg-[#121212] text-[#e8b86d] focus:ring-[#e8b86d]/50 focus:ring-1 focus:ring-offset-0 focus:outline-none"
        />

        <label
          htmlFor="noExpiry"
          className="text-xs text-white/80 font-montserratMedium cursor-pointer select-none">
          This certification does not expire
        </label>
      </div>

      {/* Credential ID */}
      <FormField
        label="Credential ID"
        placeholder="e.g. AWS-DEV-2025-001"
        {...register("credentialId")}
        errors={errors}
        name="credentialId"
      />

      {/* URL */}
      <div className="relative">
        <FormField
          label="Credential URL"
          placeholder="https://credential.net/..."
          {...register("url")}
          errors={errors}
          name="url"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end w-full gap-4 pt-2">
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="flex justify-center items-center gap-2 py-3! px-6! rounded-xl font-montserratBold text-sm tracking-wide transition cursor-pointer">
          Save Certification
        </Button>

        <Button
          type="button"
          variant="default"
          size="lg"
          onClick={() => setActiveTab?.("list")}
          className="border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3! px-6! rounded-xl font-montserratMedium text-sm tracking-wide transition cursor-pointer">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default CertificationForm;
