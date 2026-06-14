import { useDispatch } from "react-redux";
import { useAppMutation } from "../useAppMutation";
import { user } from "@/service/user.service";
import { updateProfile, updateAvatar } from "@/redux/user/userSlice";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { userQueryKeys } from "@/queries/query-keys/user.query-keys";

export const useUpdateAvatar = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useAppMutation(user.updateAvatar, {
    onSuccess: (data) => {
      const updatedUser = data?.data?.updatedUser || data?.updatedUser;
      if (updatedUser?.avatar) {
        dispatch(updateAvatar(updatedUser.avatar));
      }
      toast.success("Avatar updated successfully!");
      queryClient.invalidateQueries({ queryKey: userQueryKeys.userInfo });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update avatar.",
      );
    },
  });
};

export const useUpdateProfile = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useAppMutation(user.updateProfile, {
    onSuccess: (data) => {
      const updatedUser = data?.data?.user || data?.user;
      if (updatedUser) {
        dispatch(updateProfile(updatedUser));
      }
      toast.success("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: userQueryKeys.userInfo });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update profile.",
      );
    },
  });
};

export const useChangePassword = () => {
  const queryClient = useQueryClient();

  return useAppMutation(user.changePassword, {
    onSuccess: (data) => {
      toast.success("Password changed successfully!");
      queryClient.invalidateQueries({ queryKey: userQueryKeys.userInfo });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to change password.",
      );
    },
  });
};