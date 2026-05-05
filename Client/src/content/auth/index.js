import { lazy } from "react";

const SignupForm = lazy(() => import("./SignupForm"));
const LoginForm = lazy(() => import("./LoginForm"));

export { SignupForm, LoginForm };
