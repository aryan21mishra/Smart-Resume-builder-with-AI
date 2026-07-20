import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "@/hooks/mutations/useAuthMutations";
import FormField from "../../components/common/FormField";
import { Button } from "../../components/ui";
import { RiArrowRightLongLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useSigninFirebaseMutation } from "@/hooks/mutations/useFirebaseAuthMutations";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: login, isPending: isLoading } = useLoginMutation();
  const { mutate: signinFirebase, isPending: isGoogleLoading } =
    useSigninFirebaseMutation();

  const googleSigninHandler = () => {
    signinFirebase();
  };
  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Card */}
      <div className="">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-montserratBold text-[#e8b86d]">
            Welcome Back
          </h2>

          <p className="text-sm text-gray-300 mt-2 font-montserratMedium">
            Sign in to continue building your standout resume
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-5">
            <FormField
              label="Email address"
              errors={errors}
              name="email"
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email.",
                },
              })}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <FormField
              label="Password"
              errors={errors}
              name="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password must be at least 8 characters.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters.",
                },
              })}
            />
          </div>

          {/* Forgot password */}
          <div className="flex justify-end mb-5">
            <button
              type="button"
              className="text-xs text-gray-400 hover:text-white transition">
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            variant="outline"
            disabled={isLoading}
            className="w-full relative border border-gray-300 uppercase font-montserratRegular ">
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-500/40"></div>

          <span className="text-xs text-gray-400 whitespace-nowrap">
            or continue with
          </span>

          <div className="flex-1 h-px bg-gray-500/40"></div>
        </div>

        {/* Google Button */}
        <Button
          onClick={googleSigninHandler}
          variant="outline"
          disabled={isGoogleLoading}
          size="lg"
          className="w-full border-gray-300  flex items-center justify-center gap-3  transition ">
          {isGoogleLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="w-5 h-5">
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
            </>
          )}
        </Button>

        {/* Signup */}
        <p className="text-[12px] text-center text-gray-400 mt-6 font-montserratRegular">
          Don't have an account?{" "}
          <Link
            to={"/auth/register"}
            className="text-[#e8b86d] hover:underline inline-flex items-center gap-1">
            Sign up here
            <RiArrowRightLongLine size={14} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
