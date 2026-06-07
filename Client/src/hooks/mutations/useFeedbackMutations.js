import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { feedbackService } from "@/service/feedback.service";
import { useAppMutation } from "../useAppMutation";
import { setFeedback } from "@/redux/resumes/feedbackSlice";

export function useFeedbackMutation() {
  const dispatch = useDispatch();

  return useAppMutation(feedbackService.analyzeResume, {
    onSuccess: (data) => {
      const feedbackData = data?.data?.feedback || data?.feedback || data;
      dispatch(setFeedback(feedbackData));
      toast.success("AI analysis completed successfully!");
    },
  });
}
