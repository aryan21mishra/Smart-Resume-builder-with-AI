import { auth as authService } from "@/service/auth.service";
import { useAppMutation } from "../useAppMutation";
import { useDispatch } from "react-redux";
import { addUserInfo, removeUserInfo } from "@/redux/user/userSlice";
import { addAuth, removeAuth } from "@/redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useRegisterMutation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useAppMutation(authService.register, {
    onSuccess: (data) => {
      console.log(data?.data?.user);
      dispatch(addUserInfo(data?.data?.user));
      dispatch(addAuth());
      toast.success("Registered successfully!");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Registration failed.",
      );
    },
  });
}

export function useLoginMutation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useAppMutation(authService.login, {
    onSuccess: (data) => {
      dispatch(addUserInfo(data?.data?.user));
      dispatch(addAuth());
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Authentication failed.",
      );
    },
  });
}

export function useGoogleOAuthMutation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useAppMutation(authService.googleOAuth, {
    onSuccess: (data) => {
      dispatch(addUserInfo(data?.user));
      dispatch(addAuth());
      toast.success("Logged in with Google!");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Google login failed.",
      );
    },
  });
}

export function useLogoutMutation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useAppMutation(authService.logout, {
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      dispatch(removeUserInfo());
      dispatch(removeAuth());
      toast.success("Logged out successfully!");
      navigate("/auth/login");
    },
    onError: (error) => {
      // Force clean client state even if backend logout request fails
      localStorage.removeItem("accessToken");
      dispatch(removeUserInfo());
      dispatch(removeAuth());
      toast.success("Session closed.");
      navigate("/auth/login");
    },
  });
}
