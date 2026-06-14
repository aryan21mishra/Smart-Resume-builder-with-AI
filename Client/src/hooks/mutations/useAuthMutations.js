import { auth as authService } from "@/service/auth.service";
import { useAppMutation } from "../useAppMutation";
import { useDispatch } from "react-redux";
import { addUserInfo } from "@/redux/user/userSlice";
import { addAuth } from "@/redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

export function useRegisterMutation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useAppMutation(authService.register, {
    onSuccess: (data) => {
      console.log(data?.data?.user);
      dispatch(addUserInfo(data?.data?.user));
      dispatch(addAuth());
      navigate("/dashboard");
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
      navigate("/dashboard");
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
      navigate("/dashboard");
    },
  });
}
