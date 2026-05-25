import FormField from "../../../../../components/common/FormField";
import React from "react";
import { useForm } from "react-hook-form";

const PersonalInformationPage = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex-1 flex h-screen bg-black">
      <div className="h-screen w-full bg-black text-white relative overflow-hidden">
        <div className="relative z-10 h-full flex">
          <div className="w-full  border-r border-white/10">
            <div className="flex justify-between items-center px-6 py-4">
              <div>
                <h1 className="text-white max-w-140 text-3xl tracking-wider font-montserratBold ">
                  What’s the best way for employers to contact you?
                </h1>
                <p className="text-white/80 text-sm tracking-wider ">
                  What’s the best way for employers to contact you?
                </p>
              </div>
            </div>

            <form action="">
              <div className="container mx-auto px-6 mt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <FormField
                      label="First Name"
                      className="flex-1"
                      placeholder="John"
                      {...register("firstName", {
                        required: "First name is required.",
                      })}
                    />

                    <FormField
                      label="Last Name"
                      className="flex-1"
                      placeholder="Doe"
                      {...register("lastName", {
                        required: "Last name is required.",
                      })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      label="Email Address"
                      type="email"
                      placeholder="[EMAIL_ADDRESS]"
                      {...register("email", {
                        required: "Email is required.",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <FormField
                      label="Phone Number"
                      placeholder="+1 (555) 123-4567"
                      {...register("phone", {
                        required: "Phone number is required.",
                        pattern: {
                          value:
                            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                  </div>

                  <FormField
                    label="Headline"
                    placeholder="Senior software engineer with 5+ years of experience"
                    {...register("headline", {
                      required: "Headline is required.",
                      maxLength: {
                        value: 250,
                        message: "Headline must be less than 250 characters",
                      },
                    })}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      label="City"
                      placeholder="New York"
                      {...register("city", {
                        required: "City is required.",
                      })}
                    />

                    <FormField
                      label="State"
                      placeholder="NY"
                      {...register("state", {
                        required: "State is required.",
                      })}
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 font-montserratMedium block mb-2">
                      Professional Summary
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Write a compelling summary highlighting your skills and achievements..."
                      className="w-full bg-[#121212] border border-white/10 text-white placeholder-white/20 rounded-xl p-4 focus:border-white focus:ring-0 focus:outline-none text-sm transition"
                      {...register("summary", {
                        required: "Summary is required.",
                      })}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default PersonalInformationPage;
