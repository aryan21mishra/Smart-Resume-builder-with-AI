import { resumeService } from "@/service/resume.service";
import { useAppMutation } from "../useAppMutation";
import { useDispatch } from "react-redux";
import { updateForm } from "@/redux/resumes/resumeSlice";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { resumeQueryKeys } from "@/queries/query-keys/resume.query-keys";

export function useCreateResumeMutation() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useAppMutation(resumeService.createResume, {
    onSuccess: (data) => {
      const createdId =
        data?.data?.data?.resume?._id ||
        data?.data?.resume?._id ||
        data?.resume?._id ||
        data?._id;
      if (createdId) {
        dispatch(updateForm({ field: "id", data: createdId }));
      }
      toast.success("Resume saved to cloud!");
      queryClient.invalidateQueries({ queryKey: resumeQueryKeys.all });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to save resume.",
      );
    },
  });
}

export function useUpdateResumeByIdMutation() {
  const queryClient = useQueryClient();

  return useAppMutation(resumeService.updateResumeById, {
    onSuccess: (data, variables) => {
      toast.success("Resume updated successfully!");
      queryClient.invalidateQueries({ queryKey: resumeQueryKeys.all });
      if (variables?.id) {
        queryClient.invalidateQueries({
          queryKey: resumeQueryKeys.getById(variables.id),
        });
      }
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update resume.",
      );
    },
  });
}

export function useDeleteResumeByIdMutation() {
  const queryClient = useQueryClient();

  return useAppMutation(resumeService.deleteResumeById, {
    onSuccess: (data, variables) => {
      toast.success("Resume deleted successfully!");
      queryClient.invalidateQueries({ queryKey: resumeQueryKeys.all });
      if (variables) {
        queryClient.invalidateQueries({
          queryKey: resumeQueryKeys.getById(variables),
        });
      }
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to delete resume.",
      );
    },
  });
}

export function useDuplicateResumeByIdMutation() {
  const queryClient = useQueryClient();

  return useAppMutation(resumeService.duplicateResumeById, {
    onSuccess: (data) => {
      toast.success("Resume duplicated successfully!");
      queryClient.invalidateQueries({ queryKey: resumeQueryKeys.all });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to duplicate resume.",
      );
    },
  });
}
