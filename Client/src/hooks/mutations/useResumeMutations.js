import { resumeService } from "@/service/resume.service";
import { useAppMutation } from "../useAppMutation";

export function useCreateResumeMutation() {
  return useAppMutation(resumeService.createResume, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
}

export function useUpdateResumeByIdMutation() {
  return useAppMutation(resumeService.updateResumeById, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
}

export function useDeleteResumeByIdMutation() {
  return useAppMutation(resumeService.deleteResumeById, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
}

// export function useDuplicateResumeByIdMutation() {
//   return useAppMutation(resumeService.duplicateResumeById, {
//     onSuccess: (data) => {
//       console.log(data);
//     },
//   });
// }
