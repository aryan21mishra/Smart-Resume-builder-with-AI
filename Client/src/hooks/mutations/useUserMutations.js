import { useDispatch } from "react-redux";
import { useAppMutation } from "../useAppMutation";
import { user } from "@/service/user.service";

export const useUpdateAvatar = () => {
  const dispatch = useDispatch();
  return useAppMutation(user.updateAvatar, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export const useUpdateProfile = () => {
  const dispatch = useDispatch();
  return useAppMutation(user.updateProfile, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export const useChangePassword = () => {
  const dispatch = useDispatch();
  return useAppMutation(user.changePassword, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
};