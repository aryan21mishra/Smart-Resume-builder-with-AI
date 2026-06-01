import { auth as authService } from "@/service/auth.service";
import { useAppMutation } from "../useAppMutation";
import { useDispatch } from "react-redux";
import { addUserInfo } from "@/redux/user/userSlice";
import { addAuth } from "@/redux/auth/authSlice";

export function useRegisterMutation() {
  return useAppMutation(authService.register, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
}

export function useLoginMutation() {
  return useAppMutation(authService.login, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
}

export function useGoogleOAuthMutation() {
  const dispatch = useDispatch();
  return useAppMutation(authService.googleOAuth, {
    onSuccess: (data) => {
      dispatch(addUserInfo(data?.user));
      dispatch(addAuth());
    },
  });
}
