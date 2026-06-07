import React from "react";
import FormField from "../../../components/common/FormField";

const ContactInfoSection = ({ register, errors }) => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="mb-6">
        <h2 className="text-lg font-montserratBold text-zinc-100 flex items-center gap-2">
          <i className="ri-contacts-book-line text-emerald-400"></i> Contact Information
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Used to automatically pre-fill your future resume links
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address.",
            },
          })}
          errors={errors}
        />
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          {...register("phone")}
          errors={errors}
        />
        <FormField
          label="LinkedIn URL"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/username"
          {...register("linkedin")}
          errors={errors}
        />
        <FormField
          label="GitHub URL"
          name="github"
          type="url"
          placeholder="https://github.com/username"
          {...register("github")}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default ContactInfoSection;
