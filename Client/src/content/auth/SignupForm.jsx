import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Label } from "../../components/ui/index";
import FormField from "../../components/common/FormField";
import Logo from "../../components/common/logo";
const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <Logo />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-xl text-[#e8b86d]  font-montserratBold">
          Create an Account
        </h2>
        <p className=" text-gray-300 text-sm font-montserratMedium mb-6">
          Join us to build your standout resume
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-3.5 mb-4">
          <FormField
            label={"First name"}
            name={"firstName"}
            errors={errors}
            {...register("firstName", { required: "Required." })}
          />
          <FormField
            label={"Last name"}
            name={"lastName"}
            errors={errors}
            {...register("lastName", { required: "Required." })}
          />
        </div>

        <div className="mb-4">
          <FormField
            label={"Email address"}
            errors={errors}
            name={"email"}
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Please enter a valid email.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email.",
              },
            })}
          />
        </div>
        <div className="mb-4">
          <FormField
            label={"Password"}
            errors={errors}
            name={"password"}
            placeholder="Min. 8 characters"
            {...register("password", {
              required: "Password must be at least 8 characters.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters.",
              },
            })}
          />
        </div>

        <div className="flex items-center justify-center">
          <Button
            type="submit"
            variant="outline"
            size="xl"
            disabled={isLoading}
            className={`${isLoading ? "pointer-events-none opacity-70 " : ""} border-gray-300 text-white uppercase font-montserratRegular`}>
            {isLoading ? (
              <div className="w-4.5 h-4.5 border-2 border-ink/30 border-t-ink rounded-full animate-spin mx-auto block"></div>
            ) : (
              <span>Create Free Account</span>
            )}
            <div className="absolute inset-0 bg-transparent transition-colors duration-200 hover:bg-white/10 pointer-events-none"></div>
          </Button>
        </div>
      </form>
      <div className="mt-4 flex gap-3 justify-center items-center w-full">
        <div className="w-20 h-0.5 bg-gray-400" />
        <p className="font-montserratRegular text-xs text-gray-400">
          Or continue with:
        </p>
        <div className="w-20 h-0.5 bg-gray-400" />
      </div>
      <div className="mt-4 flex items-center justify-center">
        <Button
          variant="outline"
          size="xl"
          className="border-gray-300 text-white uppercase font-montserratRegular">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[17px] h-[17px]">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </Button>
      </div>
      <p className="text-[12px] text-text-soft text-center mt-4 leading-[1.6] text-white font-montserratRegular">
        Already have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="text-gold no-underline hover:underline">
          Sign in →
        </a>
      </p>
    </div>
  );
};

export default SignupForm;