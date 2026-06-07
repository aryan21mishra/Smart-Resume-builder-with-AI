import { useAppQuery } from "../useAppQuery";
import { resumeQueryKeys } from "@/queries/query-keys/resume.query-keys";
import { resumeService } from "@/service/resume.service";

export const useGetResumeByIdQuery = (id, options = {}) => {
  return useAppQuery(
    resumeQueryKeys.getById(id),
    () => resumeService.getResumeById(id),
    options
  );
};

export const useGetAllResumeQuery = () => {
  return useAppQuery(resumeQueryKeys.all, () => resumeService.getAllResumes());
};
